const item2 = document.getElementById("item2");

// Attach click event listener
item2.addEventListener("click", () => {
  const parentText = item2.parentNode.textContent;
  alert(parentText.trim());

  const prev = item2.previousElementSibling;
  const next = item2.nextElementSibling;

  if (prev) {
    console.log("Previous sibling text:", prev.textContent.trim());
  }

  if (next) {
    console.log("Next sibling text:", next.textContent.trim());
  }
});
