# Alliance Experience Platform

A modern, responsive web application showcasing Kyndryl's strategic partnerships with major cloud providers including Google Cloud, Microsoft Azure, and AWS. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Functionality
- **Multi-Alliance Support**: Dedicated pages for Google Cloud, Microsoft Azure, and AWS partnerships
- **Interactive Video Library**: Embedded video content with filtering and search capabilities
- **Customer Stories**: Showcase partnership success stories and case studies
- **Demo Portal**: Secure access to interactive product demonstrations
- **AI Journey**: Dedicated section highlighting Kyndryl's AI research and capabilities

### Technical Highlights
- **Responsive Design**: Mobile-first approach with fluid layouts and clamp-based scaling
- **Scene7 Video Integration**: Adobe Scene7 dynamic media for optimized video delivery
- **Modal System**: Consistent modal patterns for enhanced user experience
- **Smooth Animations**: CSS transitions and scroll-based interactions
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: TWK Everett (primary), Roboto (fallback)

## 📁 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx              # Root layout with font configuration
│   ├── page.tsx                # Home page with splash screen
│   ├── globals.css             # Global styles and Tailwind configuration
│   └── ai-journey/
│       └── page.tsx            # AI Journey dedicated page
├── components/
│   ├── alliance-landing.tsx    # Main alliance landing component
│   ├── aws-video-modal.tsx     # AWS partnership video modal
│   ├── google-cloud-video-modal.tsx # Google Cloud video modal
│   ├── microsoft-video-modal.tsx    # Microsoft Azure video modal
│   ├── video-library-modal.tsx      # Video library component
│   ├── splash-screen.tsx            # Initial loading screen
│   └── ui/                          # shadcn/ui components
├── hooks/
│   ├── use-mobile.tsx          # Mobile detection hook
│   └── use-toast.ts            # Toast notification system
└── lib/
    └── utils.ts                # Utility functions (cn, etc.)
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary**: `#FF462D` (Kyndryl Red)
- **Secondary**: `#E63E32` (Darker Red)
- **Text Primary**: `#3D3C3C` (Dark Gray)
- **Text Secondary**: `#9E9287` (Medium Gray)
- **Background**: `#F2F1EE` (Light Gray)
- **Accent**: `#29707A` (Teal)

### Typography
- **Primary Font**: TWK Everett (custom corporate font)
- **Fallback Font**: Roboto
- **Responsive Scaling**: clamp() functions for fluid typography

### Layout Principles
- **Mobile-First**: Responsive design starting from mobile breakpoints
- **Fluid Scaling**: clamp() functions for consistent scaling across devices
- **Grid System**: CSS Grid for complex layouts, Flexbox for component alignment
- **16:9 Aspect Ratio**: Consistent video and media proportions

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd alliance-experience
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎯 Key Components

### AllianceLanding
Main component handling alliance-specific content with dynamic tile rendering based on the selected partnership (Google Cloud, Microsoft, AWS).

### Video Modals
Partnership-specific video components featuring:
- Adobe Scene7 integration for optimized video delivery
- Consistent modal design patterns
- Search functionality
- Responsive video containers

### AI Journey Page
Dedicated page showcasing Kyndryl's AI capabilities with:
- Embedded video library (no modal breakout)
- Smooth scroll navigation
- Demo portal integration
- Responsive hero sections

## 🔧 Configuration

### Fonts
Fonts are configured in `app/layout.tsx` and `app/globals.css`:
- TWK Everett as primary corporate font
- Roboto as system fallback
- Font variables defined in CSS custom properties

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

### Video Integration
Scene7 video configuration includes:
- Asset paths for each partnership
- Poster image optimization
- Responsive video containers
- Accessibility attributes

## 🚀 Deployment

The application is optimized for deployment on Vercel:

1. **Connect repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Deploy** automatically on push to main branch

### Environment Variables
No environment variables required for basic functionality. Add any API keys or external service configurations as needed.

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: CSS Grid, Flexbox, CSS Custom Properties, ES2020+

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Follow Next.js recommended rules
- **Prettier**: Consistent code formatting
- **Components**: Use functional components with hooks
- **Styling**: Tailwind CSS classes, avoid inline styles

## 📄 License

This project is proprietary software developed for Kyndryl. All rights reserved.

## 📞 Support

For technical support or questions:
- **Internal Team**: Contact the development team
- **Issues**: Use the repository issue tracker
- **Documentation**: Refer to component JSDoc comments

---

**Built with ❤️ by the Kyndryl Alliance Experience Team**
