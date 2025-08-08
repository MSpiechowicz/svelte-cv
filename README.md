# Svelte CV

A modern, responsive CV/resume builder built with SvelteKit and TypeScript. Create beautiful, professional CVs with a clean design and interactive timeline visualization.

![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?style=for-the-badge&logo=svelte) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Features

- **Modern Tech Stack**: Built with SvelteKit 5, TypeScript, and Tailwind CSS
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Timeline**: Visual career progression with hover tooltips
- **Modular Components**: Easy to customize and extend
- **Dark/Light Theme**: Built-in theme support
- **SEO Optimized**: Ready for deployment and search engine optimization
- **Type Safe**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

### Core Technologies
- **SvelteKit 5** - Full-stack web framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

### UI & Icons
- **Tabler Icons Svelte** - Icon library used in the project

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Svelte Check** - TypeScript checking for Svelte

## 📁 Project Structure

```
svelte-cv/
├── src/
│   ├── lib/
│   │   ├── components/          # Svelte components
│   │   │   ├── AppCV.svelte    # Main CV component
│   │   │   ├── AppCVHeader.svelte
│   │   │   ├── AppCVSections.svelte
│   │   │   ├── AppCVTimeline.svelte
│   │   │   └── ...             # Other components
│   │   ├── stores/             # Svelte stores
│   │   ├── types/              # TypeScript type definitions
│   │   ├── utils.ts            # Utility functions
│   │   └── cv.json             # CV data structure
│   ├── routes/                 # SvelteKit routes
│   └── app.html               # HTML template
├── static/                     # Static assets
├── package.json
├── svelte.config.js
├── vite.config.ts
└── tsconfig.json
```

## 📊 CV Data Structure

The CV data is stored in `src/lib/cv.json` and follows this structure:

### Header Section
```json
{
  "header": {
    "name": "Your Name",
    "title": ["Job Title"],
    "email": "email@example.com",
    "phone": "+1234567890",
    "location": "City, Country",
    "avatar": "https://example.com/avatar.jpg",
    "avatarPosition": "left",
    "gender": "male",
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "website": "www.example.com"
  }
}
```

### Navigation
```json
{
  "navigation": [
    {
      "anchor": "summary",
      "icon": "IconUserFilled",
      "text": "Summary"
    }
  ]
}
```

### Sections
Each section contains different data structures:

#### Summary Section
```json
{
  "anchor": "summary",
  "title": "Summary",
  "description": "Professional summary...",
  "icon": "IconUserFilled",
  "summary": [
    "Key point 1",
    "Key point 2"
  ],
  "summaryIcon": "IconArrowBigRightLineFilled"
}
```

#### Projects Section
```json
{
  "anchor": "projects",
  "title": "Projects",
  "description": "Project showcase...",
  "icon": "IconFoldersFilled",
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["React", "TypeScript"],
      "demo": "https://demo.com",
      "github": "https://github.com/project"
    }
  ]
}
```

#### Skills Section
```json
{
  "anchor": "skills",
  "title": "Technical Skills",
  "description": "Skills description...",
  "icon": "IconCarambolaFilled",
  "skills": {
    "categories": [
      {
        "name": "Languages",
        "mainSkills": [
          {
            "name": "JavaScript",
            "rating": 5
          }
        ],
        "additionalSkills": ["PHP", "Python"],
        "additionalSkillsCut": 10
      }
    ]
  }
}
```

#### Experience Section
```json
{
  "anchor": "experience",
  "title": "Experience",
  "description": "Work experience...",
  "icon": "IconBriefcase2Filled",
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "startDate": "January 2023",
      "endDate": "Present",
      "duration": "1 year 5 months",
      "logo": "https://company-logo.png",
      "keywords": "React, TypeScript",
      "bullets": [
        "Achievement 1",
        "Achievement 2"
      ]
    }
  ]
}
```

#### Timeline Section
```json
{
  "anchor": "timeline",
  "title": "Career Timeline",
  "description": "Career progression...",
  "icon": "IconChartAreaLineFilled",
  "timeline": {
    "startYear": 2008,
    "endYear": 2025,
    "roles": [
      {
        "name": "Frontend Development",
        "color": "#f97316",
        "periods": [
          {
            "start": "2021-10",
            "end": "current",
            "duration": "current"
          }
        ],
        "totalDuration": "current"
      }
    ]
  }
}
```

#### Languages Section
```json
{
  "anchor": "languages",
  "title": "Language Proficiency",
  "description": "Language skills...",
  "icon": "IconMoodHappyFilled",
  "languages": [
    {
      "name": "English",
      "level": "Advanced",
      "proficiency": 4,
      "description": "Professional working proficiency"
    }
  ]
}
```

#### Education Section
```json
{
  "anchor": "education",
  "title": "Education",
  "description": "Academic background...",
  "icon": "IconBookFilled",
  "education": [
    {
      "degree": "Master of Science",
      "university": "University Name",
      "startDate": "2008",
      "endDate": "2010",
      "duration": "2 years",
      "logo": "https://university-logo.png",
      "scholarship": "Scholarship for best students",
      "entries": [
        {
          "label": "Specialization",
          "value": "Computer Science"
        }
      ]
    }
  ]
}
```

#### Certifications Section
```json
{
  "anchor": "certifications",
  "title": "Certifications",
  "description": "Professional certifications...",
  "icon": "IconBadgeFilled",
  "certifications": [
    {
      "title": "Certification Name",
      "date": "October 2018",
      "logo": "https://issuer-logo.png",
      "verifyLink": "https://verify.com/cert",
      "entries": [
        {
          "label": "Issuer",
          "value": "Issuer Name"
        },
        {
          "label": "Credential ID",
          "value": "CERT-123"
        }
      ]
    }
  ]
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/svelte-cv.git
   cd svelte-cv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Customization

1. **Update CV Data**: Edit `src/lib/cv.json` with your information
2. **Modify Styling**: Update Tailwind classes in components
3. **Add Sections**: Create new components and add to `AppCVSections.svelte`
4. **Change Theme**: Modify theme color variables in `src/app.css` (see `@theme` and `.dark` blocks)

### Building for Production

```bash
npm run build
```

The built files will be in the `build` directory, ready for deployment.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with Svelte Check
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization Guide

### Adding New Sections

1. Create a new component in `src/lib/components/`
2. Add the section data to `cv.json`
3. Import and add the component to `AppCVSections.svelte`

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify theme color variables in `src/app.css` (`@theme` and `.dark` blocks)
- Update component classes directly
- Add custom CSS in `src/app.css`

### Icons

The project uses Tabler icons. To add new icons:
1. Import from `@tabler/icons-svelte`. List of supported icons is available [here](https://tabler.io/icons)
2. Use in your components

## 📦 Deployment

### Static Site Deployment

This project is configured for static site deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**:
   - **Vercel**: Connect your GitHub repository
   - **Netlify**: Drag and drop the `build` folder
   - **GitHub Pages**: Use GitHub Actions
   - **Any static hosting**: Upload the `build` folder

### Environment Variables

No environment variables are required for basic usage. The project is self-contained.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [SvelteKit](https://kit.svelte.dev/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Tabler Icons](https://tabler-icons.io/) for the icons

---

Made with ❤️ using SvelteKit
