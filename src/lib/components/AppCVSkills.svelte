<script lang="ts">
	import { IconStar, IconStarFilled } from '@tabler/icons-svelte';

	let { skills } = $props();
</script>

<div class="bg-background w-full">
	<div class="space-y-4">
		{#each skills.categories as category (category.name)}
			<div class="space-y-2">
				<h3 class="text-lg font-semibold text-text-primary">
					{category.name}
				</h3>

				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
					{#each category.mainSkills as skill (skill.name)}
						<div
							class="flex items-center justify-between p-2 border border-border/30 rounded shadow-sm hover:shadow-md transition-shadow"
						>
							<span class="text-sm font-medium text-text-primary">{skill.name}</span>
							<div class="flex items-center gap-2">
								<div class="flex items-center gap-1">
									{#each Array.from({ length: 5 }, (_, index) => index) as index (index)}
										{#if index < skill.rating}
											<IconStarFilled class="w-4 h-4 text-accent" />
										{:else}
											<IconStar class="w-4 h-4 text-gray-300" />
										{/if}
									{/each}
								</div>
								<span class="text-xs text-text-secondary">{skill.rating}/5</span>
							</div>
						</div>
					{/each}
				</div>

				{#if category.additionalSkills && category.additionalSkills.length > 0}
					<div class="max-w-[70ch]">
						<span class="text-sm font-bold text-text-secondary">Also: </span>
						<span class="text-sm text-text-secondary">
							{category.additionalSkills.slice(0, category.additionalSkillsCut || 10).join(', ')}
							{#if category.additionalSkills.length > (category.additionalSkillsCut || 10)}
								<span class="text-xs font-light text-text-secondary">
									+ {category.additionalSkills.length - (category.additionalSkillsCut || 10)} more
								</span>
							{/if}
						</span>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
