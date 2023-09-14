<script>
    import { Br, Es, Us, Icon } from "svelte-flag-icons";

    import { locales, locale } from "../store/i18n";
    import i18translation from "../translation";

    import { fade } from "svelte/transition";
    import Iconify from "@iconify/svelte";
    import { onMount } from "svelte";

    onMount(() => {
        // Verifique se o objeto navigator está definido antes de acessá-lo
        if (typeof navigator !== "undefined") {
            const userPreferredLanguage = navigator?.languages
                ? navigator?.languages[0]
                : navigator?.language;

            locale.set(userPreferredLanguage);
        }
    });

    let mobileNavOpen = false;

    function toggleMobileNav() {
        mobileNavOpen = !mobileNavOpen;
    }

    export let logo = {
        image: {
            url: "https://xvseyspspntcaaxgkfgn.supabase.co/storage/v1/object/public/images/ea511b85-17be-41f4-ace4-1fd410e1a53f/1694049322774Hermetic%20Coin.png",
            alt: "Etic Coin",
        },
    };

    const langs = [
        {
            key: "en",
            value: "en-US",
            component: Us,
        },
        {
            key: "pt",
            value: "pt-BR",
            component: Br,
        },
        {
            key: "es",
            value: "es-ES",
            component: Es,
        },
    ];

    $: t = i18translation[$locale]["Navigation"];
</script>

<header class="section-container">
    <div class="desktop-nav">
        <a href="/#page" class="logo">
            <img class="coin" src={logo.image.url} alt={logo.image.alt} />
        </a>
        <nav>
            {#each t.navs as { link }}
                {#if link?.target}
                    <a class="link" href={link.url} target={link.target}
                        >{link.label}</a
                    >
                {:else}
                    <a class="link" href={link.url}>{link.label}</a>
                {/if}
            {/each}
        </nav>

        <div class="flags">
            {#each langs as lang}
                <div
                    class="language {$locale.includes(lang.key) && 'active'}"
                    on:click={() => locale.set(lang.value)}
                >
                    <Icon icon={lang.component} />
                </div>
            {/each}
        </div>
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
            <Iconify height="30" icon="eva:menu-outline" />
        </button>
        {#if mobileNavOpen}
            <nav id="popup" transition:fade={{ duration: 200 }}>
                {#each t.navs as { link }}
                    <a href={link.url}>{link.label}</a>
                {/each}
                <button
                    on:click={() => (mobileNavOpen = false)}
                    id="close"
                    aria-label="Close Navigation"
                >
                    <Iconify height="25" icon="bi:x-lg" />
                </button>

                <div class="flags mobile">
                    {#each langs as lang}
                        <div
                            class="language {$locale.includes(lang.key) &&
                                'active'}"
                            on:click={() => locale.set(lang.value)}
                        >
                            <Icon icon={lang.component} />
                        </div>
                    {/each}
                </div>
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
        background-color: rgba(255, 255, 255, 0.95);
        border-radius: 0 0 0.75rem 0.75rem;

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

    .flags {
        display: flex;
        gap: 0.5rem;
        border: 5px;
        cursor: pointer;
        outline: none;
    }
    .flags .language {
        border: 0.25rem double rgb(240, 240, 240);
        padding: 0rem 0.165rem;
        border-radius: 2px;
        background-color: rgb(250, 250, 250);
    }
    .flags .active {
        border-color: rgb(110, 102, 101);
    }
    .flags.mobile {
        margin: 0.75rem auto;
    }
</style>
