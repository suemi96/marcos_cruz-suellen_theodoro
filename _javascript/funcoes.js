function mudaFoto(foto) {
	console.log(foto)
	document.getElementById("icone").src = foto;
}

function cal_total() {
	var qtd = parseInt(document.getElementById('cQuant').value)
	Total = qtd * 1500;
	document.getElementById('cPrice').value = Total
}

function enviar() {
	let nome = document.getElementById("cNome").value;
	let email = document.getElementById("cMail").value;
	let cidade = document.getElementById("cCidade").value;
	let rua = document.getElementById("cRua").value;
	let num = document.getElementById("cNum").value;
	let quant = document.getElementById("cQuant").value;
	let preco = document.getElementById("cPrice").value;
	const exibir = () => {
		console.log(nome)
		console.log(email)
		console.log(cidade)
		console.log(rua)
		console.log(num)
		console.log(quant)
		console.log(preco)
		alert('Olá ' + nome + ' Seu formulario foi enviado com sucesso :D')
	}
	return exibir()

}