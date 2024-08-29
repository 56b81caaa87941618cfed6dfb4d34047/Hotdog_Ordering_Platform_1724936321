<!--
INSTRUCTION: Summary: Contains a section with three cards with black background and white text. The three cards are side by side and each contains a detail name in bold above a detail value.
-->

<template>
  <section id="page-details-cards-component" class="py-8 bg-white">
    <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4">Details</h2>
    <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
      <li id="project-length" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
        <div class="font-medium text-slate-200">Quality Ingredients</div>
        <div class="text-slate-400">Our hot dogs are crafted using premium meats and freshly baked buns for an unbeatable taste experience.</div>
      </li>
      <li id="start-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
        <div class="font-medium text-slate-200" id="start-date-des-1">Variety of Flavors</div>
        <time class="text-slate-400" id="start-time-des-1">From classic frankfurters to gourmet creations, we offer a wide range of hot dog styles to satisfy every craving.</time>
      </li>
      <li id="end-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
        <div class="font-medium text-slate-200" id="end-date-des-1">Fast & Friendly Service</div>
        <time class="text-slate-400" id="end-time-des-1">Enjoy quick, efficient service with a smile, ensuring you get your delicious hot dog fix in no time.</time>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "PageDetailsCardsComponent",
  data() {
    return {
      expanded: false,
      tab: null,
    };
  },
};
</script>
