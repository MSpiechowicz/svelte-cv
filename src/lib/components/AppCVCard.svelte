<script lang="ts">
	let { class: additionalClass = '', children } = $props();
</script>

<div
	class="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow {additionalClass}"
>
	{@render children()}
</div>
