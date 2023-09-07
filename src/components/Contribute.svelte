<script>
    export let superhead = "Formas de contribuir";
    export let heading = "Atualmente estamos em fase de desenvolviemento, portanto a maior parte de contribuição está nesse campo, mas...";
    export let content = {
        html: `Se mesmo assim você estiver interesse em contribuir, saiba que você pode! <br /><br />
            <b> Estamos atrás de TODO tipo de ajuda, veja alguns exemplos: </b> <br /><br />
            Se você for Designer pode ajudar estabelecer uma identidade visual e uma verdadeira face para a moeda HERM. <br /><br />
            Se você é um Advogado Fiscal pode ajudar com estratégias para oferecer as empresas a doação ao fundo como forma de benefício fiscal. <br /><br />
            Ou seja, se encaixe e contribua conforme você puder. <br /><br />
            Entre no nosso <a href="https://discord.gg/UzFGhQ6q">Discord</a>.
        `
    };
</script>

<section class="section-container">
    <div class="heading-group">
        <span class="superhead">{superhead}</span>
        <h2 class="heading">{heading}</h2>
    </div>
    <div class="content">
        {@html content.html}
    </div>
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
