// Inject shared topbar into any page
(function() {
  const nav = `
  <div class="topbar">
    <a class="topbar-logo" href="../index.html">CFF ▸ SOE CUSAT</a>
    <div class="topbar-links">
      <a class="topbar-link m1" href="../pages/module1.html">Module 1</a>
      <a class="topbar-link m2" href="../pages/module2.html">Module 2</a>
      <a class="topbar-link m3" href="../pages/module3.html">Module 3</a>
      <a class="topbar-link m4" href="../pages/module4.html">Module 4</a>
      <a class="topbar-link" href="../pages/numericals.html">Numericals</a>
      <a class="topbar-link" href="../pages/quickref.html">Quick Ref</a>
    </div>
    <input class="topbar-search" type="text" placeholder="Search… (/)">
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
})();
