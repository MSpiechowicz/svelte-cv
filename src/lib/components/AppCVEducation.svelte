<script lang="ts">
	import { handleImageError } from '$lib/utils';
	import AppCVCard from './AppCVCard.svelte';
	import AppCVEducationEntry from './AppCVEducationEntry.svelte';

	let { education } = $props();
</script>

<div class="space-y-6">
	{#each education as item (item.degree + item.university)}
		<AppCVCard>
			<div class="flex justify-between items-start mb-4">
				<div class="flex-1">
					<h3 class="text-xl font-bold text-text-primary mb-1">
						{item.degree}
					</h3>
					<p class="text-md font-semibold mb-1 text-text-secondary">
						{item.university}
					</p>
					<p class="text-sm text-text-secondary">
						{item.startDate} - {item.endDate}
						{#if item.duration}
							({item.duration})
						{/if}
					</p>
				</div>
				<div class="sm:block ml-4 flex-shrink-0">
					<img
						src={item.logo}
						alt="{item.university} logo"
						class="w-16 h-16 object-contain"
						onerror={handleImageError}
					/>
				</div>
			</div>

			<div class="space-y-1 text-sm text-text-secondary">
				<div class="flex flex-col mt-2 gap-1">
					{#each education as item, index (index)}
						{#each item.entries as entry, index (index)}
							<AppCVEducationEntry label={entry.label} value={entry.value} />
						{/each}
					{/each}
				</div>
			</div>

			{#if item.scholarship}
				<div class="mt-4 flex justify-start">
					<span class="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
						{item.scholarship.name}
					</span>
				</div>
			{/if}
		</AppCVCard>
	{/each}
</div>
