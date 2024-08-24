# Express Gourmet

O **Express Gourmet** é um aplicativo de gerenciamento de restaurante, inspirado no iFood, desenvolvido para oferecer aos usuários uma maneira fácil e prática de pedir comida. Este projeto utiliza tecnologias web modernas para garantir uma experiência de usuário fluida e responsiva.

## Índice

- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Recursos

- [x] Criar uma conta
- [x] Login
- [ ] Registrar a localição
- [ ] Gerenciamento do site
   - [x] Adicionar novo prato
   - [ ] Deletar um prato
   - [ ] Atualizar prato
   - [x] Gerenciar administradores
   - [x] Deletar um usuario
- [x] Visualização detalhada de pratos com preços e descrições
- [x] Funcionalidade de carrinho de compras
   - [x] Remover item do carrinho
   - [x] Atualizar quantidade do item
   - [x] Verificar valor total
   - [x] Ver quantidade dos items no carrinho
- [ ] Integração com sistema de pagamento
   - [ ] Escolher um sistema de pagamento
   - [ ] Configurar sistema de pagamento
- [ ] Refatoração para padrão ATOMIC COMPONENTS
   - [ ] Pagina de cart
   - [ ] Pagina de food
   - [ ] Pagina de food por id
   - [ ] Pagina de orders
   - [ ] Pagina de orders por id
   - [ ] Pagina de settings
      - [ ] Pagina de criar food
      - [ ] Pagina de remover food
      - [ ] Pagina de atualizar food
      - [ ] Pagina de atualizar usuario
      - [ ] Pagina de deletar usuario

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e criação de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Firebase**: Plataforma de desenvolvimento de aplicativos para autenticação e banco de dados em tempo real.
- **Tailwind CSS**: Framework utilitário para estilização rápida e consistente.
- **Shadcn/ui**: Conjunto de componentes acessíveis para React.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **ESLint**: Ferramenta de linting para garantir a qualidade do código.
- **PostCSS**: Ferramenta para transformar CSS com plugins.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/express-gourmet.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd express-gourmet
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Como Usar

- Acesse o aplicativo em seu navegador em `http://localhost:3000`.
- Navegue pelos restaurantes disponíveis e selecione seus pratos favoritos.
- Adicione os itens ao carrinho e prossiga para o checkout.
- Finalize o pedido e aguarde a entrega!

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
