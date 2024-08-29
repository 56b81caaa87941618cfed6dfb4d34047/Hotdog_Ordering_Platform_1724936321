<!--
INSTRUCTION: Summary: Contains a bar fixed at the bottom of the page with a transparent background with a blur effect.
INSTRUCTION: It has two buttons: Contact button that directs to the contact page and Pay button that directs to the payment page, styled with a blue background and a shine animation effect.
-->
<template>
  <section
    id="bottom-bar-component"
    class="fixed bottom-0 z-30 w-full lg:w-1/2 !bg-opacity-80 backdrop-blur-sm bg-white dark:bg-slate-950"
  >
    <div
      id="bottom-bar-component-content"
      class="w-full max-w-xl mx-auto px-4 sm:px-6"
    >
      <div
        id="action-buttons"
        class="flex py-4 md:py-6 space-x-4 justify-center"
      >
        <a
          id="contact-button"
          class="btn flex items-center justify-center w-1/2 h-12 p-3 text-slate-900 dark:text-slate-200 dark:bg-slate-900 rounded-lg hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 border shadow-lg transition duration-200 ease-in-out"
          href="contact.html"
        >
          Contact
        </a>
        <a
          id="pay-button"
          class="btn flex items-center justify-center w-1/2 h-12 p-3 animate-shine bg-[size:200%_100%] hover:bg-[image:none] transition duration-200 ease-in-out shadow-lg text-white bg-blue-500 hover:bg-blue-600 rounded-lg bg-[linear-gradient(100deg, theme(colors.blue.500), 45%, theme(colors.blue.400), 55%, theme(colors.blue.500))] rounded-lg"
        >
          Pay
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BottomBarComponent",
  data() {
    return {
      expanded: false,
      tab: null,
    };
  },
};
</script>

<style scoped>
/* Add your component specific styles here */
</style>
