<script lang="ts">
	let { icon, additionalClass = '', size = 24 } = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	let IconComponent: any = $state(null);

	$effect(() => {
		if (icon) {
			import('@tabler/icons-svelte').then((module) => {
				IconComponent = module[icon as keyof typeof module];
			}).catch(() => {
				console.warn(`Icon ${icon} not found in @tabler/icons-svelte`);
			});
		}
	});
</script>

{#if IconComponent}
	<IconComponent size={size} class="text-accent {additionalClass}" />
{/if}
