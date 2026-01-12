    // Mobile content toggle functionality
    const mobileContentToggle = document.getElementById('mobileContentToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');

    function toggleMobileSidebar() {
      sidebar.classList.toggle('mobile-open');
    }

    function closeMobileSidebar() {
      sidebar.classList.remove('mobile-open');
    }

    mobileContentToggle.addEventListener('click', toggleMobileSidebar);
    sidebarCloseBtn.addEventListener('click', closeMobileSidebar);

    // Resizable sidebar functionality (desktop only)
    const resizer = document.getElementById('resizer');
    let isResizing = false;

    resizer.addEventListener('mousedown', (e) => {
      isResizing = true;
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isResizing) return;
      
      const newWidth = e.clientX;
      if (newWidth >= 200 && newWidth <= 500) {
        sidebar.style.width = newWidth + 'px';
      }
    });

    document.addEventListener('mouseup', () => {
      if (isResizing) {
        isResizing = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }
    });

    // Toggle substeps
    function toggleSubsteps(id, element) {
      const substeps = document.getElementById(id);
      substeps.classList.toggle('collapsed');
      element.classList.toggle('collapsed');
    }

    // Progress bar
    const content = document.getElementById('content');
    const progressFill = document.getElementById('progressFill');

    content.addEventListener('scroll', () => {
      const scrollTop = content.scrollTop;
      const scrollHeight = content.scrollHeight - content.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      progressFill.style.width = scrollPercent + '%';
    });

    // Smooth scroll for sidebar links
    document.querySelectorAll('.sidebar a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

// Initialize all video toggles with lazy loading
document.querySelectorAll('.video-toggle-btn').forEach(btn => {
  const containerId = btn.getAttribute('data-target');
  const container = document.getElementById(containerId);
  
  btn.addEventListener('click', () => {
    const isCurrentlyExpanded = container.classList.contains('expanded');
    
    if (!isCurrentlyExpanded) {
      // Lazy load iframe when expanding
      const iframe = container.querySelector('iframe[data-src]');
      if (iframe && !iframe.src) {
        iframe.src = iframe.getAttribute('data-src');
        iframe.removeAttribute('data-src');
      }
    }
    
    container.classList.toggle('expanded');
    btn.classList.toggle('collapsed');
    
    const isExpanded = container.classList.contains('expanded');
    const text = btn.querySelector('.toggle-text');
    
    if (isExpanded) {
      text.textContent = 'Hide Video';
    } else {
      text.textContent = 'Show Video';
    }
  });
});