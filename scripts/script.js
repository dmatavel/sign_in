const   [username, password] = document.querySelectorAll("input");
const   btn = document.querySelector("button");

function    login()
{
    if (username.value && password.value.length >= 8)
    {
        btn.removeAttribute("disabled");
        btn.classList.add("btnEnebled");
    }
    else
    {
        btn.setAttribute("disabled", "disabled");
        btn.classList.remove("btnEnebled");
    }
}

username.addEventListener("input", login);
password.addEventListener("input", login);