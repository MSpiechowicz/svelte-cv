<script lang="ts">
	let { label, value, href = null } = $props();
</script>

{#if value}
	<div class="flex items-start gap-1.5">
		<span class="font-bold">{label}:</span>
		{#if href}
			<a
				{href}
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline hover:underline-offset-4"
			>
				{value}
			</a>
		{:else}
			<span>{value}</span>
		{/if}
	</div>
{/if}
