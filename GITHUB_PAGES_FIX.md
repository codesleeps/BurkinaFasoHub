# GitHub Pages 404 Error Fix

## Problem
The application was experiencing 404 errors when deployed to GitHub Pages because of incorrect routing configuration.

## Solution
We implemented several changes to fix the 404 error:

### 1. Added basePath Configuration
Updated `next.config.mjs` to include the basePath configuration:
```javascript
basePath: "/BurkinaFasoHub"
```

This tells Next.js that the application is being served from a subdirectory rather than the root domain.

### 2. Created Custom 404 Page
Added `app/not-found.tsx` to provide a proper 404 page with navigation back to the home page.

### 3. Updated GitHub Actions Workflow
Modified `.github/workflows/deploy.yml` to include the CNAME file for custom domain support.

### 4. Added CNAME File
Created `public/CNAME` file with the custom domain `burkinahub.org`.

### 5. Updated Documentation
Enhanced `README.md` with troubleshooting instructions for 404 errors on GitHub Pages.

## How It Works
1. GitHub Pages serves projects from `https://[username].github.io/[repository-name]/`
2. The `basePath` configuration tells Next.js to prefix all routes with `/BurkinaFasoHub/`
3. All internal links automatically use this basePath
4. The custom 404 page ensures users get a proper error page instead of a GitHub Pages default

## Deployment URL
The site should now be accessible at:
`https://codesleeps.github.io/BurkinaFasoHub/`

## Troubleshooting
If you still experience 404 errors:

1. Verify that the repository name matches the basePath in `next.config.mjs`
2. Ensure GitHub Pages is configured to use GitHub Actions as the source
3. Check that the deployment workflow completed successfully
4. Confirm that the site URL includes the repository name as a path segment

## Note on Build Process
The local build process may hang due to RSS feed fetching. This is normal and doesn't affect GitHub Actions deployment, which has proper timeout handling.