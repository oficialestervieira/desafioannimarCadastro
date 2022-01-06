<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<title>Formulário de Cadastro</title>		
	</head>
	<body>
		<h1>Cadastre-se para iniciar!</h1>
		
		<?php
		if(isset($_SESSION['msg'])){
			echo $_SESSION['msg'];
			unset($_SESSION['msg']);
		}
		?>
		
		<form method="POST" action="processa.php">
		    <label for="name">Nome</label>
            <input type="text" name="nome" id="name" placeholder="Digite seu nome" data-required data-min-length="3" data-max-length="16"><br><br>
			
			<label for="lastname">Sobrenome</label>
            <input type="text" name="sobrenome" id="lastname" placeholder="Digite seu sobrenome" data-required data-only-letters><br><br>

			<label for="idade">Informe sua data de nascimento:</label>
            <input type="date" name="idade" id="idade" placeholder="#" data-required><br><br>

			<label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Digite seu e-mail" data-min-length="2" data-email-validate><br><br>

			<label for="lastname">Senha</label>
            <input type="password" name="senha" id="password" placeholder="Digite sua senha" data-password-validate data-required><br><br>
			
			<input type="submit" value="Registrar">
		</form>

</body>
</html>