# BurkinaFasoHub

A web platform designed to serve the Burkinabé diaspora by providing culturally relevant content, news, educational resources, and community networking opportunities.

## Features

- **News Aggregation**: Fetches and displays RSS-based news from external sources
- **Blog Section**: For publishing articles and stories
- **Cultural Content**: Showcases traditions, languages, and heritage
- **Education Resources**: Provides access to learning materials and opportunities
- **Networking Platform**: Connects users within the diaspora community
- **E-Commerce (Shop)**: Enables product browsing and potential purchases
- **Technology Insights**: Shares tech-related updates relevant to Burkina Faso

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd BurkinaFasoHub

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
# Build the application
npm run build

# Export as static files
npm run export
```

## Deployment

### GitHub Pages Deployment

This project is configured for deployment to GitHub Pages using GitHub Actions.

1. Create a new repository on GitHub
2. Push your code to the repository
3. In your repository settings, go to "Pages"
4. Under "Source", select "GitHub Actions"
5. The deployment workflow will automatically run on every push to the main branch

### Manual Deployment to GitHub Pages

If you prefer to deploy manually:

1. Build and export the project:

   ```bash
   npm run deploy
   ```

2. Deploy the `out` directory to your GitHub Pages

### Custom Domain (Optional)

If you have a custom domain:

1. Uncomment the `cname` line in `.github/workflows/deploy.yml`
2. Replace `your-custom-domain.com` with your actual domain
3. Add a `CNAME` file to the `public` directory with your domain

## Project Structure

```
BurkinaFasoHub/
├── app/              # Next.js app router pages
├── components/       # React components
├── data/             # Static data files
├── lib/              # Utility functions and libraries
├── public/           # Static assets
├── styles/           # Global styles
├── .github/workflows/# GitHub Actions workflows
├── next.config.mjs   # Next.js configuration
├── tailwind.config.ts# Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

## Environment Variables

Create a `.env.local` file in the root directory for environment variables:

```bash
# Example environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
AUTH_SECRET=your-secret-key-for-jwt
```

## Authentication

- Demo delegate login: `delegate140` / `securePassword123`
- Only delegate with ID 140 can access the dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue on the GitHub repository.
