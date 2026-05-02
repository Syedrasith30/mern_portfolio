# MERN Stack Deployment Guide

Here is the complete, detailed, step-by-step guide to deploying your MERN Stack portfolio so anyone can view it on the internet. 

We will break this down into three main phases: **Database (MongoDB Atlas)**, **Backend (Render)**, and **Frontend (Vercel)**.

---

### Phase 1: Set Up Your Cloud Database (MongoDB Atlas)
Right now, your database is running locally on your computer (`127.0.0.1`). We need to move it to the cloud so your deployed backend can read it.

1. **Create an Account:** Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and sign up for a free account.
2. **Create a Cluster:** Click **"Build a Database"** and select the **Free (M0)** plan. Choose any provider (AWS/Google) and the region closest to you. Click Create.
3. **Set Up Security:**
   - **Username & Password:** Create a database user. Make sure you remember the username and password! (Do not use special characters like `@` in the password).
   - **Network Access:** Under IP Access List, click "Add IP Address" and select **"Allow Access from Anywhere"** (`0.0.0.0/0`). This ensures your Render backend can connect to it.
4. **Get Connection String:**
   - Go to your Cluster dashboard, click **"Connect"**, then **"Drivers"** or **"Connect your application"**.
   - Copy the connection string. It will look like this:
     `mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/portfolio?retryWrites=true&w=majority`
   - Replace `<password>` with the password you created in step 3. Keep this string handy.
5. **Migrate Local Data:**
   - Open your `backend/.env` file.
   - Replace your `MONGODB_URI` with the new Atlas connection string.
   - Run `node seedResume.js` and `node seedCertifications.js` one last time on your local machine to push your PDFs up to the cloud database!

---

### Phase 2: Deploy the Backend (Render)
Render is a free platform perfect for hosting Node.js/Express servers.

1. **Push Code to GitHub:**
   - Make sure your entire project (`MERN_PORT`) is pushed to a GitHub repository.
2. **Create a Render Account:**
   - Go to [Render](https://render.com/) and sign up with your GitHub account.
3. **Create Web Service:**
   - Click **"New +"** in the top right and select **"Web Service"**.
   - Connect your GitHub repository.
4. **Configure the Backend:**
   - **Name:** e.g., `my-portfolio-backend`
   - **Root Directory:** Type exactly `backend` (this tells Render where your server code is).
   - **Environment:** Node
   - **Build Command:** Type `npm install`
   - **Start Command:** Type `node server.js`
5. **Add Environment Variables:**
   Scroll down to the "Environment Variables" section and add:
   - Key: `MONGODB_URI` | Value: *(Paste your MongoDB Atlas connection string from Phase 1)*
   - Key: `PORT` | Value: `5000`
6. **Deploy:** Click **"Create Web Service"**.
   - It will take a few minutes to build. Once you see "Live", scroll to the top and **copy the Render URL** (e.g., `https://my-portfolio-backend-123.onrender.com`).
   - Add `/api/projects` to the end of that URL in your browser to verify it returns your data!

---

### Phase 3: Deploy the Frontend (Vercel)
Vercel is the absolute best platform for hosting React (Vite) applications.

1. **Update API Calls:**
   - Right now, your React app is trying to fetch from `http://localhost:5000/api`. We need to point it to Render.
   - Open `frontend/.env` (or create it if it doesn't exist) and add:
     `VITE_API_URL=https://my-portfolio-backend-123.onrender.com/api` *(replace with your actual Render URL!)*
   - Push this change to GitHub.
2. **Create a Vercel Account:**
   - Go to [Vercel](https://vercel.com/) and sign up with GitHub.
3. **Import Project:**
   - Click **"Add New Project"** and import your GitHub repository.
4. **Configure the Frontend:**
   - **Framework Preset:** Vercel should auto-detect **Vite**.
   - **Root Directory:** Click "Edit" and select the `frontend` folder.
   - **Environment Variables:** Click to expand, and add:
     - Name: `VITE_API_URL`
     - Value: *(Your Render backend URL)*
5. **Deploy:** Click **"Deploy"**.
   - Wait 1-2 minutes. Vercel will build your React app and give you a public, live URL!
