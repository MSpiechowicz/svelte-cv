<script lang="ts">
	import { summary } from '$lib/cv.json';
	import { IconSignRightFilled } from '@tabler/icons-svelte';
</script>

<div class="flex flex-col gap-2 px-6">
	<h2 class="text-2xl uppercase font-bold text-accent">{summary.title}</h2>
	<p class="text-text-secondary">{summary.description}</p>
	<ul class="list-disc list-inside">
		{#each summary.items as item, index (index)}
			<li class=" text-text-secondary flex flex-row gap-2 items-center">
				<IconSignRightFilled class="text-accent" size={16} />
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html item}
			</li>
		{/each}
	</ul>
</div>
