# Vignesh Sathishkumar — Personal Portfolio

A responsive React + Vite portfolio website showcasing business analysis, operations, experience and the Revenue & Sales Operations Intelligence case study.

## Run locally

1. Install Node.js (if not installed).
2. Open this folder in VS Code.
3. Run `npm.cmd install` in PowerShell (`npm install` in other terminals).
4. Run `npm.cmd run dev`.
5. Open the local URL shown in the terminal (usually http://localhost:5173).

## Add your resume

Copy your actual PDF into `public/resume/` and name it **Vignesh_Sathishkumar_Resume.pdf**. The Download Resume button will then work. Do not upload a private resume with personal details to a public repository unless you want it public.

## Customize

- Edit `src/App.jsx` to update profile text, experience, skills, links and contact information.
- The GitHub project URL is set in `const GITHUB` near the top of `src/App.jsx`.
- Add your LinkedIn URL by replacing the placeholder in the Contact section of `src/App.jsx`.
- Edit `src/App.css` for styling.
- Images are in `public/images/` and are screenshots of your existing NexaCloud dashboard.
- The sample data and KPI values in the project are synthetic, not employer data.

## Production build

Run `npm.cmd run build`. Deploy the generated `dist/` folder to Netlify, Vercel, or another static hosting provider.

## Note

This website is a portfolio presentation, not a live integration with the Excel dashboard. Project screenshots are static; the original interactive workbook is available through the linked GitHub repository.
