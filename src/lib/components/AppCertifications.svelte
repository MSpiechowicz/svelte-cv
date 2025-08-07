<script lang="ts">
	import AppCertificationEntry from './AppCertificationEntry.svelte';

	let { certifications } = $props();
</script>

<div class="bg-background w-full">
	<div class="space-y-6">
		{#each certifications as certification (certification.title)}
			<div class="flex items-start justify-between gap-6">
				<div class="flex-1">
					<h3 class="text-lg font-semibold text-text-primary">
						{certification.title}
					</h3>

					<div class="space-y-1 text-sm text-text-secondary">
						<h4 class="text-sm">{certification.date}</h4>

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

				<div class="flex-shrink-0">
					<img
						src={certification.logo}
						alt="{certification.issuer} logo"
						class="w-16 h-16 object-contain rounded-lg bg-gray-50 p-2"
						onerror={(e) => {
							const target = e.target as HTMLImageElement;
							if (target) {
								target.style.display = 'none';
							}
						}}
					/>
				</div>
			</div>
		{/each}
	</div>
</div>
