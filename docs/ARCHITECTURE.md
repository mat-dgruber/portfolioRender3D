# ARCHITECTURE.md — Estúdio de Renders 3D

## 1. Tech Stack

### Frontend

| Tecnologia   | Versão | Motivo                                                                      |
| ------------ | ------ | --------------------------------------------------------------------------- |
| Angular      | 21+    | Framework principal — standalone components, signals, performance           |
| Tailwind CSS | 3.4.17 | Estilização utilitária, responsividade nativa, sem CSS custom desnecessário |
| TypeScript   | strict | Tipagem forte, zero `any`                                                   |
| PrimeNG      | 21+    | Somente quando necessário (Carousel, Accordion FAQ)                         |

### Backend (Opcional — Envio de Formulário)

| Tecnologia | Versão | Motivo                                        |
| ---------- | ------ | --------------------------------------------- |
| Python     | 3.14+  | Linguagem padrão do stack                     |
| FastAPI    | latest | API REST leve para endpoint `/contact`        |
| uv         | latest | Gerenciador de pacotes — substitui pip/poetry |

> **Nota:** Para MVP, considerar EmailJS (zero backend) antes de levantar FastAPI. Escalar para FastAPI se houver necessidade de lógica adicional (CRM, notificações, rate limiting).

---

## 2. Folder Structure

```
render-studio/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/
│   │   │   │   ├── services/
│   │   │   │   │   ├── contact.service.ts        # POST formulário de contato
│   │   │   │   │   └── analytics.service.ts      # Rastreamento de eventos
│   │   │   │   └── models/
│   │   │   │       └── contact-form.model.ts     # Interface ContactForm
│   │   │   ├── features/
│   │   │   │   └── home/
│   │   │   │       ├── sections/
│   │   │   │       │   ├── hero/
│   │   │   │       │   │   ├── hero.component.ts
│   │   │   │       │   │   └── hero.component.html
│   │   │   │       │   ├── problem/
│   │   │   │       │   │   ├── problem.component.ts
│   │   │   │       │   │   └── problem.component.html
│   │   │   │       │   ├── portfolio/
│   │   │   │       │   │   ├── portfolio.component.ts
│   │   │   │       │   │   └── portfolio.component.html
│   │   │   │       │   ├── before-after/
│   │   │   │       │   │   ├── before-after.component.ts
│   │   │   │       │   │   └── before-after.component.html
│   │   │   │       │   ├── process/
│   │   │   │       │   │   ├── process.component.ts
│   │   │   │       │   │   └── process.component.html
│   │   │   │       │   ├── testimonials/
│   │   │   │       │   │   ├── testimonials.component.ts
│   │   │   │       │   │   └── testimonials.component.html
│   │   │   │       │   ├── faq/
│   │   │   │       │   │   ├── faq.component.ts
│   │   │   │       │   │   └── faq.component.html
│   │   │   │       │   └── contact/
│   │   │   │       │       ├── contact.component.ts
│   │   │   │       │       └── contact.component.html
│   │   │   │       └── home.component.ts         # Orquestra todas as sections
│   │   │   ├── shared/
│   │   │   │   └── components/
│   │   │   │       ├── whatsapp-fab/             # Botão flutuante WhatsApp
│   │   │   │       │   ├── whatsapp-fab.component.ts
│   │   │   │       │   └── whatsapp-fab.component.html
│   │   │   │       └── section-title/            # Título reutilizável de seção
│   │   │   │           ├── section-title.component.ts
│   │   │   │           └── section-title.component.html
│   │   │   ├── layout/
│   │   │   │   ├── header/
│   │   │   │   │   ├── header.component.ts       # Header fixo com nav e CTA
│   │   │   │   │   └── header.component.html
│   │   │   │   └── footer/
│   │   │   │       ├── footer.component.ts
│   │   │   │       └── footer.component.html
│   │   │   ├── app.component.ts                  # Root component
│   │   │   ├── app.config.ts                     # provideRouter, provideHttpClient
│   │   │   └── app.routes.ts                     # { path: '', component: HomeComponent }
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   │   ├── portfolio/                    # WebP otimizados do portfólio
│   │   │   │   ├── hero/                         # Imagem/vídeo hero
│   │   │   │   └── icons/                        # SVGs de ícones personalizados
│   │   │   ├── robots.txt
│   │   │   └── sitemap.xml
│   │   ├── styles.css                            # @tailwind + variáveis globais
│   │   └── index.html                            # OG tags + JSON-LD
│   ├── tailwind.config.js                        # Tokens de cor/fonte do estúdio
│   ├── angular.json
│   └── package.json
│
└── backend/ (opcional)
    ├── app/
    │   ├── main.py                               # FastAPI app + CORS
    │   ├── api/
    │   │   └── routes/
    │   │       └── contact.py                    # POST /contact
    │   ├── core/
    │   │   ├── config.py                         # pydantic-settings
    │   │   └── deps.py                           # dependências compartilhadas
    │   ├── models/
    │   │   └── contact.py                        # Pydantic ContactRequest
    │   └── services/
    │       └── email_service.py                  # Lógica de envio de e-mail
    ├── pyproject.toml                            # uv config + dependências
    ├── uv.lock
    └── .env
```

