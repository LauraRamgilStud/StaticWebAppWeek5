let sharedText = "";

export function initP2() {
  document.getElementById("btn-save-text").addEventListener("click", () => {
    sharedText = document.getElementById("input-text").value;
    document.getElementById("text").innerText = sharedText;
  });
}

export function getText() {
  return sharedText;
}
