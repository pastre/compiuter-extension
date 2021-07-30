const currentUrl = new URL(window.location.toString());
const users = {
    "𓀀" : "https://www.gutenberg.org/files/120/120-h/120-h.htm",
    "𓀁" : "https://www.gutenberg.org/files/60093/60093-h/60093-h.htm",
    "𓀂" : "https://www.gutenberg.org/files/1228/1228-h/1228-h.htm",
    "𓀃" : "https://www.gutenberg.org/files/98/98-h/98-h.htm",
    "𓀄" : "https://www.gutenberg.org/files/16328/16328-h/16328-h.htm",
    "𓀅" : "https://www.gutenberg.org/files/174/174-h/174-h.htm",
    "𓀆" : "https://www.gutenberg.org/files/8799/8799-h/8799-h.htm#link1",
    "𓀇" : "https://www.gutenberg.org/files/65688/65688-h/65688-h.htm",
    "𓀈" : "https://www.gutenberg.org/files/730/730-h/730-h.htm",
    "𓀉" : "https://www.gutenberg.org/files/45/45-h/45-h.htm",
    "𓀊" : "https://www.gutenberg.org/files/2500/2500-h/2500-h.htm",
    "𓀋" : "https://www.gutenberg.org/files/1952/1952-h/1952-h.htm",
    "𓀌" : "https://www.gutenberg.org/files/215/215-h/215-h.htm",
    "𓀍" : "https://www.gutenberg.org/files/65910/65910-h/65910-h.htm",
    "𓀎" : "https://www.gutenberg.org/cache/epub/6100/pg6100.html",
    "𓀏" : "https://www.gutenberg.org/files/43/43-h/43-h.htm",
    "𓀐" : "https://www.gutenberg.org/files/514/514-h/514-h.htm",
    "𓀑" : "https://www.gutenberg.org/files/1260/1260-h/1260-h.htm",
    "𓀒" : "https://www.gutenberg.org/files/36/36-h/36-h.htm",
    "𓀓" : "https://www.gutenberg.org/files/35/35-h/35-h.htm",
    "𓀔" : "https://www.gutenberg.org/files/219/219-h/219-h.htm",
    "𓀕" : "https://www.gutenberg.org/files/205/205-h/205-h.htm",
    "𓀖" : "https://www.gutenberg.org/files/844/844-h/844-h.htm",
    "𓀗" : "https://www.gutenberg.org/files/1727/1727-h/1727-h.htm",
    "𓀘" : "https://www.gutenberg.org/files/4763/4763-h/4763-h.htm",
    "𓀙" : "https://www.gutenberg.org/files/5307/5307-h/5307-h.htm",
    "𓀚" : "https://www.gutenberg.org/files/103/103-h/103-h.htm",
    "𓀛" : "https://www.gutenberg.org/files/2226/2226-h/2226-h.htm",
    "𓀜" : "https://www.gutenberg.org/files/829/829-h/829-h.htm",
    "𓀝" : "https://www.gutenberg.org/files/158/158-h/158-h.htm",
    "𓀞" : "https://www.gutenberg.org/cache/epub/3748/pg3748.html",
    "𓀟" : "https://www.gutenberg.org/files/11/11-h/11-h.htm",
    "𓀠" : "https://www.gutenberg.org/files/2397/2397-h/2397-h.htm",
    "𓀡" : "https://www.gutenberg.org/files/4300/4300-h/4300-h.htm",
    "𓀢" : "https://www.gutenberg.org/files/74/74-h/74-h.htm",
    "𓀣" : "https://www.gutenberg.org/files/8492/8492-h/8492-h.htm",
    "𓀤" : "https://www.gutenberg.org/files/3090/3090-h/3090-h.htm",
    "𓀥" : "https://www.gutenberg.org/files/3600/3600-h/3600-h.htm",
    "𓀦" : "https://www.gutenberg.org/files/5200/5200-h/5200-h.htm",
    "𓀧" : "https://www.gutenberg.org/files/236/236-h/236-h.htm",
    "𓀨" : "https://www.gutenberg.org/files/408/408-h/408-h.htm",
    "𓀩" : "https://www.gutenberg.org/files/5001/5001-h/5001-h.htm",
    "𓀪" : "https://www.gutenberg.org/files/16/16-h/16-h.htm",
    "𓀫" : "https://www.gutenberg.org/files/2680/2680-h/2680-h.htm",
    "𓀬" : "https://www.gutenberg.org/files/863/863-h/863-h.htm",
    "𓀭" : "https://www.gutenberg.org/files/25344/25344-h/25344-h.htm",
    "𓀮" : "https://www.gutenberg.org/files/768/768-h/768-h.htm",
    "𓀯" : "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm",
    "𓀰" : "https://www.gutenberg.org/files/76/76-h/76-h.htm",
    "𓀱" : "https://www.gutenberg.org/files/3533/3533-h/3533-h.htm",
}

function corruptGoogle(bookUrl, hieroglyph) {
    const element = document.getElementById("center_col"); 
    element.innerHTML = buildResult(bookUrl, hieroglyph);
    // element.insertAdjacentHTML('afterbegin', buildResult(bookUrl, hieroglyph));
}

function routeToBookIfPossible() {
    if (!currentUrl.hostname.toString().includes("google")) { return; }
    const hieroglyph = currentUrl.searchParams.get('q');
    const bookUrl = users[hieroglyph];
    if (bookUrl == null) { return; }
    corruptGoogle(bookUrl, hieroglyph);
}

routeToBookIfPossible();


function buildResult(bookUrl, hieroglyph) {
    return `
    <div class="tF2Cxc">
    <div class="yuRUbf">
        <a href="${bookUrl}">
            <h3 class="LC20lb DKV0Md">${hieroglyph} - ɐpıpɹǝԀ ɐɔǝʇoılqıᙠ ∀</h3>
        </a>
    </div>
    <div class="IsZvec">
        <div class="VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf" style="-webkit-line-clamp:2"><span>
            ᵃ  𝐫єş卩Ｏşт𝔞 єѕ𝔱Ã ＮＯs ｌ𝓘ᵛ𝓻ᗝ𝕤  <br />
            ᗩ г𝐄รƤㄖŜŤ𝓪 ⓔŜ𝓉𝔞 ｎ𝕆Ş 𝕝𝐈𝕧𝔯ỖⓈ <br />
            ά ŕє丂𝐩𝐨𝐬т𝐀 Ｅ𝐬𝔱α Ｎ๏Ⓢ 𝕃Į𝐕𝓻ⓞ𝕊 </
            ᵃ ＲＥ𝐒ρ𝕆ⓢŤⓐ 乇𝐒𝐓ａ ηⓄｓ 𝕃𝕀VＲⓄ𝕤  <br />
        </span></div>
    </div>
    </div>
    `;
}