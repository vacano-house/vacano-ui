# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vacano UI is a React 19 component library built with Emotion CSS-in-JS, published as `@vacano/ui`. It provides 50+ components, 1800+ Lucide icons, and shared utilities. Package manager is **pnpm**.

## Commands

```bash
pnpm build              # Vite library build
pnpm typecheck          # TypeScript type checking (tsc --noEmit)
pnpm lint               # ESLint (flat config)
pnpm lint:fix           # ESLint with auto-fix
pnpm format             # Prettier format
pnpm format:check       # Prettier check
pnpm test               # Vitest watch mode
pnpm test:run           # Vitest single run
pnpm storybook          # Storybook dev server (port 6006)
pnpm docs:dev           # VitePress docs dev server
```

Pre-commit hooks (Husky + lint-staged) auto-run ESLint and Prettier on staged `src/**/*.{ts,tsx}` files.

## Architecture

### Four entry points

- `@vacano/ui` — all components (`src/index.ts`)
- `@vacano/ui/icons` — Lucide icon wrappers (`src/icons/Lucide/index.ts`)
- `@vacano/ui/lib` — types, constants, hooks, utilities (`src/lib/index.ts`)
- `@vacano/ui/form` — react-hook-form wrappers (`src/form/index.ts`)

### Component file structure

Every component lives in `src/components/ComponentName/` with these files:

| File | Purpose |
|---|---|
| `ComponentName.tsx` | Main component implementation |
| `types.ts` | Props type extending `VacanoComponentProps<HTMLElement, ClassNames>` |
| `styled.ts` | Emotion `styled()` components with transient props (`$variant`, `$size`, etc.) |
| `constants.ts` | Variant/size definitions, color mappings |
| `helpers.ts` | Style logic functions |
| `index.ts` | Re-exports types and component |
| `ComponentName.stories.tsx` | Storybook stories |

### Key patterns

**Props type structure** — every component's props type combines:
```typescript
type ButtonProps = VacanoComponentProps<HTMLButtonElement, ButtonClassNames> &
  Omit<HTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    // component-specific props
  }
```

**Class naming** — `newClassNameGetter('button')` returns a function producing `vacano_button_{element}` class names, merged with custom classnames via `clsx`.

**Transient props** — styled components use `$`-prefixed props (`$variant`, `$size`, `$disabled`) to prevent DOM passthrough.

**Ref handling** — components accept `ref` via props (React 19 style), forward with `useImperativeHandle`.

**Portal components** (Select, Modal, Drawer, Tooltip) — use `createPortal()` to `document.body`, accept optional `portalRenderNode` prop.

### Form wrappers (`src/form/`)

17 `Form*` components provide react-hook-form integration via `Controller`. Each wraps a base component, adding `name: FieldPath<T>` and `control: Control<T>` props while omitting the base's controlled value/onChange props.

- **Text fields** (FormInput, FormSelect, FormAutocomplete, FormDatePicker, FormMultiSelect, FormOtpCode, FormTags, FormTextarea): auto-display `message` from validation errors
- **Boolean controls** (FormCheckbox, FormCheckboxCard, FormToggle, FormToggleCard): set `variant` to `'error'` on validation error, use `field.value ?? false`
- **Group controls** (FormCheckboxGroup, FormRadioGroup, FormToggleGroup): set `variant` on error, use `field.value ?? []` (or `?? null` for RadioGroup)
- **Radio controls** (FormRadio, FormRadioCard): use `checked={field.value === value}` pattern

All form wrappers are exported from `src/form/index.ts`.

### Design tokens

- **Sizes**: `'compact' | 'default'` (`VacanoComponentSize`)
- **Variants**: `'normal' | 'system' | 'success' | 'warning' | 'danger' | 'transparent'`
- **Colors, breakpoints, keyframes**: defined in `src/lib/constants.ts`

## Documentation

VitePress docs live in the `docs/` folder. **Always update the corresponding docs after any component change** — whether adding a new component, modifying props/API, or changing behavior. This includes:

- `docs/components/<component-name>.md` — component documentation page
- `docs/.vitepress/config.ts` — sidebar navigation (when adding/removing components)

## Code style

- No semicolons, single quotes, trailing commas, 100 char print width
- Import order enforced by Prettier plugin: CSS → react → third-party → relative (depth-sorted)
- JSX transform is automatic (no `import React`)
- Emotion JSX pragma configured via tsconfig (`jsxImportSource: "@emotion/react"`)
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`
