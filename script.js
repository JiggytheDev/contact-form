document.getElementById("firstName").addEventListener("input", (event) => {
    const regex = /^[A-Za-z]+$/g;
    const input = document.getElementById("firstName");
    const format = document.querySelector(".format");
    const name = input.value;
    const found = regex.test(name);
    if (!found && name.length) {
        input.classList.add("invalid");
        format.classList.add("block");
    } else {
        input.classList.remove("invalid");
        format.classList.remove("block");
    }
});

document.getElementById("firstnameform").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("firstName");
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, "").trim();
    console.log(newText);
});

document.getElementById("lastname").addEventListener("input", (event) => {
    const regex = /^[A-Za-z]+$/g;
    const input = document.getElementById("lastname");
    const format = document.querySelector(".last");
    const name = input.value;
    const found = regex.test(name);
    if (!found && name.length) {
        input.classList.add("invalid");
        format.classList.add("block");
    } else {
        input.classList.remove("invalid");
        format.classList.remove("block");
    }
});

document.getElementById("lastname").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("lastname");
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, "").trim();
    console.log(newText);
});

document.getElementById("email").addEventListener("input", (event) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/g;
    const input = document.getElementById("email");
    const email = input.value;
    const format = document.querySelector(".mailError");
    const found = regex.test(email);
    if (!found && email.length) {
        input.classList.add("invalid");
        format.classList.add("block");
    } else {
        input.classList.remove("invalid");
        format.classList.remove("block");
    }
});

document.getElementById("email").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("email");
    const regex = / {2,}/g;
    const newEmail = input.value.replaceAll(regex, "").trim();
    console.log(newEmail);
});

const equityForm = document.getElementById("equityContent");
const supportForm = document.getElementById("supportContent");
const equityRadio = document.getElementById("equity");
const supportRadio = document.getElementById("support");
const equityChecked = equityRadio.checked = true;
const supportChecked = supportRadio.checked = true;
equityForm.addEventListener("click", (event) => {
    if (equityChecked) {
        equityForm.classList.add("queryType");
        supportForm.classList.remove("queryType");
        /* supportForm.classList.add("notChecked"); */
    } 
});

supportForm.addEventListener("click", (event) => {
    if (supportChecked) {
        supportForm.classList.add("queryType");
        equityForm.classList.remove("queryType");
        /* equityForm.classList.add("notChecked"); */
    }
});

document.getElementById("message").addEventListener("input", (event) => {
    const regex = /^[a-zA-Z0-9\s\W]{2,}$/g;
    const input = document.getElementById("message");
    const message = input.value;
    const format = document.querySelector(".messageError");
    const found = regex.test(message);

    if(!found && message.length) {
        format.classList.add("block");
    } else {
        format.classList.remove("block");
    }
});

document.getElementById("messageForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("message");
    const regex = / {2,}/g;
    const newMessage = input.value.replaceAll(regex, ).trim();
    console.log(newMessage);
});

document.getElementById("checkbox").addEventListener("change", (event) => {
    if (event.target.checked) {
        const name = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastname").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const format = document.querySelector(".consentError");

        if (!name || !lastName || !email || !message) {
            format.classList.add("block");
        } else {
            format.classList.remove("block");
        }

    }
});

document.getElementById("submitBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const checkbox = document.getElementById("checkbox").checked;
    const popUp = document.getElementById("completed");

    if (name || lastName || email || checkbox) {
        popUp.style.display = "flex";
    } else {
        console.log("not completed");
    }
})
