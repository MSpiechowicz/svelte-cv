<script lang="ts">
	let { timeline } = $props();

	let tooltipVisible = $state(false);
	let tooltipText = $state('');
	let tooltipColor = $state('');
	let tooltipX = $state(0);
	let tooltipY = $state(0);
	let tooltipTimeout: number;

	function getCurrentYear(): number {
		return new Date().getFullYear();
	}

	function getTimelineEndYear(): number {
		return Math.max(timeline.endYear, getCurrentYear());
	}

	function getCurrentDate(): { year: number; month: number } {
		const now = new Date();
		return { year: now.getFullYear(), month: now.getMonth() + 1 };
	}

	function parseDate(dateString: string): { year: number; month: number } {
		if (dateString === 'current') {
			return getCurrentDate();
		}
		const [year, month] = dateString.split('-').map(Number);
		return { year, month };
	}

	function calculateDuration(start: string, end: string): string {
		const startDate = parseDate(start);
		const endDate = parseDate(end);

		const startYear = startDate.year;
		const startMonth = startDate.month;
		const endYear = endDate.year;
		const endMonth = endDate.month;

		let years = endYear - startYear;
		let months = endMonth - startMonth;

		if (months < 0) {
			years--;
			months += 12;
		}

		if (years === 0) {
			return `${months}m`;
		} else if (months === 0) {
			return `${years}y`;
		} else {
			return `${years}y ${months}m`;
		}
	}

	function calculateTotalDuration(periods: Array<{ start: string; end: string }>): string {
		let totalYears = 0;
		let totalMonths = 0;

		for (const period of periods) {
			const startDate = parseDate(period.start);
			const endDate = parseDate(period.end);

			const startYear = startDate.year;
			const startMonth = startDate.month;
			const endYear = endDate.year;
			const endMonth = endDate.month;

			let years = endYear - startYear;
			let months = endMonth - startMonth;

			if (months < 0) {
				years--;
				months += 12;
			}

			totalYears += years;
			totalMonths += months;
		}

		totalYears += Math.floor(totalMonths / 12);
		totalMonths = totalMonths % 12;

		if (totalYears === 0) {
			return `${totalMonths}m`;
		} else if (totalMonths === 0) {
			return `${totalYears}y`;
		} else {
			return `${totalYears}y ${totalMonths}m`;
		}
	}

	function getPeriodWidth(start: string, end: string): number {
		const startDate = parseDate(start);
		const endDate = parseDate(end);

		const startDecimal = startDate.year + (startDate.month - 1) / 12;
		const endDecimal = endDate.year + (endDate.month - 1) / 12;

		return ((endDecimal - startDecimal) / (getTimelineEndYear() - timeline.startYear + 1)) * 100;
	}

	function getPeriodLeft(start: string): number {
		const startDate = parseDate(start);
		const startDecimal = startDate.year + (startDate.month - 1) / 12;

		return ((startDecimal - timeline.startYear) / (getTimelineEndYear() - timeline.startYear + 1)) * 100;
	}

	function generateYears(): number[] {
		const years = [];
		for (let year = timeline.startYear; year <= getTimelineEndYear(); year++) {
			years.push(year);
		}
		return years;
	}

	function showTooltip(event: MouseEvent, roleName: string, color: string) {
		clearTimeout(tooltipTimeout);
		tooltipTimeout = setTimeout(() => {
			tooltipText = roleName;
			tooltipColor = color;
			tooltipX = event.clientX;
			tooltipY = event.clientY;
			tooltipVisible = true;
		}, 500);
	}

	function hideTooltip() {
		clearTimeout(tooltipTimeout);
		tooltipVisible = false;
	}
</script>

<div class="bg-background overflow-x-auto">
	{#if tooltipVisible}
		<div
			class="fixed z-40 px-3 py-2 text-xs font-medium text-white rounded shadow-lg pointer-events-none"
			style="
				left: {tooltipX + 10}px;
				top: {tooltipY - 40}px;
				background-color: {tooltipColor};
			"
		>
			{tooltipText}
		</div>
	{/if}
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
						{#if role.periods && role.periods.length > 0}
							<div class="relative h-8 {index % 2 === 1 ? 'bg-transparent' : ''} rounded px-1">
								{#each role.periods as period (period.start + period.end)}
									<button
										class="absolute h-6 rounded flex items-center justify-center text-xs font-medium text-white shadow-sm cursor-pointer hover:opacity-80 transition-opacity min-w-10"
										style="
											left: {getPeriodLeft(period.start)}%;
											width: {getPeriodWidth(period.start, period.end)}%;
											background-color: {role.color};
										"
										onmouseenter={(e) => showTooltip(e, role.name, role.color)}
										onmouseleave={hideTooltip}
										aria-label="{role.name} - {calculateDuration(period.start, period.end)}"
									>
										{calculateDuration(period.start, period.end)}
									</button>
								{/each}
							</div>
						{/if}
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
						{calculateTotalDuration(role.periods)}
					</span>
				</div>
			{/each}
		</div>
	</div>
</div>
