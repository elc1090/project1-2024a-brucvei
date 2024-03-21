document.addEventListener("DOMContentLoaded", function() {
  // Function to get URL parameter by name
  function getParameterByName(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get values from URL parameters
  var tituloTrabalhoParam = getParameterByName("titulo");
  var nomeAlunoParam = getParameterByName("aluno");
  var nomeAvaliador1Param = getParameterByName("avaliador1");
  var nomeAvaliador2Param = getParameterByName("avaliador2");
  var nomeProfessorParam = getParameterByName("orientador");
  var dataParam = getParameterByName("data");
  var cursoParam = getParameterByName("curso");
  var salaParam = getParameterByName("sala");

  // Fill form fields with URL parameter values
  document.getElementById("titulo").value = tituloTrabalhoParam || "";
  document.getElementById("aluno").value = nomeAlunoParam || "";
  document.getElementById("avaliador1").value = nomeAvaliador1Param || "";
  document.getElementById("avaliador2").value = nomeAvaliador2Param || "";
  document.getElementById("orientador").value = nomeProfessorParam || "";
  document.getElementById("data").value = dataParam || "";
  document.getElementById("curso").value = cursoParam || "";
  document.getElementById("sala").value = salaParam || "";
});


const btn = document.querySelector("#gerarLink");

btn.addEventListener("click", function(e){
  e.preventDefault();
  const nomeAluno = encodeURIComponent(document.getElementById("nomeAluno").value);
  const tituloTrabalho = encodeURIComponent(document.getElementById("tituloTrabalho").value);
  const nomeAvaliador1 = encodeURIComponent(document.getElementById("nomeAvaliador1").value);
  const nomeAvaliador2 = encodeURIComponent(document.getElementById("nomeAvaliador2").value);
  const nomeProfessor = encodeURIComponent(document.getElementById("nomeProfessor").value);
  const dataValue = encodeURIComponent(document.getElementById("data").value);
  const horaValue = encodeURIComponent(document.getElementById("hora").value);
  const curso = encodeURIComponent(document.getElementById("curso").value);
  const sala = encodeURIComponent(document.getElementById("sala").value);


  const url = `index.html?tituloTrabalho=${tituloTrabalho}&nomeAluno=${nomeAluno}&nomeProfessor=${nomeProfessor}&nomeAvaliador1=${nomeAvaliador1}&nomeAvaliador2=${nomeAvaliador2}&curso=${curso}&data=${dataValue}&hora=${horaValue}&sala=${sala}`;

  window.open(url, '_blank');
});
