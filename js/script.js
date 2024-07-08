//dequemviráoevento.addEventListener("evento, oquedevfazer")
document
  .getElementById("sendButton")
  .addEventListener("click", validaFormulario);

//function nome da função
function validaFormulario() {
  if (
    document.getElementById("user-name").value != "" &&
    document.getElementById("user-e-mail").value != ""
  ) {
    alert("Prontinho! Agora você receberá as novidades por e-mail!");
  } else {
    alert("Por favor, preencha os campos de nome e e-mail");
  }
}

//se .buscarElementoPeloId(campo de nome).valor for diferente de vazio &&
//.buscarElementoPeloId.(campo de email).valor for diferente de vazio)
//envie os dados
//senão
// dispare alerta - pedir a usuária que preencha os campos de nome e email

//&& (chamamos de “e”), que associa condições a serem satisfeitas para executar a ação correspondente. Para que a ação seja executada, é preciso que as duas situações sejam satisfeitas: o nome esteja preenchido E o email esteja preenchido.

//se o elemento user-name e email do usuário for diferente (!=) do valor de uma string ("") vazia, ele está preenchdo. dessa foram, o comando será positivo, e o usuário receberá o alerta de que deu tudo certo.

document.getElementById("telefone").addEventListener("input", function (event) {
  const input = event.target;
  let value = input.value.replace(/\D/g, ""); // Remove tudo que não é dígito
  const length = value.length;

  if (length > 0) {
    if (length > 11) value = value.substring(0, 11);

    if (length >= 1 && length < 3) {
      value = `(${value}`;
    } else if (length >= 3 && length < 4) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (length >= 4 && length < 8) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(3)}`;
    } else if (length >= 8) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(
        3,
        7
      )}-${value.slice(7, 11)}`;
    }
  }

  input.value = value;
});
