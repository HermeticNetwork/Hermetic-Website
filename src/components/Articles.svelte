<script>
    import { locale } from "../store/i18n";
    import i18translation from "../translation";

    $: t = i18translation[$locale]["Articles"];
</script>

<section class="section-container">
    <h2>{t.heading}</h2>
    <ul class="items">
        {#each t.items as item, i}
            <li>
                <div class="post-info">
                    <a class="title" href={item.link.url} target="_blank"
                        >{item.link.label}</a
                    >
                    <div class="description">
                        {@html item.description.html}
                    </div>
                    <span class="author">
                        {t.by} <a href={item.author.url} target="_blank">
                            {item.author.label}
                        </a>
                    </span>
                </div>
                {#if item.thumbnail.url}
                    <img
                        data-key="items[{i}].thumbnail"
                        src={item.thumbnail.url}
                        alt={item.thumbnail.alt}
                    />
                {/if}
            </li>
        {/each}
    </ul>
</section>

<style scoped>
    .section-container {
        max-width: var(--inner-max-width, 900px);
    }
    h2 {
        font-size: 1rem;
        line-height: 1.1;
        font-weight: 600;
        margin-bottom: 4rem;
        letter-spacing: -0.02rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid #f0f0f0;
    }
    ul.items {
        display: grid;
        gap: 4rem;
    }
    li {
        display: grid;
        gap: 2rem;
    }
    li .post-info .title {
        display: block;
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        line-height: 1.2;
        letter-spacing: -0.02rem;
        text-decoration: underline transparent;
        transition: 0.1s text-decoration;
    }
    li .post-info .title:hover {
        text-decoration-color: initial;
    }
    li .post-info .description {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        font-family: var(--body-font);
        line-height: 1.4;
        font-weight: 300;
        color: #2d3339;
    }
    li .post-info .author {
        font-size: 1rem;
        font-weight: 400;
        color: var(--color-accent2);
        font-weight: 400;
    }
    li img {
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
    }
    @media (min-width: 600px) {
        li {
            grid-template-columns: 3fr 1fr;
            gap: 3rem;
        }

        .section-container {
            padding: 5rem 0rem;
        }
    }
</style>
