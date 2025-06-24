# Eclipsion Minecraft Server Website

## Overview

This is a full-stack web application for the Eclipsion Minecraft server, featuring a modern React frontend with a Node.js/Express backend. The application serves as the main marketing and information website for the Minecraft server, showcasing game modes, ranks, news, and server information.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Production**: ESBuild for server bundling

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon Database)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Shared between client and server via TypeScript types

## Key Components

### Frontend Components
1. **Layout Components**
   - `AnimatedBackground`: Animated starfield and particle effects
   - `Navigation`: Main navigation with smooth scrolling
   - `Footer`: Site footer with quick links

2. **Content Sections**
   - `HeroSection`: Main landing area with server IP and branding
   - `GameModes`: Interactive game mode showcase (Survival, Kitmap, KitPvP)
   - `RanksSection`: Server rank tiers and pricing
   - `NewsSection`: Latest updates and announcements

3. **UI System**
   - Comprehensive shadcn/ui component library
   - Custom Tailwind configuration with Eclipsion branding
   - Dark theme with orange accent colors
   - Responsive design for mobile and desktop

### Backend Structure
- **Routes**: Modular route registration system (`/api` prefix)
- **Storage**: Abstracted storage interface with in-memory implementation
- **Error Handling**: Centralized error middleware
- **Development**: Vite integration for HMR and asset serving

### Database Schema
- **Users Table**: Basic user authentication structure
  - ID (serial primary key)
  - Username (unique text)
  - Password (text)
- **Type Safety**: Zod schemas for validation and TypeScript inference

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle requests with proper error handling
3. **Storage Layer**: Abstract storage interface allows for flexible data persistence
4. **Response**: JSON responses with consistent error handling
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon Database
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **express**: Web framework for Node.js
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server
- **drizzle-kit**: Database schema management

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with PostgreSQL 16
- **Command**: `npm run dev` starts both client and server
- **Port**: Application serves on port 5000
- **Hot Reload**: Vite provides HMR for frontend development

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Server Build**: ESBuild bundles server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `npm run db:push`
4. **Deployment**: Replit autoscale deployment target

### Build Commands
- `npm run build`: Builds both frontend and backend
- `npm run start`: Runs production server
- `npm run db:push`: Applies database schema changes

## Changelog

Changelog:
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.