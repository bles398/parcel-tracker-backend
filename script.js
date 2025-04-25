
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const address = this.address.value.trim();
  const item = this.item.value.trim();
  const method = this.method.value.trim();
  const trackingNumber = 'TRX-' + Math.floor(Math.random() * 90000 + 10000);
  const link = `track.html?track=${trackingNumber}&name=${encodeURIComponent(name)}&address=${encodeURIComponent(address)}&item=${encodeURIComponent(item)}`;
  window.location.href = link;
});
