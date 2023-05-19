const getUserData = document.getElementById("form-user-data")

getUserData.onsubmit = function (event) {
	event.preventDefault()

	let hasError = false
	const inputName = document.getElementById("name")
	const inputEmail = document.getElementById("email")
	const inputCpf = document.getElementById("cpf")

	verifyEach(inputName, 'nome')
	verifyEach(inputEmail, 'e-mail')
	verifyEach(inputCpf, 'CPF')

	verifyForm(inputName, inputEmail, inputCpf)


	function verifyEach(each, name) {
		let errorMessage = each.nextSibling.nextSibling
		if (!each.value) {
			hasError = true
			errorMessage.innerText = `Obrigatório preencher o ${name}!`
		} else {
			errorMessage.innerText = ''
		}
	}

	function verifyForm(inputName, inputEmail, inputCpf) {
		if (inputEach) {
			alert('Dados enviados com sucesso!')

		} else {

		}
	}


}

