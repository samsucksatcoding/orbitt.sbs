const footer = document.querySelector('.footer');
const toggleBtn = footer.querySelector('.footer-toggle');
const toggleText = footer.querySelector('.toggle-text');

toggleBtn.addEventListener('click', () => {
  const isOpen = footer.classList.toggle('open');
  toggleBtn.setAttribute('aria-expanded', isOpen);

  toggleText.style.opacity = '0';

  setTimeout(() => {
    toggleText.textContent = isOpen ? 'Click to hide more' : 'Click to show more';
    
    const currentIcon = toggleBtn.querySelector('.iconify');
    if (currentIcon) {
      currentIcon.outerHTML = `<span class="iconify" data-icon="${isOpen ? 'fa6-solid:chevron-down' : 'fa6-solid:chevron-up'}"></span>`;
    }

    toggleText.style.opacity = '1';
  }, 250);
});