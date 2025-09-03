export const onClickOutside = (element:HTMLElement, callback: () => void) => {
  document.addEventListener('click', e => {
    if (!element.contains(e.target as HTMLElement)) callback();
  });
};