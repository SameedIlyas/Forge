# Forge

**AI Website Builder**
[**Live Demo → forge-one-nu.vercel.app**](https://forge-one-nu.vercel.app/)

---

## Overview

**Forge** is a full-stack **AI-powered website builder** inspired by [Lovable](https://lovable.dev).
It allows users to:

* Generate and manage websites using AI.
* Sign up and manage billing with **Clerk**.
* Build at scale with **PostgreSQL + Prisma**.
* Handle background AI workflows with **Inngest**.
* Fetch and mutate data efficiently with **tRPC + TanStack Query**.

---

## Features

* **AI Website Builder** – Generate full websites instantly.
* **Authentication & Billing with Clerk** – Free & Pro tiers.
* **Background Jobs with Inngest** – Handle AI workflows asynchronously.
* **Typed API Layer with tRPC** – End-to-end typesafety.
* **Data Management with TanStack Query** – Optimistic updates, caching, and syncing.
* **Prisma + PostgreSQL** – Robust and scalable database.
* **Form Handling** – `react-hook-form` + Zod validation.
* **UI/UX** – Built with shadcn/ui, TailwindCSS, Radix primitives, lucide-react icons, Sonner toasts.
* **Developer Experience** – SuperJSON for serialization, ESLint + TypeScript strict mode.

---

## Tech Stack

| Layer              | Tech Used                                                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**       | [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/), [TailwindCSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) |
| **Auth & Billing** | [Clerk](https://clerk.com/)                                                                                                                     |
| **Backend**        | [PostgreSQL](https://www.postgresql.org/), [Prisma](https://www.prisma.io/)                                                                     |
| **Async Jobs**     | [Inngest](https://www.inngest.com/)                                                                                                             |
| **API Layer**      | [tRPC](https://trpc.io/) + [TanStack Query](https://tanstack.com/query/latest)                                                                  |
| **Validation**     | [Zod](https://zod.dev/)                                                                                                                         |
| **Forms**          | [React Hook Form](https://react-hook-form.com/)                                                                                                 |
| **UI/UX**          | [lucide-react](https://lucide.dev/), [Sonner](https://sonner.emilkowal.ski/)                                                  |
| **Utils**          | SuperJSON, rate-limiter-flexible, random-word-slugs                                                                                             |
| **Deployment**     | [Vercel](https://vercel.com/)                                                                                                                   |

---

## Project Structure

```
forge
├─ prisma
│  ├─ migrations/...
│  └─ schema.prisma
├─ public
│  ├─ logo.svg
│  └─ favicon.ico
├─ sandbox-templates
│  └─ nextjs
│     ├─ compile_page.sh
│     ├─ e2b.Dockerfile
│     └─ e2b.toml
├─ src
│  ├─ app
│  │  ├─ (home)
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ pricing/page.tsx
│  │  │  ├─ sign-in/[[...sign-in]]/page.tsx
│  │  │  └─ sign-up/[[...sign-in]]/page.tsx
│  │  ├─ api
│  │  │  ├─ inngest/route.ts
│  │  │  └─ trpc/[trpc]/route.ts
│  │  ├─ error.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ projects/[projectId]/page.tsx
│  ├─ components
│  │  ├─ code-view/
│  │  ├─ file-explorer.tsx
│  │  ├─ hint.tsx
│  │  ├─ tree-view.tsx
│  │  ├─ ui/...
│  │  └─ user-control.tsx
│  ├─ hooks
│  │  ├─ use-current-theme.ts
│  │  ├─ use-mobile.ts
│  │  └─ use-scroll.ts
│  ├─ inngest
│  │  ├─ client.ts
│  │  ├─ functions.ts
│  │  ├─ types.ts
│  │  └─ utils.ts
│  ├─ lib
│  │  ├─ db.ts
│  │  ├─ usage.ts
│  │  └─ utils.ts
│  ├─ middleware.ts
│  ├─ modules
│  │  ├─ home/...
│  │  ├─ messages/server/procedures.ts
│  │  ├─ projects/...
│  │  └─ usage/server/procedures.ts
│  ├─ prompt.ts
│  ├─ trpc
│  │  ├─ client.tsx
│  │  ├─ init.ts
│  │  ├─ query-client.ts
│  │  ├─ routers/_app.ts
│  │  └─ server.tsx
│  └─ types.tsx
├─ .env.example   (recommended)
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ tsconfig.json
└─ README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SameedIlyas/Forge.git
cd Forge
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables

Update `.env.example` file in the root and change its name to `.env`

### 4. Setup Database

```bash
npx prisma migrate dev
```

### 5. Run Dev Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Authentication & Billing

* Powered by **Clerk**.
* Free & Pro plans.
* Integrated billing system.

---

## Background Jobs

* Uses **Inngest** for async workflows.
* Handles AI site generation reliably.

---

## Deployment

* Hosted on **Vercel**.
* Live at [forge-one-nu.vercel.app](https://forge-one-nu.vercel.app/).

To deploy your own:

1. Push repo to GitHub.
2. Import to Vercel.
3. Configure env variables.
4. Deploy

---

## Contributing

1. Fork repo.
2. Create branch (`git checkout -b feature-xyz`).
3. Commit (`git commit -m "Add feature xyz"`).
4. Push (`git push origin feature-xyz`).
5. Open PR.

---

## License

Licensed under the **MIT License**.

---

**Forge** – The AI Website Builder
[Try it Live](https://forge-one-nu.vercel.app/)

