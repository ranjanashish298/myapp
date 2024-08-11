<script setup>

const props = defineProps({
    experience: Object,
})

</script>


<template>
    <div
        class="flex flex-col flex-1 rounded-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-slate-800 text-left p-4 transition-all duration-300">
        <h3 class="text-xl font-semibold">{{ experience.position }} <a :href="experience.company.link"
                class="text-blue-600 hover:underline">@{{ experience.company.name }}</a></h3>
        <p class="text-sm text-gray-500">{{ experience.duration }}</p>
        <ul class="custom-bullet mt-4 space-y-2 pl-6">
            <li v-for="bullet in experience.bulletPoints" class="text-gray-700 dark:text-gray-300">
                {{ bullet }}
            </li>
        </ul>
        <div class="text-slate-600 pt-4 flex flex-wrap mt-auto">
            <p v-for="hashtag in experience.hashtags" class="pr-4 last:pr-0">#{{ hashtag }}</p>
        </div>
    </div>
</template>

<style>
.custom-bullet ul {
    list-style-type: none;
    padding-left: 1em;
}

.custom-bullet li::before {
    content: '■';
    /* FontAwesome check icon, make sure FontAwesome is included */
    font-size: 0.75em;
    /* Defines the icon font family */
    color: #4a90e2;
    /* Icon color */
    display: inline-block;
    width: 1.5em;
    /* Space before bullet text */
    vertical-align: middle;
    /* Aligns bullet with the text vertically */
}
</style>