# Hide Youtube Player Interface (Browser Extension)

Use keyboard shortcut to toggle hiding and showing Youtube Interface.

## Usage

Press p to Hide/Show the Youtube Interface.

Enable css styles to customize your experience

## Install
1. Download files

2. Navigate to extensions settings in your preferred web browser

3. Load the extension:
    1. Chrome/Brave:
        1. Enter `Developer mode` by toggling the button (top right)
        2. Press `Load unpacked` (top left)
    2. Firefox:
        1. Press the Settings Wheel
        2. Select `Debug Add-ons` from the drop down
        3. Click `Load Temporary Add-on`

4. Navigate to where you downloaded the repo files

5. 
    1. Chrome/Brave:
        1. select folder containing repo files
    2. Firefox:
        1. select `manifest.json` from the repo files

6. Done! refresh youtube tab and press p to see effect.

## Customization

Configure the Shortcut by:
1. Navigate to where you downloaded the repo

2. Open `Content.js` with your preferred text editor

3. Change the following settings:
```js
let shortcut = "p" // Change the letter p to your preferred keyboard button
```
4. Enable modifier keys by changing the following settings:
```js
// to enable the desired modifier change false to true
let ctrlKey = false
let shiftKey = false
let altKey = true // the shortcut is now Alt + p
let metaKey = false
```
You can enable multiple modifers like: `Ctrl + Shift + Alt + p` by enabling multiple settings

5. Hide Youtube Interface by default (you can still toggle it back on with shortcut):

```js
let startHidden = false 
``` 

You can customize parts of the youtube interface to be permenantly hidden individually

1. Navigate to where you downloaded the repo

2. Open `Styles.css` with your preferred text editor

3. Uncomment the desired css code Block:
```css
/* this is disabled */

/* remove miniplayer button */
/* .ytp-miniplayer-button {
    display: none !important;
} */

------------------------------------------------------------------------------------------------------------------

/* this is enabled by removing the * and / symbols surrounding the code block */

/* remove miniplayer button (do not remove the symbols around this description) */
.ytp-miniplayer-button {
    display: none !important;
}
```
