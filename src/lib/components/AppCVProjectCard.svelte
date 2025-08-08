<script lang="ts">
	import AppCVProjectPlaceholder from './AppCVProjectPlaceholder.svelte';

	let { project, index = 0 } = $props();
</script>

<div class="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
	<div class="flex flex-col md:flex-row">
		<div class="hidden md:block md:w-1/4">
			<AppCVProjectPlaceholder {index} />
		</div>
		<div class="flex-1 p-6">
			<div class="mb-1">
				<h3 class="text-xl font-bold text-text-primary">{project.title}</h3>
			</div>

			<p class="text-text-secondary mb-4 leading-relaxed !max-w-[22ch] sm:!max-w-[40ch] lg:!max-w-[60ch] xl:!max-w-[70ch]">
				{project.description}
			</p>

			<div class="flex flex-wrap gap-2">
				{#each project.technologies as tech (tech)}
					<span class="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
						{tech}
					</span>
				{/each}
			</div>
		</div>
	</div>

	<div class="absolute top-0 right-0 flex flex-col gap-1">
		{#if project.github}
			<a
				href={project.github}
				target="_blank"
				rel="noopener noreferrer"
				class="bg-accent text-white text-xs font-medium px-4 py-2 hover:bg-accent/90 transition-colors shadow-sm"
				style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 10% 50%);"
			>
				View Code
			</a>
		{/if}
		{#if project.demo}
			<a
				href={project.demo}
				target="_blank"
				rel="noopener noreferrer"
				class="bg-accent/80 text-white text-xs font-medium px-4 py-2 hover:bg-accent/70 transition-colors shadow-sm"
				style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 10% 50%); margin-top: -1px;"
			>
				Live Demo
			</a>
		{/if}
	</div>
</div>
