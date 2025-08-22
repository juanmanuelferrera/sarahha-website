# SARAH | HA - Cloudflare Pages Deployment Guide

## Prerequisites
- Cloudflare account (free tier available)
- Domain name (optional, can use provided subdomain)
- Website files ready for upload

## Files Required for Deployment

### Core Website Files
- `index.html` - Main website
- `styles.css` - Complete styling
- `script.js` - Interactive functionality
- `test.html` - Test page (optional)

### Documentation (Optional)
- `README.md` - Project documentation
- `CHAT_SETUP.md` - Tawk.to configuration
- `CLOUDFLARE_DEPLOYMENT.md` - This file

## Step-by-Step Deployment

### 1. Create Cloudflare Pages Project

1. **Login to Cloudflare**: Go to https://dash.cloudflare.com
2. **Navigate to Pages**: Click "Pages" in the left sidebar
3. **Create New Project**: Click "Create a project"
4. **Choose Upload Method**: Select "Upload assets" (for direct upload)

### 2. Project Configuration

**Project Name**: `sarahha-jewelry` (or your preferred name)
**Production Branch**: `main` (if using Git) or direct upload

### 3. Upload Files

#### Option A: Direct Upload
1. Create a ZIP file with these files:
   - index.html
   - styles.css
   - script.js
2. Upload the ZIP file to Cloudflare Pages
3. Deploy immediately

#### Option B: Git Integration (Recommended)
1. Create a GitHub repository
2. Upload all files to the repository
3. Connect Cloudflare Pages to your GitHub repo
4. Set build configuration:
   - **Framework preset**: None (static site)
   - **Build command**: (leave empty)
   - **Build output directory**: / (root)

### 4. Custom Domain Configuration

If you want to use www.sarahha.com:

1. **Add Custom Domain**: In Pages project settings, go to "Custom domains"
2. **Add Domain**: Enter `sarahha.com` and `www.sarahha.com`
3. **DNS Configuration**: Add these records in your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: sarahha-jewelry.pages.dev (your Cloudflare Pages URL)
   
   Type: A
   Name: @
   Value: [Cloudflare will provide IP addresses]
   ```

### 5. SSL Configuration

Cloudflare automatically provides SSL certificates. Your site will be available at:
- `https://sarahha-jewelry.pages.dev` (automatic subdomain)
- `https://www.sarahha.com` (after custom domain setup)

## Environment Variables (if needed)

For future enhancements, you can add environment variables in Pages settings:
- `STRIPE_PUBLISHABLE_KEY` - For payment processing
- `TAWK_TO_PROPERTY_ID` - For chat widget

## Build Settings

For this static site:
- **Framework preset**: None
- **Build command**: (empty)
- **Build output directory**: /
- **Root directory**: /

## Performance Optimizations

Cloudflare Pages automatically provides:
- Global CDN distribution
- Automatic minification
- Image optimization
- Brotli compression
- HTTP/2 support

## Post-Deployment Checklist

### Immediate Tests
1. ✅ Website loads properly
2. ✅ All CSS styles applied
3. ✅ JavaScript functionality works
4. ✅ Mobile responsive design
5. ✅ Chat widget loads (Tawk.to)
6. ✅ Navigation menus function
7. ✅ Shopping cart works
8. ✅ Product modals open

### Functionality Tests
1. ✅ Search functionality
2. ✅ Product filtering
3. ✅ Cart persistence (localStorage)
4. ✅ Newsletter signup
5. ✅ Contact forms
6. ✅ Testimonial carousel
7. ✅ Smooth scrolling

### Performance Tests
1. ✅ Page load speed (< 3 seconds)
2. ✅ Mobile performance
3. ✅ Cross-browser compatibility
4. ✅ SSL certificate active

## Troubleshooting

### Common Issues

**CSS Not Loading**
- Check file paths in index.html
- Ensure styles.css is in root directory
- Verify MIME types in _headers file if needed

**JavaScript Errors**
- Check browser console for errors
- Verify script.js file is accessible
- Ensure external libraries (Font Awesome) load

**Chat Widget Issues**
- Verify Tawk.to script in index.html
- Check property ID configuration
- Test in incognito mode

### _headers File (Optional)

Create `_headers` file for optimization:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

/*.jpg
  Cache-Control: public, max-age=31536000, immutable
```

## Monitoring & Analytics

### Built-in Analytics
Cloudflare Pages provides:
- Visitor statistics
- Performance metrics
- Error tracking
- Geographic distribution

### Additional Analytics (Optional)
- Google Analytics 4
- Facebook Pixel
- Hotjar for user behavior

## Next Steps After Deployment

1. **Test All Functionality**: Complete QA testing
2. **Configure Stripe**: Set up real payment links
3. **Add Real Product Images**: Replace placeholder icons
4. **SEO Optimization**: Submit to Google Search Console
5. **Marketing Integration**: Set up social media links
6. **Customer Testing**: Get feedback from real users

## Support Resources

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **Cloudflare Community**: https://community.cloudflare.com/
- **Status Page**: https://www.cloudflarestatus.com/

## Backup Strategy

Always maintain:
1. Local copy of all files
2. Git repository backup
3. Database backup (if using backend)
4. Regular exports of Cloudflare settings

---

**🚀 Your SARAH | HA website will be live at: `https://your-project-name.pages.dev`**

**📧 For technical support: Contact your development team**

**⚡ Powered by Cloudflare Pages - Fast, Secure, Reliable**