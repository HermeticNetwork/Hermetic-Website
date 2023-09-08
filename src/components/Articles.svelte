<script>
    export let heading = "Artigos e Incentivos";
    export let items = [
        {
            link: {
                url: "https://livecoins.com.br/pesquisa-mostra-aumento-de-doacoes-com-criptomoedas/",
                label: "Pesquisa mostra aumento de doações com criptomoedas",
            },
            description: {
                html: "Segundo pesquisa do braço de filantropia da Binance, 32% dos entrevistados indicam criptomoedas como seu método preferido de doação.",
            },
            author: {
                url: "https://livecoins.com.br/",
                label: "Livecoins.com.br",
            },
            thumbnail: {
                url: "https://livecoins.com.br/wp-content/uploads/2022/03/doacao-bitcoin-696x385.jpg.webp",
                alt: "Empresário dando Bitcoin para outra pessoa; Doações de criptomoedas e Bitcoin.",
            }
        },
        
        {
            link: {
                url: "https://br.cointelegraph.com/news/crypto-donations-to-surpass-10b-in-a-decade-the-giving-block",
                label: "Doações cripto ultrapassarão US$ 10 bilhões em uma década: The Giving Block",
            },
            description: {
                html: "The Giving Block informou que o USDC foi responsável por 44% do volume de doações de cripto em sua plataforma no ano passado, seguido por ETH (24%) e BTC (17%).",
            },
            author: {
                url: "https://br.cointelegraph.com/",
                label: "Cointelegraph.com",
            },
            thumbnail: {
                url: "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9pbWFnZXMuY29pbnRlbGVncmFwaC5jb20vaW1hZ2VzLzE0MzRfYUhSMGNITTZMeTl6TXk1amIybHVkR1ZzWldkeVlYQm9MbU52YlM5emRHOXlZV2RsTDNWd2JHOWhaSE12ZG1sbGR5ODRPV1UwTW1JMlpXRmpaRGhoWkdSa056bGxaVFV5TTJGaU5EUTBOVEUwTlM1cWNHYz0uanBn.jpg",
                alt: "Doações cripto ultrapassarão US$ 10 bilhões em uma década: The Giving Block.",
            }
        },

        {
            link: {
                url: "https://livecoins.com.br/greenpeace-lanca-campanha-contra-mineracao-de-bitcoin/",
                label: "Greenpeace lança campanha contra mineração de Bitcoin",
            },
            description: {
                html: "Até o momento, o destaque é a participação de Chris Larsen, cofundador e diretor-executivo da Ripple (XRP). Segundo a Bloomberg, o bilionário já doou 5 milhões de dólares (R$ 24 milhões) para a campanha.",
            },
            author: {
                url: "https://livecoins.com.br/",
                label: "Livecoins.com.br",
            },
            thumbnail: {
                url: "https://livecoins.com.br/wp-content/uploads/2022/03/bitcoin-ambiental-696x385.jpg.webp",
                alt: "Bitcoin em meio à natureza.",
            }
        },
        
        {
            link: {
                url: "https://br.cointelegraph.com/news/defi-daos-and-nfts-crypto-is-redefining-how-charities-raise-funds",
                label: "DeFi, DAOs e NFTs: Criptomoedas estão redefinindo modelos de financiamento de instituições de caridade",
            },
            description: {
                html: "As doações em criptomoedas vão muito além do que apenas transações peer-to-peer de Bitcoin e Ether.",
            },
            author: {
                url: "https://br.cointelegraph.com/",
                label: "Cointelegraph.com",
            },
            thumbnail: {
                url: "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMDEvMmQ1ZTE4NzItNWRkZi00YTE4LWE2NGUtODJiZjNlYmFhNWFhLkpQRw==.jpg",
                alt: "DDeFi, DAOs e NFTs: Criptomoedas estão redefinindo modelos de financiamento de instituições de caridade.",
            }
        },
    ];
</script>

<section class="section-container">
    <h2>{heading}</h2>
    <ul class="items">
        {#each items as item, i}
            <li>
                <div class="post-info">
                    <a class="title" href={item.link.url} target="_blank"
                        >{item.link.label}</a
                    >
                    <div class="description">
                        {@html item.description.html}
                    </div>
                    <span class="author">
                        por <a href={item.author.url} target="_blank">{item.author.label}</a>
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
