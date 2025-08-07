<script lang="ts">
	import { navigation } from '$lib/cv.json';
	import { navigationStore } from '$lib/stores/navigationStore.svelte';
	import { themeStore } from '$lib/stores/themeStore.svelte';
	import { IconMoonFilled, IconSunFilled } from '@tabler/icons-svelte';
	import AppCVSectionIcon from './AppCVSectionIcon.svelte';
	import AppNavigationTooltip from './AppNavigationTooltip.svelte';

	function scrollToSection(anchor: string) {
		const element = document.getElementById(anchor);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<div class="fixed left-0 top-0 xl:sticky xl:top-0 xl:h-screen">
	<nav
		class="flex relative justify-center items-center flex-col w-24 min-h-screen h-full bg-background-secondary dark:bg-background-secondary-dark gap-6 text-icon dark:text-icon-dark transition-transform duration-300 ease-in-out z-50 border-r border-border
		xl:translate-x-0
		{navigationStore.isOpen ? 'translate-x-0' : '-translate-x-full'}
		"
	>
		{#each navigation as item, index (index)}
			<div class="relative group">
				<button onclick={() => scrollToSection(item.anchor)} aria-label={item.text}>
					<AppCVSectionIcon
						icon={item.icon}
						class="w-10 h-10 hover:text-icon-hover dark:hover:text-icon-hover-dark cursor-pointer"
					/>
				</button>
				<AppNavigationTooltip text={item.text} />
			</div>
		{/each}

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
