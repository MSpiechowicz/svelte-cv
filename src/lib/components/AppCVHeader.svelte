<script lang="ts">
	import { header } from '$lib/cv.json';
	import ManAvatar from '$lib/static/ManAvatar.svelte';
	import WomanAvatar from '$lib/static/WomanAvatar.svelte';
	import {
		IconAmpersand,
		IconMailFilled,
		IconMapPinFilled,
		IconPhoneFilled,
		IconWorldWww
	} from '@tabler/icons-svelte';

	let isXlScreen = $state(false);

	function getWebsiteUrl(website: string) {
		if (website.startsWith('http')) {
			return website;
		}
		return 'https://' + website;
	}

	function updateScreenSize() {
		isXlScreen = window.innerWidth >= 1280;
	}

	$effect(() => {
		updateScreenSize();
		window.addEventListener('resize', updateScreenSize);
		return () => {
			window.removeEventListener('resize', updateScreenSize);
		};
	});
</script>

<div class="flex flex-col gap-4 bg-background-header w-full p-6">
	<div
		class="flex {header.avatarPosition === 'left'
			? 'md:flex-row'
			: 'md:flex-row-reverse'} gap-6 justify-start items-center"
	>
		<div
			class="w-28 h-28 bg-avatar-background rounded-full justify-center items-center overflow-hidden p-1 hidden md:flex border-2 border-avatar-ring"
		>
			{#if header.gender === 'male'}
				<ManAvatar fillColor="var(--color-avatar)" customClass="w-fit mt-2" />
			{:else}
				<WomanAvatar fillColor="var(--color-avatar)" customClass="w-fit mt-2" />
			{/if}
		</div>
		<div class="flex flex-col gap-1">
			<h1 class="text-4xl uppercase font-bold text-text-header">{header.name}</h1>
			<div class="flex flex-col md:flex-row justify-start gap-0 md:gap-1 items-start">
				{#each header.title as title, index (index)}
					{#if index < 2 || isXlScreen}
						<h2
							class="text-xl uppercase text-text-header-secondary flex flex-row justify-start gap-1 items-center"
						>
							{#if index > 0}
								<IconAmpersand class="text-text-header-secondary" size={16} />
							{/if}
							{title}
						</h2>
					{/if}
				{/each}
			</div>
			<div class="flex flex-col md:flex-row justify-start items-start text-sm mt-2 gap-1 md:gap-4">
				<a
					href={'mailto:' + header.email}
					target="_blank"
					class="text-text-header-secondary flex flex-row justify-center items-center gap-2"
				>
					<IconMailFilled size={16} />
					{header.email}
				</a>
				<a
					href={'tel:' + header.phone}
					target="_blank"
					class="text-text-header-secondary flex flex-row justify-center items-center gap-2"
				>
					<IconPhoneFilled size={16} />
					{header.phone}
				</a>
				<a
					href={getWebsiteUrl(header.website)}
					target="_blank"
					rel="noopener noreferrer"
					class="text-text-header-secondary flex flex-row justify-center items-center gap-2"
				>
					<IconWorldWww size={16} />
					{header.website}
				</a>
				<a
					href={'https://www.google.com/maps/search/' + header.location}
					target="_blank"
					rel="noopener noreferrer"
					class="text-text-header-secondary flex flex-row justify-center items-center gap-2"
				>
					<IconMapPinFilled size={16} />
					{header.location}
				</a>
			</div>
		</div>
	</div>
</div>
