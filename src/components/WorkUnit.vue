<script setup>
import { ref } from 'vue'
import { LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    project: Object
})

// Static Images
const showProject = ref(false)

let getImageUrl = (path) => {
    return new URL(`../assets/${path}`, import.meta.url).href
}

</script>


<template>
    <div class="flex flex-col lg:flex-row transition-opacity duration-500">
        <div class="lg:w-1/2">
            <img @load="showProject = true" :src="getImageUrl(project.imageLink)" class="project-image"
                loading="lazy" />
        </div>
        <div class="lg:w-1/2 project-content">
            <p class="text-sm">{{ project.yearCompleted }}</p>
            <h3 class="text-xl font-bold">{{ project.projectName }}</h3>
            <p class="text-gray-600">{{ project.description }}</p>
            <p class="text-gray-500">{{ project.techStack }}</p>
            <div class="flex flex-wrap space-x-4">
                <a v-for="link in project.links" :key="link.url" :href="link.url"
                    class="flex items-center space-x-2 hover:text-blue-500 focus:text-blue-500 active:text-blue-500"
                    target="_blank">
                    <span v-if="link.type == 'git'">
                        <font-awesome-icon icon="fa-brands fa-github" class="h-5 w-5" />
                        {{ link.label }}
                    </span>
                    <span v-else-if="link.type == 'external'">
                        <ArrowTopRightOnSquareIcon class="h-5 w-5" />
                        {{ link.label }}
                    </span>
                    <span v-else>
                        <LinkIcon class="h-4 w-4" />
                        {{ link.label }}
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
.project-image {
    padding: 10px;
    height: auto;
}

.project-content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    /* Centers the content vertically */
    padding: 2rem;


}
</style>