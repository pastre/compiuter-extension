// This file creates and embedds the animated text


const container = document.createElement('div');
const style = document.createElement('style');
container.innerHTML = `
    <!-- Explanation in JS tab -->

    <!-- The two texts -->
    <div id="morphiccontainer">
        <span id="text1"></span>
        <span id="text2"></span>
    </div>
    
    <!-- The SVG filter used to create the merging effect -->
    <svg id="filters">
        <defs>
            <filter id="threshold">
                <!-- Basically just a threshold effect - pixels with a high enough opacity are set to full opacity, and all other pixels are set to completely transparent. -->
                <feColorMatrix in="SourceGraphic"
                        type="matrix"
                        values="1 0 0 0 0
                                        0 1 0 0 0
                                        0 0 1 0 0
                                        0 0 0 255 -140" />
            </filter>
        </defs>
    </svg>
`;

style.textContent = `
        /* Explanation in JS tab */

    /* Cool font from Google Fonts! */
    @import url('https://fonts.googleapis.com/css?family=Raleway:900&display=swap');

    body {
        margin: 0px;
    }

    #morphiccontainer {
        filter: url(#threshold) blur(0.6px);
    }

    /* Your average text styling */
    #text1, #text2 {
        position: absolute;
        width: 100%;
        display: inline-block;
        
        font-size: 80pt;
        
        text-align: center;
        
        user-select: none;
    }
`;


document.head.append(style);
document.body.append(container);


const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = "A resposta já passou".split(" ");

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

function setMorph(fraction) {
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

function bootMorphicText() {
	requestAnimationFrame(bootMorphicText);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		doMorph();
	} else {
		doCooldown();
	}
} 

bootMorphicText();
embedPasswordField();
