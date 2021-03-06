function getPassword() {
    const passwordDicts = {
        "https://www.gutenberg.org/files/120/120-h/120-h.htm" : "wesanderson",
        "https://www.gutenberg.org/files/60093/60093-h/60093-h.htm" : "rainbow",
        "https://www.gutenberg.org/files/1228/1228-h/1228-h.htm" : "emilyleproust",
        "https://www.gutenberg.org/files/98/98-h/98-h.htm" : "kanyewest",
        "https://www.gutenberg.org/files/16328/16328-h/16328-h.htm" : "camarasecreta",
        "https://www.gutenberg.org/files/174/174-h/174-h.htm" : "artattack",
        "https://www.gutenberg.org/files/8799/8799-h/8799-h.htm#link1" : "casteloratimbum",
        "https://www.gutenberg.org/files/65688/65688-h/65688-h.htm" : "supernintendo",
        "https://www.gutenberg.org/files/730/730-h/730-h.htm" : "wipedout",
        "https://www.gutenberg.org/files/45/45-h/45-h.htm" : "ellenlupton",
        "https://www.gutenberg.org/files/2500/2500-h/2500-h.htm" : "rupauldragrace",
        "https://www.gutenberg.org/files/1952/1952-h/1952-h.htm" : "nevillelongbottom",
        "https://www.gutenberg.org/files/215/215-h/215-h.htm" : "escotismo",
        "https://www.gutenberg.org/files/65910/65910-h/65910-h.htm" : "ladraoderaios",
        "https://www.gutenberg.org/cache/epub/6100/pg6100.html" : "undertale",
        "https://www.gutenberg.org/files/43/43-h/43-h.htm" : "turmadamonica",
        "https://www.gutenberg.org/files/514/514-h/514-h.htm" : "vilasesamo",
        "https://www.gutenberg.org/files/1260/1260-h/1260-h.htm" : "rebelde",
        "https://www.gutenberg.org/files/36/36-h/36-h.htm" : "stevenuniverse",
        "https://www.gutenberg.org/files/35/35-h/35-h.htm" : "poppunk",
        "https://www.gutenberg.org/files/219/219-h/219-h.htm" : "pokemon",
        "https://www.gutenberg.org/files/205/205-h/205-h.htm" : "intothewild",
        "https://www.gutenberg.org/files/844/844-h/844-h.htm" : "davidlynch",
        "https://www.gutenberg.org/files/1727/1727-h/1727-h.htm" : "seichonoie",
        "https://www.gutenberg.org/files/4763/4763-h/4763-h.htm" : "shakespeare",
        "https://www.gutenberg.org/files/5307/5307-h/5307-h.htm" : "orquestra",
        "https://www.gutenberg.org/files/103/103-h/103-h.htm" : "rickandmorty",
        "https://www.gutenberg.org/files/2226/2226-h/2226-h.htm" : "ayrtonsenna",
        "https://www.gutenberg.org/files/829/829-h/829-h.htm" : "adalovelace",
        "https://www.gutenberg.org/files/158/158-h/158-h.htm" : "nintendods",
        "https://www.gutenberg.org/cache/epub/3748/pg3748.html" : "carlsagan",
        "https://www.gutenberg.org/files/11/11-h/11-h.htm" : "belaeafera",
        "https://www.gutenberg.org/files/2397/2397-h/2397-h.htm" : "playstation",
        "https://www.gutenberg.org/files/4300/4300-h/4300-h.htm" : "genteaberta",
        "https://www.gutenberg.org/files/74/74-h/74-h.htm" : "rogerfederer",
        "https://www.gutenberg.org/files/8492/8492-h/8492-h.htm" : "ladygaga",
        "https://www.gutenberg.org/files/3090/3090-h/3090-h.htm" : "ritalee",
        "https://www.gutenberg.org/files/3600/3600-h/3600-h.htm" : "freddiemercury",
        "https://www.gutenberg.org/files/5200/5200-h/5200-h.htm" : "cocochanel",
        "https://www.gutenberg.org/files/236/236-h/236-h.htm" : "chimamanda",
        "https://www.gutenberg.org/files/408/408-h/408-h.htm" : "movimentonegro",
        "https://www.gutenberg.org/files/5001/5001-h/5001-h.htm" : "breakingbad",
        "https://www.gutenberg.org/files/16/16-h/16-h.htm" : "guitarhero",
        "https://www.gutenberg.org/files/2680/2680-h/2680-h.htm" : "futebolamericano",
        "https://www.gutenberg.org/files/863/863-h/863-h.htm" : "edvardmunch",
        "https://www.gutenberg.org/files/25344/25344-h/25344-h.htm" : "monkeyisland",
        "https://www.gutenberg.org/files/768/768-h/768-h.htm" : "literatura",
        "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm" : "simonegiertz",
        "https://www.gutenberg.org/files/76/76-h/76-h.htm" : "ultimoolimpiano",
        "https://www.gutenberg.org/files/3533/3533-h/3533-h.htm" : "snoopy",
    };
    const currentUrl = new URL(window.location.toString());
    const currentPassword = passwordDicts[currentUrl];
    if (currentPassword == null) { return false; }
    return currentPassword;
}

