export function handleImageError(event: Event): void {
	const target = event.target as HTMLImageElement;
	if (target) {
		target.style.display = 'none';
	}
}
