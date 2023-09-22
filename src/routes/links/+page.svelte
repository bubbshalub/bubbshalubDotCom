<script>
    import mailIcon from '$lib/mailIcon.svg';
    import vulbytesIcon from '$lib/1614160340.iminsert_000,042_-_thatlazyrat.jpg';

    //implimented states: active, monitored, inactive/un-monitored/not-monitored, and contact
    const links = [
        // Active links
        {
            'name': 'Discord Server', 'link': 'https://discord.gg/yyFmxV2uFC', 'icon': 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg', 'status': 'active', 'note': '',
        },
        {
            'name': 'Spotify', 'link': 'https://open.spotify.com/artist/6FjeqS3Sxcd33egUhLoG3P', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png', 'status': 'active', 'note': '',
        },
        {
            'name': 'Twitter', 'link': 'https://www.twitter.com/vulbyte', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png', 'status': 'active', 'note': '',
        },
        {
            'name': 'Youtube', 'link': 'https://www.youtube.com/@vulbyte', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png', 'status': 'active', 'note': '',
        },
        // monitored links
        {
            'name': 'ArtStation', 'link': 'https://www.artstation.com/vulbyte', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cib-artstation_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Cib-artstation_%28CoreUI_Icons_v1.0.0%29.svg.png', 'status': 'monitored', 'note': '',
        },
        {
            'name': 'Bluesky', 'link': 'https://bsky.app/profile/vulbyte.bsky.social', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Blue_Sky_Studios_2013_logo.svg/1280px-Blue_Sky_Studios_2013_logo.svg.png', 'status': 'monitored', 'note': '',
        },
        {
            'name': 'Furaffinity', 'link': 'https://www.furaffinity.net/user/iminsert', 'icon': 'https://user-images.githubusercontent.com/73164889/117507463-efde5e80-af7e-11eb-8886-5aeb3ce43778.png', 'status': 'monitored', 'note': '',
        },
        {
            'name': 'GitHub', 'link': 'https://github.com/vulbyte', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg', 'status': 'monitored', 'note': '',
        },
        {
            'name': 'Steam', 'link': 'https://steamcommunity.com/id/vulbyte/', 'icon': 'https://cdn.icon-icons.com/icons2/2428/PNG/512/steam_black_logo_icon_147078.png', 'status': 'monitored', 'note': '',
        },
        {
            'name': 'Tumblr', 'link': 'https://www.tumblr.com/vulbyte', 'icon': 'https://www.iconpacks.net/icons/2/free-tumblr-icon-2169-thumb.png', 'status': 'monitored', 'note': '',
        },
        // inactive links
        {
            'name': 'Facebook', 'link': 'https://www.facebook.com/vulbyte/', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'GameJolt', 'link': 'https://gamejolt.com/@iminsert', 'icon': 'https://thumbnails.pcgamingwiki.com/3/37/Game_Jolt_Logo.svg/300px-Game_Jolt_Logo.svg.png', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'Instagram', 'link': 'https://www.instagram.com/vulbyte/', 'icon': 'https://static.wikia.nocookie.net/logopedia/images/2/2f/Instagram_2016.svg/', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'itch.io', 'link': 'https://iminsert.itch.io', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cib-itch-io_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Cib-itch-io_%28CoreUI_Icons_v1.0.0%29.svg.png', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'Ko-fi', 'link': 'https://ko-fi.com/insert', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Cib-ko-fi_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Cib-ko-fi_%28CoreUI_Icons_v1.0.0%29.svg.png', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'Newgrounds', 'link': 'https://iminsert.newgrounds.com/', 'icon': 'https://static.wikia.nocookie.net/mcleodgaming/images/f/f2/Newgrounds_Tank.png', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'Patreon', 'link': 'https://www.patreon.com/vulbyte', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/4/49/Digital-Patreon-Logo_Black.svg', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'Picarto', 'link': 'https://picarto.tv/vulbyte/profile', 'icon': 'https://avatars.githubusercontent.com/u/21276730?s=200&v=4', 'status': 'inactive', 'note': '',
        },
        {
            'name': '#f*ckSpez', 'link': 'https://www.reddit.com', 'icon': 'https://static-00.iconduck.com/assets.00/reddit-logo-icon-512x512-jv3e2p8i.png', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'Sketchfab', 'link': 'https://sketchfab.com/vulbyte', 'icon': 'https://static.sketchfab.com/img/press/logos/sketchfab-logo-black.png', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'Soundcloud', 'link': 'https://soundcloud.com/vulbyte', 'icon': 'https://d21buns5ku92am.cloudfront.net/26628/images/419675-sc-logo-cloud-black%20%281%29-853a4f-medium-1645807039.png', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'Threads', 'link': 'https://www.threads.net/@vulbyte', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Threads_%28app%29_logo.svg/2048px-Threads_%28app%29_logo.svg.png', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'TikTok', 'link': 'https://www.tiktok.com/@vulbyte', 'icon': 'https://www.svgrepo.com/show/333611/tiktok.svg', 'status': 'inactive', 'note': '',
        },
        {
            'name': 'Twitch', 'link': 'https://www.twitch.tv/vulbyte', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Twitch_Glitch_Logo_Black.svg/878px-Twitch_Glitch_Logo_Black.svg.png', 'status': 'inactive', 'note': '',
        },
        // contact links
        {
            'name': 'Discord', 'link': 'https://discord.gg/ryX4UgaS', 'icon': 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg', 'status': 'contact', 'note': '',
        },
        { 
            'name': 'Email', 'link': 'mailto:insertopen@gmail.com', 'icon': mailIcon, 'status': 'contact', 'note': '',
        },
        {
            'name': 'Telegram', 'link': 'https://t.me/vulbyte', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Telegram_X_2019_Logo.svg/2048px-Telegram_X_2019_Logo.svg.png', 'status': 'contact', 'note': '',
        },
        // backup 
        //{ 
        //  'name': '', 'link': '', 'icon': '', 'status': '', 'note': '',
        //},
    ]
