<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Formulário de Cadastro</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div id="main-container">
    <h1>Cadastre-se para iniciar!</h1>
    
    <?php
		if(isset($_SESSION['msg'])){
			echo $_SESSION['msg'];
			unset($_SESSION['msg']);
		}
		?>
    
    <form action="processa.php" method="post">
      <div class="half-box spacing">
          <label for="nome">Nome</label>
          <input type="text" name="nome" id="name" placeholder="Digite seu nome" required>
      </div>
      <div class="half-box">
          <label for="lastname">Sobrenome</label>
          <input type="text" name="sobrenome" id="lastname" placeholder="Digite seu sobrenome" required>
      </div>
      <div class="half-box spacing">
        <label for="dia">Informe sua data de nascimento:</label>
        <input type="date" name="idade" id="dia" placeholder="#" required>
      </div>
      <div class="full-box">
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" required>
      </div>
      <div class="half-box spacing">
        <label for="lastname">Senha</label>
        <input type="password" name="senha" id="password" placeholder="Digite sua senha" required>
      </div>
      <div class="half-box">
        <label for="passconfirmation">Confirmação de senha</label>
        <input type="password" name="confirmacaosenha" id="passwordconfirmation" placeholder="Digite novamente sua senha" required>
      </div>
      <div class="full-box">
        <input type="submit" value="Registrar">
      </div>
    </form>
  </div>

</body>
</html>