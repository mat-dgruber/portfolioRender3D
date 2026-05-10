# AI_RULES.md — Estúdio de Renders 3D

## ⚠️ Propósito

Este documento define as regras inegociáveis para qualquer assistente de IA trabalhando neste projeto. Estas regras existem para manter qualidade, consistência e prevenir regressões. Violar estas regras não é aceitável em nenhuma circunstância.

---

## 🔴 REGRAS ABSOLUTAS (Nunca Quebre)

### Stack (INEGOCIÁVEL)

- Frontend é sempre **Angular 21+** — nunca sugira React, Vue ou Next.js
- Estilização é sempre **Tailwind CSS 3.4.17** — nunca use Angular Material, Bootstrap ou estilos inline
- Quando um componente pronto for necessário, sempre use **PrimeNG 21+** — nunca instale outras bibliotecas de componentes
- Prefira construir **componentes Angular customizados** primeiro — só use PrimeNG quando genuinamente economizar tempo (Carousel, Accordion, Dropdown com busca)
- Backend (se presente) é sempre **Python 3.14+ com FastAPI** — nunca use Node/Express ou Django
- Gerenciamento de pacotes no backend é sempre **uv** — nunca use `pip install` ou `poetry` diretamente
- Sempre use **Angular standalone components** — nunca use NgModules

### Qualidade do Código Angular

- Sempre use **signals** (`signal()`, `computed()`, `effect()`) para estado reativo — nunca use `RxJS Subject/BehaviorSubject` para estado local simples
- Sempre use **nova sintaxe de control flow** (`@if`, `@for`, `@switch`) — nunca use `*ngIf`, `*ngFor` ou `*ngSwitch`
- Sempre use **TypeScript strict mode** — nunca use tipo `any`
- Nunca coloque lógica de negócio dentro de componentes — use services em `core/services/`
- Nunca pule interfaces tipadas — todas as respostas de API e inputs de componentes devem ser tipados
- Nunca use `ElementRef` para manipular o DOM diretamente — use bindings Angular
- Nunca adicione `console.log` em código commitado

### Arquitetura

- Nunca desvie da estrutura de pastas definida em `ARCHITECTURE.md`
- Nunca crie um novo componente se um existente em `shared/components/` pode ser reutilizado
- Nunca instale uma nova dependência (npm ou Python) sem aprovação explícita do usuário
- Todas as chamadas HTTP passam por um service em `core/services/` — nunca chame `HttpClient` diretamente de um componente

### Qualidade do Código Backend

- Sempre defina shapes de request/response com **modelos Pydantic**
- Sempre use **pydantic-settings** para config de ambiente — nunca hardcode valores
- Nunca exponha detalhes de erro internos em respostas de API
- Sempre adicione **CORS middleware** configurado apenas para a origem do frontend

### Otimização de Conversão (INEGOCIÁVEL)

- Cada página deve ter exatamente UM CTA primário acima da dobra
- Botão de WhatsApp deve ser visível em todos os tamanhos de tela (FAB fixo)
- Formulário de contato deve ser alcançável em no máximo 2 cliques de qualquer ponto da página
- Nunca remova ou esconda sinais de confiança (depoimentos, logos de clientes, certificações)
- Nunca reduza tamanho de fonte abaixo de 16px para texto de corpo

### Performance de Imagens (CRÍTICO PARA ESTE PROJETO)

- **Todas** as imagens de portfólio devem ser exportadas em **formato WebP**
- Sempre use `loading="lazy"` em imagens abaixo da dobra
- Sempre defina `width` e `height` explícitos em tags `<img>` para evitar CLS (Cumulative Layout Shift)
- Imagem hero (acima da dobra) deve usar `loading="eager"` e ser pré-carregada com `<link rel="preload">`
- Nunca use imagens PNG ou JPEG não otimizadas diretamente — sempre converter para WebP

### Design

- Nunca altere as cores primárias da marca definidas em `tailwind.config.js`
- Nunca use mais de 2 famílias de fontes
- Sempre mantenha razões de contraste que atendam padrões WCAG AA
- **Mobile-first sempre** — nunca construa desktop-first
- Fundo da página: tons neutros (preto, cinza escuro, branco) para que os renders 3D sejam os protagonistas visuais
- Nunca adicione elementos decorativos coloridos que compitam com as imagens do portfólio

---

## 🟡 PREFERÊNCIAS FORTES (Siga a Menos que Explicitamente Instruído de Outra Forma)

- Prefira `input()` signal-based sobre decorator `@Input()` no Angular 21+
- Prefira `output()` sobre `@Output()` / `EventEmitter`
- Mantenha componentes abaixo de 150 linhas — divida se for maior
- Mantenha handlers de rota FastAPI finos — delegue lógica para a camada de service
- Sempre adicione texto `alt` descritivo em imagens (importante para SEO de portfólio)
- Use estratégia de change detection `OnPush` em todos os componentes
- Para o slider Antes/Depois, prefira implementação CSS/JS pura antes de buscar biblioteca externa

---

## ✅ COMPORTAMENTO OBRIGATÓRIO

- Antes de fazer qualquer mudança, declare o que vai fazer e por quê
- Após fazer uma mudança, resuma o que foi alterado
- Se não tiver certeza sobre o escopo, pergunte antes de construir
- Sempre trabalhe a partir do `PLAN.md` — não invente tasks
- Não avance para o próximo passo do `PLAN.md` até o passo atual ser confirmado como concluído
- Quando trabalhar com imagens do portfólio, sempre confirme se o arquivo WebP já existe antes de usar o original

---

## 📐 Tokens de Design (referência rápida)

```js
// tailwind.config.js — não alterar sem aprovação
colors: {
  brand: {
    bg: '#0a0a0a',        // Fundo principal (quase preto)
    surface: '#141414',   // Cards e superfícies
    border: '#2a2a2a',    // Bordas sutis
    accent: '#c8a96e',    // Dourado/champagne — cor de destaque
    text: '#f0f0f0',      // Texto principal
    muted: '#888888',     // Texto secundário/muted
  }
}
```
