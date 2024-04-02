<template>
    <section className="flex  flex-col gap-y-8">
        <PageTitle title="Abhishek Aligh" subTitle="Software Engineer & Creator" />
        <div class="flex flex-row gap-x-6">
            <UAvatar size="3xl" src="/images/myAvatar.png" alt="AA" class="bg-gray-200 dark:bg-slate-700" />
            <ul class="flex flex-col gap-y-2 text-gray-500 dark:text-gray-400">
                <NuxtLink to="https://github.com/AbhishekAligh" target="_blank"
                    class="hover:text-black dark:hover:text-gray-200">
                    <li class="flex flex-row gap-x-2 ">
                        <UIcon name="mdi:github" dynamic size="1.5em" />
                        Github
                    </li>
                </NuxtLink>
                <NuxtLink to="https://www.linkedin.com/in/abhishek-aligh" target="_blank"
                    class="hover:text-blue-800 dark:hover:text-gray-200">
                    <li class="flex flex-row gap-x-2">
                        <UIcon name="mdi:linkedin" dynamic size="1.5em" />
                        LinkedIn
                    </li>
                </NuxtLink>
                <NuxtLink to="https://twitter.com/abhishekaligh" target="_blank"
                    class="hover:text-blue-400 dark:hover:text-gray-200">
                    <li class="flex flex-row gap-x-2">
                        <UIcon name="mdi:twitter" dynamic size="1.5em" />
                        Twitter
                    </li>
                </NuxtLink>
            </ul>
        </div>
    </section>
</template>