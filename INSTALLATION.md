# 📦 Installation Guide

A comprehensive guide to install and set up the John Doe Portfolio website.

## 📋 Table of Contents

- [System Requirements](#system-requirements)
- [Dependencies Overview](#dependencies-overview)
- [Installation Methods](#installation-methods)
- [Development Scripts](#development-scripts)
- [Verification](#verification)
- [Troubleshooting](#troubleshooting)
- [Environment Setup](#environment-setup)
- [IDE Configuration](#ide-configuration)

## 🖥️ System Requirements

### Minimum Requirements
- **Node.js**: Version 16.0.0 or higher
- **npm**: Version 7.0.0 or higher (comes with Node.js)
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB free space for dependencies

### Recommended Tools
- **Git**: For version control
- **VS Code**: Recommended IDE with extensions
- **Chrome/Firefox**: For development and testing

## 📚 Dependencies Overview

### Core Dependencies (Production)
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "^0.344.0",
  "framer-motion": "^10.18.0",
  "react-intersection-observer": "^9.5.3",
  "@supabase/supabase-js": "^2.39.7"
}
```

**Purpose:**
- **React 18**: Modern React framework with concurrent features
- **React DOM**: React rendering library for web applications
- **Lucide React**: Beautiful, customizable icon library (2,000+ icons)
- **Framer Motion**: Production-ready motion library for React
- **React Intersection Observer**: Scroll-based animations and lazy loading
- **Supabase JS**: Database client for future backend integration

### Development Dependencies
```json
{
  "@vitejs/plugin-react": "^4.3.1",
  "vite": "^5.4.2",
  "typescript": "^5.5.3",
  "@types/react": "^18.3.5",
  "@types/react-dom": "^18.3.0",
  "tailwindcss": "^3.4.1",
  "postcss": "^8.4.35",
  "autoprefixer": "^10.4.18",
  "eslint": "^9.9.1",
  "@eslint/js": "^9.9.1",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.11",
  "typescript-eslint": "^8.3.0",
  "globals": "^15.9.0"
}
```

**Purpose:**
- **Vite**: Fast build tool and development server
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting and quality checks
- **PostCSS**: CSS processing and optimization

## 🚀 Installation Methods

### Method 1: Quick Start (Recommended)

Since the project includes a complete `package.json` file:

```bash
# Clone the repository (if applicable)
git clone <repository-url>
cd portfolio

# Install all dependencies
npm install

# Start development server
npm run dev
```

### Method 2: Manual Installation

If starting from scratch or need to reinstall:

```bash
# Initialize new project
npm init -y

# Install core dependencies
npm install react@^18.3.1 react-dom@^18.3.1

# Install UI and animation libraries
npm install lucide-react@^0.344.0
npm install framer-motion@^10.18.0
npm install react-intersection-observer@^9.5.3

# Install optional backend integration
npm install @supabase/supabase-js@^2.39.7

# Install build tools
npm install -D vite@^5.4.2
npm install -D @vitejs/plugin-react@^4.3.1

# Install TypeScript
npm install -D typescript@^5.5.3
npm install -D @types/react@^18.3.5
npm install -D @types/react-dom@^18.3.0

# Install CSS framework
npm install -D tailwindcss@^3.4.1
npm install -D postcss@^8.4.35
npm install -D autoprefixer@^10.4.18

# Install linting tools
npm install -D eslint@^9.9.1
npm install -D @eslint/js@^9.9.1
npm install -D eslint-plugin-react-hooks@^5.1.0-rc.0
npm install -D eslint-plugin-react-refresh@^0.4.11
npm install -D typescript-eslint@^8.3.0
npm install -D globals@^15.9.0
```

### Method 3: Using Alternative Package Managers

#### Using Yarn
```bash
# Install dependencies
yarn install

# Start development
yarn dev
```

#### Using pnpm
```bash
# Install dependencies
pnpm install

# Start development
pnpm dev
```

## 🛠️ Development Scripts

The project includes the following npm scripts:

```bash
# Development
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality checks

# Alternative commands
yarn dev            # Using Yarn
pnpm dev            # Using pnpm
```

### Script Details

- **`npm run dev`**: Starts Vite development server with hot reload
- **`npm run build`**: Creates optimized production build in `dist/` folder
- **`npm run preview`**: Serves the production build locally for testing
- **`npm run lint`**: Runs ESLint to check code quality and style

## ✅ Verification

### Step 1: Check System Requirements
```bash
# Check Node.js version (should be 16+)
node --version

# Check npm version (should be 7+)
npm --version

# Check Git (optional)
git --version
```

### Step 2: Install Dependencies
```bash
# Install all dependencies
npm install

# Verify installation
npm list --depth=0
```

### Step 3: Start Development Server
```bash
# Start the development server
npm run dev
```

**Expected Output:**
```
  VITE v5.4.2  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 4: Verify in Browser
1. Open `http://localhost:5173` in your browser
2. You should see the portfolio website loading
3. Check that all sections are visible and animations work
4. Test dark/light mode toggle
5. Verify responsive design on different screen sizes

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue 1: Node.js Version Compatibility
**Error**: `The engine "node" is incompatible with this module`

**Solution**:
```bash
# Check current Node.js version
node --version

# Install Node.js 16+ from https://nodejs.org
# Or use nvm (Node Version Manager)
nvm install 18
nvm use 18
```

#### Issue 2: npm Cache Issues
**Error**: `npm ERR! Unexpected end of JSON input`

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

#### Issue 3: Port Already in Use
**Error**: `Port 5173 is already in use`

**Solution**:
```bash
# Use different port
npm run dev -- --port 3000

# Or kill process using port 5173
lsof -ti:5173 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5173   # Windows
```

#### Issue 4: TypeScript Errors
**Error**: TypeScript compilation errors

**Solution**:
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Update TypeScript
npm update typescript

# Clear TypeScript cache
rm -rf node_modules/.cache
```

#### Issue 5: Tailwind CSS Not Working
**Error**: Styles not applying

**Solution**:
```bash
# Verify Tailwind configuration
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch

# Check if PostCSS config exists
cat postcss.config.js

# Restart development server
npm run dev
```

### Performance Issues

#### Slow Installation
```bash
# Use faster registry
npm install --registry https://registry.npmmirror.com

# Or use yarn/pnpm which are generally faster
yarn install
pnpm install
```

#### Memory Issues
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run dev
```

## 🌍 Environment Setup

### Development Environment Variables
Create a `.env.local` file in the root directory:

```env
# Development settings
VITE_APP_TITLE="John Doe Portfolio"
VITE_APP_DESCRIPTION="Staff Data and AI Engineer Portfolio"

# Optional: Supabase configuration (for future use)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Analytics
VITE_GA_TRACKING_ID=your_google_analytics_id
```

### Production Environment
For production deployment, ensure these environment variables are set:

```env
NODE_ENV=production
VITE_APP_URL=https://yourdomain.com
```

## 💻 IDE Configuration

### VS Code Extensions (Recommended)
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

### VS Code Settings
Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

## 📊 Bundle Analysis

To analyze the production bundle size:

```bash
# Build the project
npm run build

# Analyze bundle (install analyzer first)
npm install -D rollup-plugin-visualizer
```

## 🔄 Updates and Maintenance

### Keeping Dependencies Updated
```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Update specific package
npm install package-name@latest
```

### Security Audits
```bash
# Check for security vulnerabilities
npm audit

# Fix automatically fixable issues
npm audit fix

# Force fix (use with caution)
npm audit fix --force
```

## 📞 Support

If you encounter issues not covered in this guide:

1. **Check the GitHub Issues** for similar problems
2. **Review the documentation** for each dependency
3. **Search Stack Overflow** for specific error messages
4. **Contact the maintainer** for project-specific issues

---

**Installation Guide Version**: 1.0  
**Last Updated**: January 2025  
**Compatible with**: Node.js 16+, npm 7+

This installation guide ensures a smooth setup process for the John Doe Portfolio website with all necessary dependencies and configurations.