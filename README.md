# Customize and Hide YouTube Player Interface (Browser Extension)

Customize the look of your player so it resembles the older youtube style (2015-2025):

<img width="1920" height="1080" alt="Capture1" src="https://github.com/user-attachments/assets/b235a33a-90bc-4765-9e9e-5ce77040cc3b" />

<br>
<br>
<br>
Use keyboard shortcut to toggle hiding and showing Youtube Interface:
<br>
<br>
<img width="1920" height="1080" alt="Capture2" src="https://github.com/user-attachments/assets/9d12f5cc-319c-4a04-91a7-e4fe8ea13c94" />


## Usage

You can now use the Popup window to control all the available styles by clicking on the extension icon:

<img width="419" height="648" alt="image" src="https://github.com/user-attachments/assets/1d775277-62f6-4390-81a0-60765605fd2c" />
<br>
<br>
<br>
Set a custom Shortcut ("p" by default) to Hide/Show the Youtube Interface:
<br>
<br>
<img width="407" height="605" alt="image" src="https://github.com/user-attachments/assets/16d88d5c-f42d-4c9d-a4e3-a66a3d9e2181" />
<br>
<br>
<br>
You can still enable css styles to customize your experience manually through editing the Style.css file.

## Install

[Youtube Tutorial](https://youtu.be/XucQrUa94hw)

If you are on Firefox, you can directly add it to your browser here [Customize and Hide YouTube Player Interface](https://addons.mozilla.org/en-US/firefox/addon/hide-youtube-player-interface/)

For Chromium based browsers (chrome, brave, etc.) you will have to manually install it from this repo:

1. Download files

2. Navigate to extensions settings in your preferred web browser

3. Load the extension:
    1. Enter `Developer mode` by toggling the button (top right)
    2. Press `Load unpacked` (top left)

4. Navigate to where you downloaded the repo files

5. select folder containing repo files

6. Done! refresh youtube tab and press p to see effect.

## Manual Customization

You can use this extension to add your own custom styles:

1. Navigate to where you downloaded the repo

2. Open `Styles.css` with your preferred text editor

3. Uncomment the desired css code Block:
```css
/* this is disabled */

/* ===================================================================================================================== */
/* ============================================== Remove Subtitles Button ============================================== */
/* ===================================================================================================================== */

/* (delete this entire line and the one below to activate this style)

.hypi-interface_2025 .ytp-subtitles-button {
    display: none !important;
}

*/ /* (delete this entire line and the one above to activate this style)  */

------------------------------------------------------------------------------------------------------------------

/* this is enabled by removing the lines above and below the code block */

/* ===================================================================================================================== */
/* ============================================== Remove Subtitles Button ============================================== */
/* ===================================================================================================================== */

.hypi-interface_2025 .ytp-subtitles-button {
    display: none !important;
}

```
4. add your own custom styles to the element:
```css

/* ===================================================================================================================== */
/* ============================================== Remove Subtitles Button ============================================== */
/* ===================================================================================================================== */

.hypi-interface_2025 .ytp-subtitles-button {
    background-color: red;
}

```
