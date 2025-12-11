# Vercel Deployment Fix Guide

## Problem
Vercel is deploying commit `2c892c7` (old) instead of the latest commits, causing the `builds` configuration warning.

## Root Cause
Your repository has this structure:
```
portfolio_ReactJs/          ← Repository root
├── portfolio/              ← React app directory
│   ├── vercel.json        ← Updated config (correct)
│   ├── package.json
│   └── ...
└── package.json           ← Root level (different project)
```

Vercel needs to be configured to use `portfolio/` as the root directory.

## Solution Steps

### 1. Check Vercel Project Settings

Go to your Vercel dashboard → Your Project → Settings → General:

**IMPORTANT SETTINGS:**
- ✅ **Root Directory**: Should be set to `portfolio`
- ✅ **Production Branch**: Should be set to `main`
- ✅ **Framework Preset**: `Create React App` (or auto-detect)

### 2. Verify Deployment Branch

1. Go to **Deployments** tab in Vercel
2. Check which commit is currently deployed
3. If it shows `2c892c7`, click **⋮** (three dots) → **Redeploy**
4. Make sure you select the **latest commit** (`a9a9175` or newer)

### 3. Force a Fresh Deployment

If automatic deployments aren't working:

1. Go to **Deployments** → Click **Create Deployment**
2. Select:
   - **Branch**: `main`
   - **Override**: Leave empty (or set to latest commit hash)
3. Click **Deploy**

### 4. Check GitHub Integration

1. Go to **Settings** → **Git**
2. Verify:
   - Repository is connected correctly
   - Production Branch: `main`
   - Root Directory: `portfolio`

### 5. Clear Build Cache (if needed)

Sometimes old configurations are cached:

1. Go to **Settings** → **Build & Development Settings**
2. Check if there are any overrides
3. The `vercel.json` in `portfolio/` should take precedence

## Verification

After fixing settings, your next deployment should:
- ✅ Deploy from the latest commit (not `2c892c7`)
- ✅ Use the updated `vercel.json` (no `builds` array)
- ✅ Show no warning about deprecated `builds` configuration

## Current vercel.json Configuration

The `portfolio/vercel.json` is correctly configured with:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "rewrites": [...]
}
```

This is the modern format that Vercel recommends (no `builds` array).

## Still Having Issues?

If Vercel still deploys the old commit after fixing settings:

1. **Check for manual deployments** - Someone might be triggering deployments from old commits
2. **Verify webhook** - GitHub webhook should trigger on push to `main`
3. **Check branch protection** - Ensure `main` branch is not restricted
4. **Contact Vercel support** - If nothing works, there might be a project configuration issue

---

**Note**: The npm deprecation warnings (w3c-hr-time, stable, etc.) are harmless and come from `react-scripts` dependencies. They won't affect your build.

