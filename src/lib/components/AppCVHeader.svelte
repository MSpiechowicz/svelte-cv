<script lang="ts">
	import { header } from '$lib/cv.json';
	import ManAvatar from '$lib/static/ManAvatar.svelte';
	import WomanAvatar from '$lib/static/WomanAvatar.svelte';
	import { IconPointFilled } from '@tabler/icons-svelte';
</script>

<div class="flex flex-col gap-4 bg-background-header w-full p-6">
	<div class="flex flex-row gap-6 justify-start items-center">
		<div
			class="w-24 h-24 bg-avatar-background rounded-full justify-center items-center overflow-hidden p-1 hidden md:flex"
		>
			{#if header.gender === 'male'}
				<ManAvatar fillColor="var(--color-avatar)" customClass="w-fit mt-4" />
			{:else}
				<WomanAvatar fillColor="var(--color-avatar)" customClass="w-12 h-12" />
			{/if}
		</div>
		<div class="flex flex-col gap-1">
			<h1 class="text-4xl uppercase font-bold">{header.name}</h1>
			<h2 class="text-xl uppercase text-text-secondary flex flex-row gap-1 items-center">
				{#each header.title as title, index (index)}
					{title}
					{#if index < header.title.length - 1}
						<IconPointFilled class="text-text-secondary" size={16} />
					{/if}
				{/each}
			</h2>
		</div>
	</div>
</div>
