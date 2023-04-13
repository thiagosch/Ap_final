const email_container = document.getElementById("email-input");
const name_container = document.getElementById("name-input");
const lastname_container = document.getElementById("lastname-input");
const submit_button = document.getElementById("next-button");
const message_container = document.getElementById("comment");
const first_form = document.getElementById("first-form");
const second_form = document.getElementById("second-form");
const success = document.getElementById("success");

function check_inputs() {
    error = false;

    if (!name_container.value) {
        label = findLableForControl(name_container);
        label.innerHTML = 'Nombre <i class="bi bi-x-lg"></i> <span>Campo requerido</span>';
        label.classList.add("label-error");
        error = true;
    }
    if (!lastname_container.value) {
        label = findLableForControl(lastname_container);
        label.innerHTML = 'Apellido <i class="bi bi-x-lg"></i> <span>Campo requerido</span>';
        label.classList.add("label-error");
        error = true;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_container.value)) {
        label = findLableForControl(email_container);
        label.innerHTML = 'Direccion de email <i class="bi bi-x-lg"></i> <span>Email invalido</span>';
        label.classList.add("label-error");
        error = true;
    }
    console.log(name_container.value, lastname_container.value, email_container.value);
    if (error) {
        submit_button.innerHTML = 'Siguiente <i class="bi bi-x-lg"></i>';
        submit_button.setAttribute("style", "background:tomato");
    } else {
        next_form(email_container.value, name_container.value, lastname_container.value);
    }
}

const values = { name: "", text_mail: "", lastname: "", message: "" };
function next_form(email, name, lastname) {
    console.log(email, name, lastname);

    
    let label = findLableForControl(message_container);
    label.innerHTML = `escribe tu comentario ${name} ${lastname}, ${email}`;

    values["name"] = name;
    values["lastname"] = lastname;
    values["text_mail"] = email;
    first_form.classList.add("to-inactive");
    setTimeout(() => {
        first_form.classList.add("inactive");
        second_form.classList.add("to-active");
        second_form.classList.remove("inactive");
        second_form.classList.remove("to-active");
    }, 490);
}


function reload_errors(item_reload) {
    submit_button.innerHTML = 'Siguiente <i class="bi bi-arrow-right"></i>';
    submit_button.setAttribute("style", "");
    if (item_reload == "name") {
        findLableForControl(name_container).innerHTML = "Nombre";
    }
    if (item_reload == "lastname") {
        findLableForControl(lastname_container).innerHTML = "Apellido";
    }
    if (item_reload == "mail") {
        findLableForControl(email_container).innerHTML = "Direccion de email";
    }
}

async function form_submission() {
    let message = message_container.value;
    let name = values["name"];
    let email = values["email"];
    let lastname = values["lastname"];
    const url = "https://formspree.io/f/meqwprnv";
    data = { name: name, text_mail: email, lastname: lastname, message: message };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
           
        },
        body: JSON.stringify(data), 
    });
    console.log(await response);
    
    show_success();
}

function show_success() {
    success.innerHTML = `<h3>Gracias <span>${values["name"]} ${values["lastname"]}</span>, 
    recibimos tu mensaje y nos estaremos comunicando a tu mail <span>${values["text_mail"]}</span> en breve!</h3>`;
    second_form.classList.add("to-inactive");
    setTimeout(() => {
        second_form.classList.add("inactive");
        success.classList.add("to-active");
        success.classList.remove("inactive");
    }, 490);
}

function findLableForControl(element) {
    var idVal = element.id;
    labels = document.getElementsByTagName("label");
    for (var i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor == idVal) {
            return labels[i];
        }
    }
}
