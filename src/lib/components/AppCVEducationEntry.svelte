<script lang="ts">
	let { label, value } = $props();
</script>

{#if value}
	<div class="flex items-start gap-1.5">
		<span class="font-bold">{label}:</span>
		<span>{value}</span>
	</div>
{/if}
