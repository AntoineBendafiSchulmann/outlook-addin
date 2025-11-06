Office.onReady(() => {
  const btn = document.getElementById("show-foyers");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const container = document.getElementById("foyer-list");
    if (container) {
      container.innerHTML = `
        <ul>
          <li>Foyer 1</li>
          <li>Foyer 2</li>
          <li>Foyer 3</li>
        </ul>
      `;
    }
  });
});
