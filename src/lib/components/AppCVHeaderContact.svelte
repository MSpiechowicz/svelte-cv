<script lang="ts">
	import { header } from '$lib/cv.json';
	import {
		IconMailFilled,
		IconMapPinFilled,
		IconPhoneFilled,
		IconWorldWww
	} from '@tabler/icons-svelte';

	function getWebsiteUrl(website: string) {
		if (website.startsWith('http')) {
			return website;
		}
		return 'https://' + website;
	}

	const items = [
		{
			icon: IconMailFilled,
			href: 'mailto:' + header.email,
			target: '_blank',
			label: header.email
		},
		{
			icon: IconPhoneFilled,
			href: 'tel:' + header.phone,
			target: '_blank',
			label: header.phone
		},
		{
			icon: IconWorldWww,
			href: getWebsiteUrl(header.website),
			target: '_blank',
			rel: 'noopener noreferrer',
			label: header.website
		},
		{
			icon: IconMapPinFilled,
			href: 'https://www.google.com/maps/search/' + header.location,
			target: '_blank',
			rel: 'noopener noreferrer',
			label: header.location
		}
	];
</script>

<div class="flex flex-col md:flex-row justify-start items-start text-sm mt-2 gap-1 md:gap-4">
	{#each items as item, index (index)}
		<a
			href={item.href}
			target={item.target}
			rel={item.rel}
			class="text-text-header-secondary flex flex-row justify-center items-center gap-2 hover:underline hover:underline-offset-4"
		>
			<item.icon size={16} />
			{item.label}
		</a>
	{/each}
</div>
