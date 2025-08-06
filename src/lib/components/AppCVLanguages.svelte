<script lang="ts">
	import { IconStar, IconStarFilled } from '@tabler/icons-svelte';

	let { languages } = $props();
</script>

<div class="bg-background w-full">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each languages as language (language.name)}
			<div class="border border-border/30 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
				<div class="flex items-center justify-between mb-2">
					<h3 class="text-lg font-semibold text-text-primary">{language.name}</h3>
					<span class="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
						{language.level}
					</span>
				</div>

				<div class="flex items-center gap-2 mb-3">
					<div class="flex items-center gap-1">
						{#each Array.from({ length: 5 }, (_, index) => index) as index (index)}
							{#if index < language.proficiency}
								<IconStarFilled class="w-4 h-4 text-accent" />
							{:else}
								<IconStar class="w-4 h-4 text-gray-300" />
							{/if}
						{/each}
					</div>
					<span class="text-xs text-text-secondary">{language.proficiency}/5</span>
				</div>

				<p class="text-sm text-text-secondary leading-relaxed">
					{language.description}
				</p>
			</div>
		{/each}
	</div>
</div>
