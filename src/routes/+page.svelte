<script>
    import Navigation from "../components/Navigation.svelte";
    import Hero from "../components/Hero.svelte";
    import SectionCards from "../components/SectionCards.svelte";
    import Hr from "../components/Hr.svelte";
    import SectionNetwork from "../components/SectionNetwork.svelte";
    import Contribute from "../components/Contribute.svelte";
    import Articles from "../components/Articles.svelte";
    import Newsletter from "../components/Newsletter.svelte";
    import Footer from "../components/Footer.svelte";
    
    import "../style/global.css";
    import "../style/reset.css";

    import { locale } from "../store/i18n";
</script>

<svelte:head>
	<title>Hermetic Network - Proof of Generosity Concept</title>
</svelte:head>

<div id="page" class="{ $locale == 'ar-SA' ? 'ar' : 'lang' }">
    <Navigation />
    <Hero />
    <SectionCards />
    <Hr />
    <SectionNetwork />
    <Contribute />
    <Articles />
    <Newsletter />
    <Footer />
</div>

<style>
.ar {
  direction: rtl;
}
</style>