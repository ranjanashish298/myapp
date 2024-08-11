<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
    content: Object,
    transitions: Object
})

const aboutSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(aboutSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

// Static Images
let getImageUrl = (path) => {
    return new URL(`../assets/${path}`, import.meta.url).href
}

</script>


<template>
    <section class="min-h-screen w-full" ref="aboutSection" id="about-section">
        <div class="relative flex py-5 items-center"
            :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-5">./About Me</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div
            :class="['flex flex-col gap-y-4 xl:grid xl:grid-cols-3 xl:gap-x-5 xl:gap-y-0 mb-36 text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <div class="xl:col-span-2">
                <p v-for="paragraph in content.autobiography">{{ paragraph }}<br /><br /></p>
            </div>
            <div class="xl:col-span-1">
                <img :src="getImageUrl(content.photo2Link)" class="shadow-md mb-4" loading="lazy" />
                <img :src="getImageUrl(content.photo1Link)" class="shadow-md" loading="lazy" />
            </div>
        </div>
    </section>
</template>
