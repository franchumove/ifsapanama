# IFSA PANAMÁ - Construction & Infrastructure Website

## Overview

IFSA PANAMÁ is a B2B construction and infrastructure company website built with a TRS-Funnel™ approach (Transform, Resonate, Symbolize). The site is designed to convert visitors into technical visit requests by communicating trust, control, and professional competence in the construction sector.

**Primary Goal:** Drive lead generation through "Solicitar visita técnica" (Request technical visit) CTAs.

**Target Audience:** Construction project decision-makers in Panama seeking reliable contractors for civil works, infrastructure, topography, and machinery services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **State Management:** TanStack React Query for server state
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** shadcn/ui (New York style) with Radix UI primitives
- **Animations:** Framer Motion for scroll-triggered animations
- **Form Handling:** React Hook Form with Zod validation

### Backend Architecture
- **Runtime:** Node.js with Express
- **Language:** TypeScript (ESM modules)
- **Build Tool:** esbuild for server bundling, Vite for client
- **API Pattern:** RESTful endpoints under `/api/` prefix

### Data Storage
- **ORM:** Drizzle ORM with PostgreSQL dialect
- **Schema Location:** `shared/schema.ts` (shared between client/server)
- **Current Storage:** PostgreSQL database with `DatabaseStorage` class implementation
- **Migrations:** Drizzle Kit with output to `./migrations` (use `npm run db:push`)

### Design System
- **Color Palette:** Black (#0B0B0B), Gold (#C9A227), White, Light Gray (#F5F5F5)
- **Typography:** Montserrat/Poppins for headings, Inter for body text
- **Visual Style:** Industrial minimalist with construction photography emphasis
- **Gold Usage Rule:** Reserved exclusively for CTAs, icons, accents, and numbers - never for body text

### Project Structure
```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route page components
│   │   ├── data/        # Static data (projects, services)
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Data storage layer
│   └── vite.ts          # Vite dev server integration
├── shared/              # Shared types and schemas
│   └── schema.ts        # Drizzle schema + Zod validation
└── attached_assets/     # Design briefs and copy documents
```

### Key Pages
- Home (`/`) - Hero + trust signals + project showcase
- Proyectos (`/proyectos`) - Filterable project gallery
- Servicios (`/servicios`) - Service offerings with structured descriptions
- Capacidades (`/capacidades`) - Operational capabilities
- Calidad & Seguridad (`/calidad-seguridad`) - Quality/safety protocols with FAQ
- Nosotros (`/nosotros`) - Company information
- Contacto (`/contacto`) - Lead capture form

### Lead Capture System
- Form fields: nombre, empresa, telefono, email, tipoProyecto, ubicacion, etapa, mensaje
- Validation: Zod schema shared between client and server
- Storage: PostgreSQL database with persistent lead storage
- API endpoints: POST /api/lead (create), GET /api/leads (list)
- WhatsApp integration: Floating button and inline links for direct contact

## External Dependencies

### Third-Party Services
- **WhatsApp Business:** Direct messaging integration via `wa.me` links (Phone: +5073972914)
- **Google Fonts:** Inter and Montserrat font families

### Database
- **PostgreSQL:** Required via `DATABASE_URL` environment variable
- **Session Store:** connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Replit Plugins:** vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner

### Key NPM Packages
- UI: @radix-ui/* components, class-variance-authority, clsx, tailwind-merge
- Forms: react-hook-form, @hookform/resolvers, zod
- Data: @tanstack/react-query, drizzle-orm, drizzle-zod
- Animation: framer-motion, embla-carousel-react