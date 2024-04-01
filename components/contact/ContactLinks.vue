<template>
    <section>
        <ul class="grid grid-cols-2 gap-4 ">
            <li v-for="link in connectLinks">
                <NuxtLink :to="link.href" target="_blank" external
                    class="flex flex-row justify-between p-2 lg:p-4 rounded-lg lg:rounded-xl border-2 items-center text-gray-500 border-gray-500 dark:text-gray-400 dark:border-gray-400 dark:hover:text-slate-500 dark:hover:border-slate-500 hover:text-slate-700 hover:border-slate-700">
                    <div class="flex flex-row gap-x-2">
                        <UIcon :name="link.icon" size="1.5em" dynamic />
                        <p>{{ link.label }}</p>
                    </div>
                    <UIcon name="heroicons:arrow-up-right" dynamic />
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>


<script setup lang="ts">
interface ConnectLinks {
    label: string,
    icon: string,
    href: string
}
const connectLinks: ConnectLinks[] = [
    {
        label: "Email",
        icon: "mdi:gmail",
        href: "mailto:abhishekaligh@gmail.com"
    },
    {
        label: "LinkedIn",
        icon: "mdi:linkedin",
        href: "https://linkedin.com/in/abhishek-aligh"
    },
    {
        label: "Github",
        icon: "mdi:github",
        href: "https://github.com/AbhishekAligh"
    },
    {
        label: "Twitter",
        icon: "mdi:twitter",
        href: "https://twitter.com/abhishekaligh"
    },
    {
        label: "Instagram",
        icon: "mdi:instagram",
        href: "https://www.instagram.com/theimposter.dev"
    },
    {
        label: "Youtube",
        icon: "mdi:youtube",
        href: "https://www.youtube.com/channel/UCoJHuo6vttCFAJczG_H9UMg"
    },
]
</script>