function isPasswordOk(password) {
    return password === getPassword();
}

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function animateWrongPassword() {
    var _dotString = "",
      _delay = 0,
      _totalDuration = 0;
    var _passLength = $(".ip-pass").val().length;
    _passLength = (_passLength > 10) ? 10 : _passLength;
    for (var i = 0; i < _passLength; i++) {
      _dotString += "<span class='dot'></span>";
    }
    setTimeout(function() {
      $(".fake-pass").html(_dotString).show();
      $(".ip-pass").val("");
      $(".ip-pass-icon").addClass("ip-pass-icon-anim");
      $(".fake-pass .dot").each(function(i) {
        _totalDuration += (i * 30) + 300;
        if (i != 0) {
          _delay = (i * 0.03) + 0.3 + "s";
          $(this).css("animation-delay", _delay);
        }
      }).addClass("dot-anim");

    }, 700);
    setTimeout(function(){
           $("div.fake-pass").addClass("fake-pass-anim");
           $(".fake-pass").html("");
           $(".fake-pass .dot").removeClass("dot-anim");
           setTimeout(function(){
             $("div.fake-pass").fadeOut("slow",function(){
               $(this).removeClass("show");
               $(".ip-pass-icon").removeClass("ip-pass-icon-anim");
               $(".ip-pass").focus();
             });
           },800)
         }, 1700);
}

