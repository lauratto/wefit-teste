# Node.js Express README

README para um projeto Node.js utilizando o framework Express. Este arquivo fornece informações importantes sobre como configurar, executar e contribuir para o projeto.

## Descrição do Projeto

API para registrar novos Parceiros (Comprador ou Vendedor)

## Instalação

Certifique-se de ter o Node.js e o npm instalados em sua máquina. Clone o repositório e execute o seguinte comando para instalar as dependências:

## Docker

```
docker-compose up -d
```

## Banco de Dados

```
CREATE TABLE `partner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isCnpj` tinyint(1) DEFAULT NULL,
  `cnpj` varchar(100) DEFAULT NULL,
  `cpf` varchar(100) DEFAULT NULL,
  `fullName` varchar(100) DEFAULT NULL,
  `phoneNumber` varchar(100) DEFAULT NULL,
  `cellNumber` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `zipCode` varchar(100) DEFAULT NULL,
  `street` varchar(100) DEFAULT NULL,
  `number` varchar(100) DEFAULT NULL,
  `complement` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `terms` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=latin1;
```

## API start
```
npm install
```

```b
npm run start
```



