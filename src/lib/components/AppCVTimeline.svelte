<script lang="ts">
	let { timeline } = $props();

	function getCurrentYear(): number {
		return new Date().getFullYear();
	}

	function getTimelineEndYear(): number {
		return Math.max(timeline.endYear, getCurrentYear());
	}

	function getPeriodWidth(start: string, end: string): number {
		const startYear = parseInt(start.split('-')[0]);
		const endYear = parseInt(end.split('-')[0]);
		const startMonth = parseInt(start.split('-')[1]);
		const endMonth = parseInt(end.split('-')[1]);

		const startDate = startYear + startMonth / 12;
		const endDate = endYear + endMonth / 12;

		return ((endDate - startDate) / (getTimelineEndYear() - timeline.startYear)) * 100;
	}

	function getPeriodLeft(start: string): number {
		const startYear = parseInt(start.split('-')[0]);
		const startMonth = parseInt(start.split('-')[1]);
		const startDate = startYear + startMonth / 12;

		return ((startDate - timeline.startYear) / (getTimelineEndYear() - timeline.startYear)) * 100;
	}

	function generateYears(): number[] {
		const years = [];
		for (let year = timeline.startYear; year <= getTimelineEndYear(); year++) {
			years.push(year);
		}
		return years;
	}
</script>

<div class="bg-background overflow-x-auto">
	<div class="relative min-w-[600px]">
		<div class="relative">
			<div class="flex">
				{#each generateYears() as year, index (year)}
					<div
						class="flex-1 text-center text-xs font-medium text-text-secondary border-l border-border relative py-1 min-w-10 {index %
							2 ===
						0
							? 'bg-background-secondary'
							: ''} {year === getTimelineEndYear() ? 'bg-accent/10' : ''}"
					>
						{year}
					</div>
				{/each}
			</div>

			<div class="relative">
				<div class="absolute inset-0 flex pointer-events-none">
					{#each generateYears() as year, index (year)}
						<div
							class="flex-1 border-l border-border min-w-10 {index % 2 === 0
								? 'bg-background-secondary'
								: ''}"
						></div>
					{/each}
				</div>

				<div class="relative space-y-2 py-4">
					{#each timeline.roles as role, index (role.name)}
						<div class="relative h-8 {index % 2 === 1 ? 'bg-transparent' : ''} rounded px-1">
							{#each role.periods as period (period.start + period.end)}
								<div
									class="absolute h-6 rounded flex items-center justify-center text-[10px] font-medium text-white shadow-sm cursor-pointer hover:opacity-80 transition-opacity min-w-10"
									style="
										left: {getPeriodLeft(period.start)}%;
										width: {getPeriodWidth(period.start, period.end)}%;
										background-color: {role.color};
									"
									title="{role.name}: {period.duration}"
								>
									{period.duration}
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
			{#each timeline.roles as role (role.name)}
				<div class="flex items-center gap-2 min-w-0">
					<div
						class="w-3 h-3 rounded-full flex-shrink-0"
						style="background-color: {role.color};"
					></div>
					<span class="text-sm font-medium dark:text-white">{role.name}</span>
					<span
						class="text-xs text-text-secondary bg-background-secondary px-2 py-1 rounded flex-shrink-0"
					>
						{role.totalDuration}
					</span>
				</div>
			{/each}
		</div>
	</div>
</div>
