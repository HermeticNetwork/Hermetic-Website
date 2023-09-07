<script>
    import Icon from "@iconify/svelte/dist/Icon.svelte";

    export let superhead = "Rede Hermetic";
    export let heading = "Abra o Capô";
    export let subheading = "Descubra agora mesmo como as coisas funcionam de forma totalmente transparente e confiável.";

    export let teasers = [
        {
            title: "Hermetic (HERM)",
            content: {
                html: "HERM (Hermetic Token) adota um Padrão de Token do Ethereum chamado ERC-777. <br /><br /> Ele é o ativo bonificado para todos os usuários elegíveis atráves do Karma e pode ser transferido para outras carteiras (não recomendado) como MetaTask, por exemplo."
            },
            image: {
                url: "https://www.datamex.com.br/blog/wp-content/uploads/2019/09/blockchain-na-logistica-e-transporte.jpg",
                alt: "Block Chain"
            },
            link: {
                url: "https://github.com/HermeticNetwork/Hermetic-Token",
                label: "Veja o fonte"
            }
        },
        
        {
            title: "Karma (API)",
            content: {
                html: "Karma é a aplicação responsável por criar, validar e armazenar as informações dos votos de uma forma descentralizada através da tecnologia de Block Latter. <br /><br /> E usa o Lightning-Peer-Network (para P2P) afim de evitar a centralização das informações e para garantir a transparência da Rede Hermetic."
            },
            image: {
                url: "https://moderncourts.org/wp-content/uploads/2013/10/scales-of-justice-trans.png",
                alt: "Scales of Justice"
            },
            link: {
                url: "https://github.com/HermeticNetwork/Karma-API",
                label: "Veja o fonte"
            }
        },
        
        {
            title: "Peer to Peer (Library)",
            content: {
                html: "Linghtning Peer Network é uma biblioteca mantida pelo Hermetic Network para conexões em pares, ela é usada no Karma API e é usada para garantir a descentralização dos blocos de votação da Block Latter."
            },
            image: {
                url: "https://techterms.com/img/xl/p2p_442.png",
                alt: "Peer Network"
            },
            link: {
                url: "https://github.com/HermeticNetwork/lightning-peer-network",
                label: "Veja o fonte"
            }
        }
    ]
</script>

<section class="section-container">
    <header class="heading-group">
        <span class="superhead">{superhead}</span>
        <h2 class="heading">{heading}</h2>
        <div class="subheading">{subheading}</div>
    </header>
    <div class="teasers">
        {#each teasers as teaser}
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
        width: 100%;
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
