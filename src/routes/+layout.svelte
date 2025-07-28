<script lang="ts">
	import { themeStore } from '$lib/stores/themeStore.svelte';
	import '../app.css';

	let { children } = $props();

	$effect(() => {
		themeStore.init();
	});
</script>

{@render children()}
