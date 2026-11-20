# Eisha Tur Razia — Portfolio Website

A fast, single-page portfolio website built with plain **HTML, CSS and JavaScript**.
No frameworks, no paid services, no build tools. You can host it free on Netlify or GitHub Pages.

---

## 1. What's in the folder

```
portfolio/
├── index.html          ← All the page content (text, sections, projects)
├── style.css           ← All the design (colours, fonts, spacing, layout)
├── script.js           ← Interactions (mobile menu, filters, pop-ups, contact form)
├── robots.txt          ← Tells Google it may index your site
├── sitemap.xml         ← Helps Google find your page
├── README.md           ← This guide
├── favicon/            ← The small "E" icon shown in browser tabs
└── images/
    ├── eisha-portrait.webp   ← Your photo (background removed)
    ├── og-image.png          ← Preview image shown when your link is shared
    ├── projects/             ← Case study images and screenshots
    └── credentials/          ← Certificates and awards (cleaned & cropped)
```

**Sections on the page (in order):** Navigation → Hero → About (with experience) → Services → Portfolio & case studies → Process → Tools → Why work with me → Credentials (education, certifications, awards) → Agriculture internships → Contact → Footer.

---

## 2. Open the website on your computer

1. Unzip the folder.
2. Double-click `index.html`. It opens in your browser. That's it.

> Tip: install the free editor **Visual Studio Code** (code.visualstudio.com) to edit files comfortably. Open the whole `portfolio` folder with *File → Open Folder*.

---

## 3. How to edit the website

| I want to change… | Open this file | What to look for |
|---|---|---|
| Any text (headings, paragraphs) | `index.html` | Search (Ctrl+F) for the words you see on the page |
| Colours | `style.css` | The `:root { … }` block at the very top. `--brand` is the pink, `--accent` is the yellow |
| Fonts | `index.html` + `style.css` | The Google Fonts `<link>` in the `<head>` and `--font` in `:root` |
| Your photo | `images/` | Replace `eisha-portrait.webp` with a new image using the **same name** |

Each section in `index.html` starts with a clear comment like `<!-- ============ 4. SERVICES ============ -->` so you can find it fast.

After saving a change, refresh the browser to see it.

---

## 4. Connect the contact form (free, with Formspree)

Right now the form checks the fields and, because it isn't connected yet, politely shows your email address instead of pretending to send. To make it really send messages to your inbox:

1. Go to **formspree.io** and create a free account (use eishaturrazia25@gmail.com).
2. Click **+ New Form**, name it "Portfolio contact", and choose your email.
3. Formspree shows an endpoint like `https://formspree.io/f/abcdwxyz`. Copy the last part (`abcdwxyz`).
4. Open `index.html`, search for `YOUR_FORM_ID`, and replace it with your code:
   `action="https://formspree.io/f/abcdwxyz"`
5. Save, publish (step 6), and send yourself a test message. Formspree asks you to confirm the first submission by email.

**Free plan limits:** Formspree's free tier allows 50 submissions per month, which is normally plenty for a portfolio. Check formspree.io/plans for current details.

*Alternative if you host on Netlify:* Netlify Forms is also free. Ask me and I'll switch the form over.

---

## 5. Replace or update placeholders and content

- **Website address:** after publishing, search all files for `https://your-site-url.com/` and replace it with your real address (in `index.html`, `robots.txt` and `sitemap.xml`). This is important for SEO and link previews.
- **Tools section:** only keep tools you have really used. Remove any `<li>` you haven't (e.g. ActiveCampaign) in the *TOOLS* section of `index.html`.
- **Case study text:** read each case study pop-up and adjust any detail that doesn't match exactly what you did.
- **Client names:** the case studies describe clients without naming them (e.g. "German tiling company"). Only add a client's name if they agree.

