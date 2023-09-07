<script>
    import SectionCards from "../components/SectionCards.svelte";
    import Hero from "../components/Hero.svelte";
    import Navigation from "../components/Navigation.svelte";
    
    import "../style/global.css";
    import "../style/reset.css";
    import Hr from "../components/Hr.svelte";
    import SectionNetwork from "../components/SectionNetwork.svelte";
    import Contribute from "../components/Contribute.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<div id="page">
    <Navigation />
    <Hero />
    <SectionCards />
    <Hr />
    <SectionNetwork />
    <Contribute />
    <Footer />
</div>

<style>

</style>