function getDeeplink() {
    const currentUrl = new URL(window.location.toString());
    const dict = {
        "https://www.gutenberg.org/files/120/120-h/120-h.htm" : "qjogbt",
        "https://www.gutenberg.org/files/60093/60093-h/60093-h.htm" : "klrwid",
        "https://www.gutenberg.org/files/1228/1228-h/1228-h.htm" : "xufjzv",
        "https://www.gutenberg.org/files/98/98-h/98-h.htm" : "xojmth",
        "https://www.gutenberg.org/files/16328/16328-h/16328-h.htm" : "obpslt",
        "https://www.gutenberg.org/files/174/174-h/174-h.htm" : "xukagf",
        "https://www.gutenberg.org/files/8799/8799-h/8799-h.htm#link1" : "mpajzg",
        "https://www.gutenberg.org/files/65688/65688-h/65688-h.htm" : "uhfzhz",
        "https://www.gutenberg.org/files/730/730-h/730-h.htm" : "tekghv",
        "https://www.gutenberg.org/files/45/45-h/45-h.htm" : "grptcv",
        "https://www.gutenberg.org/files/2500/2500-h/2500-h.htm" : "xgedle",
        "https://www.gutenberg.org/files/1952/1952-h/1952-h.htm" : "phmcua",
        "https://www.gutenberg.org/files/215/215-h/215-h.htm" : "dbffjr",
        "https://www.gutenberg.org/files/65910/65910-h/65910-h.htm" : "rgosnx",
        "https://www.gutenberg.org/cache/epub/6100/pg6100.html" : "rggwil",
        "https://www.gutenberg.org/files/43/43-h/43-h.htm" : "bxsiod",
        "https://www.gutenberg.org/files/514/514-h/514-h.htm" : "pprvkb",
        "https://www.gutenberg.org/files/1260/1260-h/1260-h.htm" : "qmupde",
        "https://www.gutenberg.org/files/36/36-h/36-h.htm" : "vrhhzv",
        "https://www.gutenberg.org/files/35/35-h/35-h.htm" : "busuej",
        "https://www.gutenberg.org/files/219/219-h/219-h.htm" : "wvfolv",
        "https://www.gutenberg.org/files/205/205-h/205-h.htm" : "omnpsb",
        "https://www.gutenberg.org/files/844/844-h/844-h.htm" : "uzwlyv",
        "https://www.gutenberg.org/files/1727/1727-h/1727-h.htm" : "eoqmdr",
        "https://www.gutenberg.org/files/4763/4763-h/4763-h.htm" : "suyjnn",
        "https://www.gutenberg.org/files/5307/5307-h/5307-h.htm" : "lnqqqs",
        "https://www.gutenberg.org/files/103/103-h/103-h.htm" : "nmlxur",
        "https://www.gutenberg.org/files/2226/2226-h/2226-h.htm" : "mjnrgi",
        "https://www.gutenberg.org/files/829/829-h/829-h.htm" : "mftiue",
        "https://www.gutenberg.org/files/158/158-h/158-h.htm" : "texiph",
        "https://www.gutenberg.org/cache/epub/3748/pg3748.html" : "eczpvk",
        "https://www.gutenberg.org/files/11/11-h/11-h.htm" : "xldylx",
        "https://www.gutenberg.org/files/2397/2397-h/2397-h.htm" : "kefcqt",
        "https://www.gutenberg.org/files/4300/4300-h/4300-h.htm" : "yojkzs",
        "https://www.gutenberg.org/files/74/74-h/74-h.htm" : "zdygus",
        "https://www.gutenberg.org/files/8492/8492-h/8492-h.htm" : "pymklu",
        "https://www.gutenberg.org/files/3090/3090-h/3090-h.htm" : "xcytav",
        "https://www.gutenberg.org/files/3600/3600-h/3600-h.htm" : "pbiedl",
        "https://www.gutenberg.org/files/5200/5200-h/5200-h.htm" : "jwdkxw",
        "https://www.gutenberg.org/files/236/236-h/236-h.htm" : "lspaau",
        "https://www.gutenberg.org/files/408/408-h/408-h.htm" : "vxrifp",
        "https://www.gutenberg.org/files/5001/5001-h/5001-h.htm" : "jwzabm",
        "https://www.gutenberg.org/files/16/16-h/16-h.htm" : "eopiik",
        "https://www.gutenberg.org/files/2680/2680-h/2680-h.htm" : "qdzaln",
        "https://www.gutenberg.org/files/863/863-h/863-h.htm" : "wmhkkd",
        "https://www.gutenberg.org/files/25344/25344-h/25344-h.htm" : "vuoicv",
        "https://www.gutenberg.org/files/768/768-h/768-h.htm" : "wmcvkw",
        "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm" : "dnbdqw",
        "https://www.gutenberg.org/files/76/76-h/76-h.htm" : "nqwoxy",
        "https://www.gutenberg.org/files/3533/3533-h/3533-h.htm" : "erweng",
    };
    const deeplink = dict[currentUrl];
    return `compiuter://${deeplink}`;
}

function presentQRCode() {
    $("#pass-feild").empty();
    new QRCode("pass-feild", {
        text: getDeeplink()
    });
}

function handlePadlockPress() {
    const guess = $(".ip-pass").val();
    if (isPasswordOk(guess)) {
        presentQRCode();
    } else {
        animateWrongPassword();
    }
}

