document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  header?.querySelector('.menu-toggle')
    ?.addEventListener('click', () => header.classList.toggle('active'));
});
