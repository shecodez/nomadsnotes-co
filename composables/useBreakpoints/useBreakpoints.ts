export function useBreakpoints() {
  let windowWidth = ref(1);

  const handleWindowSizeChange = () => (windowWidth.value = window.innerWidth);
  //let isResizing = false;
  //const THROTTLE_TIME = 500; //ms
  onMounted(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    // window.addEventListener("resize", () => {
    //   if (!isResizing) {
    //     isResizing = true;
    //     handleWindowSizeChange();

    //     setTimeout(() => {
    //       isResizing = false;
    //     }, THROTTLE_TIME);
    //   }
    // });
    handleWindowSizeChange();
  });
  onUnmounted(() => {
    window.removeEventListener("resize", handleWindowSizeChange);
  });

  const screen_size = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  const breakpoint = computed(() => {
    if (windowWidth.value < screen_size.sm) return "sm";
    if (
      windowWidth.value > screen_size.sm &&
      windowWidth.value < screen_size.md
    )
      return "md";
    if (
      windowWidth.value > screen_size.md &&
      windowWidth.value < screen_size.lg
    )
      return "lg";
    if (windowWidth.value > screen_size.xl) return "xl";
  });

  const window_width = computed(() => windowWidth.value);

  return { window_width, breakpoint, screen_size };
}
