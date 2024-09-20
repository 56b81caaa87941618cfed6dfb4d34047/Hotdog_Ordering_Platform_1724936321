<!--
INSTRUCTION: Summary: Contains a section with:
INSTRUCTION: 1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
INSTRUCTION: 2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
-->

<template>
  <section class="py-2 bg-white pl-4">
    <h2 class="text-base font-semibold mb-3">Sizzling Hot FAQ</h2>
    <!-- Accordion -->
    <div class="space-y-2">
      <!-- Accordion item -->
      <div
        v-for="(term, index) in terms"
        :key="index"
        :class="['text-sm rounded-lg odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900', { 'expanded': term.expanded }]"
      >
        <h3>
          <button
            type="button"
            class="flex items-center justify-between w-full text-left font-medium px-3 py-2"
            @click="toggle(index)"
            :aria-expanded="term.expanded"
            :aria-controls="'terms-text-' + index"
          >
            <span>{{ term.title }}</span>
            <svg
              class="shrink-0 ml-4 fill-slate-400 dark:fill-slate-500"
              width="10"
              height="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="5"
                width="12"
                height="2"
                rx="1"
                class="transform origin-center transition duration-200 ease-out"
                :class="{ '!rotate-180': term.expanded }"
              />
              <rect
                y="5"
                width="12"
                height="2"
                rx="1"
                class="transform origin-center rotate-90 transition duration-200 ease-out"
                :class="{ '!rotate-180': term.expanded }"
              />
            </svg>
          </button>
        </h3>
        <div
          :id="'terms-text-' + index"
          role="region"
          :aria-labelledby="'terms-title-' + index"
          class="text-slate-500 dark:text-slate-400 grid overflow-hidden transition-all duration-300 ease-in-out"
          :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }]"
        >
          <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
            <p class="px-3 pb-2 text-xs" :id="'terms-text-' + index + '-description'">
              {{ term.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuotyFaqAccordionComponent",
  data() {
    return {
      terms: [
        { title: "What makes our hotdogs special?", description: "Our hotdogs are made from premium, locally-sourced meats and come in a variety of unique flavors. We use artisanal buns and offer a wide range of gourmet toppings to create the perfect hotdog experience.", expanded: false },
        { title: "Do you offer vegetarian options?", description: "Absolutely! We have delicious plant-based hotdogs that are just as flavorful as our meat options. They're perfect for vegetarians or anyone looking to try something different.", expanded: false },
        { title: "Can I customize my hotdog?", description: "Of course! We encourage creativity. Choose your favorite bun, sausage, and toppings to create your perfect hotdog. We also offer signature combinations if you prefer to leave it to the experts.", expanded: false },
        { title: "Do you cater for events?", description: "Yes, we do! Our mobile hotdog stand is perfect for parties, corporate events, and weddings. We bring the hotdog experience to you, ensuring your guests enjoy fresh, delicious hotdogs made on-site.", expanded: false }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.terms[index].expanded = !this.terms[index].expanded;
    }
  }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
