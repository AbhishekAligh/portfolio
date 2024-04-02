<template>
    <header class="my-4 sticky top-0 z-10 bg-white  dark:bg-black">
        <UContainer class="flex flex-row gap-x-4 justify-between py-0 md:p-2 items-center mt-2">
            <div>
                <NuxtLink to="/" class="text-sm md:text-md font-semibold tracking-widest ">&lt;••/&gt;
                </NuxtLink>
            </div>
            <nav class="hidden md:inline-block">
                <ul class="flex flex-row gap-6 text-gray-500 dark:text-gray-400 text-sm">
                    <li v-for="link in navLinks">
                        <NuxtLink class="hover:text-gray-700 dark:hover:text-gray-100"
                            activeClass="text-black dark:text-white underline underline-offset-8" :to="link.href">{{
                        link.label
                    }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="flex flex-row gap-x-2 ">
                <UPopover class=" inline-block md:hidden">
                    <UButton color="white" icon="i-heroicons-bars-arrow-down" />
                    <template #panel="{ close }">
                        <div class="p-2 min-w-[140px]">
                            <nav>
                                <ul class="flex flex-col gap-y-1">
                                    <NuxtLink v-for="link in navLinks" @click="close"
                                        active-class="bg-gray-200 dark:bg-gray-800"
                                        class="hover:text-gray-700 dark:hover:text-gray-100 rounded-md p-2 w-full"
                                        :to="link.href">
                                        <li>{{ link.label }}</li>
                                    </NuxtLink>
                                </ul>
                            </nav>
                        </div>
                    </template>
                </UPopover>
                <ClientOnly>
                    <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
                        variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
                </ClientOnly>
            </div>
        </UContainer>
    </header>

</template>

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
const navLinks = [
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Gears",
        href: "/gears"
    },
    {
        label: "Contact",
        href: "/contact"
    }


]
</script>