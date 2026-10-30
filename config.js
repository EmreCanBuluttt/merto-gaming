/* Merto Gaming sitesi — TEK AYAR DOSYASI.
 * Destek e-posta adresinizi aşağıya yazın; tüm sayfalarda (gizlilik, destek) otomatik görünür. */
window.MERTO_SITE = {
  email: 'info@mertogaming.com',
  playUrl: '',      // Google Play bağlantısı yayınlandığında: https://play.google.com/store/apps/details?id=com.mertogaming.kidsgames
  appStoreUrl: '',   // Merto Gaming: Çocuk Oyunları — App Store bağlantısı yayınlandığında
  appStoreUrl3d: ''  // Merto Gaming 3D — App Store bağlantısı yayınlandığında
};
document.addEventListener('DOMContentLoaded', function () {
  var c = window.MERTO_SITE;
  document.querySelectorAll('[data-email]').forEach(function (el) {
    el.textContent = c.email;
    if (el.tagName === 'A') el.href = 'mailto:' + c.email;
  });
  document.querySelectorAll('[data-store]').forEach(function (el) {
    var url = c[el.getAttribute('data-store')];
    if (url) { el.href = url; el.classList.remove('soon'); }
  });
});
