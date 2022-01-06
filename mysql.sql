SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

-- ESTRUTURA `usuarios`

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `sobrenome` varchar(20) NOT NULL,
  `idade` varchar(2) NOT NULL,
  `email` varchar(30) NOT NULL,
  `senha` varchar(12) NOT NULL,
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- FAZENDO DUMP DE DADOS `usuarios`

INSERT INTO `usuarios` (`id`, `nome`, `sobrenome`, `idade`, `email`, `senha`) VALUES
(1, '', '', '', NULL),
(2, '', '', '', NULL),
(3, '', '', '', NULL),
(4, '', '', '', NULL),
(5, '', '', '', NULL),
(6, '', '', '', NULL);

-- ÍNDICES DE TABELA `usuarios`

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

-- AUTO_INCREMENT de tabela `usuarios`

ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;