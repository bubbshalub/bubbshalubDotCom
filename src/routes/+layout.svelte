<script>
</script>

<nav>
</nav>

<style>
    nav {
        background-color: #222;
        display: grid;
            grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        padding: 2rem;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
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
            height: 4rem;
            width: 5rem;
    }

    #navLogoContainer > a > img :nth-child(2){
        height: 3rem !important;
    }

</style>

<slot />
