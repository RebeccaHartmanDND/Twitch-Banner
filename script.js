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

client.connect().catch(console.error);

const bannerContainer = document.getElementById("banner-container");
const bannerText = document.getElementById("banner-text");


function loadBannerState() {
    const savedData = localStorage.getItem("bannerState");
    if (savedData) {
        const { text, visible } = JSON.parse(savedData);
        if (text) {
            bannerText.textContent = text;
            if (visible) {
                bannerContainer.classList.remove("hidden");
                bannerContainer.style.display = "block";
            }
        }
    }
}

loadBannerState();

function saveBannerState(text, visible) {
    const bannerData = { text, visible };
    localStorage.setItem("bannerState", JSON.stringify(bannerData));
}

client.on("message", (channel, tags, message, self) => {
    if (self) return;

    const args = message.split(" ");
    const command = args.shift().toLowerCase();

    // Check if the user is a moderator or the streamer
    const isModOrStreamer = tags.mod || tags.username === channel.slice(1); // Check if user is a moderator or the streamer

    if (!isModOrStreamer) {
        return; // Exit if the user is not a moderator or streamer
    }

    if (command === "!banner" && args.length > 0) {
        const text = args.join(" "); // Preserve capitalization and spaces

        bannerText.textContent = text;
        bannerContainer.classList.remove("hidden");
        bannerContainer.style.display = "block";
        saveBannerState(text, true);
    } 
    else if (command === "!bannerclear") {
        bannerContainer.classList.add("hidden");
        setTimeout(() => {
            bannerContainer.style.display = "none";
            bannerText.textContent = "";
            saveBannerState("", false);
        }, 500); // Wait for fade-out transition
    }
});
