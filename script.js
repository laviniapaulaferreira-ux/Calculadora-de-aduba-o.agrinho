function calcularAdubo() {

	const cultura = document.getElementById("cultura").value;
	const area = parseFloat(document.getElementById("area").value);
	const adubo = parseFloat(document.getElementById("adubo").value);
	const preco = parseFloat(document.getElementById("preco").value);

	const resultado = document.getElementById("resultado");

	if (isNaN(area) || isNaN(adubo) || area <= 0 || adubo <= 0) {
    	resultado.innerHTML =
        	"<span style='color:red'>Preencha os campos corretamente.</span>";
    	return;
	}

	const quantidadeTotal = area * adubo;

	let html = `
    	<h3>Resultado da Simulação</h3>
    	<p><strong>Cultura:</strong> ${cultura}</p>
    	<p><strong>Área:</strong> ${area} ha</p>
    	<p><strong>Dose recomendada:</strong> ${adubo} kg/ha</p>
    	<p><strong>Quantidade total necessária:</strong> ${quantidadeTotal.toLocaleString('pt-BR')} kg</p>
    	<p><strong>Total em toneladas:</strong> ${(quantidadeTotal / 1000).toFixed(2)} t</p>
	`;

	if (!isNaN(preco) && preco > 0) {
    	const custoTotal = quantidadeTotal * preco;

    	html += `
        	<p><strong>Preço por kg:</strong> R$ ${preco.toFixed(2)}</p>
        	<p><strong>Custo estimado:</strong> R$ ${custoTotal.toLocaleString('pt-BR', {
            	minimumFractionDigits: 2,
            	maximumFractionDigits: 2
        	})}</p>
    	`;
	}

	resultado.innerHTML = html;
}

