document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  const passwordInput = document.getElementById("sitePassword");
  const nameInput = document.getElementById("displayName");
  const loginError = document.getElementById("loginError");

  loginBtn.addEventListener("click", function () {
    const password = passwordInput.value;
    const name = nameInput.value.trim();

    if (password === "letmein" && name !== "") {
      localStorage.setItem("displayName", name);
      window.location.href = "board.html";
    } else {
      loginError.classList.remove("hidden");
    }
  });
});
