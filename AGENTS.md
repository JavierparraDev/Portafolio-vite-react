# AGENTS.md - Portfolio de Javier Parra

## Project Overview

- **Nombre**: Javier Parra Portfolio
- **URL**: https://javierparradev.vercel.app/
- **GitHub**: https://github.com/JavierparraDev
- **Stack**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router DOM
- **Target Role**: Junior / Mid Frontend or Fullstack Developer

---

## Commands

```bash
# Development
npm run dev          # Start dev server (port 5173)
npm run build        # Production build (includes TypeScript check)
npm run preview      # Preview production build
npm run lint         # ESLint (strict, 0 warnings)
npm run type-check   # TypeScript type checking only
```

**No tests currently configured.**

---

## Code Style & Conventions

### TypeScript
- `strict: true` enabled
- No `any` - use explicit types
- No unused variables (`noUnusedLocals`, `noUnusedParameters`)

### ESLint Rules
- React Hooks rules enforced
- React Refresh for HMR
- Max warnings: 0

### Naming Conventions
- Components: PascalCase (`Header.tsx`, `Footer.tsx`)
- Variables/functions: camelCase
- Constants: SCREAMING_SNAKE_CASE (if used)

### Imports
- Use path aliases: `@/components`, `@/pages`, `@/assets`
- Example: `import Header from '@/components/layout/Header'`

### Styles
- Tailwind CSS only (no CSS-in-JS)
- Use `dark:` prefix for dark mode variants
- Custom colors in `tailwind.config.js`: `primary-*`, `secondary-*`

### Animations
- Framer Motion for complex animations
- Custom keyframes in Tailwind: `fade-in`, `slide-up`, `bounce-slow`

---

## Architecture

```
src/
├── components/layout/   # Header, Footer (persistent)
├── pages/              # Home, About, Projects, Contact
├── assets/             # Images, icons, static files
├── App.tsx             # Router & layout setup
├── main.tsx            # React root
└── index.css           # Global styles & fonts
```

### Routing
- React Router DOM with `<Router>` in App.tsx
- Routes: `/`, `/sobre-mi`, `/proyectos`, `/contacto`

### Dark Mode
- State in Header component, persisted to `localStorage` as `'darkMode'`
- Toggle class `dark` on `document.documentElement`
- Uses Tailwind `dark:` variants

### SEO
- `react-helmet-async` for meta tags
- Wrap app in `<HelmetProvider>`
- Add `<Helmet>` components in pages

---

## Agent Skills Installed

### 1. interactive-portfolio
**Purpose**: Portfolio architecture and redesign
**Source**: sickn33/antigravity-awesome-skills

Key guidelines:
- **30-Second Test**: Visitors must know who you are, what you do, your best work, how to contact you
- **Priority**: Projects > Experience > Skills > About > Contact
- **Hero Formula**: Name → What you do → Differentiation → CTA

Anti-patterns to avoid:
- ❌ Template portfolio (looks like everyone else)
- ❌ All style no substance (fancy animations, weak projects)
- ❌ Resume website (boring, lists instead of stories)

### 2. vercel-react-best-practices
**Purpose**: React performance optimization
**Source**: vercel-labs/agent-skills

Priority rules:
1. **Eliminating Waterfalls** (CRITICAL) - Promise.all for parallel operations
2. **Bundle Size Optimization** (CRITICAL) - Direct imports, lazy loading
3. **Server-Side Performance** (HIGH) - Minimize serialization
4. **Re-render Optimization** (MEDIUM) - Memo, functional setState

Key practices:
- Import directly from libraries, avoid barrel files
- Use `React.memo()`, `useMemo()`, `useCallback()` appropriately
- Lazy load heavy components with `dynamic imports`
- Avoid `useEffect` for derived state

### 3. frontend-design
**Purpose**: Production-grade UI with distinctive aesthetics
**Source**: anthropics/skills

