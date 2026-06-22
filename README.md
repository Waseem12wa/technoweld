# Avion Steel Group Inc. - CMS Website

This repository contains the complete source code for the modern, high-performance website of Avion Steel Group Inc. It is built using the latest web technologies including Next.js App Router and Payload CMS 3.0.

## 🚀 Tech Stack
- **Framework:** Next.js 15 (React 19)
- **CMS:** Payload CMS 3.0 (Headless, Fully Integrated)
- **Database:** SQLite (Local file-based, zero configuration needed)
- **Language:** TypeScript
- **Styling:** Custom CSS, Tailwind utilities (if applicable), and Visual Composer Legacy Styles.

## 📦 Project Structure
- `avion-cms/` — The main working directory for the Next.js application.
  - `src/app/` — All Next.js App Router pages (Frontend and Admin Dashboard).
    - `(frontend)/` — Public facing website pages (Home, About, Services, etc.).
    - `(payload)/` — The secure Admin dashboard.
  - `src/collections/` — Payload CMS Database schemas (Pages, Users, Posts).
  - `src/components/` — Reusable React UI components (Header, Footer, etc.).
  - `public/` — Static assets (Images, SVGs, Fonts).

---

## 🛠️ How to Run Locally

Follow these steps to set up the project and run it on your local machine:

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (Version 20.0 or higher is recommended)
- **npm** (comes installed with Node.js)
- Git

### 2. Navigate to the App Directory
The core application lives inside the `avion-cms` folder. You must move into this directory first!
```bash
cd avion-cms
```

### 3. Install Dependencies
Install all the required NPM packages:
```bash
npm install
```

### 4. Setup Environment Variables
To run Payload CMS securely, you need environment variables. Create a `.env` file in the root of the `avion-cms` directory with the following contents:
```env
DATABASE_URL=file:./payload.db
PAYLOAD_SECRET=098f6bcd4621d373cade4e832627b4f6
```
*(Note: Because we are using SQLite, the database will be created automatically as a local file, making setup effortless!)*

### 5. Start the Development Server
Run the following command to start the Next.js development server:
```bash
npm run dev
```

### 6. View the Site
Once the server has compiled successfully, open your browser:
- **Main Website:** [http://localhost:3000](http://localhost:3000)
- **Admin Dashboard:** [http://localhost:3000/admin](http://localhost:3000/admin) (To manage text, images, and pages)

---

## 🚀 Deployment (Vercel)

This project is perfectly optimized for deployment on Vercel.

**Important Note for Vercel Setup:**
Since the Next.js application is nested inside a subfolder, you **must** configure the **Root Directory** in Vercel to be `avion-cms`.
1. Import the GitHub repository in Vercel.
2. In the "Configure Project" step, click on **Edit** under "Root Directory".
3. Type `avion-cms` and save.
4. Expand "Environment Variables" and add `PAYLOAD_SECRET` with a randomly generated string.
5. Click **Deploy**!

---

## 📝 Scripts
- `npm run dev` — Starts the development server with Hot Module Replacement.
- `npm run build` — Creates an optimized production build of the website and CMS.
- `npm run start` — Runs the compiled production build locally.
- `npm run lint` — Checks for code syntax and formatting errors.
