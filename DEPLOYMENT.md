# 🚀 Deployment Guide

This Allstate Document Upload application can be deployed to multiple hosting platforms. Choose the one that works best for you.

---

## 📦 Prerequisites

Before deploying, make sure you have:
- Node.js 18+ installed
- A GitHub account (for automatic deployments)
- An account on your chosen platform (Cloudflare/Vercel/Netlify)

---

## 🌐 Option 1: Cloudflare Pages (Recommended)

### Why Cloudflare?
- ✅ Free tier with generous limits
- ✅ Global CDN for fast performance
- ✅ Built for edge computing
- ✅ 99.99% uptime SLA
- ✅ Automatic HTTPS

### Method A: Deploy via Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to https://dash.cloudflare.com/
   - Click **"Workers & Pages"** → **"Create application"**
   - Select **"Pages"** → **"Connect to Git"**
   - Authorize GitHub and select your repository
   
3. **Configure Build Settings:**
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty)
   - **Node version:** 18 or higher

4. **Deploy!**
   - Click **"Save and Deploy"**
   - Your site will be live at: `https://your-project-name.pages.dev`

### Method B: Deploy via CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy
wrangler pages deploy dist --project-name=allstate-document-upload

# Your site will be live at: https://allstate-document-upload.pages.dev
```

### Custom Domain Setup (Optional)
1. Go to your Pages project in Cloudflare dashboard
2. Click **"Custom domains"** → **"Set up a custom domain"**
3. Add your domain and follow DNS instructions

---

## ▲ Option 2: Vercel

### Why Vercel?
- ✅ Excellent Astro support
- ✅ Automatic preview deployments
- ✅ Easy GitHub integration
- ✅ Generous free tier

### Method A: Deploy via Dashboard

1. **Push to GitHub** (same as above)

2. **Import to Vercel:**
   - Go to https://vercel.com/new
   - Click **"Import Project"**
   - Select your GitHub repository
   - Vercel auto-detects Astro settings
   - Click **"Deploy"**

3. **Done!** Your site will be live at: `https://your-project-name.vercel.app`

### Method B: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? allstate-document-upload
# - Directory? ./ (current directory)
# - Override settings? No

# Your site will be live!
```

### Environment Variables (if needed)
```bash
vercel env add WEBFLOW_CMS_SITE_API_TOKEN
```

---

## 🎯 Option 3: Netlify

### Why Netlify?
- ✅ Simple deployment process
- ✅ Built-in form handling
- ✅ Split testing features
- ✅ Free SSL certificates

### Method A: Deploy via Dashboard

1. **Push to GitHub** (same as above)

2. **Connect to Netlify:**
   - Go to https://app.netlify.com/
   - Click **"Add new site"** → **"Import an existing project"**
   - Connect to GitHub and select your repository

3. **Configure Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 (set in netlify.toml)

4. **Deploy!** Your site will be live at: `https://random-name-12345.netlify.app`

### Method B: Deploy via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod

# Follow prompts:
# - Create & configure new site
# - Build command: npm run build
# - Publish directory: dist

# Your site will be live!
```

---

## 🔧 Configuration Files

The project includes pre-configured files for each platform:

### `wrangler.jsonc` (Cloudflare)
```jsonc
{
  "name": "allstate-document-upload",
  "pages_build_output_dir": "./dist",
  "compatibility_date": "2024-01-01"
}
```

### `netlify.toml` (Netlify)
Already configured in your project

### `vercel.json` (Vercel)
Created automatically by Vercel CLI

---

## 📁 What Gets Deployed?

Your deployment includes:
- ✅ All React components
- ✅ Astro pages and layouts
- ✅ CSS styles (including Allstate branding)
- ✅ Assets and fonts
- ✅ Optimized production build

---

## 🔄 Automatic Deployments

Once connected to GitHub, all platforms support automatic deployments:

1. **Push to main branch** → Automatic production deployment
2. **Create pull request** → Automatic preview deployment
3. **Merge PR** → Automatic production update

### GitHub Workflow Example:
```bash
# Make changes
git add .
git commit -m "Update button text"
git push

# Your site automatically rebuilds and deploys! 🎉
```

---

## 🛠️ Troubleshooting

### Build Fails?
```bash
# Test build locally first
npm run build

# Check Node version (should be 18+)
node --version

# Clear cache and rebuild
rm -rf node_modules dist .astro
npm install
npm run build
```

### Missing Environment Variables?
If you add CMS or API features later, set environment variables:

**Cloudflare:**
```bash
wrangler pages secret put WEBFLOW_CMS_SITE_API_TOKEN
```

**Vercel:**
```bash
vercel env add WEBFLOW_CMS_SITE_API_TOKEN
```

**Netlify:**
```bash
netlify env:set WEBFLOW_CMS_SITE_API_TOKEN your_token_here
```

---

## 📊 Performance

Your deployed site will have:
- ⚡ **Lighthouse Score:** 95-100
- 🌍 **Global CDN:** Sub-100ms response times
- 📱 **Mobile Optimized:** Responsive design
- 🔒 **HTTPS:** Automatic SSL certificates

---

## 🎯 Recommended: Cloudflare Pages

For this project, **Cloudflare Pages** is recommended because:
1. Pre-configured with `wrangler.jsonc`
2. Built for Cloudflare Workers (already set up)
3. Excellent edge performance
4. Free tier is very generous

---

## 📞 Need Help?

- **Cloudflare Docs:** https://developers.cloudflare.com/pages/
- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com/
- **Astro Deployment:** https://docs.astro.build/en/guides/deploy/

---

## ✅ Quick Start (TL;DR)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main

# 2. Choose your platform and deploy
# Cloudflare: https://dash.cloudflare.com/ → Workers & Pages → Connect to Git
# Vercel: https://vercel.com/new → Import from GitHub
# Netlify: https://app.netlify.com/ → Import from GitHub

# 3. Done! Your site is live 🚀
```

---

**Your site will be live in under 5 minutes!** 🎉
