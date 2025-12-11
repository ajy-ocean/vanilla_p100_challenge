const kanyeQuoteText = document.getElementById("kanye-quote");
const kanyeAuthorName = document.getElementById("kanye-author");
const kanyeApiUrl = "https://api.kanye.rest";

async function getKanyeQuote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        kanyeQuoteText.innerHTML = `"${data.quote}"`;
        kanyeAuthorName.innerHTML = "Kanye West";
    } catch (error) {
        console.error("Error fetching Kanye quote:", error);
        kanyeQuoteText.innerHTML = "⚠️ Could not load Kanye’s wisdom.";
        kanyeAuthorName.innerHTML = "Try again later.";
    }
}

function tweetKanyeQuote() {
    const tweetText = `${kanyeQuoteText.innerText} ---- ${kanyeAuthorName.innerText}`;
    window.open(
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText),
        "Tweet Window",
        "width=600,height=300"
    );
}

getKanyeQuote(kanyeApiUrl);
