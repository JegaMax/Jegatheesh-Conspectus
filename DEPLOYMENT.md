# Deployment Guide

This guide provides detailed instructions for deploying your Next.js portfolio to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All content in `src/data/portfolio.ts` is accurate
- [ ] Images are optimized and placed in `public/assets/`
- [ ] SEO metadata in `src/app/layout.tsx` is updated
- [ ] `robots.txt` and `sitemap.xml` are configured
- [ ] Build runs successfully locally: `npm run build`
- [ ] No linting errors: `npm run lint`
- [ ] All personal links (social media, email) are correct

## 🚀 Vercel Deployment (Recommended)

Vercel is the recommended platform as it's created by the Next.js team and offers zero-configuration deployment.

### Method 1: GitHub Integration (Easiest)

1. **Push Code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin react
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In" with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Select the `react` branch

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - No environment variables needed

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for first deployment
   - Your site will be live at `https://your-project.vercel.app`

5. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd /workspace
   vercel
   ```

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

## 🌐 Netlify Deployment

### Method 1: Git Integration

1. **Push to GitHub**
   ```bash
   git push origin react
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Choose the `react` branch

3. **Build Settings**
   - **Base directory**: Leave empty
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: Set in `netlify.toml` (see below)

4. **Create `netlify.toml`**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [build.environment]
     NODE_VERSION = "20"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

5. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `https://random-name.netlify.app`

### Method 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build Project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy
   ```

4. **Production Deploy**
   ```bash
   netlify deploy --prod
   ```

## 📦 Static Export (GitHub Pages, Traditional Hosting)

If you need a fully static export (for GitHub Pages or traditional hosting):

1. **Update `next.config.ts`**
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true, // Required for static export
     },
     compiler: {
       styledComponents: true,
     },
   };
   ```

2. **Build Static Site**
   ```bash
   npm run build
   ```
   This creates an `out` folder with static files.

3. **Deploy `out` Folder**
   - Upload to any static hosting service
   - Or use GitHub Pages (see below)

### GitHub Pages Deployment

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`**
   ```json
   {
     "scripts": {
       "deploy": "next build && next export && gh-pages -d out"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Your site will be at `https://username.github.io/repo-name/`

## 🐳 Docker Deployment

For containerized deployment:

1. **Create `Dockerfile`**
   ```dockerfile
   FROM node:20-alpine AS base
   
   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   
   COPY package*.json ./
   RUN npm ci
   
   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   
   RUN npm run build
   
   # Production image
   FROM base AS runner
   WORKDIR /app
   
   ENV NODE_ENV production
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   
   EXPOSE 3000
   
   ENV PORT 3000
   
   CMD ["node", "server.js"]
   ```

2. **Create `.dockerignore`**
   ```
   node_modules
   .next
   .git
   *.log
   ```

3. **Build Image**
   ```bash
   docker build -t portfolio .
   ```

4. **Run Container**
   ```bash
   docker run -p 3000:3000 portfolio
   ```

## ⚙️ Environment Variables

If you need environment variables:

### For Vercel
- Go to Project Settings → Environment Variables
- Add variables for Production, Preview, and Development

### For Netlify
- Go to Site Settings → Build & deploy → Environment
- Add environment variables

### For Local Development
Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. **Push to GitHub**
   ```bash
   git push origin react
   ```

2. **Automatic Build Triggered**
   - Vercel/Netlify detects the push
   - Automatically builds and deploys
   - Get notification when complete

3. **Preview Deployments**
   - Each pull request gets a preview URL
   - Test changes before merging

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads correctly at production URL
- [ ] All images display properly
- [ ] Navigation works smoothly
- [ ] Animations perform well
- [ ] Forms (if any) submit correctly
- [ ] Social media links work
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test on mobile devices
- [ ] Check SEO with [Google Search Console](https://search.google.com/search-console)
- [ ] Verify Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)

## 🔍 Performance Monitoring

### Vercel Analytics
- Go to Project → Analytics tab
- Enable Web Analytics (free tier available)
- Monitor Core Web Vitals

### Google Search Console
1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

### Lighthouse CI
Run regularly:
```bash
npm install -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage
```

## 🐛 Troubleshooting

### Build Fails on Vercel/Netlify

1. **Check Node Version**
   - Ensure Node 18+ is specified
   - Add to `package.json`:
     ```json
     "engines": {
       "node": ">=18.0.0"
     }
     ```

2. **Clear Cache**
   - Vercel: Redeploy without cache
   - Netlify: Clear cache and retry deploy

3. **Check Build Logs**
   - Read error messages carefully
   - Most common: missing dependencies or build errors

### Images Not Loading

- Ensure images are in `public/` directory
- Check paths in portfolio data
- For static export, set `images.unoptimized: true`

### Styled Components Flash

- Verify `src/lib/registry.tsx` is set up
- Check it's imported in `layout.tsx`

## 📞 Support

If you encounter issues:

1. Check [Next.js Documentation](https://nextjs.org/docs)
2. Visit [Vercel Documentation](https://vercel.com/docs)
3. Check [Netlify Documentation](https://docs.netlify.com)
4. Open an issue on GitHub

---

**Happy Deploying! 🚀**
