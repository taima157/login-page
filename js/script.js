


function eyeFunction() {
    document.querySelector("#eye-open").classList.toggle("disable")
    document.querySelector("#eye-close").classList.toggle("disable")
    if (document.querySelector("#pass-user").type != 'text') {
        document.querySelector("#pass-user").type = 'text'
    }else {
        document.querySelector("#pass-user").type = 'password'
    }
}