<script>
    import Icon from "@iconify/svelte";

    import { locale } from "../store/i18n";
    import i18translation from "../translation";

    $: t = i18translation[$locale]["Newsletter"];
</script>

<svg viewBox="0 0 1440 175" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1440 175H0V0C240 53.3333 480 80 720 80C960 80 1200 53.3333 1440 0V175Z"
    />
</svg>

<section>
    <div class="section-container">
        <div class="signup">
            <h2 class="heading">{t.heading}</h2>
            <form action="">
                <input type="email" placeholder={t.form.placeholder} />
                <button type="button" on:click={alert(t.newsletterAlert)}
                    >{t.form.button_label}</button
                >
            </form>
            <span class="footer">{t.form.footer}</span>
        </div>
        <div class="cards">
            {#each t.cards as { icon, title, description }}
                <div class="card">
                    <div class="icon">
                        <Icon {icon} />
                    </div>
                    <span class="title">{title}</span>
                    <span class="description">{description}</span>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    svg path {
        fill: var(--color-accent-2);
    }
    section {
        background: var(--color-accent-2);
    }
    .section-container {
        display: grid;
        gap: 3rem;
        padding-top: 1rem;
        margin-left: -0.48rem;
    }
    @media (min-width: 900px) {
        .section-container {
            gap: 7rem;
            grid-template-columns: 1fr 1fr;
            margin: auto;
        }
    }
    .signup {
        color: var(--color-inverted);
        display: grid;
        gap: 1rem;
        place-content: start;
    }
    .signup form {
        display: flex;
        gap: 0.5rem;
    }
    .signup form input {
        color: var(--color-base);
    }
    .signup form input,
    .signup form button {
        font-size: 1rem;
        padding: 0.75rem 1rem;
        border-radius: calc(var(--border-radius) / 2);
    }
    .signup form button {
        background: var(--color-brand);
        font-size: 1.125rem;
        font-weight: 500;
        padding: 0.5rem 1.5rem;
    }
    .signup .footer {
        opacity: 0.7;
        font-size: 0.875rem;
        line-height: 1.75;
    }
    .cards {
        display: grid;
        gap: 1rem;
    }
    .cards .card {
        display: grid;
        grid-template-columns: 3rem auto;
        column-gap: 1.5rem;
        row-gap: 0.5rem;
        padding: 1.5rem;
        background: var(--background);
        border-radius: var(--border-radius);
    }
    .cards .card .icon {
        color: var(--color-brand);
        padding: 0.25rem;
        font-size: 3rem;
        grid-row: span 2;
    }
    .cards .card .title {
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .cards .card .description {
        opacity: 0.7;
        font-size: 1rem;
    }
</style>
