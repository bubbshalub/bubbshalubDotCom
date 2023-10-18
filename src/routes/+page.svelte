<script>
    import bubbsIcon from '$lib/sketchIconBubb.png';
    import vulbyteIcon from '$lib/vulbytesLogo.svg';
</script>

<div id='home'>
    <br />
    <br />
    <div id='iconContainer'> 
        <img 
            src='{bubbsIcon}'
            alt='icon of Jesus Christ our Lord and Savior'
        />
    </div>
    <h1> 
        <span style=
        "
            color:transparent;
            background-clip: text;
            background-image: linear-gradient(1rad, red, orange);    
        "   
        >
           Bubbshalub.com
        </span></h1>
    <h2>more will be coming soon... maybe</h2>
    
    <a href='/links'>
        <div id='linkCta'>
            <p> click here for my socials </p>
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
        background-image: linear-gradient(1rad, red, orange);
        border-radius: 30px;
        margin: auto;
        max-width: 30rem;
        padding: 1rem;
    }
    #linkCta > p {
        filter:brightness(300%);
        font-weight: bolder;
        letter-spacing: 1.3px;
    }
    
</style>
