<script>
    import Navigation from "../components/Navigation.svelte";
    import Hero from "../components/Hero.svelte";
    import SectionCards from "../components/SectionCards.svelte";
    import Hr from "../components/Hr.svelte";
    import SectionNetwork from "../components/SectionNetwork.svelte";
    import Contribute from "../components/Contribute.svelte";
    import Footer from "../components/Footer.svelte";
    
    import "../style/global.css";
    import "../style/reset.css";
</script>

<svelte:head>
	<title>Hermetic Network - Proof of Generosity Concept</title>
</svelte:head>

<div id="page">
    <Navigation />
    <Hero />
    <SectionCards />
    <Hr />
    <SectionNetwork />
    <Contribute />
    <Footer />
</div>