---

## 3. Data Flow

### Submissão do Formulário de Contato

```
[Usuário preenche formulário]
        ↓
[contact.component.ts — ReactiveForm validado]
        ↓
[ContactService.submit(form)] → POST /api/contact
        ↓
[FastAPI /contact endpoint]
        ↓
[email_service.py → SMTP / SendGrid]
        ↓
[E-mail chega na caixa do estúdio]
        ↓
[UI: estado de sucesso ou erro exibido ao usuário]
```

**Alternativa MVP (sem backend):**

```
[ContactService.submit(form)] → EmailJS API (client-side)
```

### Conteúdo Estático

- Portfólio: imagens WebP servidas via Firebase Hosting CDN
- Não há banco de dados — todo conteúdo é hardcoded nos componentes ou em arquivos JSON estáticos em `assets/`

---

## 4. Component Map

| Componente              | Localização                            | Responsabilidade                                          |
| ----------------------- | -------------------------------------- | --------------------------------------------------------- |
| `AppComponent`          | `app/`                                 | Shell raiz — renderiza header, router-outlet, footer, FAB |
| `HeaderComponent`       | `layout/header/`                       | Logo, nav âncoras, CTA WhatsApp/contato — fixo no topo    |
| `FooterComponent`       | `layout/footer/`                       | Contato, redes sociais, copyright                         |
| `HomeComponent`         | `features/home/`                       | Orquestra todas as sections da single page                |
| `HeroComponent`         | `features/home/sections/hero/`         | Imagem/vídeo de fundo, headline, CTA principal            |
| `ProblemComponent`      | `features/home/sections/problem/`      | Texto + visual do problema/solução                        |
| `PortfolioComponent`    | `features/home/sections/portfolio/`    | Grid com filtro por categoria + lightbox                  |
| `BeforeAfterComponent`  | `features/home/sections/before-after/` | Slider interativo planta vs. render                       |
| `ProcessComponent`      | `features/home/sections/process/`      | 4 etapas do processo ilustradas                           |
| `TestimonialsComponent` | `features/home/sections/testimonials/` | PrimeNG Carousel com depoimentos                          |
| `FaqComponent`          | `features/home/sections/faq/`          | PrimeNG Accordion com perguntas                           |
| `ContactComponent`      | `features/home/sections/contact/`      | ReactiveForm + integração ContactService                  |
| `WhatsappFabComponent`  | `shared/components/whatsapp-fab/`      | Botão flutuante fixo — link direto WhatsApp               |
| `SectionTitleComponent` | `shared/components/section-title/`     | Título + subtítulo reutilizável por seção                 |

---

## 5. Environment Variables

```env
# Frontend (environment.ts)
API_BASE_URL=https://api.seudominio.com.br   # URL base da API FastAPI

# Backend (.env)
SMTP_HOST=smtp.serve.com
SMTP_PORT=000
SMTP_USER=seuemail@gmail.com
SMTP_PASSWORD=sua_senha_de_app
NOTIFICATION_EMAIL=email@dominiodaempresa.com.br
ALLOWED_ORIGINS=https://seudominio.com.br,http://localhost:4200
```

---

## 6. Deployment

### Frontend

- **Host:** Firebase Hosting
- **CI/CD:** GitHub Actions
  - Push em `main` → build Angular → deploy automático
- **Domínio:** Configurado via GoDaddy DNS → Firebase

### Backend (se necessário)

- **Host:** Railway ou Render.com (tier gratuito para MVP)
- **Processo:** `uvicorn app.main:app --host 0.0.0.0 --port 8000`
- **Alternativa zero-backend:** EmailJS (não requer servidor)

### Pipeline simplificado

```
git push origin main
        ↓
GitHub Actions: ng build --configuration=production
        ↓
firebase deploy --only hosting
        ↓
Live em: https://estudiorenders.web.app (ou domínio próprio)
```
