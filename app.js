// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('status');

  if (!name || !email || !message) {
    status.textContent = 'Please complete all fields.';
    return;
  }

  const subject = encodeURIComponent('Website contact from ' + name);
  const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
  const mailto = 'mailto:your-email@example.com?subject=' + subject + '&body=' + body;

  status.textContent = 'Opening your email client...';
  window.location.href = mailto;
});
