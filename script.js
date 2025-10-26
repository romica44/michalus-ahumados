// Basic enhancements
document.getElementById('wapp')?.addEventListener('click', () => {
  // rudimentary conversion to WhatsApp with current URL as ref
  const u = new URL(location.href);
  const text = `Hola Michaluz Ahumados, vi su web (${u.host}) y quiero hacer un pedido.`;
  const link = `https://wa.me/5490000000000?text=${encodeURIComponent(text)}`;
  window.open(link, '_blank');
});