<script lang="ts">
	import { sections } from '$lib/cv.json';
	import AppCVLanguages from './AppCVLanguages.svelte';
	import AppCVSectionItems from './AppCVSectionItems.svelte';
	import AppCVSectionTitle from './AppCVSectionTitle.svelte';
	import AppCVSkills from './AppCVSkills.svelte';
	import AppCVTimeline from './AppCVTimeline.svelte';
	import AppCVExperience from './AppExperience.svelte';
</script>

<div class="flex flex-col gap-2 px-6">
	{#each sections as section (section.title)}
		<AppCVSectionTitle title={section.title} icon={section.icon} anchor={section.anchor} />
		<p class="text-text-secondary mb-2">{section.description}</p>
		{#if section.experience}
			<AppCVExperience experience={section.experience} />
		{:else if section.timeline}
			<AppCVTimeline timeline={section.timeline} />
		{:else if section.skills}
			<AppCVSkills skills={section.skills} />
		{:else if section.languages}
			<AppCVLanguages languages={section.languages} />
		{:else if section.items}
			<AppCVSectionItems items={section.items} />
		{/if}
	{/each}
</div>
