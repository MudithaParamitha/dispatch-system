document.addEventListener('DOMContentLoaded', function () {

  const sidebar = document.querySelector('.sidebar');
  const btnSidebar = document.getElementById('btnSidebar');

  if (sidebar && btnSidebar) {
    btnSidebar.addEventListener('click', function () {
      document.body.classList.toggle('collapse');
    });
  }

  function clearAllHighlights() {
    document.querySelectorAll('.menu-item, .menu-link, .submenu-item')
      .forEach(el => el.classList.remove('active'));
  }

  const ongoingToggle = document.getElementById('ongoingToggle');
  if (ongoingToggle) {
    ongoingToggle.addEventListener('click', function (e) {
      e.stopPropagation();

      const hasSub = this.closest('.has-sub');
      if (!hasSub) return;

      hasSub.classList.toggle('open');
      clearAllHighlights();
      this.classList.add('active');
    });
  }

  document.querySelectorAll('.submenu-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      clearAllHighlights();
      this.classList.add('active');
    });
  });

  document.querySelectorAll('.menu-item:not(.has-sub)').forEach(item => {
    item.addEventListener('click', function () {
      clearAllHighlights();
      this.classList.add('active');

      document.querySelectorAll('.has-sub')
        .forEach(sub => sub.classList.remove('open'));
    });
  });

});

window.addEventListener('load', function () {
  const currentPage = window.location.pathname;

  document.querySelectorAll('.menu-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && currentPage.includes(href)) {
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const btnLogout = document.getElementById('btnLogout');

  if (btnLogout) {
    btnLogout.addEventListener('click', function (e) {
      e.preventDefault();
      localStorage.clear();

      const currentPath = window.location.pathname;
      const loginPath = currentPath.includes('/pages/')
        ? 'login.html'
        : 'pages/login.html';

      window.location.href = loginPath;
    });
  }
});