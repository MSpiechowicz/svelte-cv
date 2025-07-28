<script lang="ts">
	import { navigationStore } from '$lib/stores/navigationStore.svelte';
	import {
		IconBookFilled,
		IconBriefcase2Filled,
		IconTransitionLeftFilled,
		IconTransitionRightFilled,
		IconUserFilled
	} from '@tabler/icons-svelte';
</script>

<div class="relative">
	<!-- Toggle button for mobile/tablet -->
	<button
		onclick={navigationStore.toggle}
		class="md:hidden fixed top-4 left-4 z-50 p-2 bg-background-secondary dark:bg-background-secondary-dark rounded-lg shadow-lg hover:bg-background-tertiary dark:hover:bg-background-tertiary-dark transition-colors"
	>
		{#if navigationStore.isOpen}
			<IconTransitionLeftFilled class="w-10 h-10 text-icon dark:text-icon-dark" />
		{:else}
			<IconTransitionRightFilled class="w-10 h-10 text-icon dark:text-icon-dark" />
		{/if}
	</button>

	<!-- Navigation panel -->
	<nav
		class="flex relative justify-center items-center flex-col w-24 min-h-screen h-full bg-background-secondary dark:bg-background-secondary-dark gap-6 text-icon dark:text-icon-dark transition-transform duration-300 ease-in-out z-40
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
	</nav>

	<!-- Overlay for mobile when navigation is open -->
	{#if navigationStore.isOpen}
		<button
			class="md:hidden fixed inset-0 bg-opacity-50 z-30"
			onclick={navigationStore.toggle}
			aria-label="Close navigation"
		></button>
	{/if}
</div>
