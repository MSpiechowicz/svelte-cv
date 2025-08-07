<script lang="ts">
	import AppCVProjectCard from './AppCVProjectCard.svelte';

	let { projects } = $props();
</script>

<div class="space-y-6">
	{#each projects as project, index (project.title)}
		<AppCVProjectCard {project} {index} />
	{/each}
</div>
