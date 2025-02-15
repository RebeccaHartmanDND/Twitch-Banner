# Twitch Banner System

This project provides a **Twitch Banner** system that allows streamers and moderators to display custom banners in their Twitch stream. It uses **TMI.js** to listen to chat commands and control the banner’s content.

## Features

- **Streamer & Moderator Commands**: Only streamers and moderators can use commands to update or clear the banner text.
- **Persistent Banner State**: The banner state is saved locally in the browser so that it persists even after a page reload.
- **Customizable Styling**: Customize the banner's appearance using CSS.

## Setup

### 1. Install Dependencies

You need to install **TMI.js** for the script to function properly. To use this code in your project, include the following file ib OBS as a Browser Source:

```index.html```

### 2. Configure the JavaScript

To make the banner work with your channel and bot, configure the following variables in the JavaScript code:

```javascript
const client = new tmi.Client({
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true,
    },
    identity: {
        username: 'Bot_Username_Here', // Replace with your bot's username
        password: 'oauth:OAuth_Token_Here', // Replace with your OAuth token
    },
    channels: ['Username_Here'], // Replace with your channel name
});
```

- Replace `'Bot_Username_Here'` with your bot's username.
- Replace `'oauth:OAuth_Token_Here'` with your bot’s OAuth token. You can generate the OAuth token from [Twitch's OAuth Token Generator](https://twitchapps.com/tmi/).
- Replace `'Username_Here'` with your channel's username.

### 3. Customize the Banner Text and Commands

Use the following commands in your Twitch chat to control the banner:

- **`!banner {Banner Text}`** – Displays the banner with the provided text.
  - Example: `!banner Welcome to the stream!`
- **`!bannerclear`** – Clears the banner text and hides the banner.

Only streamers and moderators have permission to use these commands.

### 4. Customize the Banner Style

You can easily adjust the banner’s appearance by modifying the **CSS**.

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');

body {
    background-color: transparent; /* Invisible background */
    font-family: 'Open Sans', sans-serif; /* Changed to Open Sans */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Ensures the body takes up the full height of the viewport */
    margin: 0;
    flex-direction: column; /* Stack the elements vertically */
}

#banner-container {
    display: none; /* Hidden by default */
    padding: 10px; /* Reduced padding for smaller height */
    color: white;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    font-size: 24px; /* Slightly smaller font size */
    font-weight: 400; /* Medium weight */
    text-align: center;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    max-width: 80%;
    min-height: 10px; /* Reduced initial height */
    transition: opacity 0.5s ease-in-out, min-height 0.3s ease-in-out;
}

p {
    margin-top: 0px;
    margin-bottom: 0px;
}

.hidden {
    opacity: 0;
    pointer-events: none;
}
```

You can modify the following properties to change the banner's appearance:
- **`background`** – The banner’s background color (default is a semi-transparent black).
- **`color`** – The text color (default is white).
- **`font-size`** – The size of the text (default is 24px).
- **`padding`** – The space around the text inside the banner.
- **`border-radius`** – The rounding of the banner's corners.
- **`max-width`** – The maximum width of the banner (default is 80%).

### 5. Usage

- After configuring the JavaScript and CSS, load the page.
- The **banner container** will be hidden by default and will only appear when the **streamer or moderator** uses the `!banner {text}` command.
- The banner will automatically be removed after the `!bannerclear` command is used.

### 6. MIT License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this code as you see fit. For more details, check the LICENSE file.

## License

MIT License. See the [LICENSE](LICENSE) file for more information.

---

Enjoy using the **Twitch Banner** system on your stream! 🎉  
Feel free to customize the banner, and if you need any help, open an issue or submit a pull request!  
