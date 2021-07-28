function isPasswordOk(password) {
    const passwordDicts = {
        
    };
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

function embedPasswordField() {
    const html = `
        <div class="pass-feild">
        <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTggMTB2LTRjMC0zLjMxMy0yLjY4Ny02LTYtNnMtNiAyLjY4Ny02IDZ2NGgtM3YxNGgxOHYtMTRoLTN6bS01IDcuNzIzdjIuMjc3aC0ydi0yLjI3N2MtLjU5NS0uMzQ3LTEtLjk4NC0xLTEuNzIzIDAtMS4xMDQuODk2LTIgMi0yczIgLjg5NiAyIDJjMCAuNzM4LS40MDQgMS4zNzYtMSAxLjcyM3ptLTUtNy43MjN2LTRjMC0yLjIwNiAxLjc5NC00IDQtNCAyLjIwNSAwIDQgMS43OTQgNCA0djRoLTh6Ii8+PC9zdmc+"
            alt="" 
            class="ip-pass-icon" />
        <input 
                type="password"
                maxlength="10"
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
        // TODO check if password is correct
        animateWrongPassword();
    });
}

embedPasswordField();