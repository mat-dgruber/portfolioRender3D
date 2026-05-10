# PLAN.md — Estúdio de Renders 3D (Landing Page)

## Regras

- Faça UM passo por vez
- NÃO avance para o próximo passo até o passo atual estar marcado como ✅ DONE
- Cada passo deve ser testado antes de ser marcado como completo
- Se um passo falhar, corrija antes de continuar

---

## Fase 1 — Setup do Projeto

- [ ] **Passo 1:** Scaffoldar projeto Angular 21+ com standalone components e TypeScript strict
  ```bash
  ng new render-studio --standalone --strict --style=css --routing=false
  ```
- [ ] **Passo 2:** Instalar e configurar Tailwind CSS 3.4.17
  ```bash
  npm install -D tailwindcss@3.4.17 postcss autoprefixer
  npx tailwindcss init
  ```
- [ ] **Passo 3:** Instalar PrimeNG 21+ e configurar provider no `app.config.ts`
- [ ] **Passo 4:** Criar estrutura de pastas conforme `ARCHITECTURE.md` (`core/`, `features/`, `shared/`, `layout/`)
- [ ] **Passo 5:** Configurar tokens de cor da marca em `tailwind.config.js` (fundo escuro + dourado)
- [ ] **Passo 6:** Configurar `environment.ts` com variável `apiBaseUrl`
- [ ] **Passo 7:** Deploy do projeto em branco no Firebase Hosting — confirmar que vai ao ar
- [ ] **Passo 8:** Configurar domínio customizado no Firebase (se já disponível)

---

## Fase 2 — Layout & Navegação

- [ ] **Passo 9:** Construir `HeaderComponent` standalone
  - Logo (texto ou SVG)
  - Links de navegação com scroll suave para âncoras (`#portfolio`, `#processo`, `#contato`)
  - Botão WhatsApp/CTA visível no mobile
  - Header transparente no topo → fundo sólido ao rolar (efeito scroll)
- [ ] **Passo 10:** Construir `FooterComponent` standalone com contato, redes e copyright
- [ ] **Passo 11:** Construir `WhatsappFabComponent` — botão flutuante fixo com ícone WhatsApp
- [ ] **Passo 12:** Registrar Header, Footer e FAB no `app.component.ts`
- [ ] **Passo 13:** Testar Header e Footer em mobile (375px), tablet (768px) e desktop (1280px)

---

## Fase 3 — Hero Section

- [ ] **Passo 14:** Construir `HeroComponent`
  - Background: imagem WebP de render 3D de alta qualidade (ou placeholder por ora)
  - Overlay escuro gradiente para legibilidade
  - Headline principal + subheadline
  - CTA primário: "Solicitar Orçamento" (scroll para `#contato`)
  - CTA secundário: "Ver Portfólio" (scroll para `#portfolio`)
  - Animação de entrada (fade + slide-up) nos textos
- [ ] **Passo 15:** Testar Hero em mobile — garantir que CTA está visível sem scroll
- [ ] **Passo 16:** Otimizar imagem hero: WebP, `loading="eager"`, `<link rel="preload">`

---

## Fase 4 — Seção Problema/Solução

- [ ] **Passo 17:** Construir `ProblemComponent`
  - Texto curto sobre a dor do cliente (plantas 2D vs. emoção do render)
  - Visual de contraste: ícone/imagem planta técnica → ícone/imagem render 3D
  - Tom: empático e direto

---

## Fase 5 — Portfólio

- [ ] **Passo 18:** Criar estrutura de dados do portfólio em `assets/data/portfolio.json`
  ```json
  [{ "id": 1, "category": "interiores", "title": "...", "src": "...", "thumb": "..." }]
  ```
- [ ] **Passo 19:** Construir `PortfolioComponent`
  - Grid responsivo de imagens (3 colunas desktop, 2 tablet, 1 mobile)
  - Filtro por categoria (Todos / Interiores / Exteriores / Plantas Humanizadas / Animações)
  - Hover com overlay e título do projeto
- [ ] **Passo 20:** Adicionar lightbox ao clicar na imagem (expandir em tela cheia — implementar custom ou usar `@angular/cdk/overlay`)
- [ ] **Passo 21:** Todas as imagens do portfólio em WebP com `loading="lazy"` e `alt` descritivo
- [ ] **Passo 22:** Testar filtro de categorias e lightbox em mobile

---

## Fase 6 — Slider Antes/Depois

- [ ] **Passo 23:** Construir `BeforeAfterComponent`
  - Duas imagens sobrepostas: planta técnica / sketch (antes) × render final (depois)
  - Divisor arrastável (drag) que revela a proporção de cada imagem
  - Implementação: CSS clip-path + JavaScript drag — sem biblioteca externa
- [ ] **Passo 24:** Testar em touch (mobile) — garantir que o arraste funciona com toque

---

