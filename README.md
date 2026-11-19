<div align="center">

# FrameKit Studio

**A device-mockup scene builder and video studio that runs entirely in your browser.**

![Frames](https://img.shields.io/badge/devices-54-orange?style=flat-square)
![Video](https://img.shields.io/badge/video-FHD%20%2F%204K-orange?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-orange?style=flat-square)
![Platform](https://img.shields.io/badge/platform-any%20browser-orange?style=flat-square)

</div>

---

FrameKit Studio turns a screenshot into a polished product scene. Pick from 54 real devices, compose up to four of them, drop in screenshots or use animated live screens, then export a high-resolution image or a fully directed video — without uploading anything anywhere.

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
- **54 real devices** — iPhone 18 Pro / iPhone Duo, Galaxy S26 Ultra / Z Fold8, Pixel 11 series, OnePlus 15, Xiaomi 16 Ultra, iPad Pro M5, MacBook Pro M6, iMac M6, Apple Watch Series 12 / Ultra 4, Galaxy Watch9, Pixel Watch 5, and more — each drawn with real proportions and hardware details (Dynamic Island, punch holes, notches, fold hinges, watch crowns).
- **Universal flipping** — every device rotates to landscape with the `L` key. Cameras, notches and crowns stay in the correct relative place.
- **3D View** — every device is a real perspective plane. Rotate any frame to any yaw, pitch and roll with sliders, presets or direct drag (Shift to roll, Alt to move). Perspective is adjustable, depth-sorted, and baked into both image and video exports.
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
