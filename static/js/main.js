// BibTeX copy-to-clipboard
(function () {
  const btn = document.getElementById("copyBtn");
  const pre = document.getElementById("bibtex");
  if (!btn || !pre) return;

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(pre.innerText.trim());
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
      setTimeout(() => (btn.innerHTML = original), 1800);
    } catch (e) {
      // Fallback for older browsers
      const range = document.createRange();
      range.selectNode(pre);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand("copy");
      sel.removeAllRanges();
    }
  });
})();
