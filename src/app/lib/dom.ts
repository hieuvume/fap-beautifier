export function getHeight(element: HTMLElement): number {
  if (!element) return 0;

  const styles = window.getComputedStyle(element);

  const height = element.getBoundingClientRect().height;
  const marginTop = parseFloat(styles.marginTop);
  const marginBottom = parseFloat(styles.marginBottom);

  const totalHeight = height + marginTop + marginBottom;

  return totalHeight;
}
