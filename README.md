# BugHunters - Landing Page

Landing page profissional para **BugHunters**, empresa especializada em Quality Assurance estratégico e testes de software.

## 🎯 Sobre o Projeto

A BugHunters é uma equipe especializada em Quality Assurance estratégico. Este projeto apresenta uma landing page moderna e responsiva que destaca:

- **Missão e Visão** da empresa
- **Método de Trabalho** estruturado em 4 etapas
- **Diferenciais Competitivos**
- **Portfólio** com 6 projetos de teste de software
- **Modelos de Atuação** flexíveis
- **Formulário de Orçamento** integrado ao Google Sheets
- **Redes Sociais** (LinkedIn, Email, WhatsApp)

## 🎨 Design

- **Tema**: Dark Mode com Verde Neon (#00FF41)
- **Responsividade**: Mobile-first, otimizado para todos os dispositivos
- **Tipografia**: Montserrat (títulos) + Open Sans (corpo)
- **Animações**: Transições suaves e hover effects elegantes

## 🚀 Tecnologias

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📋 Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm
- Git

## 🛠️ Instalação Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/bughunters-landing-page.git
cd bughunters-landing-page

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev

# Acesse em http://localhost:5173
```

## 📦 Build para Produção

```bash
# Gere o build otimizado
pnpm run build

# Visualize o build localmente
pnpm preview
```

## 🌐 Deploy no GitHub Pages

### Passo 1: Criar Repositório
1. Acesse [github.com/new](https://github.com/new)
2. Crie um repositório chamado `bughunters-landing-page`
3. Escolha se será público ou privado

### Passo 2: Fazer Push do Código
```bash
git remote add origin https://github.com/seu-usuario/bughunters-landing-page.git
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages
1. Vá para **Settings** → **Pages**
2. Em **Source**, selecione **Deploy from a branch**
3. Selecione branch `gh-pages` (será criada automaticamente pelo workflow)
4. Clique em **Save**

### Passo 4: Adicionar Link na Seção About
1. Clique no ícone de engrenagem ⚙️ (Settings) ao lado de **About**
2. Em **Website**, adicione: `https://seu-usuario.github.io/bughunters-landing-page`
3. Clique em **Save changes**

## 📝 Estrutura do Projeto

```
├── client/
│   ├── public/              # Assets estáticos
│   │   └── logo.png        # Logo da BugHunters
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── BudgetForm.tsx
│   │   │   └── Portfolio.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx     # Página principal
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml       # Workflow de deploy automático
├── package.json
└── vite.config.ts
```

## 📧 Integração com Google Sheets

O formulário de orçamento envia dados para Google Sheets. Para configurar:

1. Crie um Google Form conectado a uma planilha
2. Configure o script de automação para receber dados
3. Atualize a URL do formulário em `client/src/components/BudgetForm.tsx`

## 🔗 Links Importantes

- **LinkedIn**: [@bughunters-qa](https://linkedin.com/company/bughunters-qa)
- **Email**: contato@bughunters.com.br
- **WhatsApp**: (11) 98765-4321

## 📱 Redes Sociais

- LinkedIn: Siga-nos para atualizações e insights
- Email: Envie suas dúvidas
- WhatsApp: Chat rápido e direto

## 🎯 Próximas Melhorias

- [ ] Adicionar filtro por categoria no portfólio
- [ ] Implementar modal com detalhes expandidos dos projetos
- [ ] Adicionar seção de depoimentos de clientes
- [ ] Integrar chat ao vivo para capturar leads
- [ ] Adicionar blog com artigos sobre QA

## 📄 Licença

Este projeto é propriedade da BugHunters.

## 👥 Contato

Para dúvidas ou sugestões sobre a landing page:
- Email: contato@bughunters.com.br
- WhatsApp: (11) 98765-4321

---

**Desenvolvido com ❤️ para BugHunters**
