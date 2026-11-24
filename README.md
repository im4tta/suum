<div align="center">

# ស៊ុម Suum

*ស៊ុម — Khmer for “frame”.*

**A device-mockup scene builder and video studio that runs entirely in your browser.**

![Frames](https://img.shields.io/badge/devices-54-orange?style=flat-square)
![Video](https://img.shields.io/badge/video-FHD%20%2F%204K-orange?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-orange?style=flat-square)
![Platform](https://img.shields.io/badge/platform-any%20browser-orange?style=flat-square)

</div>

---

Suum turns a screenshot into a polished product scene. Pick from 54 real devices, compose up to four of them, drop in screenshots or use animated live screens, then export a high-resolution image or a fully directed video — without uploading anything anywhere.

Everything is one self-contained HTML file. No build step, no dependencies, no server.

**Live demo:** <https://im4tta.github.io/suum/>

## Quick start

Open `index.html` in any modern browser.

For installable-app and share-target support, serve it over HTTP instead:

```bash
cd suum
python -m http.server 8000
# then open http://localhost:8000
```

Drop a screenshot onto the stage (or paste with `Ctrl/⌘ + V`), pick a device, and press **Export**.

## Features

### Scenes
- **54 real devices** — iPhone 18 Pro / iPhone Duo, Galaxy S26 Ultra / Z Fold8, Pixel 11 series, OnePlus 15, Xiaomi 16 Ultra, iPad Pro M5, MacBook Pro M6, iMac M6, Apple Watch Series 12 / Ultra 4, Galaxy Watch9, Pixel Watch 5, and more — each built from its published dimensions (height, width, thickness, corner radius) with real hardware details: Dynamic Island, punch holes, fold hinges, watch crowns, side buttons and each model's actual rear camera layout.
- **Real colourways** — each model offers only its own official finishes (e.g. iPhone 18 Pro in Silver, Glacier Blue, Burgundy, Deep Black; Pixel 11 Pro in Obsidian, Fog, Canyon, Olive). Switching models keeps the closest real colour.
- **Capture from URL** — paste a website address and Suum renders the page at the selected device's real screen size (via microlink.io) and places it on that device. Direct image links are placed as-is.
- **Live site in the device** — press **Live** to load a URL (including `localhost` dev servers) interactively inside the selected device at its real viewport. Click, scroll and type right in the mockup; drag the bezel to move it. Esc exits.
- **Zoom the preview** — scroll to zoom toward the cursor, drag empty space to pan, double-click or press `0` to reset.
- **Custom colours** — beyond each model's official finishes, a colour picker paints any device any colour (applies to 2D and 3D; "Apply finish to all" copies it).
- **Export size presets** — one tap to App Store (iPhone 6.9″/6.5″, iPad 13″), Google Play, Product Hunt, X, Instagram, LinkedIn, Open Graph and YouTube sizes, rendered at the exact pixel dimensions. Check each store's current requirements before submitting.
- **3D scene presets** — Hero, Side by side, Stack, Front & back, Flat lay and Isometric arrangements for every device in one tap.
- **Freeze live site** — turn the interactive page in a device into a screenshot. Public sites use the screenshot service; `localhost` and anything else is grabbed from your own tab via screen capture (the browser asks for permission).
- **Works offline and installs** — a service worker caches the app so it opens without internet. Installed on a phone, Suum appears in the share sheet: share an image or a link straight into it.
- **ខ្មែរ / English** — switch the interface language from the header. Product names and the text drawn inside scenes stay in English.
- **Emoji stickers with sound** — a new Emoji tab with 30 animated icons (reactions, celebration, fun) from [Jiggicons](https://jiggicons.com). Hover one to see its motion and hear its sound, click to add it to the scene, then drag, resize, recolour and switch between outline, solid, duotone and glass. Tapping a sticker replays it. They are drawn into exported images, and play their motion **and sound** in recorded videos. Only Jiggicons' free set is used, loaded at run time from the official `jiggicons` npm package (pinned to 0.1.1) rather than copied into this repository; the icons, motions and sounds remain under the [Jiggicons terms](https://jiggicons.com/terms).
- **Universal flipping** — every device rotates to landscape with the `L` key. Cameras, notches and crowns stay in the correct relative place.
- **3D View** — rotate any device to any yaw, pitch and roll with sliders, presets or direct drag (Shift to roll, Alt to move). The screen art stays flat and undistorted by default; perspective is optional. Rotate past 90° to see a spec-based back — iPhone square camera island, Samsung vertical lens stack, Pixel camera bar, Xiaomi circular island, watch sensors and laptop lids — drawn from real hardware layouts, with no fake frame around the device.
- **1–4 device compositions** with direct manipulation: tap to select, drag to move, pinch to scale, twist to rotate.
- **Layers panel** — visibility, reorder, and bring forward / backward / to front / to back, plus duplicate and delete.
- **Direct screenshots** — add many at once, assign one per device, or place them by tapping a thumbnail then a device.
- **Live screens** — animated Clock (real time), Aurora, Music, Weather, Charts, or Blank. Pausable.

### Smart tools
- **Auto-style** — samples a screenshot's colours to set the backdrop and nearest device finish.
- **Auto-compose** — reads the screenshot's aspect ratio and picks the right device and canvas ratio.
- **Cut out** and **Upscale 2×** — local image processing, no uploads.
- **Caption suggestions**, **six scene templates**, **saved scenes** with thumbnails, shareable URL links, and ZIP export.
- **Brand kit** — saved brand font (including Khmer), logo text and colours.

### Canvas
- Image or video backdrops with blur, perspective tilt and reflection.
- Custom transparent bezel uploads.
- Per-device screen zoom and pan (crop).
- Text, arrow, highlight and blur annotations.

### Video Studio
- **FHD (1920×1080)** and **4K (3840×2160)**, landscape or portrait, 3/5/10 s, 30/60 fps.
- **Keyframe timeline** with editable X / Y / scale / rotation and smooth interpolation.
- Camera motion presets (zoom, pan, orbit, pulse) with easing and intensity.
- Staggered entrances, background parallax and seamless loops.
- Animated text (Fade / Rise / Typewriter), SRT subtitles and watermarks.
- Soundtrack import, microphone voiceover, volume control, and audio muxing.
- Social presets (Reels, TikTok, YouTube, Feed, X, Story) and a sequential render queue.
- GIF-style looping WebM and WebP sprite-sheet export.
- Live preview with a scrubber before you record.

### Export
- PNG / JPG / WebP at 1×, 2× or 3×.
- Copy image to clipboard, with robust fallbacks.
- Themed slim scrollbars, light/dark/system themes, focus mode, and a mobile bottom-tab layout.
- Both side panels use clean tabs — left: **Devices, Layers, Screens**; right: **Style, Smart, Canvas, 3D, Export, Video** — so each group's controls stay uncluttered. Overflowing tabs show a subtle arrow instead of a scrollbar.
- Multi-device compositions are auto-spaced so devices don't overlap.

## Keyboard shortcuts

| Key | Action |
|---|---|
| `L` | Flip every device between portrait and landscape |
| `D` | Toggle dark chrome on live screens |
| `1`–`4` | Set 1–4 device composition |
| `F` | Focus / preview mode |
| `⌘/Ctrl + K` | Command palette |
| `⌘/Ctrl + Z` / `⇧⌘/Ctrl + Z` | Undo / redo |
| `⌘/Ctrl + V` | Paste screenshot from clipboard |
| Arrow keys | Nudge selected device |

## Privacy

Everything runs locally in the browser. Screenshots, audio and scenes never leave your machine. Saved scenes and brand settings live in `localStorage`; share links encode the scene into the URL fragment. There are no analytics or network calls except loading the Google Fonts stylesheet.

## Project structure

```
suum/
├── index.html   # the entire application — markup, styles and engine
├── README.md    # this file
└── LICENSE      # MIT
```

## License

[MIT](LICENSE) © 2026 im4tta (Meta TMeta). See `LICENSE` for details.
