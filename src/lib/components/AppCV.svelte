<script lang="ts">
	import AppCVHeader from './AppCVHeader.svelte';
	import AppCVSections from './AppCVSections.svelte';

	const currentDate = new Date();
	const consentValidUntil = new Date(currentDate.getFullYear(), 11, 31);
</script>

<div
	class="flex flex-col shadow-xl rounded-xl my-6 mx-auto border border-border min-w-full md:min-w-fit max-w-3xl overflow-hidden"
>
	<AppCVHeader />
	<AppCVSections />
	<div class="flex flex-col my-6 items-center justify-center gap-1 px-4">
		<p class="text-center font-extralight text-xs">
			I consent to the processing of my personal data for the purposes of current and future
			recruitment processes.
		</p>
		<p class="text-center font-extralight text-xs">
			This consent is valid until {consentValidUntil.toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric'
			})}.
		</p>
	</div>
</div>
