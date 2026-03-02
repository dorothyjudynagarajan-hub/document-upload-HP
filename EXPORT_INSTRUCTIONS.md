# 📦 How to Export and Deploy Your Project

Follow these steps to get your Allstate Document Upload application deployed and live on the internet.

---

## Step 1: Download Your Project Files

### Option A: Download as ZIP (Easiest)

If you're using a cloud IDE or sandbox:

1. **Download all files** - Look for a "Download" or "Export" option in your IDE
2. **Save to your computer** - Create a folder like `allstate-document-upload`
3. **Extract if needed** - Unzip the downloaded files

### Option B: Copy Files Manually

Copy all the following files and folders to your local computer:

```
allstate-document-upload/
├── .github/
│   └── workflows/
│       ├── deploy-cloudflare.yml
│       └── deploy-vercel.yml
├── generated/
│   ├── dev-only.js
│   ├── fonts.css
│   └── webflow.css
├── src/
│   ├── components/
│   │   ├── ui/ (all files)
│   │   ├── ConfirmPage.tsx
│   │   ├── DocumentUpload.tsx
│   │   ├── DocumentUploadPage.tsx
│   │   ├── FileList.tsx
│   │   ├── HelpPanel.tsx
│   │   ├── Navigation.tsx
│   │   ├── PageShell.tsx
│   │   ├── PolicyOverview.tsx
│   │   ├── ReviewPage.tsx
│   │   ├── SendCard.tsx
│   │   ├── Stepper.tsx
│   │   ├── SuccessModal.tsx
│   │   └── UploadZone.tsx
│   ├── hooks/
│   │   └── use-mobile.ts
│   ├── layouts/
│   │   └── main.astro
│   ├── lib/
│   │   ├── base-url.ts
│   │   └── utils.ts
│   ├── pages/
│   │   └── index.astro
│   ├── site-components/ (entire folder)
│   ├── styles/
│   │   ├── allstate.css
│   │   └── global.css
│   ├── env.d.ts
│   └── middleware.ts
├── .env
├── .gitignore
├── astro.config.mjs
├── components.json
├── deploy.sh
├── DEPLOYMENT.md
├── netlify.toml
├── package.json
├── README.md
├── tsconfig.json
├── webflow.json
├── worker-configuration.d.ts
└── wrangler.jsonc
```

---

## Step 2: Set Up Git and GitHub

### A. Install Git (if not already installed)

**Windows:** Download from https://git-scm.com/download/win  
**Mac:** Install via Terminal: `xcode-select --install`  
**Linux:** `sudo apt-get install git` or `sudo yum install git`

### B. Create GitHub Repository

1. Go to https://github.com/new
2. Enter repository name: `allstate-document-upload`
3. Keep it **Public** or **Private** (your choice)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **"Create repository"**

### C. Push Your Code to GitHub

Open Terminal/Command Prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Allstate Document Upload application"

# Add GitHub as remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Your code is now on GitHub!** 🎉

---

## Step 3: Deploy to Your Chosen Platform

### 🌐 Option A: Cloudflare Pages (Recommended)

**Why Cloudflare?**
- Free tier with unlimited requests
- Global CDN (super fast)
- Already configured in this project

**Steps:**

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Sign up/Login (free account)

2. **Create New Pages Project**
   - Click **"Workers & Pages"**
   - Click **"Create application"**
   - Select **"Pages"** tab
   - Click **"Connect to Git"**

3. **Connect GitHub**
   - Click **"Connect GitHub"**
   - Authorize Cloudflare
   - Select `allstate-document-upload` repository

4. **Configure Build**
   - **Project name:** allstate-document-upload
   - **Production branch:** main
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

5. **Deploy!**
   - Click **"Save and Deploy"**
   - Wait 2-3 minutes for build
   - Your site will be live at: `https://allstate-document-upload.pages.dev`

**Set Up Automatic Deployments (Optional):**

Add these secrets to your GitHub repository for CI/CD:
- Go to GitHub repo → Settings → Secrets → Actions
- Add `CLOUDFLARE_API_TOKEN` (get from Cloudflare dashboard)
- Add `CLOUDFLARE_ACCOUNT_ID` (get from Cloudflare dashboard)

Now every push to `main` automatically deploys! 🚀

---

### ▲ Option B: Vercel

**Steps:**

1. **Go to Vercel**
   - Visit: https://vercel.com/new
   - Sign up/Login with GitHub

2. **Import Repository**
   - Click **"Import Project"**
   - Select `allstate-document-upload`
   - Vercel auto-detects Astro settings

3. **Deploy**
   - Click **"Deploy"**
   - Wait 2-3 minutes
   - Your site will be live at: `https://allstate-document-upload.vercel.app`

**Automatic deployments are enabled by default!**

---

### 🎯 Option C: Netlify

**Steps:**

1. **Go to Netlify**
   - Visit: https://app.netlify.com/
   - Sign up/Login

2. **Create New Site**
   - Click **"Add new site"** → **"Import an existing project"**
   - Connect to GitHub
   - Select `allstate-document-upload`

3. **Configure**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click **"Deploy site"**

4. **Wait 2-3 minutes**
   - Your site will be live at: `https://random-name-12345.netlify.app`

**Change site name:**
- Go to Site settings → Change site name

---

## Step 4: Test Your Live Site

Visit your deployment URL and test:
- ✅ Upload documents (drag & drop)
- ✅ File validation (5 files max, 8MB each)
- ✅ Progress stepper
- ✅ Review page
- ✅ Confirm page
- ✅ Policy overview
- ✅ Mobile responsiveness

---

## Step 5: Custom Domain (Optional)

### For Cloudflare Pages:
1. Go to your Pages project
2. Click **"Custom domains"**
3. Add your domain (e.g., `documents.allstate.com`)
4. Follow DNS instructions

### For Vercel:
1. Go to project Settings → Domains
2. Add your domain
3. Follow DNS instructions

### For Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS instructions

---

## 🎉 You're Done!

Your Allstate Document Upload application is now:
- ✅ Live on the internet 24/7
- ✅ Globally distributed (fast worldwide)
- ✅ Automatically deployed on every push
- ✅ HTTPS secured
- ✅ Free to host (on free tiers)

---

## 📊 What Happens Next?

### Automatic Updates:
```bash
# Make any changes locally
git add .
git commit -m "Update something"
git push

# Your site automatically rebuilds and deploys!
```

### Monitor Your Site:
- **Cloudflare:** Analytics in dashboard
- **Vercel:** Analytics in dashboard
- **Netlify:** Analytics in dashboard

---

## 🆘 Troubleshooting

### Build Fails?
1. Check build logs in your platform's dashboard
2. Test locally: `npm install && npm run build`
3. Check Node version: Should be 18+

### Site Not Loading?
1. Wait 5 minutes (DNS propagation)
2. Clear browser cache
3. Check deployment logs

### Need Help?
- Check `DEPLOYMENT.md` for detailed guides
- Contact platform support (all have free support)

---

## 📞 Quick Links

- **Cloudflare Dashboard:** https://dash.cloudflare.com/
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Netlify Dashboard:** https://app.netlify.com/
- **GitHub Repo:** https://github.com/YOUR_USERNAME/allstate-document-upload

---

**Congratulations! Your site is live! 🚀🎉**
