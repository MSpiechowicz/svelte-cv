<script lang="ts">
	interface ExperienceItem {
		title: string;
		subtitle?: string;
		company: string;
		logo?: string;
		startDate: string;
		endDate?: string;
		duration?: string;
		bullets: string[];
		languages?: string;
		approach?: string;
		keywords?: string;
		tools?: string;
	}

	let { experience }: { experience: ExperienceItem[] } = $props();
</script>

<div class="space-y-6">
	{#each experience as item (item.title + item.company)}
		<div
			class="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
		>
			<div class="flex justify-between items-start mb-4">
				<div class="flex-1">
					<h3 class="text-xl font-bold text-text-primary mb-1">
						{item.title}
					</h3>
					{#if item.subtitle}
						<p class="text-md font-semibold mb-1">
							{item.subtitle}
						</p>
					{/if}
					<p class="text-sm text-text-secondary">
						{item.startDate} - {item.endDate || 'Present'}
						{#if item.duration}
							({item.duration})
						{/if}
					</p>
				</div>
				{#if item.logo}
					<div class="hidden sm:block ml-4 flex-shrink-0">
						<img src={item.logo} alt="{item.company} logo" class="w-16 h-16 object-contain" />
					</div>
				{/if}
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 max-w-[800px]">
					{#each item.bullets as bullet (bullet)}
						<div class="flex items-start gap-2">
							<div class="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
							<p class="text-sm text-text-primary leading-relaxed">
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{@html bullet}
							</p>
						</div>
					{/each}
			</div>

			{#if item.keywords}
				<div
					class="mt-6 bg-background-secondary rounded-lg border border-border overflow-hidden"
				>
					<div class="px-4 py-2 bg-accent border-t border-l border-r border-accent">
						<h4 class="text-xs font-semibold text-white uppercase tracking-wide">Keywords</h4>
					</div>
					<div class="p-4">
						<div class="flex flex-wrap gap-2">
							{#each item.keywords.split(',').map((k) => k.trim()) as keyword (keyword)}
								<span
									class="inline-flex items-center px-3 py-1.5 bg-background/80 rounded-full border border-accent/30 text-xs text-text-primary font-medium"
								>
									{keyword}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
