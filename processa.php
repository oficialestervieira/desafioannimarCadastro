<?php
session_start();
include_once("conexao.php");

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$sobrenome = filter_input(INPUT_POST, 'sobrenome', FILTER_SANITIZE_STRING);
$idade = filter_input(INPUT_POST, 'idade', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$senha = filter_input(INPUT_POST, 'senha', FILTER_SANITIZE_STRING);

//echo "Nome: $nome <br>";
//echo "Sobrenome: $sobrenome <br>";
//echo "Idade: $idade <br>";
//echo "E-mail: $email <br>";
//echo "Senha: $senha <br>";

$result_usuario = "INSERT INTO usuarios (nome, sobrenome, idade, email, senha) VALUES ('$nome', '$sobrenome', '$idade', '$email', '$senha')";
$resultado_usuario = mysqli_query($conn, $result_usuario);

if(mysqli_insert_id($conn)){
	$_SESSION['msg'] = "<p style='color:green;'> Usuário cadastrado com sucesso </p>";
	header("Location: index.php");
}else{
	$_SESSION['msg'] = "<p style='color:red;'> Erro ao cadastrar </p>";
	header("Location: index.php");
}
