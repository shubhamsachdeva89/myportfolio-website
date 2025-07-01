# 🚀 GitHub Pages Deployment Guide

A comprehensive guide to deploy your React portfolio website to GitHub Pages.

## 📋 Table of Contents

- [Overview](#overview)
- [Phase 1: Repository Setup](#phase-1-repository-setup)
- [Phase 2: Build Configuration](#phase-2-build-configuration)
- [Phase 3: Asset Optimization](#phase-3-asset-optimization)
- [Phase 4: Deployment Process](#phase-4-deployment-process)
- [Phase 5: Custom Domain (Optional)](#phase-5-custom-domain-optional)
- [Phase 6: Automation & CI/CD](#phase-6-automation--cicd)
- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Troubleshooting](#troubleshooting-common-issues)
- [Timeline](#expected-timeline)
- [Post-Deployment](#post-deployment-steps)

## 🎯 Overview

This guide will help you deploy your React portfolio website to GitHub Pages, ensuring optimal performance, SEO, and user experience.

## 📦 Phase 1: Repository Setup

### 1. Create GitHub Repository
```bash
# If not already done
git init
git remote add origin https://github.com/your-username/portfolio.git
```

### 2. Install GitHub Pages Deployment Package
```bash
npm install --save-dev gh-pages
```

### 3. Update package.json
Add these scripts and homepage field:
```json
{
  "homepage": "https://your-username.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## ⚙️ Phase 2: Build Configuration

### 4. Update Vite Config for GitHub Pages
Modify `vite.config.ts`:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace with your repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### 5. Handle Routing for SPA
Create `public/404.html` for client-side routing:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Portfolio - Page Not Found</title>
    <script>
      // Store the current path and redirect to index
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/portfolio'">
  </head>
  <body>
    <p>Redirecting...</p>
  </body>
</html>
```

### 6. Add Redirect Handler to index.html
Add this script to your `index.html` in the `<head>` section:
```html
<script>
  // Handle redirects from 404.html
  (function() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

## 🖼️ Phase 3: Asset Optimization

### 7. Optimize Images and Assets
- Ensure all images are in `public/` directory
- Use relative paths for all assets
- Compress images for faster loading
- Convert images to WebP format when possible

### 8. Update Asset References
- Check all image URLs in components
- Ensure Pexels URLs are working
- Verify icon imports from lucide-react
- Test all external links

### 9. Environment Variables
Create `.env.example` file:
```env
# Example environment variables
VITE_SITE_URL=https://your-username.github.io/portfolio
VITE_CONTACT_EMAIL=your-email@example.com
```

## 🚀 Phase 4: Deployment Process

### 10. Build and Test Locally
```bash
# Clean install dependencies
npm ci

# Build the project
npm run build

# Preview the build locally
npm run preview
```

### 11. Deploy to GitHub Pages
```bash
# Deploy to gh-pages branch
npm run deploy
```

### 12. Configure GitHub Repository Settings
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select: **Deploy from a branch**
4. Choose **Branch**: `gh-pages`
5. Choose **Folder**: `/ (root)`
6. Click **Save**

### 13. Verify Deployment
- Wait 5-10 minutes for deployment to complete
- Visit `https://your-username.github.io/portfolio`
- Test all functionality and links

## 🌐 Phase 5: Custom Domain (Optional)

### 14. Add Custom Domain
1. **Create CNAME file**
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Configure DNS with your domain provider**
   ```
   Type: CNAME
   Name: www (or @)
   Value: your-username.github.io
   ```

3. **Enable HTTPS in GitHub Pages settings**
   - Go to Settings → Pages
   - Check "Enforce HTTPS"

### 15. Domain Verification
- Add TXT record for domain verification
- Wait for DNS propagation (up to 24 hours)
- Test custom domain functionality

## 🤖 Phase 6: Automation & CI/CD

### 16. GitHub Actions Workflow (Recommended)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: yourdomain.com  # Optional: if using custom domain
```

### 17. Automated Testing (Optional)
Add testing workflow:
```yaml
- name: Run tests
  run: npm test

- name: Run linting
  run: npm run lint

- name: Check build
  run: npm run build
```

## ✅ Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] All components render correctly
- [ ] Responsive design tested on multiple devices
- [ ] Dark/light mode toggle working
- [ ] All animations functioning properly
- [ ] Cross-browser compatibility verified

### Content & Assets
- [ ] All images loading correctly
- [ ] Contact form validation working
- [ ] Social media links functional
- [ ] Resume download link working
- [ ] Blog posts displaying properly
- [ ] All external links working
- [ ] Proper alt text for images

### Performance
- [ ] Bundle size optimized (< 1MB)
- [ ] Images compressed and optimized
- [ ] Lazy loading implemented where appropriate
- [ ] Code splitting configured
- [ ] Lighthouse score > 90

### SEO & Meta
- [ ] Meta tags properly set
- [ ] Open Graph tags configured
- [ ] Structured data implemented
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] Canonical URLs set

### Accessibility
- [ ] ARIA labels implemented
- [ ] Keyboard navigation working
- [ ] Color contrast ratios meet WCAG standards
- [ ] Screen reader compatibility
- [ ] Focus indicators visible

## 🔧 Troubleshooting Common Issues

### Routing Issues
**Problem**: 404 errors on page refresh
**Solution**: 
- Ensure `404.html` is in `public/` directory
- Add redirect script to `index.html`
- Consider using HashRouter for simpler routing

### Asset Loading Issues
**Problem**: Images or assets not loading
**Solution**:
- Use relative paths for all assets
- Place images in `public/` directory
- Check console for 404 errors
- Verify `base` path in vite.config.ts

### Build Failures
**Problem**: Build process fails
**Solution**:
- Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npm run lint`
- Verify all imports are correct
- Check for missing dependencies

### Deployment Failures
**Problem**: Deployment to GitHub Pages fails
**Solution**:
- Check GitHub Actions logs
- Verify repository permissions
- Ensure `gh-pages` branch exists
- Check for large file sizes (>100MB)

### Performance Issues
**Problem**: Slow loading times
**Solution**:
- Optimize images (use WebP format)
- Enable code splitting
- Minimize bundle size
- Use CDN for external assets

### Custom Domain Issues
**Problem**: Custom domain not working
**Solution**:
- Verify DNS configuration
- Check CNAME file content
- Wait for DNS propagation
- Ensure HTTPS is enabled

## ⏱️ Expected Timeline

| Phase | Task | Estimated Time |
|-------|------|----------------|
| 1 | Repository Setup | 15 minutes |
| 2 | Build Configuration | 20 minutes |
| 3 | Asset Optimization | 30 minutes |
| 4 | Deployment Process | 20 minutes |
| 5 | Custom Domain (Optional) | 15 minutes |
| 6 | CI/CD Setup (Optional) | 25 minutes |

**Total Estimated Time**: 1.5-2.5 hours (depending on optional features)

## 📈 Post-Deployment Steps

### 1. Verify Live Site
- [ ] Test all sections and functionality
- [ ] Check responsive design on multiple devices
- [ ] Verify contact form submission
- [ ] Test dark/light mode toggle
- [ ] Validate all links and navigation

### 2. Performance Testing
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test loading speed with various tools
- [ ] Check mobile performance
- [ ] Verify Core Web Vitals

### 3. SEO Verification
- [ ] Submit to Google Search Console
- [ ] Verify meta tags in browser developer tools
- [ ] Test social media sharing (Facebook, Twitter, LinkedIn)
- [ ] Check structured data with Google's Rich Results Test

### 4. Analytics & Monitoring Setup
- [ ] Set up Google Analytics (optional)
- [ ] Configure Google Search Console
- [ ] Set up uptime monitoring
- [ ] Monitor for broken links

### 5. Security & Maintenance
- [ ] Enable security headers
- [ ] Set up automated dependency updates
- [ ] Schedule regular content updates
- [ ] Monitor for security vulnerabilities

## 🎯 Success Metrics

After deployment, your site should achieve:

- **Performance**: Lighthouse score > 90
- **Accessibility**: WCAG AA compliance
- **SEO**: Proper indexing and meta tags
- **User Experience**: Fast loading, responsive design
- **Reliability**: 99.9% uptime

## 📞 Support & Resources

### Helpful Links
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages)

### Community Support
- GitHub Issues for technical problems
- Stack Overflow for development questions
- React community forums

---

**Last Updated**: January 2025
**Version**: 1.0

This deployment guide ensures a smooth, professional deployment of your portfolio website to GitHub Pages with optimal performance and user experience.