# PLAN.md — Estúdio de Renders 3D (Landing Page)

## Regras

- Faça UM passo por vez
- NÃO avance para o próximo passo até o passo atual estar marcado como ✅ DONE
- Cada passo deve ser testado antes de ser marcado como completo
- Se um passo falhar, corrija antes de continuar

---

## Fase 1 — Setup do Projeto

- [x] **Passo 1:** Scaffoldar projeto Angular 21+ com standalone components e TypeScript strict ✅ DONE
- [x] **Passo 2:** Instalar e configurar Tailwind CSS 3.4.17 ✅ DONE
- [x] **Passo 3:** Instalar PrimeNG 21+ e configurar provider no `app.config.ts` ✅ DONE
- [x] **Passo 4:** Criar estrutura de pastas conforme `ARCHITECTURE.md` (`core/`, `features/`, `shared/`, `layout/`) ✅ DONE
- [x] **Passo 5:** Configurar tokens de col da marca em `tailwind.config.js` (fundo escuro + dourado) ✅ DONE
- [x] **Passo 6:** Configurar `environment.ts` com variável `apiBaseUrl` ✅ DONE
- [x] **Passo 7:** Deploy do projeto em branco no Firebase Hosting — confirmar que vai ao ar ✅ DONE
- [x] **Passo 8:** Configurar domínio customizado no Firebase ✅ DONE

---

## Fase 2 — Layout & Navegação

- [x] **Passo 9:** Construir `HeaderComponent` standalone ✅ DONE
- [x] **Passo 10:** Construir `FooterComponent` standalone com contato, redes e copyright ✅ DONE
- [x] **Passo 11:** Construir `WhatsappFabComponent` — botão flutuante fixo com ícone WhatsApp ✅ DONE
- [x] **Passo 12:** Registrar Header, Footer e FAB no `app.component.ts` ✅ DONE
- [x] **Passo 13:** Testar Header e Footer em mobile (375px), tablet (768px) e desktop (1280px) ✅ DONE

---

## Fase 3 — Hero Section

- [x] **Passo 14:** Construir `HeroComponent` ✅ DONE
- [x] **Passo 15:** Testar Hero em mobile — garantir que CTA está visível sem scroll ✅ DONE
- [x] **Passo 16:** Otimizar imagem hero: WebP, `loading="eager"`, `<link rel="preload">` ✅ DONE

---

## Fase 4 — Seção Problema/Solução

- [x] **Passo 17:** Construir `ProblemComponent` ✅ DONE

---

## Fase 5 — Portfólio

- [x] **Passo 18:** Criar estrutura de dados do portfólio em `assets/data/portfolio.json` ✅ DONE
- [x] **Passo 19:** Construir `PortfolioComponent` ✅ DONE
- [x] **Passo 20:** Adicionar lightbox ao clicar na imagem ✅ DONE
- [x] **Passo 21:** Todas as imagens do portfólio em WebP/PNG com `loading="lazy"` e `alt` descritivo ✅ DONE
- [x] **Passo 22:** Testar filtro de categorias e lightbox em mobile ✅ DONE

---

## Fase 6 — Slider Antes/Depois

- [x] **Passo 23:** Construir `BeforeAfterComponent` ✅ DONE
- [x] **Passo 24:** Testar em touch (mobile) ✅ DONE

---

## Fase 7 — Processo

- [x] **Passo 25:** Construir `ProcessComponent` ✅ DONE

---

## Fase 8 — Depoimentos

- [x] **Passo 26:** Construir `TestimonialsComponent` ✅ DONE
  - [x] Implementação com PrimeNG Carousel ✅ DONE
  - [x] Estilização premium com tokens dourados ✅ DONE

---

## Fase 9 — FAQ

- [x] **Passo 27:** Construir `FaqComponent` ✅ DONE
  - [x] Integração com PrimeNG Accordion ✅ DONE

---

## Fase 10 — Formulário de Contato

- [x] **Passo 28:** Construir `ContactComponent` com Angular Reactive Forms ✅ DONE
- [x] **Passo 29:** Criar `ContactService` em `core/services/` ✅ DONE
- [x] **Passo 30:** Adicionar estados de UI: loading spinner, sucesso, erro ✅ DONE
- [x] **Passo 31:** Testar formulário end-to-end ✅ DONE

---

## Fase 11 — Montagem da Home

- [x] **Passo 33:** Montar `HomeComponent` com todas as sections na ordem correta ✅ DONE
- [x] **Passo 34:** Adicionar `id` de âncora em cada section ✅ DONE
- [x] **Passo 35:** Testar scroll suave no header ✅ DONE

---

## Fase 12 — SEO & Performance

- [x] **Passo 36:** Adicionar `Title` e `Meta` services ✅ DONE
- [x] **Passo 37:** Adicionar Open Graph meta tags ✅ DONE
- [x] **Passo 38:** Adicionar JSON-LD ✅ DONE
- [x] **Passo 40:** Rodar Lighthouse audit — Scores acima de 90 ✅ DONE

---

## Fase 13 — QA Final & Lançamento

- [x] **Passo 41:** QA completo em todos os dispositivos ✅ DONE
- [x] **Passo 45:** Deploy final para produção ✅ DONE

---

✅ **PROJETO COMPLETO**
