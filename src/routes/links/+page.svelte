<script>
    import mailIcon from '$lib/mailIcon.svg';
    import bubbsIcon from '$lib/sketchIconBubb.png';
    import vulbyteIcon from '$lib/vulbytesLogo.svg';

    //implimented states: active, monitored, inactive/un-monitored/not-monitored, and contact
    const links = [
        // Active links
        {
            'name': 'Discord', 
            'link': 'https://discord.gg/yyFmxV2uFC', 
            'icon': 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg', 
            'status': 'active', 
            'note': 'cum',
        },
        {
            'name': 'Twitter', 
            'link': 'https://www.twitter.com/bubbshalub', 
            'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png', 
            'status': 'active', 
            'note': '',
        },
        {
            'name': 'YouTube', 
            'link': 'https://www.youtube.com/@bubbshalub', 
            'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png', 
            'status': 'active', 
            'note': '',
        },
        // monitored links
	    {
            'name': 'Bluesky', 
            'link': 'https://bsky.app/profile/bubbshalub.bsky.social', 
            'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bluesky_Logo.svg/600px-Bluesky_Logo.svg.png', 
            'status': 'active', 
            'note': '',
        },
        //{
        //    'name': 'Furaffinity', 
        //    'link': 'https://www.furaffinity.net/user/bubbshalub', 
        //    'icon': 'https://user-images.githubusercontent.com/73164889/117507463-efde5e80-af7e-11eb-8886-5aeb3ce43778.png', 
        //    'status': 'active',  
        //    'note': '',
        //},
        //{
        //    'name': 'Tumblr', 
        //    'link': 'https://www.tumblr.com/bubbshalub', 
        //    'icon': 'https://www.iconpacks.net/icons/2/free-tumblr-icon-2169-thumb.png', 
        //    'status': 'active', 
        //    'note': '',
        //},
        // inactive links
        //{
        //    'name': 'Patreon', 
        //    'link': 'https://www.patreon.com/bubbshalub182', 
        //    'icon': 'https://c15.patreon.com/fhd_Patreon_Symbol_6fff9723d3.png', 
        //    'status': 'active', 
        //    'note': '',
        //},
        // contact links
        // backup 
        //{ 
        //  'name': '', 
        //  'link': '', 
        //  'icon': '', 
        //  'status': '', 
        //  'note': '',
        //},
    ]
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
            
               
        
           DO NOT REFRESH THE PAGE IT WILL BREAK
        </span></h1>
        <script>
        let header= document.getElementById("randomWelcomeText");
        let randomHeaders= ["please click these buttons :)", "subscribe to vulbyte :3", "DO NOT GO TO THE DISCORD", "rip steve jobs, victim of ligma", "asdf",
            "refresh this page", "when i was a young babybell...", "vacuum your roof", "microwave burritos should be air fried", "did you know I have a webcomic?",
            "August 14th, 2035", "sonic the hedgehog", "this text is randomly generated", "made without the use of AI", "click on the buttons below",
            "choose one of these links", "this is an ARG", "ANGRY SERGALS", "click those darn links", "pootis", "CLICK THE LINKS", "birds can be dogs too", "refresh this page",
            "west philadelphia, born and raised", "vulbyte was here", "tails.exe", "look at those pretty links", "made with svelte!", "localhost:6969", "ninja sex party",
            "hello everybody this is markiplier", "twitter dot com forward slash bubbshalub", "im not calling it x", "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "brought to you by the letter b", "dinosaur laser fight", "^this is a sergal", "justice for xenia", "krystal starfox", "half life 3", "grame gumps", 
            "mr john halo", "MM/DD/YYYY", "is this loss?", "your ip is 192.168.1.1", "gentlemen", "asses to asses, butts to butts", "i love cats, they taste like chicken!",
            "cream of dog", "she's eaten the glass ceiling...", "subscirb to youtob", "minecraft", "65% more bullet per bullet!", "if this site is broken then call bubbs",
            "not responsible for broken mirrors", "be crime do gay", "LGBT certified grade A beef", "formatted in EXT4", "supercalifragilisticexpialidocious", "I am all of me", "shadow the hedgehog",
            "LIVE AND LEARN!", "Joop", "think again buddy", "THEY HIT THE FUCKING PENTAGON", "do your homework", "fold your laundry", "brush your teeth", "press ALT + F4 to win the game!",
            "now with the latest in faxing technology", "please address your hate mail to 935 Pennsylvania Ave., NW., Washington, DC 20535", "stop refreshing the page", "minor type-o",
            "this message is 24 bytes", "server not responding, try again later", "peaches come in a can, they were put there by a man", "you have reached the maximum amount of refreshes",
            "y = mx + b", "you have angered freddy fazbear", "my favorite artist is conditional_dnp", "sponsored by sponsorblock!"

        ];
        header.innerText= randomHeaders[Math.floor(Math.random()*randomHeaders.length)]
        </script>
    <p> send me your best <span style='color:transparent;background-image:linear-gradient(1rad,red,orange,yellow,green,cyan);background-clip:text;'>memes </span> </p>

    <div id='allTheLinks'>
        <div id='activeLinks' class='linkContainer'>
            {#each Array.from(links) as link}
                {#if link.status=='active'}
                    <a href='{link.link}' target='_blank'>
                        <div id='link{link.name}' class='generatedLink'>
 			    {#if link.icon != ''}
                                <img 
                                    src='{link.icon}'
                                    alt='' 
                                />
                            {/if}
                <p> {link.name} </p>
                            
                           
                        </div>
                    </a>
                {/if}
            {/each}
        </div>

        
        <div id='monitoredLinks' class='linkContainer'>
            {#each Array.from(links) as link}
                {#if link.status=='monitored'}
                    <a href='{link.link}' target='_blank'>
                        <div id='link{link.name}' class='generatedLink'>
                            <p> {link.name} </p>
                            {#if link.icon != ''}
                                <img 
                                    src='{link.icon}'
                                    alt='' 
                                />
                            {/if}

                        </div>
                    </a>
                {/if}
            {/each}
        </div>

        
        <div id='inactiveLinks' class='linkContainer'>
            {#each Array.from(links) as link}
                {#if link.status=='inactive'}
                    <a href='{link.link}' target='_blank'>
                        <div id='link{link.name}' class='generatedLink'>
                            <p> {link.name} </p>
                            {#if link.icon != ''}
                                <img 
                                    src='{link.icon}'
                                    alt='' 
                                />
                            {/if}
                        </div>
                    </a>
                {/if}
            {/each}
        </div>

        <hr>

        <div id='contactLinks' class='linkContainer'>
            {#each Array.from(links) as link}
                {#if link.status=='contact'}
                    <a href='{link.link}' target='_blank'>
                    <div id='link{link.name}' class='generatedLink'>
                            <p> {link.name} </p>
                        {#if link.icon != ''}
                            <img 
                                src='{link.icon}'
                                alt='' 
                            />
                        {/if}
                    </div>
                    </a>
                {/if}
            {/each}
        </div>
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
</div>

<style> 
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