</script>

<div id='linksPage'>
    <br />
    <br />
    <div id='iconContainer'> 
        <img 
            src='{vulbytesIcon}'
            alt='icon of vulbyte'
        />
    </div>
    <h1> 
        <span style=
        "
            color:transparent;
            background-clip: text;
            background-image: linear-gradient(-25deg, #f0f, #ff0);    
        "   
        >
           hi
        </span></h1>
    <p> wishing you all the best, Vulbyte </p>

    <div id='allTheLinks'>
        <h2> Active Links </h2>
        <div id='activeLinks' class='linkContainer'>
            {#each Array.from(links) as link}
                {#if link.status=='active'}
                    <div id='link{link.name}' class='generatedLink'>
                        {#if link.icon != ''}
                            <img 
                                src='{link.icon}'
                                alt='' 
                            />
                        {/if}
                        <p> {link.name} </p>
                    </div>
                {/if}
            {/each}
        </div>

        <hr>
        
        <h2> Monitored Links </h2>
        <div id='monitoredLinks' class='linkContainer'>
            {#each Array.from(links) as link}
                {#if link.status=='monitored'}
                    <div id='link{link.name}' class='generatedLink'>
                        {#if link.icon != ''}
                            <img 
                                src='{link.icon}'
                                alt='' 
                            />
                        {/if}
                        <p> {link.name} </p>
                    </div>
                {/if}
            {/each}
        </div>

        <hr>
        
        <h2> Inactive Links </h2>
        <p> these are all links that are offically mine, but are not active. if you wish to check them out feel free! but please don't expect a reply or any direct engaugement from me as i'm likely just posting via an API</p>
        <div id='inactiveLinks' class='linkContainer'>
            {#each Array.from(links) as link}
                {#if link.status=='inactive'}
                    <div id='link{link.name}' class='generatedLink'>
                        {#if link.icon != ''}
                            <img 
                                src='{link.icon}'
                                alt='' 
                            />
                        {/if}
                        <p> {link.name} </p>
                    </div>
                {/if}
            {/each}
        </div>

        <hr>

        <h2> Contact Links </h2>
        <p> please do not use these to say hi! i appreciate you wanting to do so, but if you want to do so please use my discord server as i try to keep my dms clear! </p>
        <div id='contactLinks' class='linkContainer'>
            {#each Array.from(links) as link}
                {#if link.status=='contact'}
                    <div id='link{link.name}' class='generatedLink'>
                        {#if link.icon != ''}
                            <img 
                                src='{link.icon}'
                                alt='' 
                            />
                        {/if}
                        <p> {link.name} </p>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</div>

<style> 
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
    .linkContainer > div {
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
    #activeLinks > div {
        background-image: linear-gradient(-45deg, #222, #333);
        border: 2px solid #aaa;
        color: white;
        font-weight: bold;
    }
    #monitoredLinks > div {
        background-image: linear-gradient(-45deg, #222, #333);
    }
    #monitoredLinks > div > img {
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
    #inactiveLinks > div {
        aspect-ratio: 1/1;
            height: auto;
                min-height: 8rem;
                max-height: auto;
            width: auto;
                min-width: 8rem;
                max-width: auto;
        background-image: linear-gradient(-45deg, #111, #222);
        /*border: 1px solid white;*/
            border-radius: 1rem;
        padding: 0px;
        margin: auto;
    }
    #inactiveLinks.linkContainer > .generatedLink {
        display: flex;
            flex-direction: column;
    }
    #inactiveLinks.linkContainer > .generatedLink > img {
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
        #linkSoundcloud > img {
            height: 1.2rem !important;
        }
        #linkTelegram > img {
            filter: invert(1) brightness(10);
        }
    

</style>
