<script lang="ts">
	import { handleImageError } from '$lib/utils';
	import AppCVCard from './AppCVCard.svelte';
	import AppCVCertificationEntry from './AppCVCertificationEntry.svelte';

	let { certifications } = $props();
</script>

<div class="space-y-6">
	{#each certifications as certification (certification.title)}
		<AppCVCard class="relative">
			<div class="flex-1">
				<h3 class="text-xl font-bold text-text-primary mb-1">
					{certification.title}
				</h3>
				<p class="text-sm text-text-secondary">
					{certification.date}
				</p>
			</div>
			<div class="absolute top-6 right-6 hidden sm:block">
				<img
					src={certification.logo}
					alt="{certification.issuer} logo"
					class="w-16 h-16 object-contain"
					onerror={handleImageError}
				/>
			</div>

			<div class="space-y-1 mt-4 text-sm text-text-secondary">
				<div class="flex flex-col mt-2 gap-1">
					{#each certification.entries as entry, index (index)}
						<AppCVCertificationEntry label={entry.label} value={entry.value} />
					{/each}
					<AppCVCertificationEntry
						label="Verify"
						value="View Certificate"
						href={certification.verifyLink}
					/>
				</div>
			</div>
		</AppCVCard>
	{/each}
</div>
