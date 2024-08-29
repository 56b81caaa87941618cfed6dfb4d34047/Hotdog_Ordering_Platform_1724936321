<!--
INSTRUCTION: Summary: Contains a header fixed at the top of the page.
INSTRUCTION: On the left it has a text serving as branding for the page. On the right is a button to turn dark mode on/off.
-->

<template>
    <header id="header-component" class="z-30 bg-white">
        <div class="max-w-xl lg:max-w-[calc(50%+theme(maxWidth.xl))] mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-between h-16 md:h-20">
                <!-- Site branding -->
                <div id="site-branding" class="shrink-0 mr-4 lg:fixed">
                    <!-- Logo -->
                    <a class="flex items-center space-x-4" href="index.html" aria-label="Cruip">
                        <img id="site-logo" class="rounded-full" src="./images/logo.jpg" width="32" height="32" alt="Mary Rutt">
                        <span id="site-name" class="text-slate-200">PERSON_NAME</span>
                    </a>
                </div>
                <!-- Right side -->
                <div id="right-side" class="flex grow justify-end">
                    <!-- Light switch -->
                    <div id="light-switch-container" class="flex flex-col justify-center">
                        <input type="checkbox" name="light-switch" id="light-switch" class="light-switch peer sr-only" @click="toggleDarkMode" />
                        <label id="light-switch-label" class="relative cursor-pointer h-8 w-8 inline-flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 lg:bg-white lg:border-slate-200 lg:hover:border-slate-300 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 shadow-black/5 transition-colors" for="light-switch">
                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="dark:hidden">
                                <path d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" class="fill-slate-400 lg:fill-slate-300" />
                                <path d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" class="fill-slate-500 lg:fill-slate-400"/>
                            </svg>
                            <svg class="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-slate-500" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                                <path class="fill-slate-400" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                            </svg>
                            <span class="sr-only">Switch to light / dark version</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "DarkHeaderComponent",
    data() {
        return {
            expanded: false,
            tab: null
        };
    },
    methods: {
        toggleDarkMode() {
            if (localStorage.getItem('dark-mode') === 'false' || !('dark-mode' in localStorage)) {
                console.log("for the dark mode button");
                document.querySelector('html').classList.remove('dark');
                localStorage.setItem('dark-mode', 'true');
            } else {
                console.log("for the light mode button");
                document.querySelector('html').classList.add('dark');
                localStorage.setItem('dark-mode', 'false');
            }
        }
    },
    mounted() {
        if (localStorage.getItem('dark-mode') === 'true') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    }
};
</script>

<style scoped>
</style>
