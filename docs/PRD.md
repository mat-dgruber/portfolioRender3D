# PRD — Estúdio de Renders 3D (Landing Page)

## 1. Overview

Landing page de alta performance para um profissional/estúdio especializado em renderização 3D fotorrealista voltado para arquitetos e incorporadoras. O objetivo é posicionar o estúdio como referência visual no nicho e converter visitantes em leads qualificados via WhatsApp e formulário de contato.

Sucesso = cliente abre a página, fica impressionado com o portfólio e entra em contato para solicitar orçamento.

---

## 2. Problem Statement

Arquitetos e incorporadoras têm dificuldade em transmitir emoção e realidade a partir de plantas técnicas 2D. Clientes finais não conseguem "sentir" o projeto antes da obra. Sem uma presença digital convincente, o estúdio de renders depende exclusivamente de indicações e não tem canal próprio de aquisição.

**Sem este site:**
- Leads chegam apenas por boca a boca
- Potenciais clientes que buscam o serviço online não encontram o estúdio
- Concorrentes com presença digital capturm o mercado antes

---

## 3. Target Users

**Perfil primário:**
- Arquitetos autônomos ou de pequenos escritórios buscando diferenciar suas apresentações
- Buscam qualidade técnica e prazo confiável
- Acessam no desktop durante horário comercial ou no celular em reuniões com clientes

**Perfil secundário:**
- Incorporadoras e construtoras que precisam de material de marketing para lançamentos
- Tomadores de decisão que comparam portfólios rapidamente antes de solicitar orçamento

---

## 4. O que este app É

- Landing page de página única com navegação interna por âncoras
- Showcase visual de portfólio (imagens/categorias)
- Formulário de contato com envio por e-mail
- Botão de WhatsApp flutuante e CTAs fixos
- Apresentação do processo de trabalho em etapas
- Seção de depoimentos e prova social
- FAQ com quebra de objeções
- SEO local e estruturado com JSON-LD

---

## 5. O que este app NÃO é

- Não é um sistema de agendamento ou booking
- Não é um portal de cliente com login
- Não é uma loja ou e-commerce de renders
- Não é um blog ou plataforma de conteúdo
- Não tem área administrativa ou CMS
- Não tem autenticação ou cadastro de usuários
- Não integra com sistemas ERP ou CRM complexos

---

## 6. Core Features (MVP)

| Feature | Descrição | Prioridade |
|---|---|---|
| Hero Section | Render 3D como background, headline, CTA principal | 🔴 Alta |
| Portfólio/Galeria | Grid de imagens por categorias (Interiores, Exteriores, etc.) | 🔴 Alta |
| Slider Antes/Depois | Comparação visual planta vs. render | 🟡 Média |
| Seção Processo | 4 etapas ilustradas do fluxo de trabalho | 🔴 Alta |
| Formulário de Contato | Nome, e-mail, tipo de projeto, mensagem → envio por e-mail | 🔴 Alta |
| Botão WhatsApp Flutuante | Fixo na tela em todos os dispositivos | 🔴 Alta |
| Depoimentos | Cards com citações de clientes/parceiros | 🟡 Média |
| FAQ | Accordion com 5–7 perguntas | 🟡 Média |
| Header fixo | Logo + navegação + CTA telefone/WhatsApp | 🔴 Alta |
| Footer | Contato, redes sociais, copyright | 🟢 Baixa |
| SEO On-Page | Metatags, Open Graph, JSON-LD LocalBusiness | 🔴 Alta |

---

## 7. Success Metrics

- **Primário:** Número de contatos via WhatsApp por semana
- **Secundário:** Submissões do formulário de contato
- **Técnico:** Lighthouse Score ≥ 90 em Performance, Acessibilidade e SEO
- **Engajamento:** Bounce rate < 60%, tempo médio na página > 1min 30s

---

## 8. Constraints & Assumptions

- Imagens de portfólio serão fornecidas pelo cliente em alta resolução (exportadas como WebP pelo time de desenvolvimento)
- Não há backend complexo: envio de formulário via EmailJS ou integração simples com SMTP FastAPI
- Deploy via Firebase Hosting (padrão do stack do desenvolvedor)
- Sem budget para licenças de software — usar apenas ferramentas gratuitas/open source
- Prazo: desenvolvimento por fases (sessão a sessão)
- Mobile-first é inegociável: clientes acessam em reuniões pelo celular
