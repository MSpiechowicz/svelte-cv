<script lang="ts">
	import AppCVSummaryItems from './AppCVSummaryItems.svelte';

	let { summary, summaryIcon } = $props();
</script>

<AppCVSummaryItems summary={summary} summaryIcon={summaryIcon} />
