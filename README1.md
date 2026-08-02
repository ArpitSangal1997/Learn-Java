# GitHub Pages Deployment Guide

This file explains how to deploy the site to GitHub Pages from this repository.

## 1. Confirm repository branch and site files
1. Make sure your project files are in the root of the repository.
2. Confirm `index.html` is present in the repo root.
3. Verify that `main` is the branch you want to publish.

## 2. Remove any custom domain if you are not using one
If you do not own a custom domain, remove the `CNAME` file from the repo root.

### Remove custom domain
```bash
git rm --cached CNAME
rm CNAME
git commit -m "Remove custom domain CNAME file"
```

## 3. Push your changes to GitHub
1. Fetch and rebase remote updates if your branch is behind:
```bash
git pull --rebase origin main
```
2. Push local commits to GitHub:
```bash
git push origin main
```

## 4. Configure GitHub Pages in repository settings
1. Go to the GitHub repository page.
2. Open `Settings` → `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Set the branch to `main` and folder to `/ (root)`.
5. Save changes.

## 5. Confirm deployment
1. After pushing, refresh the Pages settings page.
2. Look for the published site URL under `Custom domain` or `GitHub Pages`.
3. The default site URL should be:
   - `https://arpitsangal1997.github.io/Learn-Java/`

## 6. If using a custom domain
Only use a custom domain if you own it and can edit DNS records.

### Required DNS records for root domain
If you do own a domain, set these A records at the DNS provider:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### Optional IPv6 records
- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

## 7. Enable HTTPS
Once DNS is properly configured, GitHub Pages will validate the domain.
If HTTPS is available, check the `Enforce HTTPS` box in Pages settings.

## 8. Troubleshooting
- If the site is 404, confirm `index.html` is in the root.
- If `Enforce HTTPS` is unavailable, verify the domain DNS records are correct.
- If the site does not update, wait a few minutes and refresh the Pages settings page.
