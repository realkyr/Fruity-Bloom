# Fruity Bloom

A Vue 2 site built with Vue CLI 4. The story pages are driven by Lottie
animations exported from After Effects.

## Requirements

Node 12 or newer, including current LTS releases. Webpack 4 hashes module ids
with MD4, which OpenSSL 3 (bundled with Node 17+) removed, so `npm run …` goes
through `scripts/vue-cli-service.js`. That wrapper re-launches Node with
`--openssl-legacy-provider` only on the versions that need it. Run the scripts
below rather than calling `vue-cli-service` directly.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Animations

The 24 story compositions in `src/assets/Animation/Story/` total roughly 12 MB
of JSON — one of them alone is 10 MB. They are **not** bundled: `vue.config.js`
routes them through `file-loader`, so `require()` yields a URL and Lottie
fetches a month's JSON when that month is reached. Keeping the app bundle small
depends on this, so pass `path` to `loadAnimation`, never `animationData`, for
anything in that folder.

They are emitted to the site root (`anim-<month>.<hash>.json`) on purpose:
Lottie resolves an animation's image assets relative to the JSON's own URL, and
those images live in `public/images/<month>/`.

`src/utils/motion.js` wraps Lottie so every animation shares the same
behaviour:

- **The SVG renderer, deliberately.** These compositions stack a dozen or more
  full-size PNG layers. The canvas renderer redraws all of them in JavaScript
  every frame — measured at ~5.4s of scripting per 6s of playback, against
  ~0.2s for SVG, which only updates transform attributes and leaves the rest to
  the compositor. Don't "optimise" this to canvas.
- **`pauseWhileHidden`** stops animations while the tab is in the background
  and resumes exactly those on return.
- **`prefers-reduced-motion`** renders a single frame instead of looping, and
  stops the drifting clouds on the landing section.

Anything that loads an animation must destroy it in `beforeDestroy`; the story
view also destroys each month as it scrolls past, so only one is ever live.