## Fase 7 — Processo

- [ ] **Passo 25:** Construir `ProcessComponent`
  - 4 etapas numeradas com ícone, título e descrição:
    1. Briefing e Arquivos
    2. Câmeras e Iluminação
    3. Renderização e Texturização
    4. Entrega Final
  - Layout: linha horizontal desktop, vertical em mobile
  - Animação: etapas aparecem em sequência ao entrar na viewport (Intersection Observer)

---

## Fase 8 — Depoimentos

- [ ] **Passo 26:** Construir `TestimonialsComponent`
  - Usar **PrimeNG Carousel** para múltiplos depoimentos
  - Cada card: citação, nome, cargo/empresa, foto (opcional)
  - Autoplay desativado — navegação manual

---

## Fase 9 — FAQ

- [ ] **Passo 27:** Construir `FaqComponent`
  - Usar **PrimeNG Accordion**
  - Perguntas iniciais:
    1. Qual é o prazo médio de entrega?
    2. Quantas revisões estão inclusas?
    3. Quais arquivos preciso enviar?
    4. Vocês fazem animações arquitetônicas?
    5. Como funciona o pagamento?
    6. Atendem clientes de outras cidades/estados?

---

## Fase 10 — Formulário de Contato

- [ ] **Passo 28:** Construir `ContactComponent` com Angular Reactive Forms
  - Campos: Nome*, E-mail*, Telefone, Tipo de Projeto (select), Mensagem*
  - Validadores: required, email format, minLength
- [ ] **Passo 29:** Criar `ContactService` em `core/services/`
  - **MVP:** Integrar com EmailJS (sem backend)
  - **Alternativa:** POST para FastAPI `/contact`
- [ ] **Passo 30:** Adicionar estados de UI: loading spinner, sucesso (mensagem verde), erro (mensagem vermelha)
- [ ] **Passo 31:** Testar formulário end-to-end — confirmar e-mail recebido
- [ ] **Passo 32:** (Se backend) Criar endpoint FastAPI `POST /contact` com modelo Pydantic + envio por SMTP

---

## Fase 11 — Montagem da Home

- [ ] **Passo 33:** Montar `HomeComponent` com todas as sections na ordem correta:
  ```
  #hero → #problema → #portfolio → #antes-depois → #processo → #depoimentos → #faq → #contato
  ```
- [ ] **Passo 34:** Adicionar `id` de âncora em cada section para o scroll da navegação funcionar
- [ ] **Passo 35:** Testar scroll suave no header em todos os dispositivos

---

## Fase 12 — SEO & Performance

- [ ] **Passo 36:** Adicionar `Title` e `Meta` services no `HomeComponent`
  - Title: "Renders 3D Fotorrealistas para Arquitetos e Incorporadoras | [Nome do Estúdio]"
  - Description: texto relevante com palavras-chave
- [ ] **Passo 37:** Adicionar Open Graph meta tags no `index.html` (título, descrição, imagem)
- [ ] **Passo 38:** Adicionar JSON-LD `LocalBusiness` no `index.html`
- [ ] **Passo 39:** Adicionar `robots.txt` e `sitemap.xml` em `src/assets/`
- [ ] **Passo 40:** Rodar Lighthouse audit — corrigir qualquer score abaixo de 90 em Performance e Acessibilidade

---

## Fase 13 — QA Final & Lançamento

- [ ] **Passo 41:** QA completo em todas as sections — mobile (375px, 390px), tablet (768px), desktop (1280px, 1920px)
- [ ] **Passo 42:** Verificar todos os links, número de WhatsApp e destino do formulário
- [ ] **Passo 43:** Verificar contraste de cores WCAG AA em todo o conteúdo textual
- [ ] **Passo 44:** Confirmar que FAB do WhatsApp não obstrui conteúdo importante em mobile
- [ ] **Passo 45:** Deploy final para produção
- [ ] **Passo 46:** Testar site ao vivo — enviar formulário real + abrir WhatsApp

---

✅ **PROJETO COMPLETO QUANDO:** Todos os passos acima estão marcados e o site ao vivo gera pelo menos um contato real via formulário ou WhatsApp.

---

## 📊 Resumo de Fases

| Fase | Descrição | Passos |
|---|---|---|
| 1 | Setup do Projeto | 1–8 |
| 2 | Layout & Navegação | 9–13 |
| 3 | Hero Section | 14–16 |
| 4 | Problema/Solução | 17 |
| 5 | Portfólio | 18–22 |
| 6 | Slider Antes/Depois | 23–24 |
| 7 | Processo | 25 |
| 8 | Depoimentos | 26 |
| 9 | FAQ | 27 |
| 10 | Formulário de Contato | 28–32 |
| 11 | Montagem da Home | 33–35 |
| 12 | SEO & Performance | 36–40 |
| 13 | QA Final & Lançamento | 41–46 |
