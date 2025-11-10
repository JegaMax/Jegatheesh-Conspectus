# Jegatheesh C - Portfolio Website

A modern, high-performance portfolio website built with Next.js, TypeScript, Framer Motion, and Styled Components.

## 🚀 Features

- **Modern Stack**: Built with Next.js 16, React 19, TypeScript
- **Stunning Animations**: Smooth, engaging animations using Framer Motion
- **Performance Optimized**: Lighthouse score optimized for 90+ performance
- **SEO Friendly**: Full SEO implementation with metadata, Open Graph tags, and structured data
- **Mobile First**: Fully responsive design that works flawlessly on all devices
- **Styled Components**: Dynamic, scoped CSS-in-JS styling
- **Image Optimization**: Automatic image optimization with next/image

## 📁 Project Structure

```
├── public/
│   └── assets/          # Images, favicons, and static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with metadata
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/      # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Courses.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── portfolio.ts # Portfolio data
│   ├── lib/
│   │   └── registry.tsx # Styled Components registry
│   └── styles/
│       └── GlobalStyles.tsx
├── next.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with SSR/SSG capabilities |
| **React 19** | UI library |
| **TypeScript** | Type safety and better developer experience |
| **Styled Components** | CSS-in-JS styling solution |
| **Framer Motion** | Animation library |
| **Tailwind CSS** | Utility-first CSS framework |

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd workspace
   git checkout react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin react
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Select the `react` branch
   - Click "Deploy"

   Vercel will automatically detect Next.js and configure everything for you.

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with your GitHub account
   - Click "New site from Git"
   - Choose your repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Click "Deploy site"

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static files** (if needed)
   Add to `next.config.ts`:
   ```typescript
   output: 'export',
   ```

3. **Upload the `out` folder** to your hosting provider

## 🎨 Customization

### Update Portfolio Content

Edit the file `src/data/portfolio.ts` to update:
- Personal information
- About section
- Education details
- Projects
- Courses & Certifications
- Work experience
- Skills and highlights

### Modify Colors

Update colors in:
- `src/styles/GlobalStyles.tsx` (CSS variables)
- `tailwind.config.js` (Tailwind theme)
- Individual component styles

### Add New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation links in `src/components/Navigation.tsx`

## ⚡ Performance Optimization

The site is optimized for performance:

- ✅ **Image Optimization**: Using Next.js Image component
- ✅ **Code Splitting**: Automatic with Next.js
- ✅ **Font Optimization**: Using next/font
- ✅ **Lazy Loading**: Components load on scroll
- ✅ **Static Generation**: Pages are pre-rendered at build time
- ✅ **Minification**: CSS and JS are automatically minified

## 🔍 SEO Features

- ✅ **Meta Tags**: Complete meta tags for all pages
- ✅ **Open Graph**: Social media preview cards
- ✅ **Twitter Cards**: Twitter-specific metadata
- ✅ **Structured Data**: JSON-LD schema markup
- ✅ **Sitemap**: XML sitemap for search engines
- ✅ **Robots.txt**: Search engine crawling instructions
- ✅ **Canonical URLs**: Prevent duplicate content issues

## 📱 Mobile Responsiveness

The site is fully responsive with:
- Mobile-first design approach
- Touch-optimized navigation
- Responsive images
- Flexible layouts
- Optimized font sizes

## 🎭 Animations

Framer Motion animations include:
- **Page transitions**: Smooth page/section transitions
- **Scroll animations**: Elements animate in on scroll
- **Hover effects**: Interactive hover states
- **Stagger animations**: Sequential animations for lists
- **Custom transitions**: Tailored timing and easing

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `.next` folder and `node_modules`
   ```bash
   rm -rf .next node_modules
   ```

2. Clear npm cache
   ```bash
   npm cache clean --force
   ```

3. Reinstall dependencies
   ```bash
   npm install
   ```

### Images Not Loading

Ensure images are in the `public/assets/` directory and paths are correct in `src/data/portfolio.ts`.

### Styled Components Flash

If you see unstyled content flash, ensure `src/lib/registry.tsx` is properly configured in the layout.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Jegatheesh C**
- Email: jega7354@gmail.com
- LinkedIn: [jegatheesh-c](https://in.linkedin.com/in/jegatheesh-c)
- GitHub: [jegamax](https://github.com/jegamax)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for the animation library
- Styled Components for the styling solution
- Vercel for the deployment platform

---

Built with ❤️ by Jegatheesh C
