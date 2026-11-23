# Udemy 2 M3U8 and TS

A small browser-console script that extracts the **M3U8** and **TS** streaming links of a Udemy lesson video, so you can download it with open-source tools such as `ffmpeg`, `yt-dlp`, or `N_m3u8DL-RE`.

> [!IMPORTANT]
> The extracted links expire after about **24 hours**. If a link stops working, simply re-run the script to get a fresh one.

## Usage

1. Log in to [Udemy](https://www.udemy.com), open one of your courses, and start playing a lesson video.
2. Open your browser's DevTools with **F12** (or **Ctrl + Shift + I** on Windows/Linux, **Cmd + Option + I** on macOS).
3. Go to the **Console** tab.
4. Paste the contents of `script.js` into the console and press **Enter**.
5. The results are displayed in a table, where you'll find the M3U8 and TS links ready to copy.

> [!TIP]
> If your browser blocks pasting into the console, type `allow pasting`, press **Enter**, then paste the script again.

(https://player.vimeo.com/video/1249477608)

## What are M3U8 and TS?

- **M3U8** is a UTF-8 plain-text playlist file used in HTTP Live Streaming (HLS). It tells the media player where to find the video segments and at what quality.
- **TS** (Transport Stream, `.ts`) is the media container that holds the small chunks of audio and video data the playlist points to.

In practice, use the **M3U8** link with the download tools below. They fetch and merge all the TS segments for you.

## Downloading the video

Use any of these open-source tools with the M3U8 link:

- [ffmpeg](https://ffmpeg.org/)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- [N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE)

Examples (replace `M3U8_URL` with the link from the table):

```bash
# ffmpeg
ffmpeg -i "M3U8_URL" -c copy Udemy.mp4

# yt-dlp
yt-dlp "M3U8_URL" -o "Udemy.mp4"

# N_m3u8DL-RE
N_m3u8DL-RE "M3U8_URL" --save-name "Udemy"
```

## Disclaimer

This project is intended for personal, offline viewing of courses you have legitimately purchased. It is not affiliated with or endorsed by Udemy. Downloading course content may violate Udemy's Terms of Use, and the videos remain the property of their instructors, so please don't share, resell, or redistribute them. You are solely responsible for how you use this tool.
