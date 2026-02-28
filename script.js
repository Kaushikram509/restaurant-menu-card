function filterCategory(category) {
  const sections = document.querySelectorAll('.menu-category');
  sections.forEach(sec => {
    if (category === 'all' || sec.dataset.category === category) {
      sec.style.display = 'block';
    } else {
      sec.style.display = 'none';
    }
  });
}
