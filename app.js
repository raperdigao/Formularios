
function validaVazio() {
  // Valida o campo Nome
  if (document.teste.nome.value == "") {
   window.alert("Campo Requerido");
   document.teste.nome.focus();
   return false;
  } else {
   window.alert("Dados envidao com sucesso");
   return true;
  }

  }





function confirmcad() {
  confirm("Confrma o envio do Cadastro?");
}


const d = new Date();
document.getElementById("data").innerHTML = d;


