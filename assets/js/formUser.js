const getUserData = document.getElementById("form-user-data")

getUserData.onsubmit = function (event) {
	event.preventDefault()

	let hasError = false
	const inputName = document.getElementById("name")
	const inputEmail = document.getElementById("email")
	const inputCpf = document.getElementById("cpf")

	verifyName(inputName)
	verifyEmail(inputEmail)
	verifyCpf(inputCpf)
	verifyForm(inputName, inputEmail, inputCpf)


	function verifyName(inputName) {
		let errorMessage = inputName.nextSibling.nextSibling
		if (!inputName.value) {
			hasError = true
			errorMessage.innerText = 'Obrigatório preencher o nome!'
		} else {
			errorMessage.innerText = ''
		}
	}

	function verifyEmail(inputEmail) {
		let errorMessage = inputEmail.nextSibling.nextSibling
		if (!inputEmail.value) {
			hasError = true
			errorMessage.innerText = 'Obrigatório preencher o Email!'
		} else {
			errorMessage.innerText = ''
		}
	}

	function verifyCpf(inputCpf) {
		let errorMessage = inputCpf.nextSibling.nextSibling
		if (!inputCpf.value) {
			hasError = true
			errorMessage.innerText = 'Obrigatório preencher o CPF!'
		} else {
			errorMessage.innerText = ''
		}
	}

	function verifyForm(inputName, inputEmail, inputCpf) {
		if (inputName && inputEmail && inputCpf) {
			alert('Dados enviados com sucesso!')

		} else {

		}
	}
}