function embedPasswordField() {
    const html = `
        <div class="pass-feild" id="pass-feild">
        <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTggMTB2LTRjMC0zLjMxMy0yLjY4Ny02LTYtNnMtNiAyLjY4Ny02IDZ2NGgtM3YxNGgxOHYtMTRoLTN6bS01IDcuNzIzdjIuMjc3aC0ydi0yLjI3N2MtLjU5NS0uMzQ3LTEtLjk4NC0xLTEuNzIzIDAtMS4xMDQuODk2LTIgMi0yczIgLjg5NiAyIDJjMCAuNzM4LS40MDQgMS4zNzYtMSAxLjcyM3ptLTUtNy43MjN2LTRjMC0yLjIwNiAxLjc5NC00IDQtNCAyLjIwNSAwIDQgMS43OTQgNCA0djRoLTh6Ii8+PC9zdmc+"
            alt="" 
            class="ip-pass-icon" />
        <input 
                type="password"
                name="pass" 
                placeholder="Password" 
                class="ip-pass"
                value=""/>
        <div class="fake-pass">
        </div>
        </div>
    `;
    const css = `
        input:focus {
            outline: none;
        }
        
        .pass-feild {
            position: relative;
            margin: 0;
            padding: 0;
            outline: none;
            font-family: Verdana;
            position: relative;
            margin: 25px auto;
            text-align: center;
            width: 180px;
            height: auto;
        }
            
        .ip-pass-icon {
            position: absolute;
            width: 20px;
            height: 20px;
            z-index: 999;
            transform-origin: top center;
            top: 26%;
            left: 10%;
        }
            
        .ip-pass-icon-anim {
            animation: swingLock 2s ease forwards;
        }
            
        .ip-pass {
            width: 180px;
            padding: 10px 30px;
            padding-left: 44px;
            padding-bottom: 11px;
            font-size: 20px;
            letter-spacing: 1px;
            border: 0px solid #bebab2;
            border-radius: 8px;
        }
        
        .fake-pass-anim:before {
            animation: showUp 0.3s ease forward;
        }
                
        .fake-pass {   
            position: absolute;
            display: none;
            width: 100%;
            height: 75%;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            outline: none;
            top: 10%;
            left: 42px;
            margin-left: 3px;
        }
        
        .dot {
            position: relative;
            width: 8px;
            height: 8px;
            background: #000000;
            margin-right: 4px;
            top: 40%;
            border-radius: 100%;
            float: left;
            display: inline-block;
            margin-top: 1px;
        }

        .dot-anim {
            animation: kickPassword 0.3s 0.3s ease-out forwards;
        }
            
        @keyframes kickPassword {
            00% { transform: translate(0px,0px);  scale: 1,1; }
            50% { translate: 50px,-10px;  scale: 1.5,1; opacity: 1; }
            100% { transform: translate(220px,25px); scale: 2.5,1; opacity: 0 }
        }
        
        @keyframes swingLock {
            0% {  transform: rotate(0deg);  }
            10% {  transform: rotate(40deg); }
            20% {  transform: rotate(-50deg); }
            30% {  transform: rotate(15deg); }
            40% {  transform: rotate(-15deg); }
            50% {  transform: rotate(10deg); }
            60% {  transform: rotate(-10deg); }
            70% {  transform: rotate(5deg); }
            80% {  transform: rotate(-5deg); }
            90% {  transform: rotate(3deg); }
            100% {  transform:rotate(0deg; }
        }
            
        @keyframes showUp {
            0% { opacity: 1; transform: translate(0px, -30px); }
            100% { opacity: 1; transform: translate(0px, -5px); }
        }
            
        ::-webkit-input-placeholder {
            position: relative;
            font-size: 18px;
            top: -5px;
        }
        ::-moz-input-placeholder {
            position: relative;
            font-size: 18px;
            top: -5px;
        }
        ::-moz-placeholder {
            position: relative;
            font-size: 18px;
            top: -5px;
        }
        ::-o-input-placeholder {
            position: relative;
            font-size: 18px;
            top: -5px;
        }
        ::-ms-input-placeholder {
            position: relative;
            font-size: 18px;
            top: -5px;
        }        
    `;

    const container = document.createElement('div');
    const style = document.createElement('style');

    container.innerHTML = html;
    style.textContent = css;

    document.head.append(style);
    document.body.append(container);

    $(".ip-pass-icon").on("click", function() {
        handlePadlockPress();
    });
}

function highlight() {
    
    function advanceMessage(message, original) {
        message.splice(0, 1);
        if (message.length == 0) {
            message = original.split('');
        }

        return message
    }
    const css = `
        #w {
            color: rgb(79, 26, 26);
        }

        #w::selection {
            color: rgb(255, 70, 70);
            background: rgb(0, 0, 0);
        }

        #ww::selection {
            color: rgb(244, 169, 112);
            background: rgb(0, 0, 0);
        }

        #w {
            display: inline;
        }

        #ww {
            display: inline;
        }
    `;
    const style = document.createElement('style');
    
    style.textContent = css;

    document.head.append(style);

    var flag = false;
    const message = getPassword() + ".";
    characters = document.body.innerHTML;

    working_message = message.split('');

    newBody = "";
    for (var i = 0; i < characters.length; i++) {

        if (characters[i] == "<") { flag = true; }
        else if (characters[i] == ">") { flag = false; }

        if(!flag && characters[i] !== ">") {
            if (working_message[0] === characters[i]) {
                newBody += ("<span id='ww'>" + characters[i] + "</span>");
                working_message = advanceMessage(working_message, message);
            } else {
                if (message.includes(characters[i])) {  newBody += (characters[i]); continue; }
                const fraction = (i / characters.length) * 0.5;
                const soup = "????????????????????????????????????????????????????????????????????????";
                newBody += Math.random() < fraction / 4 ? "<span id='w'>" + soup[Math.floor(Math.random() * soup.length)] + "</span>" : characters[i];
            }
        } else {
            newBody += (characters[i]);
        }
    }
    document.body.innerHTML = newBody;
}

highlight();
