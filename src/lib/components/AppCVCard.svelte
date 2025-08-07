<script lang="ts">
	let { class: className = '', children } = $props();
</script>

<div class="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow {className}">
	{@render children()}
</div>
