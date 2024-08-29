<!--
INSTRUCTION: Summary: Contains a section with a fixed left-side dark blue component container with a blur effect.
INSTRUCTION: It contains three left aligned pieces of text:
INSTRUCTION: - Blue text appearing above the hero title
INSTRUCTION: - The white hero title as a heading
INSTRUCTION: - The grey hero sub text below it
-->

<template>
    <section id="left-side-hero-component">
        <div id="left-content" class="relative w-full lg:w-1/2 lg:fixed lg:inset-0 lg:overflow-y-auto no-scrollbar lg:rounded-r-[3rem] bg-white bg-slate-900">
            <!-- Background Illustration -->
            <div id="bg-illustration" class="absolute top-0 -translate-y-64 left-1/2 -translate-x-1/2 blur-3xl pointer-events-none" aria-hidden="true">
                <img class="max-w-none" src="./images/bg-illustration.svg" width="785" height="685" alt="Bg illustration">
            </div>
            <div class="min-h-full w-full max-w-xl mx-auto flex px-4 sm:px-6 pt-36 pb-20 lg:py-20">
                <div class="min-h-full w-full max-w-xl mx-auto flex flex-col justify-start px-4 sm:px-6 pt-36 pb-20 lg:py-20 flex-1" id="quote-header">
                    <div class="grow flex flex-col justify-center" id="quote-content">
                        <div class="space-y-3" id="quote-container">
                            <div id="quote-title" class="font-caveat text-3xl text-blue-500">HERO_TEXT_BEFORE_TITLE</div>
                            <h1 id="company-name" class="h1 font-orbiter font-bold text-white">HERO_TITLE</h1>
                            <time id="quote-date" class="block font-caveat text-xl text-slate-400">HERO_SUBTITLE</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FixedLeftSideHeroComponent",
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
};
</script>

<style scoped>
</style>
