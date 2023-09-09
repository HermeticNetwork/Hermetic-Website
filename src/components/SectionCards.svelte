<script>
    import Icon from "@iconify/svelte/dist/Icon.svelte";

    export let superhead = "Ecossistema";
    export let heading = "Ganhe Herms em troca do bem.";
    export let subhead = "";

    export let icon_list = [
        {
            label: "Código Aberto",
            icon: "akar-icons:circle-check-fill",
        },

        {
            label: "Blockchain e Block Latter",
            icon: "akar-icons:circle-check-fill",
        },

        {
            label: "Seguro e Confiável",
            icon: "akar-icons:circle-check-fill",
        },
    ];

    export let cards = [
        {
            icon: "material-symbols:lock-outline",
            title: "Garantia",
            content: {
                html: "A HERM será lastreada unicamente e exclusivamente através de doações e contará com lastros em PAXG, USDT, EURU, BRZ, ETH e BTC.",
            },
            link: {
                label: "Blog MB: O que é lastro?",
                url: "https://www.mercadobitcoin.com.br/economia-digital/investimentos/o-que-e-lastro/#:~:text=Lastro%20%C3%A9%20uma%20esp%C3%A9cie%20de,como%20garantia%20para%20opera%C3%A7%C3%B5es%20financeiras.",
            },
        },

        {
            icon: "material-symbols:payments-outline",
            title: "Transações e Taxas",
            content: {
                html: "Toda vez que uma transferência é realizada entre indivíduos (incluindo retiradas) 50% das Herms são queimadas como forma de taxa.",
            },
            link: {
                label: "",
                url: "",
            },
        },

        {
            icon: "material-symbols:attach-money",
            title: "Prova de Generosidade",
            content: {
                html: "A cada ação benevolente aprovada pelo ecossistema, o responsável ganha Herms como recompensa.",
            },
            link: {
                label: "Ajude a evoluir o Conceito!",
                url: "https://discord.com/channels/1144805844769312859/1144843531702247495",
            },
        },

        {
            icon: "material-symbols:currency-exchange",
            title: "Limitação de Oferta",
            content: {
                html: "O total de ofertas é de 330 mil HERM, considerando 7 casas decimais.",
            },
            link: {
                label: "",
                url: "",
            },
        },

        {
            icon: "material-symbols:account-balance-wallet-outline",
            title: "Precificação",
            content: {
                html: "A precificação é feita através de uma simples fórmula de divisão do valor lastreado através das doações pelo total de ofertas disponíveis.",
            },
            link: {
                label: "",
                url: "",
            },
        },

        {
            icon: "material-symbols:paid-outline",
            title: "ERC-20",
            content: {
                html: "HERM é um Token que opera na Rede Ethereum e adere os seus padrões, garantindo confiabilidade e segurança.",
            },
            link: {
                label: "ERC-20 Token Standard",
                url: "https://ethereum.org/pt/developers/docs/standards/tokens/erc-20/",
            },
        },

        {
            icon: "material-symbols:link",
            title: "Blockchain",
            content: {
                html: "A tecnologia Blockchain funciona como um registro público de dados no estilo de livro-razão, permitindo que todas as transações sejam registradas de forma imutável e acessíveis a todos os participantes da rede.",
            },
            link: {
                label: "Iberê explica o que é Blockchain",
                url: "https://www.youtube.com/watch?v=0Mt16eeCv78",
            },
        },

        {
            icon: "material-symbols:network-node",
            title: "Block Lattice",
            content: {
                html: "A tecnologia Block Lattice é utilizada no Karma API e é uma variação do Blockchain, ao contrário do Chain, o Lattice cria vários blocos e não age como corrente e sim malha, por isso \"Blockchain\" se torna \"Block Lattice\".",
            },
            link: {
                label: "",
                url: "",
            },
        },
    ];
</script>

<section class="section-container">
    <header class="heading-group">
        <div class="superhead">{superhead}</div>
        <h2 class="heading">{@html heading}</h2>
        <div class="subheading">{subhead}</div>
    </header>
    <ul class="icon-list">
        {#each icon_list as { icon, label }}
            <li>
                <span class="icon">
                    <Icon {icon} />
                </span>
                <span>{label}</span>
            </li>
        {/each}
    </ul>
    <ul class="cards">
        {#each cards as card}
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
