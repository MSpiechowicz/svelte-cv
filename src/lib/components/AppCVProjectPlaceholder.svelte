<script lang="ts">
	let { index } = $props();
</script>

<div class="w-full h-full bg-background-secondary border-r border-border flex items-center justify-center">
	<svg
		width="120"
		height="120"
		viewBox="0 0 120 120"
		class="text-accent"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="10"
			y="10"
			width="100"
			height="100"
			rx="8"
			stroke="currentColor"
			stroke-width="2"
			fill="none"
		/>

		<circle
			cx="60"
			cy="45"
			r="18"
			fill="currentColor"
		/>

		<text
			x="60"
			y="46"
			text-anchor="middle"
			dominant-baseline="middle"
			fill="white"
			font-size="16"
			font-weight="bold"
		>
			{index + 1}
		</text>

		<rect
			x="25"
			y="75"
			width="70"
			height="4"
			rx="2"
			fill="currentColor"
		/>
		<rect
			x="25"
			y="85"
			width="50"
			height="4"
			rx="2"
			fill="currentColor"
		/>
		<rect
			x="25"
			y="95"
			width="60"
			height="4"
			rx="2"
			fill="currentColor"
		/>
	</svg>
</div>
