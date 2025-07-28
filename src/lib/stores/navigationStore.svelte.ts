export const navigationStore = $state({
  isOpen: false,
  toggle: () => {
    navigationStore.isOpen = !navigationStore.isOpen;
  }
});
