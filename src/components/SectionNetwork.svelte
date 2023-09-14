<script>
    import Icon from "@iconify/svelte/dist/Icon.svelte";

    import { locale } from "../store/i18n";
    import i18translation from "../translation";

    $: t = i18translation[$locale]["Network"];
</script>

<section class="section-container">
    <header class="heading-group">
        <span class="superhead">{t.superhead}</span>
        <h2 class="heading">{t.heading}</h2>
        <div class="subheading">{t.subheading}</div>
    </header>
    <div class="teasers">
        {#each t.teasers as teaser}
            <div class="teaser">
                {#if teaser.image.url}
                    <img src={teaser.image.url} alt={teaser.image.alt} />
                {/if}
                <div class="body">
                    <h2 class="title">{teaser.title}</h2>
                    <div class="content">{@html teaser.content.html}</div>
                    {#if teaser.link.url}
                        <a class="link" href={teaser.link.url}>
                            {teaser.link.label}
                            <div class="arrow">
                                <Icon icon="akar-icons:arrow-right" />
                            </div>
                        </a>
                    {/if}
                </div>
            </div>
        {/each}
    </div>

    <div id="contribution" />
</section>

<style>
    .heading-group {
        margin-bottom: 6rem;
    }
    .teasers {
        display: grid;
        gap: 6rem;
    }
    .teaser {
        display: grid;
        gap: 3rem;
    }
    @media (min-width: 1200px) {
        .teaser {
            gap: 6rem;
        }
    }
    .teaser img {
        width: 55%;
        margin: auto;
        border-radius: var(--border-radius);
    }
    .teaser .body {
        /* Defined in Site CSS */
        display: grid;
        place-items: flex-start;
        gap: 1rem;
        padding: 0;
        line-height: 1.5;
        max-width: 450px;
    }
    .teaser .body .title {
        font-family: var(--font-heading);
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 1.1;
    }
    .teaser .body a.link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    @media (min-width: 800px) {
        .teaser {
            grid-template-columns: 1fr 1fr;
            place-items: center;
            /* switch direction for even items */
        }
        .teaser:nth-child(odd) img {
            grid-row: 1;
            grid-column: 2;
        }
        .teaser:nth-child(even) img {
            grid-row: 1;
            grid-column: 1;
        }
    }
</style>
