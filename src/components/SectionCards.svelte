<script>
    import Icon from "@iconify/svelte/dist/Icon.svelte";

    import { locale } from "../store/i18n";
    import i18translation from "../translation";

    $: t = i18translation[$locale]["SectionCards"];
</script>

<section class="section-container">
    <header class="heading-group">
        <div class="superhead">{t.superhead}</div>
        <h2 class="heading">{@html t.heading}</h2>
        <div class="subheading">{t.subhead}</div>
    </header>
    <ul class="icon-list">
        {#each t.icon_list as { icon, label }}
            <li>
                <span class="icon">
                    <Icon {icon} />
                </span>
                <span>{label}</span>
            </li>
        {/each}
    </ul>
    <ul class="cards">
        {#each t.cards as card}
            <li>
                <div class="icon">
                    <Icon icon={card.icon} />
                </div>
                <div class="body">
                    <h3 class="title">{card.title}</h3>
                    <div class="content">{@html card.content.html}</div>
                    {#if card.link.label}
                        <a href={card.link.url} class="link">
                            <span>{card.link.label}</span>
                            <div class="arrow">
                                <Icon icon="akar-icons:arrow-right" />
                            </div>
                        </a>
                    {/if}
                </div>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        --icon-size: 30px;
    }
    header {
        margin-bottom: 3rem;
    }
    .heading {
        text-align: center;
    }
    ul.icon-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 3.5rem;
        row-gap: 2rem;
        margin-bottom: 3rem;
    }
    ul.icon-list li {
        display: flex;
        gap: 12px;
        align-items: center;
    }
    ul.icon-list li .icon {
        color: var(--color-accent);
        font-size: 1.125rem;
    }
    ul.cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        gap: 2rem;
    }
    @media (min-width: 768px) {
        ul.cards {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    ul.cards li {
        display: grid;
        place-items: start;
        gap: 1.5rem;
        border: 1px solid var(--border-color);
        padding: 2.5rem;
        border-radius: var(--border-radius);
    }
    ul.cards li .icon {
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        padding: 0.75rem;
        color: var(--color-brand, #154bf4);
        font-size: var(--icon-size);
    }
    ul.cards li .body {
        display: grid;
        gap: 1rem;
    }
    ul.cards li .body .title {
        display: grid;
        align-items: center;
        gap: 1.5rem;
        font-size: 1.25rem;
        line-height: 1.4;
        font-weight: 600;
    }
    ul.cards li .body .content {
        font-weight: 400;
        line-height: 1.6;
    }
    ul.cards li .body .link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>
