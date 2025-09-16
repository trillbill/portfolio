# Will Finnegan - Portfolio

A modern, responsive personal portfolio website built with React and Vite. This site showcases my professional work, technical projects, and provides insight into my personality and interests.

## 🚀 Live Demo

Visit the live site: [willfinnegan.com](https://willfinnegan.com)

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout** - Optimized for desktop, tablet, and mobile
- **Smooth Animations** - CSS transitions and hovenr effects
- **Clean Typography** - Professional and readable design

### 📱 Sections
- **Hero Section** - Introduction and call-to-action
- **About Me** - Personal story and professional background
- **Projects Showcase** - Featured projects with live demos and GitHub links
- **Skills & Technologies** - Technical expertise and tools
- **Experience** - Professional background and achievements
- **Contact** - Multiple ways to get in touch

### 🛠️ Technical Features
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with Flexbox and Grid
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and semantic HTML

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation and theme toggle
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About me section
│   ├── Projects.jsx    # Project showcase
│   ├── Skills.jsx      # Technical skills
│   ├── Experience.jsx  # Professional experience
│   ├── Contact.jsx     # Contact form and links
│   └── Footer.jsx      # Footer with social links
├── data/               # Static data and content
│   ├── projects.js     # Project information
│   ├── skills.js       # Skills and technologies
│   └── experience.js   # Professional experience
├── styles/             # CSS and styling
│   ├── globals.css     # Global styles and variables
│   ├── components.css  # Component-specific styles
│   └── responsive.css  # Media queries and responsive design
├── assets/             # Images and static files
└── App.jsx            # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/willfinnegan/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Adding Your Content

1. **Personal Information**: Update `src/data/` files with your information
2. **Projects**: Add your projects to `src/data/projects.js`
3. **Skills**: Modify `src/data/skills.js` with your technical skills
4. **Experience**: Update `src/data/experience.js` with your background
5. **Styling**: Customize colors and fonts in `src/styles/globals.css`

### Theme Customization

The site uses CSS custom properties for theming. Update the color variables in `globals.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
  /* ... other variables */
}
```

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🚀 Deployment

This static site can be deployed to any hosting service:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist contents to gh-pages branch
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Will Finnegan**
- Website: [willfinnegan.dev](https://willfinnegan.dev)
- LinkedIn: [William Finnegan](https://www.linkedin.com/in/william-finnegan-4b64819a)
- GitHub: [@trillbill](https://github.com/trillbill)

---

*Built with ❤️ by Will Finnegan*