export const themeStore = $state({
	isDark: false,
	toggle: () => {
		themeStore.isDark = !themeStore.isDark;
		updateTheme();
	},
	init: () => {
		// Only run on browser side
		if (typeof window === 'undefined') return;

		// Check localStorage for saved theme preference
		const savedTheme = localStorage.getItem('theme');

		if (savedTheme === 'dark') {
			themeStore.isDark = true;
		} else if (savedTheme === 'light') {
			themeStore.isDark = false;
		} else {
			// Check system preference
			themeStore.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}

		updateTheme();
	}
});

function updateTheme() {
	// Only run on browser side
	if (typeof window === 'undefined') return;

	if (themeStore.isDark) {
		document.documentElement.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	} else {
		document.documentElement.classList.remove('dark');
		localStorage.setItem('theme', 'light');
	}
}
