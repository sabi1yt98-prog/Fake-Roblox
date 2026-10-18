document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-links li');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });

  const gameCards = document.querySelectorAll('.game-card');
  gameCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.game-title').textContent;
      alert(`Launching "${title}"... (Simulated game session)`);
    });
  });
});
