<template>
    <div>
        <h1 class="text-3xl font-bold tracking-wide mb-1">{{ props.title }}</h1>
        <p class="text-gray-500 text-md dark:text-gray-400">{{ props.subTitle }}</p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    title: string,
    subTitle: string
}>()
</script>