<script lang="ts">
	import AppCVHeader from './AppCVHeader.svelte';
	import AppCVSections from './AppCVSections.svelte';
</script>

<div
	class="flex flex-col shadow-xl rounded-xl my-6 mx-auto border border-border min-w-full md:min-w-fit max-w-3xl overflow-hidden"
>
	<AppCVHeader />
	<AppCVSections />
</div>
