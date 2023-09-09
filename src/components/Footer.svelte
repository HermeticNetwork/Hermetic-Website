<script>
    import Icon from "@iconify/svelte";

    export let social_links = [
        {
            link: {
                url: "https://www.reddit.com/r/hermetic_network/",
                label: "Reddit",
            },
            icon: "mdi:reddit",
        },
        {
            link: {
                url: "https://discord.gg/UzFGhQ6q",
                label: "Discord",
            },
            icon: "mdi:discord",
        },
        {
            link: {
                url: "https://github.com/HermeticNetwork",
                label: "Github",
            },
            icon: "mdi:github",
        },
    ];

    // Don't touch!
    export let copyright = "John 15:5";
</script>

<footer>
    
    <div class="section-container">
        <hr />
        <div class="footer">
            <!-- Don't touch! -->
            <span class="copyright">{ copyright }</span>
            <span class="by">Developed for Humanity.</span>
            <ul>
                {#each social_links as { link, icon }}
                    <li>
                        <a href={link.url} aria-label={icon}><Icon {icon} /></a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</footer>

<style>
    /* Defined in Site CSS */
    .section-container {
        padding: 2rem 2rem 1rem 2rem;
    }
    hr {
        border-color: #f2f2f2;
    }
    .footer {
        display: flex;
        justify-content: space-between;
        flex-direction: start column;
        gap: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .copyright {
        font-size: 0.75rem;
        color: var(--color-text-secondary, #2d3339);
    }
    .by {
        font-weight: 600;
        font-size: 0.75rem;
    }
    ul {
        display: flex;
        gap: 1.5rem;
        font-size: 1.5rem;
        list-style: none;
    }
    ul a {
        transition: var(--transition);
    }
    ul a:hover {
        color: var(--color-accent);
    }
    @media (min-width: 600px) {
        ul {
            font-size: 1.25rem;
        }
    }
</style>
