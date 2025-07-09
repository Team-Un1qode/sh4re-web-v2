# Sh4re Monorepo

A workspace-based monorepo containing the student and teacher applications for the Sh4re platform.

## Structure

```
├── package.json (workspace root)
├── apps/
│   ├── student/    # Student application (sh4re.com)
│   └── teacher/    # Teacher application (teacher.sh4re.com)
├── packages/
│   ├── constants/  # Shared constants and configuration
│   ├── api/        # API utilities (in development)
│   ├── types/      # Shared TypeScript types (in development)
│   ├── theme/      # Theme system (in development)
│   ├── ui/         # Common UI components (in development)
│   └── utils/      # Utility functions (in development)
└── tools/
    ├── eslint-config/  # Shared ESLint configuration
    └── tsconfig/       # Shared TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation
```bash
npm install
```

### Development

Run student app:
```bash
npm run dev:student
```

Run teacher app:
```bash
npm run dev:teacher
```

### Building

Build both apps:
```bash
npm run build:all
```

Build individual apps:
```bash
npm run build:student
npm run build:teacher
```

## Apps

### Student App (`apps/student/`)
- **Domain**: `sh4re.com`
- **Purpose**: Student-focused interface for viewing assignments, code submissions, and course materials
- **Features**: 
  - View assignments and due dates
  - Submit and view code
  - Access course materials
  - Check announcements

### Teacher App (`apps/teacher/`)
- **Domain**: `teacher.sh4re.com` 
- **Purpose**: Teacher-focused interface for managing classes and student work
- **Features**:
  - Dashboard with class overview
  - Manage assignments and announcements
  - Review student code submissions
  - Upload and organize course materials

## Shared Packages

### `@sh4re/constants`
Shared constants and configuration values used across both applications.

### Future Packages (In Development)
- `@sh4re/api` - API clients and utilities
- `@sh4re/types` - Shared TypeScript type definitions
- `@sh4re/theme` - Theme system and styled components
- `@sh4re/ui` - Reusable UI components
- `@sh4re/utils` - Utility functions and custom hooks

## Multi-Tenancy & Domain Separation

The workspace is designed to support:
- **Domain-based routing**: Different domains for student vs teacher interfaces
- **School-specific theming**: Configurable themes per educational institution
- **Independent deployment**: Each app can be deployed separately
- **Shared business logic**: Common functionality through workspace packages

## Development Workflow

1. **Independent Development**: Each app can be developed independently
2. **Shared Code**: Common functionality is extracted to packages as needed
3. **Type Safety**: TypeScript ensures type safety across the workspace
4. **Consistent Tooling**: Shared ESLint and TypeScript configurations

## Scripts

- `npm run dev:student` - Start student app in development mode
- `npm run dev:teacher` - Start teacher app in development mode  
- `npm run build:student` - Build student app for production
- `npm run build:teacher` - Build teacher app for production
- `npm run build:all` - Build all apps and packages
- `npm run lint` - Run linting across all workspaces
- `npm run type-check` - Run TypeScript type checking

## Contributing

1. Each app maintains its own dependencies in its `package.json`
2. Shared code should be placed in appropriate packages
3. Use workspace references (`@sh4re/*`) for internal dependencies
4. Follow the existing code structure and conventions