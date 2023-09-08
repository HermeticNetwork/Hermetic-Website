<script>
    import { fade } from "svelte/transition";
    import Icon from "@iconify/svelte";

    let mobileNavOpen = false;

    function toggleMobileNav() {
        mobileNavOpen = !mobileNavOpen;
    }

    export let logo = {
        image: {
            url: "https://xvseyspspntcaaxgkfgn.supabase.co/storage/v1/object/public/images/ea511b85-17be-41f4-ace4-1fd410e1a53f/1694049322774Hermetic%20Coin.png",
            alt: "HERM",
        },
    };

    export let navs = [
        {
            link: {
                url: "#ecosystem",
                label: "Ecossistema",
            },
        },
        {
            link: {
                url: "#operation",
                label: "Funcionamento",
            },
        },
        {
            link: {
                url: "#contribution",
                label: "Contribuições",
            },
        },
        {
            link: {
                url: "#articles",
                label: "Artigos e Incentivos",
            },
        },
        {
            link: {
                url: "https://discord.gg/UzFGhQ6q",
                label: "Participe",
                target: "_blank"
            },
        },
        {
            link: {
                url: "https://github.com/orgs/HermeticNetwork/repositories",
                label: "Repositórios",
                target: "_blank"
            },
        },
    ];
</script>

<header class="section-container">
    <div class="desktop-nav">
        <a href="/#page" class="logo">
            <img class="coin" src={logo.image.url} alt={logo.image.alt} />
        </a>
        <nav>
            {#each navs as { link }}
                {#if link?.target}
                    <a class="link" href={link.url} target={link.target}>{link.label}</a>
                {:else}
                    <a class="link" href={link.url}>{link.label}</a>
                {/if}
            {/each}
        </nav>
    </div>
    <div class="mobile-nav">
        <a href="/" class="logo">
            <img src={logo.image.url} alt={logo.image.alt} />
        </a>
        <button
            id="open"
            on:click={() => (mobileNavOpen = true)}
            aria-label="Open mobile navigation"
        >
            <Icon height="30" icon="eva:menu-outline" />
        </button>
        {#if mobileNavOpen}
            <nav id="popup" transition:fade={{ duration: 200 }}>
                {#each navs as { link }}
                    <a href={link.url}>{link.label}</a>
                {/each}
                <button
                    on:click={() => (mobileNavOpen = false)}
                    id="close"
                    aria-label="Close Navigation"
                >
                    <Icon height="25" icon="bi:x-lg" />
                </button>
            </nav>
        {/if}
    </div>
</header>

<style lang="scss">
    /* Defined in Site CSS */
    .section-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;

        position: sticky;
        top: 0;
        background-color: rgba(255, 255, 255, .95);
        border-radius: 0 0 .75rem .75rem;

        z-index: 999;
    }
    .logo {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.2;
    }
    .logo img {
        width: 40px;
    }
    @media (min-width: 800px) {
        .logo img {
            width: 52px;
        }
    }
    .desktop-nav {
        display: none;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .desktop-nav nav {
        display: flex;
        gap: 2rem;
    }
    .desktop-nav nav a.link {
        /* Defined in Site CSS */
        border-color: transparent;
        transition: border-color 0.1s;
        font-size: 0.95rem;
    }
    .desktop-nav nav a.link:hover {
        border-color: initial;
    }
    @media (min-width: 800px) {
        .desktop-nav {
            display: flex;
        }
    }
    .mobile-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-weight: 500;
    }
    @media (min-width: 800px) {
        .mobile-nav {
            display: none;
        }
    }
    /* Mobile navigation popup */
    #popup {
        font-size: 1.25rem;
        display: grid;
        gap: 1rem;
        position: absolute;
        text-align: center;
        background-color: var(--background-color, white);
        box-shadow: var(--box-shadow, 0px 4px 30px rgba(0, 0, 0, 0.1));
        border-radius: var(--border-radius);
        inset: 0.5rem;
        bottom: initial;
        padding: 2rem;
        z-index: 1;
    }
    #popup button#close {
        position: absolute;
        right: 1rem;
        top: 1rem;
    }
</style>
