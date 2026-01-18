
# 🚀 How to Deploy InfosSewa to Netlify

This website is a modern, high-performance static portal built with React, TypeScript, and Tailwind CSS. It includes a built-in CMS (Decap CMS) for easy content management.

### Step 1: Upload to GitHub
1. Create a new repository on GitHub named `infossewa`.
2. Push all the generated files to this repository.

### Step 2: Connect to Netlify
1. Go to [Netlify.com](https://www.netlify.com) and sign up/log in.
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Select **GitHub** and choose your `infossewa` repository.
4. Set the following Build Settings:
   - **Build Command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy Site"**.

### Step 3: Enable Admin Panel (CMS)
1. In your Netlify Site Settings, go to **Identity**.
2. Click **Enable Identity**.
3. Scroll down to **Services** -> **Git Gateway** and click **Enable Git Gateway**.
4. Go to **Settings** -> **Identity** -> **Registration** and change "Public" to "Invite Only" (so random people can't register as admins).
5. Invite yourself via email.

### Step 4: Accessing the Admin
1. Once deployed, go to `your-site-url.netlify.app/admin/`.
2. Log in with the email you invited.
3. You can now create notices, upload PDFs, and write articles.

### 🛡️ PDF Protection Note
The website uses a custom PDF viewer that disables toolbars and common download triggers. Additionally, right-clicking on the viewer is disabled. While tech-savvy users can always find files in the network tab, this stops 99% of normal users from easily copying or downloading your content.
