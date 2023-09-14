<script>
    import { locale } from "../store/i18n";
    import i18translation from "../translation";

    $: t = i18translation[$locale]["Contribute"];
</script>

<section class="section-container">
    <div class="heading-group">
        <span class="superhead">{t.superhead}</span>
        <h2 class="heading">{t.heading}</h2>
    </div>
    <div class="content">
        {@html t.content.html}
    </div>
    
    <div id="articles" />
</section>

<style>
    .section-container {
        display: grid;
        place-items: flex-start;
        gap: 2rem;

        @media (min-width: 700px) {
            grid-template-columns: 1fr 1fr;
            justify-content: space-between;
            gap: 4rem;
        }
    }

    .heading-group {
        text-align: left;
    }

    .content {
        font-size: 1.125rem;
        line-height: 1.8;
    }
</style>
