# Jean Caio — Portfolio Freelancer

Site profissional desenvolvido com React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Como rodar

```bash
# 1. Entre na pasta do projeto
cd jean-caio-portfolio

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev

# 4. Acesse em http://localhost:5173
```

## 📦 Build para produção

```bash
npm run build
npm run preview
```

## ✏️ Como personalizar

Edite o arquivo `src/constants/data.js` para atualizar:
- **WHATSAPP** — seu número no formato `https://wa.me/55XXXXXXXXXXX`
- **EMAIL** — seu e-mail de contato
- **problems, solutions, services, projects, diffs, testimonials** — todos os textos do site
- **stats** — números do Hero (projetos, satisfação, etc.)

## 🗂️ Estrutura de arquivos

```
src/
├── components/
│   ├── Navbar.jsx          # Navbar com efeito ao rolar + menu mobile
│   ├── Hero.jsx            # Hero com orbs, grid, animações e contadores
│   ├── Marquee.jsx         # Faixa com tecnologias animadas
│   ├── Problema.jsx        # Seção das dores do cliente
│   ├── Solucao.jsx         # Seção de como resolve
│   ├── Servicos.jsx        # Cards de serviços
│   ├── Portfolio.jsx       # Galeria de projetos com hover
│   ├── Diferenciais.jsx    # Layout assimétrico com diferenciais
│   ├── Depoimentos.jsx     # Cards de depoimentos
│   ├── CTA.jsx             # Call to Action final
│   ├── Footer.jsx          # Rodapé completo
│   ├── SectionHeader.jsx   # Componente reutilizável de cabeçalho
│   └── WhatsAppFloat.jsx   # Botão flutuante do WhatsApp
├── constants/
│   └── data.js             # ⭐ Todos os dados e textos do site
├── hooks/
│   └── useReveal.js        # Hook de animação no scroll
├── App.jsx                 # Componente raiz
├── main.jsx                # Entry point
└── index.css               # Estilos globais + Tailwind
```

## 🎨 Tecnologias

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React**

## 🌐 Deploy

### Vercel (recomendado)
1. Suba o projeto no GitHub
2. Conecte no [vercel.com](https://vercel.com)
3. Deploy automático a cada push

### Netlify
1. `npm run build`
2. Arraste a pasta `dist/` no [netlify.com/drop](https://app.netlify.com/drop)
