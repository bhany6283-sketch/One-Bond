// Basic JS for the demo site (no backend)
// Handle contact form locally and show message
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const mobile = document.getElementById('mobile').value.trim();
      const email = document.getElementById('email').value.trim();
      const address = document.getElementById('address').value.trim();
      const message = document.getElementById('message').value.trim();

      const formMessage = document.getElementById('formMessage');
      formMessage.hidden = false;
      formMessage.textContent = 'شكراً يا باشا، تم استلام رسالتك! هنرد عليك قريباً.';

      // For now we just log the values (in real site send to backend or use Formspree)
      console.log({name, mobile, email, address, message});
      form.reset();
    });
  }

  // Add-to-cart demo
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('أضيف المنتج إلى السلة (تجريبي)');
    });
  });
});