Design principles:
- **Typography**: Choose unique, characterful fonts (avoid Inter, Roboto, Arial)
- **Color**: Commit to cohesive aesthetic, use CSS variables
- **Motion**: Staggered reveals, scroll-triggering, hover states
- **Spatial**: Unexpected layouts, asymmetry, overlap, generous whitespace
- **Backgrounds**: Gradient meshes, noise textures, layered transparencies

NEVER use generic "AI slop" aesthetics.

---

## Portfolio Redesign Strategy

### Phase 1: Portfolio Audit
Analyze current portfolio issues:
- 30-second clarity test
- Hero section clarity
- Project presentation quality
- Visual hierarchy
- Call-to-action effectiveness
- Mobile responsiveness
- Performance

### Phase 2: Personal Brand
- **Name**: Javier Parra
- **Role**: Software Engineer
- **Hero Message**: "Software Engineer building scalable web systems and data-driven applications"
- **Secondary**: "I transform complex processes into reliable software solutions"

### Phase 3: New Architecture
Priority order:
1. **HERO** - Hook + identity
2. **PROJECTS** - Prove skills (MOST IMPORTANT)
3. **EXPERIENCE** - Engineering achievements
4. **TECH STACK** - Visual icon grid
5. **ABOUT** - Short and human
6. **CONTACT** - Clear conversion

### Phase 4: Hero Redesign
```
Javier Parra
Software Engineer

I build web applications and systems
focused on clean architecture and real-world impact.

STACK
React | Node | PostgreSQL | Docker

[ View Projects ] [ Contact Me ]
```

### Phase 5: Project Case Studies
Each project must have:
- **Problem**: What real-world problem existed
- **Solution**: What you built
- **Role**: Your specific contribution
- **Tech Stack**: Tools used
- **Impact**: Results or improvements (numbers!)

### Phase 6: Experience Section
Convert job descriptions to engineering achievements:
- Instead of: "Realicé diagnóstico exhaustivo de un sistema legacy"
- Write: "Analyzed legacy system architecture and identified structural failures. Proposed improvements to increase reliability."

### Phase 7: Tech Stack Visualization
Display as icon grid by category:
- Frontend: React, HTML, CSS, JavaScript
- Backend: Node.js, APIs
- Data: SQL, NoSQL
- Tools: Git, Docker, Linux

### Phase 8: About Section
Keep short and human:
"I'm a software engineer based in Colombia focused on building reliable systems and web applications that solve real problems."

### Phase 9: Contact Conversion
- Email, LinkedIn, GitHub links
- Download CV button

### Phase 10: Performance Optimization
- Lazy loading for images
- Code splitting
- Image optimization
- Minimal bundle size (apply Vercel React best practices)

### Phase 11: Visual Identity
- **Aesthetic**: Modern minimal engineering
- **Colors**: Dark background, electric blue accent
- **Typography**: Strong headline, clean body
- **Avoid**: Generic templates, default layouts

### Phase 12: Mobile Optimization
- Mobile-first layout
- Touch-friendly navigation
- Fast loading

### BONUS: Project Ranking
**CRITICAL**: Rank all existing projects:
- **KEEP**: Best 3-4 projects (strongest case studies)
- **IMPROVE**: Projects with potential
- **REMOVE**: Weak or irrelevant projects

Portfolios improve significantly when weak projects are removed.

---

## Quality Checklist

Before any commit:
- [ ] `npm run lint` passes (0 warnings)
- [ ] `npm run type-check` passes
- [ ] `npm run build` succeeds
- [ ] Review: Does this project pass the 30-second test?
- [ ] Review: Is this the strongest project to show?
- [ ] Review: Does it avoid "AI slop" aesthetics?

---

## References

- Portfolio URL: https://javierparradev.vercel.app/
- GitHub: https://github.com/JavierparraDev
- Interactive Portfolio Skill: `.agents/skills/interactive-portfolio`
- Vercel React Best Practices: `.agents/skills/vercel-react-best-practices`
- Frontend Design Skill: `.agents/skills/frontend-design`
