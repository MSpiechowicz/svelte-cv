<script lang="ts">
	import { header } from '$lib/cv.json';
	import { navigationStore } from '$lib/stores/navigationStore.svelte';
	import { IconMenu2, IconMenu3 } from '@tabler/icons-svelte';
	import AppCVHeaderAvatar from './AppCVHeaderAvatar.svelte';
	import AppCVHeaderContact from './AppCVHeaderContact.svelte';
	import AppCVHeaderItems from './AppCVHeaderItems.svelte';
</script>

<div class="flex flex-col gap-4 bg-background-header w-full p-6">
	<div
		class="flex {header.avatarPosition === 'left'
			? 'md:flex-row'
			: 'md:flex-row-reverse'} gap-6 justify-start items-center"
	>
		<AppCVHeaderAvatar />
		<div class="flex flex-col gap-1 w-full">
			<div class="flex flex-row justify-between items-center">
				<h1 class="text-4xl uppercase font-bold text-text-header">{header.name}</h1>
				<button class="md:hidden" onclick={navigationStore.toggle}>
					{#if navigationStore.isOpen}
						<IconMenu3 size={36} class="text-text-header-secondary cursor-pointer" />
					{:else}
						<IconMenu2 size={36} class="text-text-header-secondary cursor-pointer" />
					{/if}
				</button>
			</div>
			<AppCVHeaderItems />
			<AppCVHeaderContact />
		</div>
	</div>
</div>