### Add a real portfolio project
1. In `index.html`, find `<!-- PROJECT 1 -->` and copy the whole `<article class="project-card"> … </article>` block.
2. Paste it after the last project and change: the image, title, text, and `data-category` (`meta`, `google`, `seo` or `email` — this powers the filter buttons).
3. Change the badge: `badge-real` + "Client project" for client work, or `badge-demo` + "Strategy blueprint" for a campaign plan.
4. Copy one `<dialog class="case" …>` block (the pop-up), give it a new `id` (e.g. `case-google-real`), and set `data-open="case-google-real"` on both buttons in your new card.
5. Put the project images in `images/projects/`.

**When you complete a Google Ads or Email client project,** replace the matching strategy blueprint with it rather than adding a sixth card.

### Add another agriculture internship
In the *AGRICULTURE INTERNSHIPS* section, copy the `<article class="agri-card"> … </article>` block and paste it below; then edit the dates and text.

### Add a new certificate
Copy one `<article class="cert-card">` block, put the image in `images/credentials/`, and update the image path in **both** `src="…"` and `data-lightbox="…"`.

> Image tip: before adding photos, shrink them at **squoosh.app** (free) — choose WebP, quality ~80, width up to 1400px. Small images = fast website.

---

## 6. Publish your website for free

### Option A — Netlify (easiest, drag & drop)
1. Go to **app.netlify.com** and sign up free (you can use your Google account).
2. Go to **Sites → Add new site → Deploy manually**.
3. Drag the whole `portfolio` **folder** onto the upload box.
4. In about 30 seconds you get a live link like `random-name-123.netlify.app`.
5. Click **Site configuration → Change site name** and choose something like `eisha-tur-razia` → your site becomes `eisha-tur-razia.netlify.app` (if the name is free).
6. To update later: open your site in Netlify → **Deploys** → drag the updated folder in again.

### Option B — GitHub Pages
1. Create a free account at **github.com**.
2. Click **+ → New repository**. Name it `portfolio`, set it to **Public**, and click **Create repository**.
3. Click **uploading an existing file**, drag in **everything inside** the portfolio folder (index.html must be at the top level, not inside another folder), then click **Commit changes**.
4. Go to **Settings → Pages**. Under *Branch*, choose `main` and `/ (root)`, then **Save**.
5. After 1–2 minutes your site is live at `https://YOUR-USERNAME.github.io/portfolio/`.

After publishing, do step 5 above (replace `https://your-site-url.com/`), then re-upload.

---

## 7. After going live (quick SEO checklist)

1. Add your site to **Google Search Console** (search.google.com/search-console) → *URL prefix* → verify → submit `sitemap.xml`.
2. Put the website link in your **LinkedIn** profile (Contact info + Featured section).
3. Share the link once on LinkedIn — the preview image (`og-image.png`) will appear automatically.
4. Test speed at **pagespeed.web.dev** and the share preview at **opengraph.xyz**.

---

## 8. Connect a custom domain later (optional)

1. Buy a domain (e.g. `eishaturrazia.com`) from a registrar such as Namecheap, Cloudflare or GoDaddy (about USD 10–15 per year).
2. **Netlify:** *Domain management → Add a domain* and follow the DNS instructions shown (or point your domain's nameservers to Netlify). HTTPS is set up for free.
   **GitHub Pages:** *Settings → Pages → Custom domain*, type your domain, then add the DNS records GitHub shows you at your registrar. Tick **Enforce HTTPS** once available.
3. Replace `https://your-site-url.com/` everywhere with your new domain.

---

## 9. Privacy notes

- On the NAVTTC certificate, the **CNIC number and QR code are masked**. Never upload documents showing your CNIC, home address or salary.
- The internship offer letter is **not** included on the site, and no stipend amount is mentioned anywhere.

## 10. Honesty notes

- Meta Ads and SEO figures come from your Meta Ads Manager export and Google Search Console screenshots.
- The Google Ads and Email Marketing projects are labelled **Strategy blueprint**. They show your planning process and do not claim any results.
