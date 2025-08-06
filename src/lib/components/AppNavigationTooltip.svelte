<script lang="ts">
	let { text } = $props();
</script>

<div
	class="absolute left-full ml-2 px-2 py-1 top-1 bg-background-header text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none"
>
	{text}
</div>
