📊 Job Tracking App
A full‑stack MERN application to manage job applications and track progress. It provides authentication, job CRUD operations, dashboards with charts, and a responsive UI for seamless job management.

🚀 Features
- User authentication & authorization with JWT + bcrypt
- Add, update, delete, and search jobs
- Dashboard with statistics and charts (Recharts)
- Responsive UI with React + Styled Components
- Protected routes and error handling
- Toast notifications for feedback
- RESTful API with Express & MongoDB Atlas
🛠️ Tech Stack
Frontend (Client)
- React 19 + Vite
- Redux Toolkit & RTK Query
- React Router DOM
- Axios
- Styled Components
- React Toastify
- Recharts
- Moment.js
Backend (Server)
- Node.js + Express
- MongoDB Atlas + Mongoose
- JWT authentication
- Bcrypt for password hashing
- Helmet, CORS, XSS‑Clean for security
- Express Rate Limit for request throttling
- Custom error handling middleware


📂 Project Structure
```
└── 📁client
    └── 📁public
        ├── _redirects
        ├── favicon.png
    └── 📁src
        └── 📁assets
            └── 📁images
                ├── favicon.ico
                ├── logo.svg
                ├── main.svg
                ├── not-found.svg
            └── 📁wrappers
                ├── BigSidebar.js
                ├── ChartsContainer.js
                ├── DashboardFormPage.js
                ├── ErrorPage.js
                ├── Job.js
                ├── JobInfo.js
                ├── JobsContainer.js
                ├── LandingPage.js
                ├── Navbar.js
                ├── PageBtnContainer.js
                ├── RegisterPage.js
                ├── SearchContainer.js
                ├── SharedLayout.js
                ├── SmallSidebar.js
                ├── StatItem.js
                ├── StatsContainer.js
            ├── react.svg
        └── 📁components
            ├── AreaChart.jsx
            ├── BarChart.jsx
            ├── BigSidebar.jsx
            ├── ChartsContainer.jsx
            ├── Footer.jsx
            ├── FormRow.jsx
            ├── FormRowSelect.jsx
            ├── Job.jsx
            ├── JobInfo.jsx
            ├── JobsContainer.jsx
            ├── Loading.jsx
            ├── Logo.jsx
            ├── Navbar.jsx
            ├── PageBtnContainer.jsx
            ├── ProtectRoute.jsx
            ├── SearchContainer.jsx
            ├── SmallSidebar.jsx
            ├── StatItem.jsx
            ├── StatsContainer.jsx
        └── 📁pages
            └── 📁DashBoard
                ├── AddJob.jsx
                ├── AllJobs.jsx
                ├── index.js
                ├── Layout.jsx
                ├── Profile.jsx
                ├── Stats.jsx
            ├── Error.jsx
            ├── index.js
            ├── Landing.jsx
            ├── Register.jsx
        └── 📁state
            └── 📁apis
                ├── baseQuery.js
                ├── jobsApi.js
                ├── userApi.js
            └── 📁features
                ├── allJobsSlice.js
                ├── jobSlice.js
                ├── userSlice.js
            ├── hooks.js
            ├── store.js
        └── 📁utils
            ├── links.jsx
            ├── localStorage.js
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── normalize.css
    ├── .env
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
```
```
└── 📁server
    └── 📁controllers
        ├── auth.js
        ├── jobs.js
    └── 📁db
        ├── connect.js
    └── 📁errors
        ├── bad-request.js
        ├── custom-api.js
        ├── index.js
        ├── not-found.js
        ├── unauthenticated.js
    └── 📁middleware
        ├── authentication.js
        ├── error-handler.js
        ├── not-found.js
        ├── testUser.js
    └── 📁models
        ├── Job.js
        ├── User.js
    └── 📁public
    └── 📁routes
        ├── auth.js
        ├── jobs.js
    ├── .env
    ├── app.js
    ├── mock-data.json
    ├── package-lock.json
    ├── package.json
    └── populate.js
```
