# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

The primary artifact is **AndreasOne** (`artifacts/andreasone`) — a presentation-first React + Vite microsite for DJ/producer/artist AndreasOne (music, events, art, shop, fmly community, join, contact). Uses wouter for routing, Tailwind v4, shadcn/ui, framer-motion. Image assets live in the workspace-root `attached_assets/` directory and are aliased as `@assets`.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
