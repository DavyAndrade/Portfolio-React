# 🚀 Portfólio Pessoal - Davy Andrade

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Meu primeiro projeto em React - Um portfólio moderno e responsivo**

[🌐 Demo Live](https://davyandrade-portfolio.netlify.app) • [📧 Contato](mailto:davyandrade.dev@email.com)

</div>

---

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [📱 Screenshots](#-screenshots)
- [🚀 Como Executar](#-como-executar)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🎨 Componentes](#-componentes)
- [📧 Configuração do EmailJS](#-configuração-do-emailjs)
- [🌐 Deploy](#-deploy)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)

---

## 🎯 Sobre o Projeto

Este é meu **primeiro projeto desenvolvido em React**, criado para apresentar minhas habilidades como desenvolvedor frontend. O portfólio foi construído do zero, aplicando conceitos modernos de desenvolvimento web e boas práticas de código.

### 🎪 O que aprendi construindo este projeto:

- ⚛️ **React fundamentals**: Components, Props, State, Hooks
- 🎨 **Styling moderno**: Tailwind CSS, SCSS, Animações
- 📱 **Design responsivo**: Mobile-first approach
- 🏗️ **Arquitetura**: Organização de componentes e estrutura de pastas
- 📧 **Integração de APIs**: EmailJS para formulário de contato
- ⚡ **Build tools**: Vite, ESLint
- 🚀 **Deploy**: Netlify com CI/CD automático

---

## ✨ Funcionalidades

### 🌟 **Interações**

- ✅ Menu mobile responsivo com animações suaves
- ✅ Carrossel infinito de tecnologias com pause on hover
- ✅ Scroll suave entre seções via navegação
- ✅ Botão "Ver mais/Ver menos" nos projetos (responsivo)
- ✅ Formulário de contato funcional com EmailJS
- ✅ Loading states e feedback visual
- ✅ Animações de entrada personalizadas

### 📱 **Responsividade**

- ✅ **Mobile First**: Desenvolvido primeiro para mobile
- ✅ **Breakpoints inteligentes**: Tablet (768px) e Desktop (1024px+)
- ✅ **Grid adaptativo**: 1 coluna (mobile) → 2 colunas (tablet) → 3 colunas (desktop)
- ✅ **Limites dinâmicos**: Quantidade de projetos varia por dispositivo

### 🎨 **Design**

- ✅ **Dark theme** moderno com gradientes
- ✅ **Micro-interações** e hover effects
- ✅ **Tipografia hierárquica** bem definida
- ✅ **Paleta de cores consistente**: Emerald/Sky gradient

---

## 🛠️ Tecnologias

### **Frontend Core**

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e rápida
- **JavaScript ES6+** - Linguagem de programação

### **Styling**

- **Tailwind CSS 4** - Framework CSS utility-first
- **SCSS** - Preprocessador CSS para estilos customizados
- **Lucide React** - Ícones modernos e consistentes
- **React Icons** - Biblioteca de ícones diversificada

### **Funcionalidades**

- **EmailJS** - Envio de emails do frontend
- **Netlify** - Deploy e hosting

### **Desenvolvimento**

- **ESLint** - Linting e padronização de código
- **Git** - Controle de versão

---

## 📱 Screenshots (A adicionar)

### 🖥️ **Desktop**

```
🏠 Hero Section: Apresentação pessoal com CTA buttons
👨‍💻 Sobre: Informações pessoais e objetivos
⚡ Skills: Carrossel de tecnologias + Barras de proficiência
🚀 Projetos: Grid responsivo com filtros
📧 Contato: Formulário funcional integrado
```

### 📱 **Mobile**

```
📱 Navigation: Menu hamburger animado
🎯 Layout: Single column otimizada
⭐ Performance: Carregamento otimizado
```

---

## 🚀 Como Executar

### **Pré-requisitos**

- Node.js 18+
- npm ou yarn

### **Instalação**

```bash
# Clone o repositório
git clone https://github.com/DavyAndrade/Portfolio-React.git

# Entre na pasta do projeto
cd Portfolio-React

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:5173
```

### **Scripts disponíveis**

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview da build
npm run lint     # Verificar código
```

---

## 📁 Estrutura do Projeto

```
📦 Portfolio-React/
├── 📄 .gitignore             # Arquivos ignorados pelo Git
├── 📄 eslint.config.js       # Configuração do ESLint
├── 📄 index.html            # Template HTML principal
├── 📄 package.json          # Dependências e scripts
├── 📄 package-lock.json     # Lock das dependências
├── 📄 README.md             # Documentação do projeto
├── 📄 vite.config.js        # Configuração do Vite
├── 📂 public/               # Assets públicos estáticos
│   └── 🎨 favicon.png        # Logo/Favicon personalizado
└── 📂 src/                  # Código fonte
    ├── 📄 App.css           # Estilos do componente App
    ├── 📄 App.jsx           # Componente principal da aplicação
    ├── 📄 index.css         # Estilos CSS compilados
    ├── 📄 index.css.map     # Source map do CSS
    ├── 📄 index.scss        # Estilos SCSS customizados
    ├── 📄 main.jsx          # Entry point da aplicação
    ├── 📁 assets/           # Recursos estáticos
    │   ├── 🖼️ bentogrid.png   # Screenshot do projeto Bento Grid
    │   ├── 🖼️ davy.jpg        # Foto pessoal
    │   ├── 🖼️ fitcheck.png    # Screenshot do projeto FitCheck
    │   ├── 🖼️ localizacep.png # Screenshot do projeto LocalizaCEP
    │   ├── 🖼️ social-links.png # Screenshot do Social Links
    │   └── 🖼️ taskflow.png    # Screenshot do projeto TaskFlow
    └── 📁 components/       # Componentes React organizados
        ├── 📁 layout/       # Componentes de estrutura
        │   ├── 🧩 Footer.jsx   # Componente do rodapé
        │   └── 🧩 Navbar.jsx   # Componente de navegação
        ├── 📁 sections/     # Seções principais da página
        │   ├── 📁 About/    # Seção "Sobre mim"
        │   │   ├── 🧩 About.jsx     # Componente principal da seção
        │   │   ├── 🧩 AboutItem.jsx # Item individual do about
        │   │   └── 🧩 AboutText.jsx # Texto descritivo
        │   ├── 📁 Contact/  # Seção de contato
        │   │   ├── 🧩 Contact.jsx     # Componente principal
        │   │   ├── 🧩 ContactForm.jsx # Formulário de contato
        │   │   └── 🧩 ContactItem.jsx # Item de contato
        │   ├── 📁 Hero/     # Seção inicial/principal
        │   │   └── 🧩 Hero.jsx       # Componente hero
        │   ├── 📁 Projects/ # Seção de projetos
        │   │   ├── 🧩 ProjectCard.jsx      # Card individual de projeto
        │   │   ├── 🧩 Projects.jsx         # Componente principal
        │   │   ├── 🧩 ProjectsContainer.jsx # Container dos projetos
        │   │   └── 📄 projects.js          # Dados dos projetos
        │   └── 📁 Skills/   # Seção de habilidades
        │       ├── 🧩 Skills.jsx           # Componente principal
        │       ├── 📁 Carousel/            # Carrossel de tecnologias
        │       │   ├── 🧩 Carousel.jsx        # Container do carrossel
        │       │   ├── 🧩 CarouselGroup.jsx   # Grupo de itens
        │       │   └── 🧩 CarouselItem.jsx    # Item individual
        │       ├── 📁 Proficiency/         # Barras de proficiência
        │       │   ├── 🧩 Proficiency.jsx     # Componente principal
        │       │   ├── 🧩 ProficiencyInfo.jsx # Informações de skill
        │       │   ├── 🧩 ProficiencyItem.jsx # Item de proficiência
        │       │   └── 🧩 ProgressBar.jsx     # Barra de progresso
        │       └── 📁 Specialization/      # Especialidades
        │           ├── 🧩 Specialization.jsx     # Componente principal
        │           └── 🧩 SpecializationItem.jsx # Item de especialização
        └── 📁 ui/           # Componentes reutilizáveis
            └── 🧩 Button.jsx   # Componente de botão
```

---

## 🎨 Componentes

### **🏗️ Arquitetura de Componentes**

#### **Layout Components**

```jsx
<Navbar />          // Navegação responsiva com menu mobile
<Footer />          // Rodapé com links sociais
```

#### **Section Components**

```jsx
<Hero />           // Apresentação + CTA buttons
<About />          // Informações pessoais
<Skills />         // Tecnologias + Proficiência + Especialização
<Projects />       // Grid de projetos com filtros
<Contact />        // Formulário funcional
```

#### **Micro Components**

```jsx
<ProjectCard />    // Card individual de projeto
<CarouselItem />   // Item do carrossel de skills
<ProgressBar />    // Barra de proficiência
<ContactForm />    // Formulário com validação
```

### **🎯 Padrões Utilizados**

#### **Props e State Management**

- ✅ Props para comunicação entre componentes
- ✅ useState para estado local (menu, loading, forms)
- ✅ Conditional rendering para diferentes estados

#### **Responsividade Inteligente**

- ✅ Breakpoints customizados no JavaScript
- ✅ Limites dinâmicos baseados em screen size
- ✅ Mobile-first approach

---

## 📧 Configuração do EmailJS

### **Setup necessário:**

1. **Criar conta**: [emailjs.com](https://emailjs.com)
2. **Configurar Gmail**: Email Services → Add Gmail
3. **Criar template**: Email Templates → New Template
4. **Pegar credenciais**: Account → API Keys

### **Variáveis de ambiente:**

```bash
# Criar arquivo .env.local na raiz:
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

### **Template HTML sugerido:**

```html
Assunto: Contato do Portfólio - {{name}}

<h2>Nova mensagem do seu portfólio!</h2>
<p><strong>Nome:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Mensagem:</strong> {{message}}</p>
```

---

## 🌐 Deploy

### **Netlify (Configurado)**

- ✅ **Build command**: `npm run build`
- ✅ **Publish directory**: `dist`
- ✅ **Auto deploy**: Commits na branch main
- ✅ **Environment variables**: Configurar no painel Netlify

### **Deploy manual:**

```bash
# Build do projeto
npm run build

# Upload da pasta dist/ para seu hosting
```

---

## 🤝 Contribuição

Este é um projeto pessoal de aprendizado, mas sugestões são sempre bem-vindas!

### **Como contribuir:**

1. Fork o repositório
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'Add: nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Desenvolvedor

**Davy Andrade**

- 🌐 Website: [Portfolio](https://davyandrade-portfolio.netlify.app)
- 💼 LinkedIn: [DavyAndrade](https://www.linkedin.com/in/davy-andrade)
- 🐱 GitHub: [DavyAndrade](https://github.com/DavyAndrade)
- 📧 Email: davyandrade.dev@gmail.com

---

<div align="center">

**⭐ Se este projeto te ajudou, deixe uma estrela!**

_Desenvolvido com ❤️ e muito ☕ por Davy Andrade_

</div>
