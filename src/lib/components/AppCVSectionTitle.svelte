<script lang="ts">
	import AppCVSectionIcon from './AppCVSectionIcon.svelte';

	let { title, icon, anchor } = $props();
</script>

<div id={anchor} class="mt-6 px-4 py-2 border-l-4 border-accent mb-2">
	<h2 class="text-xl font-bold text-accent flex gap-2 uppercase">
		{#if icon}
			<AppCVSectionIcon {icon} />
		{/if}
		{title}
	</h2>
	<div class="h-px bg-accent/30 mt-1"></div>
</div>
