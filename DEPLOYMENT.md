# Deployment & Hosting Guide

Nishaniyaan is built for zero-maintenance, high-performance static hosting on GitHub Pages and Cloudflare CDN.

---

## 🌐 Deploying to GitHub Pages

1. **Initialize Git & Add Remote**:
   ```bash
   cd "d:\DRIVE (Ai) Agents\00 Projects\Nishaniyaan"
   git init
   git remote add origin https://github.com/amirhashmilive/nishaniyaan.git
   ```

2. **Commit & Push**:
   ```bash
   git add .
   git commit -m "feat: Complete Nishaniyaan v1.0 - Islamic knowledge archive with timeline, verification badges, search, and 10 core pages"
   git branch -M main
   git push -u origin main
   ```

3. **Configure GitHub Pages Settings**:
   - Navigate to GitHub Repository Settings -> Pages.
   - Set **Source** to `Deploy from a branch`.
   - Select `main` branch and `/ (root)` folder.
   - Click Save.

4. **Live Verification**:
   The live website will be available at:
   `https://amirhashmilive.github.io/nishaniyaan/`
