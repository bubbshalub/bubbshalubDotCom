<script>
	import mailIcon from '$lib/mailIcon.svg';
	import bubbsIcon from '$lib/sketchIconBubb.png';
	import vulbyteIcon from '$lib/vulbytesLogo.svg';

	import disIcon from '$lib/discord-icon.svg';
	import twitIcon from '$lib/twitter-icon.svg';
	import youIcon from '$lib/youtube-icon.svg';
	import bluIcon from '$lib/bluesky-icon.svg';

	import stinky from '$lib/stinky.png';

	import baco_tell from '$lib/baco-tell.mp3';
	import fart from '$lib/fart.mp3';
	import fart_reverb from '$lib/fart-reverb.mp3';
	import talk_about from '$lib/talk_about.mp3';
	import morio from '$lib/morio.mp3';

	async function loadAudio(url, audioContext) {
	  const response = await fetch(url);
	  const arrayBuffer = await response.arrayBuffer();
	  return await audioContext.decodeAudioData(arrayBuffer);
	}

	function playSound(audioBuffer, audioContext) {
	  // FIX 1: Added 'reject' to the Promise arguments
	  return new Promise((resolve, reject) => {
		
		// FIX 2: Store the timer ID so we can cancel it if the audio finishes early
		const timer = setTimeout(() => {
			reject(new Error('Audio playback took too long'));
		}, 3000);

		const source = audioContext.createBufferSource();
		source.buffer = audioBuffer;
		source.connect(audioContext.destination);
	    
		source.onended = () => {
		  clearTimeout(timer); // FIX 3: Clear the timeout so it doesn't reject later
		  resolve();
		};

		source.start(0); 
	  });
	}

	async function poot(e) {
	  const stink = document.getElementById("stinky");
	  stink.innerText = "poot";
	  console.log("poot");

	  try {
	    const audioContext = new AudioContext();

		const sounds = [fart, fart_reverb, baco_tell, talk_about, morio];
		let sound = sounds[Math.floor(Math.random()*sounds.length)];
	    
		let poot = document.getElementById("poot_cloud");
		if (poot) poot.style.filter = "opacity(1) hue-rotate(240deg)";

		const audioBuffer = await loadAudio(sound, audioContext);
		await playSound(audioBuffer, audioContext);

	    window.location.href = "https://bubbshalub.com";
	  } catch (error) {
	    console.error("Audio playback or loading failed:", error);
	    // Falls back and redirects anyway if it takes > 3 seconds or fails
	    window.location.href = "https://bubbshalub.com";
	  }
	}
</script>


<div id='linksPage'>
    <br />
    <br />
    <a href="/"><div id='iconContainer'>
        <img 
            src='{bubbsIcon}'
            alt='icon of bubbshalub'
        />
    </div></a>
    <h1> 

    <span
    id="randomWelcomeText"
    style=
    "
    color:transparent;
    background-clip: text;
    background-image: linear-gradient(-25deg, red, orange);    
    ">
    YOU OR ME OR WE DID SOMETHING WRONG    
    </span></h1>


    <div>
    click the little shalub to return home
    <br>
    <span><img id="stinky" src='{stinky}' style="width:4rem; height:4rem;" on:click={poot}> </span>
	<div id="poot_cloud" 
		style="
		display:inline-block;
		transform: 
			translateX(-3rem)
			rotateZ(115deg);
		filter: opacity(0) hue-rotate(240deg);
		position: relative;	
	">💨</div>
    <br>
    <span style="color:#333">touch da butt</span>

    </div>

</div>

<style> 
@keyframes bg_anim {
	0%{
		background-position: -0%;
		background-rotation: -0deg;
	}
	50%{
		background-position: +140%;
	}
	100%{
		background-position: -0%;
		background-rotation: -360deg;
	}
}
.background_anim {
	background-size: 200%;
	animation: bg_anim 6s infinite;
	display:inline-block;
}

#creditDiv>img {
	max-width:3rem;
}
    #linksPage {
        text-align: center;
        margin: auto;
    }
        #allTheLinks > p { 
            max-width: 30rem; 
            margin: auto; 
            text-align: left;
        }
    #iconContainer {
        max-height: 25%;
        min-width: 128px;
        max-width: 50%;
        margin: auto;
    }   
        #iconContainer > img {
            border-radius: 100%;
            max-height: 50%;
            max-width: 50%;
        }
    .linkContainer > a > div {
        background-color: #333;
        border-radius: 50px;
        color: white;
        margin: auto;
            margin-top:3rem;
            margin-bottom:3rem;
        padding: 1em;
        width: 20rem;
    }   
        .generatedLink {
            display: flex;      
                flex-direction: row;
                justify-content:center;
            max-height: 3rem; 
            width: 5rem;
        }
            .generatedLink > img {
                max-height: 2rem;
                margin: 0.5rem;
            }
    #activeLinks > a > div {
        background-image: linear-gradient(-45deg, #222, #333);
        border: 2px solid #aaa;
        color: white;
        font-weight: bold;
    }
    #monitoredLinks > a > div {
        background-image: linear-gradient(-45deg, #222, #333);
    }
    #monitoredLinks > a > div > img {
        filter: invert(1) brightness(100); 
    }
    #inactiveLinks {
        display: grid;
            gap: 1em;
            grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
        margin: auto;
        width: 60%;
    }
    @media only screen and (max-width: 600px){
        #inactiveLinks {
            width: 100%;
        }
    }
    #inactiveLinks > a > div {
        aspect-ratio: 1/1;
            height: auto;
                min-height: 8rem;
                max-height: auto;
            width: auto;
                min-width: 8rem;
                max-width: auto;
        background-image: linear-gradient(-45deg, #111, #222);
            border-radius: 1rem;
        padding: 0px;
        margin: auto;
    }
    #inactiveLinks.linkContainer > a > .generatedLink {
        display: flex;
            flex-direction: column;
    }
    #inactiveLinks.linkContainer > a > .generatedLink > img {
        aspect-ratio: 1/1;
            height: 2rem;
            width: 2rem;
        filter: invert(1) brightness(100);
        margin-left: auto;
        margin-right: auto;
    }
        #linkNewgrounds > img {
            filter: invert(0) brightness(1) !important;
        }
        #linkPatreon > img {
            filter: grayscale(1) invert(1) brightness(100) !important;
        }
        #linkSoundcloud > img {
            height: 1.2rem !important;
        }
        #linkTelegram > img {
            filter: invert(1) brightness(10);
        }
    

</style>
