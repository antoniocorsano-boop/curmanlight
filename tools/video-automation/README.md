# CurManLight - Video Guide Automation

Automated video guide generation for CurManLight with Italian text-to-speech.

## Features

- **Italian TTS**: Uses Microsoft Edge TTS with natural Italian voice (IsabellaNeural)
- **Screen Recording**: Automated browser recording with Playwright
- **Video+Audio Merge**: FFmpeg-based video composition
- **11 Sections**: Complete user guide covering all workflows

## Prerequisites

### System Requirements

- **Node.js**: >= 16.0.0
- **FFmpeg**: Installed and available in PATH
  - Windows: Download from https://ffmpeg.org/download.html
  - macOS: `brew install ffmpeg`
  - Linux: `sudo apt install ffmpeg`

### Installation

```bash
cd tools/video-automation
npm install
```

This will install:
- `playwright`: Browser automation
- `edge-tts`: Italian text-to-speech

## Usage

### 1. Start CurManLight locally

Make sure CurManLight is running locally on `http://localhost:8080`.

```bash
# From repository root
# Start local server (adjust based on your setup)
# Example: python -m http.server 8080
```

### 2. Run video generation

```bash
cd tools/video-automation
npm start
```

Or directly:

```bash
node generate-video-guide.js
```

### 3. Output

The generated video will be saved to:
```
output/video-guide/final/curmanlight-video-guide.mp4
```

## Configuration

Edit `CONFIG` object in `generate-video-guide.js`:

```javascript
const CONFIG = {
  appUrl: 'http://localhost:8080',  // Change if different port
  tts: {
    voice: 'it-IT-IsabellaNeural',  // Italian voice
    rate: '+0%',  // Speed
    pitch: '+0Hz',  // Pitch
    volume: '+0%'  // Volume
  },
  video: {
    width: 1920,
    height: 1080,
    frameRate: 30,
    bitrate: '5000k'
  }
};
```

## Available Italian TTS Voices

List of available Italian voices from Edge TTS:

- `it-IT-IsabellaNeural` (Female, natural - default)
- `it-IT-ElsaNeural` (Female)
- `it-IT-BenjaminNeural` (Male)

To change voice:

```javascript
voice: 'it-IT-BenjaminNeural'
```

## Video Sections

The automation includes 11 sections:

1. **Introduzione** (0:45) - Overview and interface
2. **Home e Microguida** (0:45) - 5-step microguide
3. **Consultazione del Curricolo** (1:30) - Viewing curriculum
4. **Revisione e Confronto Versioni** (1:30) - Comparing versions
5. **Workflow Docente** (1:00) - Export proposal
6. **Workflow Dipartimento** (1:00) - Import and evaluate
7. **Workflow Referente** (1:00) - Import outcomes
8. **Progettazione Didattica** (1:00) - Evidence and UDA
9. **Esportazioni** (0:45) - Export formats
10. **Guida e Supporto** (0:30) - Help section
11. **Conclusioni** (0:15) - Closing

Total duration: ~10 minutes

## Customization

### Adding/Modifying Sections

Edit the `SECTIONS` array in `generate-video-guide.js`:

```javascript
{
  id: 'custom-section',
  title: 'Custom Section',
  duration: 30,  // seconds
  text: 'Your narration text here',
  action: 'home'  // action to execute
}
```

### Custom Actions

Add custom actions in `executeSectionAction()` function:

```javascript
case 'custom-action':
  await page.click('selector');
  await page.waitForTimeout(1000);
  break;
```

## Troubleshooting

### FFmpeg not found

**Error**: `ffmpeg: command not found`

**Solution**: Install FFmpeg and ensure it's in your PATH.

### Playwright browser not found

**Error**: `Executable doesn't exist at ...`

**Solution**: Install Playwright browsers:

```bash
npx playwright install chromium
```

### TTS voice not available

**Error**: Voice not found

**Solution**: Check available voices or use a different one from the list.

### App not accessible

**Error**: `net::ERR_CONNECTION_REFUSED`

**Solution**: Ensure CurManLight is running on the configured URL.

## Output Structure

```
output/video-guide/
├── audio/           # Individual audio files per section
├── video/           # Raw screen recording
└── final/           # Final merged video
    └── curmanlight-video-guide.mp4
```

## Advanced Usage

### Generate audio only

Comment out screen recording and merge sections in `main()`:

```javascript
// await recordScreenRecording();  // Skip
// await mergeVideoAudio();  // Skip
```

### Generate video only (no audio)

Comment out TTS generation:

```javascript
// for (const section of SECTIONS) {
//   await generateAudioTTS(section);
// }
```

### Custom video resolution

```javascript
video: {
  width: 1280,  // 720p
  height: 720,
  frameRate: 30,
  bitrate: '3000k'
}
```

## Performance Tips

- Use SSD for faster I/O
- Close other applications during recording
- Ensure stable internet connection for TTS
- Test with shorter sections first

## License

MIT

## Support

For issues or questions:
- Check the main CurManLight documentation
- Open an issue on GitHub
