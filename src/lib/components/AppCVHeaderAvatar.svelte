<script lang="ts">
	import { header } from '$lib/cv.json';
	import ManAvatar from '$lib/static/ManAvatar.svelte';
	import WomanAvatar from '$lib/static/WomanAvatar.svelte';
	import { handleImageError } from '$lib/utils';
</script>

<div
	class="w-28 h-auto bg-avatar-background rounded-full justify-center items-center overflow-hidden hidden lg:flex border-2 border-avatar-ring"
>
	{#if header.avatar}
		<img
			src={header.avatar}
			alt="{header.name} avatar"
			class="w-full h-full object-cover"
			onerror={handleImageError}
		/>
	{:else}
		{#if header.gender === 'male'}
			<ManAvatar fillColor="var(--color-avatar)" customClass="w-fit mt-2" />
		{:else}
			<WomanAvatar fillColor="var(--color-avatar)" customClass="w-fit mt-2" />
		{/if}
	{/if}
</div>
