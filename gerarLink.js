const titulo = document.getElementById("titulo");
const aluno = document.getElementById("aluno");
const avaliador1 = document.getElementById("avaliador1");
const avaliador2 = document.getElementById("avaliador2");
const orientador = document.getElementById("orientador");
const data = document.getElementById("data");
const curso = document.getElementById("curso");
const sala = document.getElementById("sala");

document.addEventListener("DOMContentLoaded", function() {
  // Function to get URL parameter by name
  function getParameterByName(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get values from URL parameters
  let tituloTrabalhoParam = getParameterByName("titulo");
  let nomeAlunoParam = getParameterByName("aluno");
  let nomeAvaliador1Param = getParameterByName("avaliador1");
  let nomeAvaliador2Param = getParameterByName("avaliador2");
  let nomeProfessorParam = getParameterByName("orientador");
  let dataParam = getParameterByName("data");
  let cursoParam = getParameterByName("curso");
  let salaParam = getParameterByName("sala");

  // Fill form fields with URL parameter values
  titulo.value = tituloTrabalhoParam || "";
  aluno.value = nomeAlunoParam || "";
  avaliador1.value = nomeAvaliador1Param || "";
  avaliador2.value = nomeAvaliador2Param || "";
  orientador.value = nomeProfessorParam || "";
  data.value = dataParam || "";
  curso.value = cursoParam || "";
  sala.value = salaParam || "";
});


const btn = document.querySelector("#generateLink");

btn.addEventListener("click", function(e){
  e.preventDefault();
  const nomeAluno = encodeURIComponent(aluno.value);
  const tituloTrabalho = encodeURIComponent(titulo.value);
  const nomeAvaliador1 = encodeURIComponent(avaliador1.value);
  const nomeAvaliador2 = encodeURIComponent(avaliador2.value);
  const nomeProfessor = encodeURIComponent(orientador.value);
  const dataURI = encodeURIComponent(data.value);
  const cursoURI = encodeURIComponent(curso.value);
  const salaURI = encodeURIComponent(sala.value);


  const url = `index.html?titulo=${tituloTrabalho}&aluno=${nomeAluno}&orientador=${nomeProfessor}&avaliador1=${nomeAvaliador1}&avaliador2=${nomeAvaliador2}&curso=${cursoURI}&data=${dataURI}&sala=${salaURI}`;

  window.open(url, '_blank');
});
