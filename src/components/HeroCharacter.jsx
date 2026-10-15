import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Natural head-turn sequence frames (all with open, alert eyes; blinking frames 46 & 134 omitted)
const FRAMES = {
  staticNormal: 1, // Head up, smiling, looking straight at viewer
  // Gradual natural left-turn frames (50 slight turn -> 85 full left turn)
  lookLeft: [50, 54, 58, 62, 66, 70, 74, 78, 82, 85],
  // Gradual natural right-turn frames (106 slight turn -> 130 full right turn)
  lookRight: [106, 110, 114, 118, 122, 126, 130],
  // Direct Hover Stage 1: Surprise (136..168) and Headset removal (174..216)
  greetingStage1: [136, 140, 144, 148, 152, 156, 160, 164, 168, 174, 180, 186, 192, 198, 204, 210, 216],
  // Direct Hover Stage 2: Wave hello (220..250) and Point down toward portfolio (256..298)
  greetingStage2: [220, 226, 232, 238, 244, 250, 256, 262, 268, 274, 280, 286, 292, 298],
};

// Linear interpolation utility for silky-smooth physical inertia
const lerp = (start, end, factor) => start + (end - start) * factor;

export default function HeroCharacter({ mouseCoordsRef }) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const imageCache = useRef({});

  // Current interpolated values (smooth inertia)
  const currentCoords = useRef({ x: 0 });
  const currentGazeX = useRef(0.5);
  const currentFrameRef = useRef(FRAMES.staticNormal);
  const lastDrawnFrameRef = useRef(null);
  const rafIdRef = useRef(null);
  const lastZoneRef = useRef('idle');

  // Direct character hover state & timers
  const isDirectHoverRef = useRef(false);
  const hoverIntentTimerRef = useRef(null);
  const greetingIntervalRef = useRef(null);

  // Multi-stage speech bubble state: { text: string, type: 'greeting-stage1' | 'greeting-stage2' | 'zone-left' | 'zone-right' }
  const [bubbleState, setBubbleState] = useState(null);

  // Transparent WebP assets path generator
  const getFramePath = (num) => `/char-frame-${String(num).padStart(3, '0')}.webp`;

  // Direct canvas drawing function (zero React re-renders)
  const drawFrame = useCallback((frameNum) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imageCache.current[frameNum];
    if (!img || !img.complete) {
      img = imageCache.current[FRAMES.staticNormal];
    }
    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;

    ctx.clearRect(0, 0, cw, ch);

    const imgAspect = img.width / img.height;
    const canvasAspect = cw / ch;

    let renderW, renderH, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      renderH = ch;
      renderW = renderH * imgAspect;
      offsetX = (cw - renderW) / 2;
      offsetY = 0;
    } else {
      renderW = cw;
      renderH = renderW / imgAspect;
      offsetX = 0;
      offsetY = ch - renderH; // Pin desk base neatly to bottom
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    lastDrawnFrameRef.current = frameNum;
  }, []);

  // Preload all needed frames progressively for instant playback
  useEffect(() => {
    const essentialFrames = new Set([
      FRAMES.staticNormal,
      ...FRAMES.lookLeft,
      ...FRAMES.lookRight,
      ...FRAMES.greetingStage1,
      ...FRAMES.greetingStage2,
    ]);

    // Priority 1: Load static default frame immediately
    const firstImg = new Image();
    firstImg.src = getFramePath(FRAMES.staticNormal);
    firstImg.onload = () => {
      imageCache.current[FRAMES.staticNormal] = firstImg;
      drawFrame(FRAMES.staticNormal);
    };

    // Priority 2: Preload remaining frames into memory
    Array.from(essentialFrames).forEach((num) => {
      if (num === FRAMES.staticNormal) return;
      const img = new Image();
      img.src = getFramePath(num);
      img.onload = () => {
        imageCache.current[num] = img;
      };
    });
  }, [drawFrame]);

  // Setup high-DPI canvas buffer (1920x1080)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 1920;
    canvas.height = 1080;
    drawFrame(FRAMES.staticNormal);
  }, [drawFrame]);

  // Direct Hover Greeting Sequence (Surprise -> Headset Removal -> Wave -> Point Down)
  const startGreetingSequence = useCallback(() => {
    if (greetingIntervalRef.current) {
      clearInterval(greetingIntervalRef.current);
      greetingIntervalRef.current = null;
    }

    isDirectHoverRef.current = true;
    lastZoneRef.current = 'direct-hover';

    // Stage 1 (Initial Direct Hover): Surprise look & headset removal -> "Hey, it's you?"
    setBubbleState({ text: "Hey, it's you?", type: 'greeting-stage1' });

    const stage1 = FRAMES.greetingStage1;
    const stage2 = FRAMES.greetingStage2;
    const totalCount = stage1.length + stage2.length;
    let frameIdx = 0;

    const FRAME_INTERVAL_MS = 68;

    greetingIntervalRef.current = setInterval(() => {
      if (!isDirectHoverRef.current) {
        clearInterval(greetingIntervalRef.current);
        greetingIntervalRef.current = null;
        return;
      }

      if (frameIdx < stage1.length) {
        // Stage 1: Surprise expression & removing headset
        const fNum = stage1[frameIdx];
        currentFrameRef.current = fNum;
        drawFrame(fNum);
        frameIdx++;
      } else if (frameIdx < totalCount) {
        // Stage 2: Wave hello & point downward -> "Check out my portfolio!"
        const stage2Idx = frameIdx - stage1.length;

        if (stage2Idx === 0) {
          setBubbleState({ text: "Check out my portfolio!", type: 'greeting-stage2' });
        }

        const fNum = stage2[stage2Idx];
        currentFrameRef.current = fNum;
        drawFrame(fNum);
        frameIdx++;
      } else {
        // Hold final gesture (pointing down at portfolio) while direct hover continues
        clearInterval(greetingIntervalRef.current);
        greetingIntervalRef.current = null;
        const finalFrame = stage2[stage2.length - 1];
        currentFrameRef.current = finalFrame;
        drawFrame(finalFrame);
      }
    }, FRAME_INTERVAL_MS);
  }, [drawFrame]);

  // Gracefully stop greeting sequence and return to current screen zone tracking
  const stopGreetingSequence = useCallback(() => {
    isDirectHoverRef.current = false;
    if (greetingIntervalRef.current) {
      clearInterval(greetingIntervalRef.current);
      greetingIntervalRef.current = null;
    }
    // Clear speech bubble and reset pose
    setBubbleState(null);
    lastZoneRef.current = 'reset';
    currentFrameRef.current = FRAMES.staticNormal;
    drawFrame(FRAMES.staticNormal);
  }, [drawFrame]);

  // Hover-Intent Handlers:
  // Normal cursor movement passing across her box NEVER triggers the surprise reaction.
  // Only pausing/hovering directly over her container (or clicking) triggers the greeting.
  const handleCharacterMouseEnter = useCallback(() => {
    if (hoverIntentTimerRef.current) clearTimeout(hoverIntentTimerRef.current);
    hoverIntentTimerRef.current = setTimeout(() => {
      startGreetingSequence();
    }, 180);
  }, [startGreetingSequence]);

  const handleCharacterMouseMove = useCallback(() => {
    // If cursor is actively in motion across her container, postpone the greeting trigger
    // so she continues tracking smoothly with natural head-turn frames
    if (!isDirectHoverRef.current) {
      if (hoverIntentTimerRef.current) clearTimeout(hoverIntentTimerRef.current);
      hoverIntentTimerRef.current = setTimeout(() => {
        startGreetingSequence();
      }, 180);
    }
  }, [startGreetingSequence]);

  const handleCharacterMouseLeave = useCallback(() => {
    if (hoverIntentTimerRef.current) {
      clearTimeout(hoverIntentTimerRef.current);
      hoverIntentTimerRef.current = null;
    }
    if (isDirectHoverRef.current) {
      stopGreetingSequence();
    }
  }, [stopGreetingSequence]);

  const handleCharacterClick = useCallback(() => {
    if (hoverIntentTimerRef.current) {
      clearTimeout(hoverIntentTimerRef.current);
      hoverIntentTimerRef.current = null;
    }
    startGreetingSequence();
  }, [startGreetingSequence]);

  // Continuous requestAnimationFrame (rAF) loop with Linear Interpolation (lerp)
  // Strictly horizontal tracking - zero rotateX pitch tilt down towards laptop!
  useEffect(() => {
    const MAX_ROT_Y = 10;   // Natural horizontal yaw ±10 deg
    const MAX_TRANS_X = 14; // Subtle horizontal parallax ±14px
    const LERP_FACTOR = 0.12; // Fluid physical inertia factor

    const leftFrames = FRAMES.lookLeft;
    const rightFrames = FRAMES.lookRight;

    const animate = () => {
      // 1. Read target coordinates from mouseCoordsRef
      let rawTargetX = mouseCoordsRef?.current?.x ?? 0;
      const isActive = mouseCoordsRef?.current?.active ?? false;
      const targetGazeX = mouseCoordsRef?.current?.windowFracX ?? 0.5;

      // 2. Strict clamp on target values (-1 to +1)
      const clampedTargetX = Math.max(-1, Math.min(1, rawTargetX));

      // 3. Smooth Linear Interpolation (lerp) for 3D perspective and continuous horizontal gaze
      currentCoords.current.x = lerp(currentCoords.current.x, clampedTargetX, LERP_FACTOR);
      currentGazeX.current = lerp(currentGazeX.current, targetGazeX, LERP_FACTOR);

      const curX = currentCoords.current.x;
      const gazeX = currentGazeX.current;

      // 4. Clamped rotation angles & parallax (strictly horizontal yaw, zero downward pitch)
      const rotY = Math.max(-MAX_ROT_Y, Math.min(MAX_ROT_Y, curX * MAX_ROT_Y));
      const transX = Math.max(-MAX_TRANS_X, Math.min(MAX_TRANS_X, curX * MAX_TRANS_X));

      // 5. Apply 3D perspective tilt directly via DOM ref (no rotateX)
      if (wrapperRef.current) {
        const tiltDamp = isDirectHoverRef.current ? 0.35 : 1.0;
        wrapperRef.current.style.transform = `perspective(1000px) rotateY(${(rotY * tiltDamp).toFixed(2)}deg) translate3d(${(transX * tiltDamp).toFixed(1)}px, 0, 0)`;
      }

      // 6. Interaction State Machine: Natural Head-Turn Tracking vs Direct Character Hover
      // PRIORITY 1: When isDirectHoverRef is active, greeting sequence owns the frame and speech bubble.
      // PRIORITY 2: When NOT hovering her directly, natural head-turn frames track the cursor across the screen.
      if (!isDirectHoverRef.current) {
        let targetFrame = FRAMES.staticNormal;

        if (isActive) {
          if (gazeX < 0.45) {
            // Rule 1: Left Zone (0% to ~45%) -> Natural gaze left & persistent speech bubble
            // Smooth monotonic mapping from 0.45 (slight left) down to 0.0 (full left)
            const t = Math.max(0, Math.min(1, (0.45 - gazeX) / 0.45));
            const fIndex = Math.min(leftFrames.length - 1, Math.round(t * (leftFrames.length - 1)));
            targetFrame = leftFrames[fIndex];

            if (lastZoneRef.current !== 'left') {
              lastZoneRef.current = 'left';
              setBubbleState({ text: "Anyone here on the left?", type: 'zone-left' });
            }
          } else if (gazeX > 0.55) {
            // Rule 1: Right Zone (~55% to 100%) -> Natural gaze right & persistent speech bubble
            // Smooth monotonic mapping from 0.55 (slight right) up to 1.0 (full right)
            const t = Math.max(0, Math.min(1, (gazeX - 0.55) / 0.45));
            const fIndex = Math.min(rightFrames.length - 1, Math.round(t * (rightFrames.length - 1)));
            targetFrame = rightFrames[fIndex];

            if (lastZoneRef.current !== 'right') {
              lastZoneRef.current = 'right';
              setBubbleState({ text: "Anyone here on the right?", type: 'zone-right' });
            }
          } else {
            // Center Zone (~45% to ~55%):
            // Normal working pose facing forward, side bubbles cleared
            targetFrame = FRAMES.staticNormal;
            if (lastZoneRef.current !== 'center') {
              lastZoneRef.current = 'center';
              setBubbleState(null);
            }
          }
        } else {
          // Cursor left the hero section entirely: default working state, bubble cleared
          targetFrame = FRAMES.staticNormal;
          if (lastZoneRef.current !== 'idle') {
            lastZoneRef.current = 'idle';
            setBubbleState(null);
          }
        }

        // Draw frame if changed
        if (targetFrame !== lastDrawnFrameRef.current) {
          currentFrameRef.current = targetFrame;
          drawFrame(targetFrame);
        }
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (hoverIntentTimerRef.current) clearTimeout(hoverIntentTimerRef.current);
      if (greetingIntervalRef.current) clearInterval(greetingIntervalRef.current);
    };
  }, [drawFrame, mouseCoordsRef]);

  return (
    <div className="relative w-full flex flex-col items-center justify-end select-none overflow-visible" ref={containerRef}>
      {/* Floating Speech Bubble near her head */}
      <div className="absolute -top-14 sm:-top-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <AnimatePresence mode="wait">
          {bubbleState && (
            <motion.div
              key={bubbleState.text}
              initial={{ opacity: 0, y: 12, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 420, damping: 25 }}
              className="relative inline-flex items-center gap-2.5 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white/95 backdrop-blur-md shadow-2xl shadow-maroon-950/20 border-2 border-maroon-200/90 text-maroon-950 font-bold text-sm sm:text-base pointer-events-auto"
            >
              {/* Contextual Icon based on state */}
              {bubbleState.type === 'greeting-stage1' && (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-maroon-600"></span>
                </span>
              )}
              {bubbleState.type === 'greeting-stage2' && (
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 0.85, ease: 'easeInOut' }}
                  className="text-lg leading-none"
                >
                  👇
                </motion.span>
              )}
              {bubbleState.type === 'zone-left' && (
                <span className="text-base leading-none">👀</span>
              )}
              {bubbleState.type === 'zone-right' && (
                <span className="text-base leading-none">🌸</span>
              )}

              <span className="tracking-wide">{bubbleState.text}</span>

              {/* Speech bubble tail pointing towards character's head */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-r-2 border-b-2 border-maroon-200/90" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Character Canvas Container with 3D perspective tilt (horizontal yaw only) */}
      <div
        ref={wrapperRef}
        className="relative w-full min-w-[340px] sm:min-w-[500px] lg:min-w-[680px] xl:min-w-[850px] 2xl:min-w-[1000px] aspect-[16/9] flex items-end justify-center will-change-transform overflow-visible"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(66,11,30,0.18)] pointer-events-none"
        />

        {/* Dedicated Direct Character Container Box (~45% to 55% center zone):
            Strictly covers the character's body, head, laptop, and desk.
            Movement-aware: cursor passing through tracks smoothly with natural head-turn frames;
            deliberately hovering or clicking initiates the multi-stage greeting sequence. */}
        <div
          onMouseEnter={handleCharacterMouseEnter}
          onMouseMove={handleCharacterMouseMove}
          onMouseLeave={handleCharacterMouseLeave}
          onClick={handleCharacterClick}
          title="Hover or click to say hello!"
          className="absolute left-[26%] right-[18%] top-[2%] bottom-0 z-20 cursor-pointer"
        />
      </div>
    </div>
  );
}
