document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  if (!main) return;

  const headings = Array.from(main.querySelectorAll("h2"));

  headings.forEach((heading) => {
    const section = document.createElement("details");
    const summary = document.createElement("summary");

    summary.innerHTML = heading.innerHTML;
    section.appendChild(summary);

    let next = heading.nextSibling;

    while (next && !(next.nodeType === 1 && next.tagName === "H2")) {
      const current = next;
      next = next.nextSibling;
      section.appendChild(current);
    }

    heading.replaceWith(section);
  });
});