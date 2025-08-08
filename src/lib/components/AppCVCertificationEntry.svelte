<script lang="ts">
	let { label, value, href = null } = $props();
</script>

{#if value}
	<div class="flex items-start gap-1.5">
		<span class="font-bold whitespace-nowrap flex-shrink-0">{label}:</span>
		{#if href}
			<a
				{href}
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline hover:underline-offset-4 break-words"
			>
				{value}
			</a>
		{:else}
			<span class="break-words truncate">{value}</span>
		{/if}
	</div>
{/if}
