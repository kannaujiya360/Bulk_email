# 📧 Bulk Email Sender – Dashboard (SvelteKit)

A modern **Bulk Email Sender Dashboard** built using **SvelteKit** with secure authentication, server-side route protection, and a premium UI.  
The application allows authenticated users to manage campaigns and view email analytics.

---

## 🚀 Features

- 🔐 **Authentication-based Routing**
  - Server-side session validation using `/api/me`
  - Unauthorized users are redirected to `/login`

- 📊 **Dashboard Analytics**
  - Total campaigns
  - Emails sent
  - Success rate

- ⚡ **Server-Side Rendering (SSR)**
  - Secure redirects using `+page.server.ts`

- 🎨 **Modern & Responsive UI**
  - Clean card-based layout
  - Hover animations
  - Mobile-first design

- 🧭 **Simple Navigation**
  - Dashboard
  - Campaigns
  - Create Campaign
  - Logout

---

## 🛠 Tech Stack

- **SvelteKit**
- **TypeScript**
- **Node.js / Express (Backend APIs)**
- **REST API**
- **CSS (Custom styling, no Tailwind)**
- **Cookie-based Authentication**

---

## 📁 Project Structure

```txt
src/
├── lib/
│   ├── api/
│   │   └── client.ts
│   ├── components/
│   │   ├── Navbar.svelte
│   │   ├── Sidebar.svelte
│   │   ├── Loader.svelte
│   │   └── Protected.svelte
│   ├── stores/
│   │   └── auth.ts
│   └── schemas/
│       └── auth.schema.ts
│
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte          // landing / redirect
│   ├── login/
│   │   └── +page.svelte
│   ├── register/
│   │   └── +page.svelte
│   ├── dashboard/
│   │   └── +page.svelte
│   ├── campaigns/
│   │   └── +page.svelte
│   ├── campaigns/new/
│   │   └── +page.svelte
│   └── logout/
│       └── +page.server.ts
│
└── app.css  
# Bulk Email Automation Backend

This is the backend service for a **Bulk Email Automation / Email Campaign Management System** built with **Node.js, TypeScript, Hono, MongoDB, and Nodemailer**. It supports SMTP configuration, bulk & scheduled email sending, batch processing, email logs, and dashboard analytics.

---

## 🚀 Tech Stack

* **Runtime**: Node.js
* **Framework**: Hono (Fast & lightweight)
* **Language**: TypeScript
* **Database**: MongoDB (Mongoose)
* **Email**: Nodemailer (SMTP based)
* **Auth**: Session / JWT based authentication
* **Validation**: Zod (optional)
* **Scheduler**: Cron / custom scheduler service

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── app.ts                  # Hono app creation + middleware + routes
│   ├── server.ts               # Node.js server startup + MongoDB connect
│   ├── env.ts                  # Environment variable loader
│   ├── types.ts                # Shared TypeScript interfaces
│
│   ├── config/                 # App & server configuration
│   │   ├── db.ts               # MongoDB connection (mongoose)
│   │   ├── cors.ts             # CORS config for frontend
│   │   └── cookie.ts           # Cookie / session options
│
│   ├── middleware/             # Global middlewares
│   │   ├── auth.ts             # Session authentication guard
│   │   └── error.ts            # Global error handler
│
│   ├── models/                 # Mongoose schemas
│   │   ├── User.ts
│   │   ├── SmtpConfig.ts
│   │   ├── ScheduledJob.ts
│   │   ├── EmailLog.ts
│   │   └── BatchJob.ts
│
│   ├── routes/                 # API routes
│   │   ├── index.ts            # Route aggregator
│   │   ├── auth.routes.ts
│   │   ├── smtp.routes.ts
│   │   ├── send.routes.ts
│   │   ├── dashboard.routes.ts
│   │   ├── report.routes.ts
│   │   └── schedule.routes.ts
│
│   ├── services/               # Business logic layer
│   │   ├── auth.service.ts
│   │   ├── email.service.ts
│   │   ├── batch.service.ts
│   │   ├── scheduler.service.ts
│   │   ├── file.service.ts
│   │   ├── log.service.ts
│   │   ├── smtp.service.ts
│   │   └── user.service.ts
│
│   ├── utils/                  # Helper utilities
│   │   ├── hash.ts
│   │   ├── token.ts
│   │   ├── date.ts
│   │   ├── response.ts
│   │   └── validation.ts
│
│   └── constants/              # App constants
│       ├── roles.ts
│       └── limits.ts
│
├── uploads/                    # Uploaded Excel / HTML templates
├── logs/                       # Email logs (CSV / JSON)
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

---

## 🔐 Authentication

* User login & registration
* Session or JWT-based authentication
* Role-based access (Admin/User)
* Protected routes using middleware

---

## ✉️ Email Features

* SMTP configuration (Multiple providers)
* Test SMTP connection
* Bulk email sending
* Batch-wise email processing
* Pause / Resume email jobs
* Scheduled email campaigns
* Excel-based email imports
* HTML email templates

---

## 📊 Dashboard & Reports

* Total emails sent / failed
* Real-time job status polling
* Email logs & history
* CSV / JSON export of logs
* Scheduled job tracking

---

## ⚙️ Environment Variables

Create a `.env` file in the backend root:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/email-app
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
COOKIE_SECRET=your_cookie_secret
```

---

## ▶️ Running the Project

### Install dependencies

```
npm install
```

### Start development server

```
npm run dev
```

### Build for production

```
npm run build
npm start
```

---

## 📌 API Modules Overview

* `/auth` → Login, Register, Logout, Me
* `/config/smtp` → SMTP CRUD & testing
* `/send` → Send, Preview, Pause, Resume emails
* `/dashboard` → Analytics & stats
* `/report` → Email logs & exports
* `/schedule` → Scheduled email jobs

---


---

## 👨‍💻 Author

Built with ❤️ using TypeScript & Hono.
