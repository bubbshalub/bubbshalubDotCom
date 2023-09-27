<script>
    import vulbytesIcon from '$lib/1614160340.iminsert_000,042_-_thatlazyrat.jpg'
</script>

<div id='home'>
    <br />
    <br />
    <div id='iconContainer'> 
        <img 
            src='{vulbytesIcon}'
            alt='icon of vulbyte'
        />
    </div>
    <h1>Welcome to 
        <span style=
        "
            color:transparent;
            background-clip: text;
            background-image: linear-gradient(-45deg, #f0f, #ff0);    
        "   
        >
           Vulbyte's website
        </span></h1>
    <h2>more will be coming soon</h2>
    
    <a href='/links'>
        <div id='linkCta'>
            <p> check out my links here while you're here </p>
        </div>
    </a>

    <p> wishing you all the best, Vulbyte </p>
</div>

<style> 
    #home {
        text-align: center;
    }
        #home > div {
            margin: auto;
            min-height: 100vh;
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
        background-image: linear-gradient(-45deg, rgba(255, 0, 255, 0.7), rgba(0, 255, 255, 0.7));
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
