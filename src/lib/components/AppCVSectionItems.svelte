<script lang="ts">
  let { items } = $props();
  import AppCVSectionIcon from './AppCVSectionIcon.svelte';
</script>

{#if items && items.length > 0}
  {#each items as item, index (index)}
    {#if item.list}
			<ul class="list-disc list-inside flex flex-col gap-2 sm:gap-1">
				{#each item.list as entry, listIndex (listIndex)}
					<li class="text-text-secondary flex flex-row gap-2 items-center">
						<AppCVSectionIcon icon={item.listIcon} additionalClass="" size={12} />
						<p class="break-words">
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html entry}
						</p>
					</li>
				{/each}
			</ul>
		{/if}
  {/each}
{/if}
