$("#inputDivId").hide();

$("#labelDivId").hide();

$("#bemVindoId").ready(validarCookieNome);

var meuCookie = {};

function validarCookieNome() {

  

    preencherCookie();

    

    if(meuCookie.nome != undefined) {

        $("#labelDivId").show();

        $("#labelId").text(meuCookie.nome );

        $("#inputDivId").hide();

    }

    else {

        $("#inputDivId").show();

    }

  

}


function criarCookie(campo, valor, dias) {

  

    var dataExpiracao = new Date();

    

    dataExpiracao.setTime(dataExpiracao.getTime() + (dias * 24 * 60 * 60 * 1000));

    

    var campoExpires = "expires=" + dataExpiracao.toUTCString();

    

    document.cookie = campo + "=" + valor + "; " + campoExpires;

    

}
function preencherCookie() {

    

    var camposValor = document.cookie.split("; ");

    

    console.log(camposValor);

    

    for(var i=0; i < camposValor.length; i++) {

        var campoValorVetor = camposValor[i].split("=");

        console.log(campoValorVetor);

        meuCookie[campoValorVetor[0]] = campoValorVetor[1];

    }

    

    console.log(meuCookie);

    

}