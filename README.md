# [PT-BR] Blog API Restful

Este projeto consiste em uma API RESTful para a produção de conteúdo para um blog. A API foi desenvolvida em Node.js e utiliza o pacote Sequelize para realizar as operações de CRUD de posts, além de estabelecer relacionamentos entre as entidades do sistema.

## Funcionalidades

A API oferece as seguintes funcionalidades:

1. Cadastrar usuário: Endpoint para criar um novo usuário com as seguintes propriedades: display_name, email, password e image.

2. Login de usuário: Endpoint para autenticar o usuário e gerar um token de acesso para realizar requisições autenticadas.

3. Visualizar usuário: Endpoint para obter informações do usuário autenticado.

4. Visualizar usuário por ID: Endpoint para obter informações de um usuário específico através de seu ID.

5. Cadastrar categoria: Endpoint para adicionar novas categorias para os posts com a propriedade name.

6. Listar categorias: Endpoint para listar todas as categorias cadastradas no sistema.

7. Cadastrar post: Endpoint para criar um novo post com as seguintes propriedades: title, content, user_id, published e updated. É necessário estar autenticado para realizar essa ação.

8. Listar posts: Endpoint para listar todos os posts cadastrados no sistema.

## Desenvolvimento

O projeto utiliza o pacote Sequelize como ORM para criar e atualizar o banco de dados. Foram desenvolvidas migrations para gerar as tabelas com as seguintes estruturas:

1. Tabela "users" com os campos: id, display_name, email, password e image.

2. Tabela "categories" com o campo: id e name.

3. Tabela "blog_posts" com os campos: id, title, content, user_id, published e updated.

4. Tabela "PostCategories" com a chave primária composta pelos campos: post_id e category_id.

O projeto segue os princípios do REST, utilizando endpoints adequados para cada ação e estabelecendo as relações entre as entidades.

## Testes Unitários

Foram desenvolvidos testes unitários abrangentes para as funcionalidades da API, garantindo a qualidade e a cobertura do código desenvolvido.

## Docker

Para executar o projeto em ambiente Docker, siga os passos abaixo:

1. Verifique se sua versão do docker-compose é 1.29 ou superior.

2. Rode os serviços node e db com o comando `docker-compose up -d --build`.

3. Certifique-se de que o serviço MySQL local na porta padrão (3306) esteja desativado ou adapte as configurações caso deseje utilizar a aplicação em containers.

4. Os serviços iniciarão containers chamados `blogs_api` e `blogs_api_db`.

5. Você pode executar comandos no container `blogs_api` através do comando `docker exec -it blogs_api bash`.

6. Instale as dependências, se houver, dentro do container, com `npm install`.

## Contato

- LinkedIn: [AlissonTassi](https://www.linkedin.com/in/alissontassi/)
- GitHub: [AlissonSeraphim](https://github.com/AlissonSeraphim)

## Licença

Este projeto não possui licença.

# [EN] Blog API Restful

This project consists of a RESTful API for content production for a blog. The API was developed in Node.js using the Sequelize package to perform CRUD operations on posts and establish relationships between entities.

## Features

The API offers the following features:

1. User Registration: Endpoint to create a new user with the following properties: display_name, email, password, and image.

2. User Login: Endpoint to authenticate the user and generate an access token for authenticated requests.

3. View User: Endpoint to get information about the authenticated user.

4. View User by ID: Endpoint to get information about a specific user by their ID.

5. Category Creation: Endpoint to add new categories for posts with the property name.

6. List Categories: Endpoint to list all categories registered in the system.

7. Post Creation: Endpoint to create a new post with the following properties: title, content, user_id, published, and updated. Authentication is required to perform this action.

8. List Posts: Endpoint to list all posts registered in the system.

## Development

The project uses the Sequelize package as an ORM to create and update the database. Migrations have been developed to generate tables with the following structures:

1. "users" table with fields: id, display_name, email, password, and image.

2. "categories" table with field: id and name.

3. "blog_posts" table with fields: id, title, content, user_id, published, and updated.

4. "PostCategories" table with the composite primary key consisting of fields: post_id and category_id.

The project follows the REST principles, using appropriate endpoints for each action and establishing relationships between entities.

## Unit Testing

Comprehensive unit tests have been developed for the API's functionalities, ensuring code quality and coverage.

## Docker

To run the project in a Docker environment, follow these steps:

1. Verify that your docker-compose version is 1.29 or higher.

2. Run the node and db services with the command `docker-compose up -d --build`.

3. Make sure the local MySQL service on the default port (3306) is disabled, or adapt the settings if you want to use the application in containers.

4. The services will start containers named `blogs_api` and `blogs_api_db`.

5. You can run commands in the `blogs_api` container via the command `docker exec -it blogs_api bash`.

6. Install dependencies, if any, inside the container with `npm install`.

## Contact

- LinkedIn: [AlissonTassi](https://www.linkedin.com/in/alissontassi/)
- GitHub: [AlissonSeraphim](https://github.com/AlissonSeraphim)

## License

This project has no license.
