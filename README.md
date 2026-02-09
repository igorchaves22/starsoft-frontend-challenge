# Starsoft

---

## Funcionalidades

- **Listagem de NFTs**
    - Exibe todos os NFTs disponíveis.
    - Sistema de **busca** para filtrar itens por nome.
    - Permite ordenar os itens usando **sortBy** e **orderBy**.

- **Carrinho de compras**
    - Visualiza itens adicionados.
    - Atualiza quantidade e total.
    - **Persistência via LocalStorage**, mantendo o carrinho mesmo após recarregar a página.

- **Estado global**
    - Gerenciado com **Redux Toolkit**, mantendo consistência do carrinho e filtros.

- **Busca de dados**
    - Integração com API de NFTs usando **React Query** mais ContextAPI para controles de busca.
    - Tratamento de estados de **loading**, **sucesso** e **erro**.

- **Estilização**
    - Com **SASS**, modular e reutilizável e metodologia BEM.
    - Layout responsivo para desktop, tablet e mobile.
