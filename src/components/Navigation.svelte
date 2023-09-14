<script>
    import { Br, Es, Us, Icon, Cn, Sa } from "svelte-flag-icons";

    import { locale } from "../store/i18n";
    import i18translation from "../translation";

    import { fade, fly, slide } from "svelte/transition";
    import Iconify from "@iconify/svelte";
    import { onMount } from "svelte";

    onMount(() => {
        if (typeof navigator !== "undefined") {
            const userPreferredLanguage = navigator?.languages
                ? navigator?.languages[0]
                : navigator?.language;

            locale.set(userPreferredLanguage);
        }
    });

    export let mobileNavOpen = false;

    export let logo = {
        image: {
            url: "https://xvseyspspntcaaxgkfgn.supabase.co/storage/v1/object/public/images/ea511b85-17be-41f4-ace4-1fd410e1a53f/1694049322774Hermetic%20Coin.png",
            alt: "Etic Coin",
        },
    };

    export let exibithLanguages = false;

    const switchExhibitLanguage = () => {
        exibithLanguages = !exibithLanguages;
        mobileNavOpen = false;
    }

    function toggleMobileNav() {
        mobileNavOpen = !mobileNavOpen;
    }

    const langs = [
        {
            key: "en",
            value: "en-US",
            component: Us,
        },
        {
            key: "es",
            value: "es-ES",
            component: Es,
        },
        {
            key: "pt",
            value: "pt-BR",
            component: Br,
        },
        {
            key: "zh",
            value: "zh-CN",
            component: Cn,
        },
        {
            key: "ar",
            value: "ar-SA",
            component: Sa,
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
                {#if $locale.includes(lang.key)}
                    <button
                        class="language"
                        on:click={() => switchExhibitLanguage()}
                    >
                        <Icon size={22} icon={lang.component} />
                    </button>
                {/if}
            {/each}
        </div>

        {#if exibithLanguages}
            <div class="drop-flag" transition:fly={{ y: -10, duration: 500 }}>
                <div class="arrow-up" />
                {#each langs as lang}
                    <button
                        class="language"
                        on:click={() => {
                            locale.set(lang.value);
                            switchExhibitLanguage();
                        }}
                    >
                        <Icon size={20} icon={lang.component} />
                    </button>
                {/each}
            </div>
        {/if}
    </div>
    <div class="mobile-nav">
        <a href="/" class="logo">
            <img src={logo.image.url} alt={logo.image.alt} />
        </a>
        <button
            id="open"
            on:click={() => toggleMobileNav()}
            aria-label="Open mobile navigation"
        >
            <Iconify height="30" icon="eva:menu-outline" />
        </button>
        {#if mobileNavOpen}
            <nav id="popup" transition:fade={{ duration: 200 }}>
                {#each t.navs as { link }}
                    <a href={link.url} on:click={() => toggleMobileNav()}>{link.label}</a>
                {/each}
                <button
                    on:click={() => toggleMobileNav()}
                    id="close"
                    aria-label="Close Navigation"
                >
                    <Iconify height="25" icon="bi:x-lg" />
                </button>

                <div class="flags mobile">
                    {#each langs as lang}
                        <button
                            class="language {$locale.includes(lang.key) &&
                                'active'}"
                            on:click={() => {
                                locale.set(lang.value);
                                switchExhibitLanguage();
                            }}
                        >
                            <Icon icon={lang.component} />
                        </button>
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
        width: 20px;
        overflow: visible;
        gap: 0.5rem;
        border: 5px;
        cursor: pointer;
        outline: none;
    }
    .flags .language {
        padding: 0.15rem 0.315rem;
        border-radius: 2px;
        background-color: rgb(245, 245, 245);
    }
    .flags.mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: .5rem;
    }
    .drop-flag {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.05rem 0.35rem;
        background-color: #bbafaaff;
        padding: 0.15rem 0.3rem;
        border-radius: 3px;
        position: absolute;
        right: 18px;
        top: 4.5rem;
        border: 2px solid white;
    }
    .drop-flag * {
        cursor: pointer;
    }
    .arrow-up {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #bbafaaff;
        position: absolute;
        top: -8px;
        right: 8px;
    }
</style>
