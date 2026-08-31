import lottie from 'lottie-web'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

// Fewer bezier segments per path. Lottie applies this globally; the story view
// already asked for it before this module existed.
lottie.setQuality('low')

/**
 * True when the visitor asked their OS for less animation. We honour it by
 * showing a single frame instead of running the loop.
 */
export function prefersReducedMotion () {
  return typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
}

/**
 * Loads a Lottie animation with the settings the whole app shares.
 *
 * The SVG renderer is a deliberate choice, not a default. These compositions
 * are stacks of a dozen or more full-size PNG layers, so the canvas renderer
 * has to redraw every one of them in JavaScript on every frame: measured on
 * the story artwork that is ~5.4s of scripting per 6s of playback, against
 * ~0.2s for SVG, which only updates transform attributes and leaves the rest
 * to the compositor.
 *
 * Pass `path` (a URL) rather than `animationData` for the big compositions so
 * the JSON stays out of the bundle and can be freed on destroy.
 */
export function loadAnimation ({ container, path, animationData, loop = true, autoplay = false }) {
  const reduced = prefersReducedMotion()
  const anim = lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: loop && !reduced,
    autoplay: autoplay && !reduced,
    path,
    animationData
  })

  if (reduced) {
    anim.addEventListener('DOMLoaded', () => anim.goToAndStop(0, true))
  }

  return anim
}

/**
 * Stops every running animation while the tab is in the background, and
 * resumes exactly those on return.
 *
 * Without this a full-screen story animation keeps repainting behind other
 * windows — measured at ~160 attribute writes a second, and the repaints that
 * go with them, for something nobody is looking at.
 *
 * @param {() => Array} getAnimations returns the animations to manage
 * @returns {() => void} teardown
 */
export function pauseWhileHidden (getAnimations) {
  let paused = []

  const onVisibilityChange = () => {
    if (document.hidden) {
      paused = getAnimations().filter(anim => anim && !anim.isPaused)
      paused.forEach(anim => anim.pause())
    } else if (!prefersReducedMotion()) {
      paused.forEach(anim => anim.play())
      paused = []
    }
  }

  document.addEventListener('visibilitychange', onVisibilityChange)
  return () => document.removeEventListener('visibilitychange', onVisibilityChange)
}
