<script lang="ts">
	import { sections } from '$lib/cv.json';
	import AppCVCertifications from './AppCVCertifications.svelte';
	import AppCVEducation from './AppCVEducation.svelte';
	import AppCVExperience from './AppCVExperience.svelte';
	import AppCVLanguages from './AppCVLanguages.svelte';
	import AppCVSectionTitle from './AppCVSectionTitle.svelte';
	import AppCVSkills from './AppCVSkills.svelte';
	import AppCVSummary from './AppCVSummary.svelte';
	import AppCVTimeline from './AppCVTimeline.svelte';
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
		{:else if section.education}
			<AppCVEducation education={section.education} />
		{:else if section.certifications}
			<AppCVCertifications certifications={section.certifications} />
		{:else if section.summary}
			<AppCVSummary summary={section.summary} summaryIcon={section.summaryIcon} />
		{/if}
	{/each}
</div>
