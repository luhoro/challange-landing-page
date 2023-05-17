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


	function verifyName(inputName) {
		if (!inputName.value) {
			hasError = true
			let errorMessage = inputName.nextSibling.nextSibling
			errorMessage.innerText = 'Obrigatório preencher o nome!'
		} else {
			let errorMessage = inputName.nextSibling.nextSibling
			errorMessage.innerText = ''
		}
	}

	function verifyEmail(inputEmail) {
		if (!inputEmail.value) {
			hasError = true
			let errorMessage = inputEmail.nextSibling.nextSibling
			errorMessage.innerText = 'Obrigatório preencher o Email!'
		} else {
			let errorMessage = inputEmail.nextSibling.nextSibling
			errorMessage.innerText = ''
		}
	}

	function verifyCpf(inputCpf) {
		if (!inputCpf.value) {
			hasError = true
			let errorMessage = inputCpf.nextSibling.nextSibling
			errorMessage.innerText = 'Obrigatório preencher o CPF!'
		} else {
			let errorMessage = inputCpf.nextSibling.nextSibling
			errorMessage.innerText = ''
		}
	}
}

