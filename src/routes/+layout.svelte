<script>
    import vulbytesWordmark from '$lib/vulbyteWordmark.svg';
    import vulbytesLogo from '$lib/vulbytesLogo.png';

    const navBarLocations = new Map([
        ['HOME', '/'],
        ['LINKS', '/links'],
    ]);
</script>

<nav>
    <div id='navLogoContainer'>
        <a href='/'>
            <img 
                src='{vulbytesLogo}'
                alt='vulbytesLogo'
            />
            <img
               src={vulbytesWordmark}
               alt="Vulbytes"
            />
        </a>
    </div>
    {#each Array.from(navBarLocations) as [key, value] (key)}
        <div> <a href="{value}">{key}</a></div>
    {/each} 
</nav>

<style>
    nav {
        background-color: #222;
        display: grid;
            grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        padding: 2rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
    }
    nav > div {
        font-size: 1.2rem;
        margin: auto;
        min-height: 1rem;
        min-width: 10rem;
        text-align: center;
    }

    #navLogoContainer > a {
        display: flex;
        flex-direction: row;
    }
    #navLogoContainer > a > img{
        aspect-ratio: auto;
            height: 5rem;
            width: 5rem;
    }
    #navLogoContainer > a > img :nth-child(2){
        height: 7rem !important;
    }

</style>

<slot />
