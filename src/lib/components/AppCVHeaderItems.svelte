<script lang="ts">
	import { header } from '$lib/cv.json';
	import { IconAmpersand } from '@tabler/icons-svelte';
</script>

<div class="flex flex-wrap shrink justify-start gap-0 md:gap-1 items-start">
	{#each header.title as title, index (index)}
		<h2
			class="text-xl uppercase text-text-header-secondary flex flex-row justify-start gap-1 items-center"
		>
			{#if index > 0}
				<IconAmpersand class="text-text-header-secondary" size={16} />
			{/if}
			{title}
		</h2>
	{/each}
</div>
