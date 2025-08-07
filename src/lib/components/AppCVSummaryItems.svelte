<script lang="ts">
	let { summary, summaryIcon } = $props();
	import AppCVSectionIcon from './AppCVSectionIcon.svelte';
</script>

{#if summary && summary.length > 0}
	<ul class="list-disc list-inside flex flex-col gap-2">
		{#each summary as entry, listIndex (listIndex)}
			<li class="text-text-secondary flex flex-row gap-2 items-start">
				<div class="flex-shrink-0 mt-[3px]">
					<AppCVSectionIcon icon={summaryIcon} size={16} />
				</div>
				<p class="break-words flex-1">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html entry}
				</p>
			</li>
		{/each}
	</ul>
{/if}
