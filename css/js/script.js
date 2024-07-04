// se condição for verdadeira
//faz a ação
//se não
//faz outra ação

if (
  document.getElementById("user-name").value != "" &&
  document.getElementById("user-e-mail").value != ""
) {
  alert("Prontinho! Agora você receberá as novidades por e-mail!");
} else {
  alert("Por favor, preencha os campos de nome e e-mail");
}

//&& (chamamos de “e”), que associa condições a serem satisfeitas para executar a ação correspondente. Para que a ação seja executada, é preciso que as duas situações sejam satisfeitas: o nome esteja preenchido E o email esteja preenchido.

//se o elemento user-name e email do usuário for diferente (!=) do valor de uma string ("") vazia, ele está preenchdo. dessa foram, o comando será positivo, e o usuário receberá o alerta de que deu tudo certo.
