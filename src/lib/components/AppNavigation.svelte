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
	import AppNavigationTooltip from './AppNavigationTooltip.svelte';
</script>

<div class="absolute md:relative">
	<nav
		class="flex relative justify-center items-center flex-col w-24 min-h-screen h-full bg-background-secondary dark:bg-background-secondary-dark gap-6 text-icon dark:text-icon-dark transition-transform duration-300 ease-in-out z-40 border-r border-border
		md:translate-x-0
		{navigationStore.isOpen ? 'translate-x-0' : '-translate-x-full'}
		"
	>
		<div class="relative group">
			<IconUserFilled
				class="w-10 h-10 hover:text-icon-hover dark:hover:text-icon-hover-dark cursor-pointer"
			/>
			<AppNavigationTooltip text="About" />
		</div>

		<div class="relative group">
			<IconBriefcase2Filled
				class="w-10 h-10 hover:text-icon-hover dark:hover:text-icon-hover-dark cursor-pointer"
			/>
			<AppNavigationTooltip text="Experience" />
		</div>

		<div class="relative group">
			<IconBookFilled
				class="w-10 h-10 hover:text-icon-hover dark:hover:text-icon-hover-dark cursor-pointer"
			/>
			<AppNavigationTooltip text="Education" />
		</div>

		<div class="relative group">
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
			<AppNavigationTooltip text={themeStore.isDark ? 'Light Mode' : 'Dark Mode'} />
		</div>
	</nav>

	{#if navigationStore.isOpen}
		<button
			class="md:hidden fixed inset-0 bg-opacity-50 z-30"
			onclick={navigationStore.toggle}
			aria-label="Close navigation"
		></button>
	{/if}
</div>
