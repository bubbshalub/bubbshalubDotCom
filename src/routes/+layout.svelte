<script>
    import vulbytesWordmark from '$lib/vulbyteWordmark.svg';

    const navBarLocations = new Map([
        ["home", "/"],
        ['links', '/links'],
        ['filler', '/']
    ]);
</script>

<nav>
    <div>
        <img
            src={vulbytesWordmark}
           alt="vulbytesWordmark"
        />
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
        padding-bottom: 1rem;
        padding-top: 1rem;
    }
    nav>div {
        min-height: 1rem;
        min-width: 10rem;
        margin: auto;
    }

</style>

<slot />
