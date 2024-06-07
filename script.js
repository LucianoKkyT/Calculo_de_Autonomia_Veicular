document.getElementById('calcRoute').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos inputs
    const quilometers = parseFloat(document.getElementById('quilometers').value);
    const oil = parseFloat(document.getElementById('oil').value);
    const priceOil = parseFloat(document.getElementById('priceOil').value);
    const kmTrip = parseFloat(document.getElementById('kmTrip').value);
    const mediaInput = document.getElementById('media');
    const totalConsuptionInput = document.getElementById('totalConsuption');

    // Função para calcular a média de km por litro
    function calcMedia() {
        if (quilometers > 0 && oil > 0) {
            const media = quilometers / oil;
            mediaInput.value = media.toFixed(2); // Exibe o resultado com 2 casas decimais
            return media;
        } else {
            alert("Digite valores maiores que zero!");
            return 0;
        }
    }

    // Função para calcular o consumo total da viagem
    function calcTotalConsuption(media) {
        if (kmTrip > 0 && priceOil > 0) {
            const totalLiters = kmTrip / media; // Quantidade de litros necessários para a viagem
            const totalConsuption = totalLiters * priceOil; // Custo total do combustível para a viagem
            totalConsuptionInput.value = totalConsuption.toFixed(2); // Exibe o resultado com 2 casas decimais
        } else {
            alert("Digite valores válidos para a distância da viagem e o preço da gasolina!");
        }
    }

    // Calcula e exibe os resultados
    const media = calcMedia();
    if (media > 0) {
        calcTotalConsuption(media);
    }
});

   
function moeda(a, e, r, t) {
    let n = ""
      , h = j = 0
      , u = tamanho2 = 0
      , l = ajd2 = ""
      , o = window.Event ? t.which : t.keyCode;
    if (13 == o || 8 == o)
        return !0;
    if (n = String.fromCharCode(o),
    -1 == "0123456789".indexOf(n))
        return !1;
    for (u = a.value.length,
    h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++)
        ;
    for (l = ""; h < u; h++)
        -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
    if (l += n,
    0 == (u = l.length) && (a.value = ""),
    1 == u && (a.value = "0" + r + "0" + l),
    2 == u && (a.value = "0" + r + l),
    u > 2) {
        for (ajd2 = "",
        j = 0,
        h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e,
            j = 0),
            ajd2 += l.charAt(h),
            j++;
        for (a.value = "",
        tamanho2 = ajd2.length,
        h = tamanho2 - 1; h >= 0; h--)
            a.value += ajd2.charAt(h);
        a.value += r + l.substr(u - 2, u)
    }
    return !1
}
 