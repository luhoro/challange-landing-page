const getShareData = document.getElementById('form-share-data')

getShareData.onsubmit = function (event) {
    event.preventDefault()

    let hasError = false
    const inputName = document.getElementById('friends-name')
    const inputEmail = document.getElementById('friends-email')

    verifyEach(inputName, 'nome do amigo')
    verifyEach(inputEmail, 'e-mail')

    verifyForm(inputName, inputEmail)

    function verifyEach(each, name) {
        let errorMessage = each.nextSibling.nextSibling
        if (!each.value) {
            hasError = true
            errorMessage.innerText = `Obrigatório preencher o campo "${name}"!`
        } else {
            errorMessage.innerText = ''
        }
    }

    function verifyForm(inputName, inputEmail) {
        if (inputName.value && inputEmail.value) {
            alert('Dados enviados com sucesso!')
        }
    }
}