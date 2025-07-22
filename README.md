# NLW Agents

Projeto desenvolvido para demonstrar o uso de agentes inteligentes na web, feito durante um evento da Rocketseat

## ?? Tecnologias

- **React 19.1** - Biblioteca para interfaces de usu�rio
- **TypeScript 5.8** - Superset JavaScript com tipagem est�tica
- **Vite 7.0** - Build tool e servidor de desenvolvimento
- **TailwindCSS 4.1** - Framework CSS utility-first
- **React Router Dom 7.6** - Biblioteca de roteamento
- **TanStack React Query 5.8** - Gerenciamento de estado servidor e cache
- **Radix UI** - Componentes primitivos acess�veis
- **Shadcn/ui** - Sistema de componentes
- **Lucide React** - Biblioteca de �cones

## ?? Padr�es de Projeto

- **Component-based Architecture** - Arquitetura baseada em componentes React
- **File-based Routing** - Roteamento baseado em arquivos com React Router
- **Server State Management** - Gerenciamento de estado servidor com React Query
- **Variant-based Components** - Componentes com variantes usando CVA
- **Composition Pattern** - Padr�o de composi��o com Radix Slot
- **Path Aliasing** - Alias de caminhos (`@/` aponta para `src/`)

## ?? Configura��o do Projeto

### Pr�-requisitos

- Node.js (vers�o 18 ou superior)
- npm ou yarn

### Instala��o

1. Clone o reposit�rio
2. Instale as depend�ncias:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplica��o em `http://localhost:5173`

### Scripts Dispon�veis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produ��o
- `npm run preview` - Preview do build de produ��o

### Backend

O projeto consome uma API que deve estar rodando na porta 3333. Certifique-se de que o backend esteja configurado e executando antes de iniciar o frontend.

## ??? Estrutura do Projeto

```
src/
??? components/ui/    # Componentes de interface
??? pages/           # P�ginas da aplica��o
??? lib/             # Utilit�rios e configura��es
??? app.tsx          # Componente raiz
```