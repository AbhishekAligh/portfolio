<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>
<template>
    <ClientOnly>
        <header class="border-white border-b drop-shadow-xl ">
            <nav class="flex flex-row gap-x-4 justify-between m-4 p-4">
                <div>Brand Icon</div>
                <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
                    variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
            </nav>
        </header>
        <template #fallback>
            <div class="w-8 h-8" />
        </template>
    </ClientOnly>
</template>
