<script lang="ts">
	import AppCertificationEntry from './AppCertificationEntry.svelte';

	let { certifications } = $props();
</script>

<div class="space-y-6">
	{#each certifications as certification (certification.title)}
		<div class="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
			<div class="flex justify-between items-start mb-4">
				<div class="flex-1">
					<h3 class="text-xl font-bold text-text-primary mb-1">
						{certification.title}
					</h3>
					<p class="text-md font-semibold mb-1 text-text-secondary">
						{certification.issuer}
					</p>
					<p class="text-sm text-text-secondary">
						{certification.date}
					</p>
				</div>
				<div class="sm:block ml-4 flex-shrink-0">
					<img
						src={certification.logo}
						alt="{certification.issuer} logo"
						class="w-16 h-16 object-contain"
						onerror={(e) => {
							const target = e.target as HTMLImageElement;
							if (target) {
								target.style.display = 'none';
							}
						}}
					/>
				</div>
			</div>

			<div class="space-y-1 text-sm text-text-secondary">
				<div class="flex flex-col mt-2 gap-1">
					<AppCertificationEntry
						label="Exam"
						value={certification.exam}
					/>
					<AppCertificationEntry
						label="Credential ID"
						value={certification.credentialId}
					/>
					<AppCertificationEntry
						label="Certification Number"
						value={certification.certificationNumber}
					/>
					<AppCertificationEntry
						label="Verify"
						value="View Certificate"
						href={certification.verifyLink}
					/>
				</div>
			</div>
		</div>
	{/each}
</div>
