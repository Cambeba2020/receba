

$("#botaoBuscaPersonagemAleatorioId").click(buscarPersonagemAleatorio);

function buscarPersonagemAleatorio() {

  

    $.get("https://swapi.co/api/people/" + Math.floor(Math.random(1, 87) * 10), preencherLabelPersonagemAletorio);
  
    
  
  }
      
      function preencherLabelPersonagemAletorio(data) {


        console.log(people.name);
    
    
        $("#personagemAleatorioId").text(data.name);
    
    
    }
    function buscarFilmePorPersonagem() {

  

        var nome = $("#buscaFilmePorNomePersonagemId").val();  
    
        $.get("https://swapi.co/api/people/?search=" + nome, popularTabela);
    
      
    
    }
    
function popularTabela(data) {

  

    console.log(data.results[0].name);  

    $("#labelFilmeDeId").text(data.results[0].name);

  

}