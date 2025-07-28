<script lang="ts">
	import { navigationStore } from '$lib/stores/navigationStore.svelte';
	import { themeStore } from '$lib/stores/themeStore.svelte';
	import {
		IconBookFilled,
		IconBriefcase2Filled,
		IconMoonFilled,
		IconSunFilled,
		IconUserFilled
	} from '@tabler/icons-svelte';
</script>

<div class="absolute md:relative">
	<nav
		class="flex relative justify-center items-center flex-col w-24 min-h-screen h-full bg-background-secondary dark:bg-background-secondary-dark gap-6 text-icon dark:text-icon-dark transition-transform duration-300 ease-in-out z-40 border-r border-border
		md:translate-x-0
		{navigationStore.isOpen ? 'translate-x-0' : '-translate-x-full'}
		"
	>
		<IconUserFilled
			class="w-10 h-10 hover:text-icon-hover dark:hover:text-icon-hover-dark cursor-pointer"
		/>
		<IconBriefcase2Filled
			class="w-10 h-10 hover:text-icon-hover dark:hover:text-icon-hover-dark cursor-pointer"
		/>
		<IconBookFilled
			class="w-10 h-10 hover:text-icon-hover dark:hover:text-icon-hover-dark cursor-pointer"
		/>

		<button
			onclick={themeStore.toggle}
			class="w-10 h-10 hover:text-icon-hover dark:hover:text-icon-hover-dark cursor-pointer transition-colors"
			aria-label="Toggle dark mode"
		>
			{#if themeStore.isDark}
				<IconSunFilled class="w-10 h-10" />
			{:else}
				<IconMoonFilled class="w-10 h-10" />
			{/if}
		</button>
	</nav>

	{#if navigationStore.isOpen}
		<button
			class="md:hidden fixed inset-0 bg-opacity-50 z-30"
			onclick={navigationStore.toggle}
			aria-label="Close navigation"
		></button>
	{/if}
</div>
