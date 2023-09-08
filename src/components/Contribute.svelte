<script>
    export let superhead = "Formas de contribuir";
    export let heading = "Estamos atualmente na fase de desenvolvimento, o que significa que a maior parte das contribuições necessárias está concentrada nesse campo. No entanto...";
    export let content = {
        html: `Se você estiver interessado em contribuir, <b>saiba que sua ajuda é muito bem-vinda!</b> <br />
<br />
Estamos buscando assistência de todos os tipos e temos alguns exemplos: <br />
<br />
Se você é um designer, pode ajudar a criar uma identidade visual única para a moeda HERM. <br />
<br />
Se você é um advogado fiscal, pode oferecer estratégias para empresas doarem ao fundo, aproveitando benefícios fiscais. <br />
<br />
Se você é bom em inglês, pode ajudar a traduzir a página. <br />
<br />
Em resumo, contribua como puder e se encaixar conforme sua disponbilidade.
<br />
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
