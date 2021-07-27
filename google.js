const currentUrl = new URL(window.location.toString());
const users = {
    "🙅" : "https://www.gutenberg.org/files/65919/65919-h/65919-h.htm",
}

function routeToBookIfPossible() {
    if (!currentUrl.hostname.toString().includes("google")) { return; }
    const userEmoji = currentUrl.searchParams.get('q');
    const bookUrl = users[userEmoji];
    if (bookUrl == null) { return; }
    window.location.replace(bookUrl);
}

routeToBookIfPossible();