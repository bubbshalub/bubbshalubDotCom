<script>
    import bubbsIcon from '$lib/king_shalub.jpg';
    import vulbyteIcon from '$lib/vulbytesLogo.svg';
</script>

<div id='home'>
    <br />
    <br />
    <div id='iconContainer'> 
        <img 
            src='{bubbsIcon}'
            alt='icon of bubbshalub'
        />
    </div>
    <h1> 
        <span 
	class="background_anim"
	style=
        "
            color:transparent;
            background-clip: text;
            background-image: linear-gradient(1rad, red, orange, yellow, red);    
        "   
        >
           bubbshalub.com
        </span></h1>
    <h2>explore around, enjoy your stay</h2>
    
    <a href='/links'>
        <div id='linkCta' class="background_anim">
            <p> <span id="hand_left">👉</span> <span id="squishy">Socials</span> <span id="hand_right">👈</span></p>
        </div>
    </a>

    <a href='https://vulbyte.com' target='_blank'>
	<div id="creditDiv"> 
	<img
	src="{vulbyteIcon}"
	/>
		<p>
		Handcrafted with love, sweat, and tears by 
			Vulbyte
		</p>

	</div>
	</a>
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

@keyframes squish {
	0%{transform: rotateY(0deg);}
	8%{transform: rotateY(0deg);}
	58%{transform: rotateY(60deg);}
	62%{transform: rotateY(60deg);}
	90%{transform: rotateY(+0);}
	100%{transform: rotateY(+0);}
}
#squishy {
	animation: squish 2s infinite;
	transform: rotateY(0deg);
	display:inline-block;
}

@keyframes left_h_a {
	0%{transform: translateX(-1.5rem);}
	50%{transform: translateX(+1.5rem);}
	100%{transform: translateX(-1.5rem);}
}

@keyframes right_h_a {
	0%{transform: translateX(+1.5rem);}
	50%{transform: translateX(-1.5rem);}
	100%{transform: translateX(+1.5rem);}
}
#hand_left {
	animation-name: left_h_a;	/*left hand animation*/
	animation-duration: 2s;
	transform: translateX(-0.0rem);
	animation-iteration-count: infinite;
	position:relative;
	display:inline-block;
}
#hand_right {
	animation-name: right_h_a; /*right hand animation*/
	animation-duration: 2s;
	transform: translateX(-0.0rem);
	animation-iteration-count: infinite;
	position:relative;
	display:inline-block;
}

#creditDiv {
	position:absolute;
	bottom:0px;
	margin:auto;
	width:100%;
}
#creditDiv>img {
	max-width:3rem;
} 
    #home {
        text-align: center;
    }
        #home > div {
            margin: auto;
            min-height: auto;
            width: 90%;
        }
    #iconContainer {
        max-height: 25%;
        min-width: 128px;
        max-width: 50%;
    }   
        #iconContainer > img {
            border-radius: 100%;
            max-height: 50%;
            max-width: 50%;
        }
    #linkCta {
        background-image: linear-gradient(90deg, #00aa77, #00aaaa, #0077aa, #00aa77 );
	background-size: 200%;
        border-radius: 2rem;
        margin: auto;
        max-width: 100%;
        width: 30rem;
        padding: 1rem;
	background-rotation: 0deg;
    }
    #linkCta > p {
        filter:brightness(300%);
        font-weight: bolder;
        letter-spacing: 1.3px;
    }
    
</style>
