# Grail Seeker Landing Page - Tech Stack & Architecture

## Overview
Professional landing page for Grail Seeker comic book discovery platform, designed for eBay Partner Network application and lead capture.

## Core Tech Stack

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Custom properties (CSS variables), Grid, Flexbox
- **Vanilla JavaScript** - Form validation, modal handling, smooth scrolling
- **Inter Font** - Google Fonts integration for professional typography

### Hosting & Deployment
- **Netlify** - Static site hosting with form handling
- **GitHub** - Version control and continuous deployment
- **Cloudflare** - DNS management and CDN

### Domain & SSL
- **Domain**: grailseeker.io (registered via Cloudflare Registrar)
- **SSL**: Automatic via Netlify + Cloudflare
- **CDN**: Cloudflare proxied traffic

## Architecture Decisions

### 1. Static Site Approach
**Decision**: Pure HTML/CSS/JS static site
**Rationale**:
- Fast loading for professional presentation
- Simple deployment and maintenance
- Cost-effective hosting
- No server-side dependencies needed for landing page

### 2. Netlify Forms vs Backend
**Decision**: Netlify Forms for lead capture
**Rationale**:
- Zero backend maintenance
- Built-in spam protection
- Direct integration with hosting
- Form submissions accessible via dashboard
- Sufficient for pre-launch lead collection

### 3. CSS Architecture
**Decision**: Custom CSS with CSS variables, no framework
**Rationale**:
- Full design control for professional appearance
- Minimal bundle size
- No framework learning curve
- Optimized for specific design requirements

### 4. JavaScript Approach
**Decision**: Vanilla JavaScript, no frameworks
**Rationale**:
- Simple functionality requirements
- Fast loading (no framework overhead)
- Easy maintenance and debugging
- Progressive enhancement approach

## File Structure

```
/Users/mahanarcher/dev/grail-seeker/landing-page/
├── public/                     # Deployed files
│   ├── index.html             # Main landing page
│   ├── success.html           # Form success page
│   ├── styles.css             # All styling
│   ├── script.js              # Form handling & interactions
│   ├── images/                # Logo and assets
│   ├── test-form.html         # Testing form (can be removed)
│   └── _redirects            # Netlify routing rules
├── netlify.toml               # Netlify build configuration
├── vercel.json               # Simplified Vercel config (legacy)
├── DEPLOYMENT.md             # Deployment instructions
└── TECH-STACK.md            # This documentation
```

## Key Features Implemented

### 1. Responsive Design
- Mobile-first CSS approach
- Flexible grid layouts
- Scalable typography with CSS clamp()
- Touch-friendly interface elements

### 2. Form Handling
- **Early Access Form**: Email capture with optional collecting focus
- **Contact Form**: Full business inquiry form with subject categorization
- Client-side validation with JavaScript
- Server-side processing via Netlify Forms
- Spam protection with honeypot fields
- Custom success page with return navigation

### 3. Professional Presentation
- Comic collector-specific terminology
- Professional color palette (blue/gray)
- Clean typography hierarchy
- Strategic use of white space
- Professional contact information display

### 4. SEO & Meta
- Complete Open Graph implementation
- Structured meta descriptions
- Semantic HTML markup
- Accessibility features (sr-only labels, proper form associations)

## Configuration Files

### netlify.toml
```toml
[build]
  publish = "public"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### vercel.json (Simplified)
```json
{}
```
*Note: Originally contained security headers but simplified due to conflicts*

### _redirects
```
/*    /index.html   200
```

## Form Configuration

### Netlify Forms Setup
- **Form Detection**: Enabled in Netlify dashboard
- **Attributes**: `data-netlify="true"` with hidden `form-name` fields
- **Spam Protection**: Built-in Netlify filtering
- **Success Handling**: Custom redirect to `/success.html`

### Form Fields
**Early Access Form**:
- Email (required)
- Collecting focus (optional text)

**Contact Form**:
- Name (required)
- Email (required)
- Subject (required dropdown)
- Message (required textarea)

## Deployment Pipeline

### Current Workflow
1. **Development**: Local HTML/CSS/JS editing
2. **Version Control**: Git commits to GitHub
3. **Auto-Deploy**: Netlify watches GitHub main branch
4. **DNS**: Cloudflare manages grailseeker.io routing
5. **SSL**: Automatic certificate management

### GitHub Repository
- **Owner**: RevoltinDevelopment
- **Repo**: grail-seeker-landing
- **Branch Strategy**: Direct commits to main (single developer)
- **Auto-deployment**: Netlify triggers on main branch pushes

## Performance Optimizations

### Loading Speed
- Minimized HTTP requests
- Optimized SVG assets
- Efficient CSS (no unused frameworks)
- Preconnected to Google Fonts
- Static asset caching

### SEO Optimizations
- Semantic HTML structure
- Meta tags for social sharing
- Fast loading times
- Mobile responsiveness
- Accessible markup

## Content Strategy

### Target Audience
- Serious comic collectors (10+ years experience)
- High-value purchasers ($500-$50,000+ transactions)
- Ages 35-65, technically capable but prefer simplicity
- Focus on CGC/CBCS graded comics and investment-grade issues

### Key Messaging
- Professional service positioning
- Honest, no-hype communication
- Specific to comic collector terminology
- Clear value proposition (stop searching, start finding)
- Timeline transparency (Q2 2026 beta launch)

## Integration Points

### Future eBay API Integration
- **eBay Browse API**: Real-time comic listing monitoring
- **Rate Limits**: 5,000 calls/day default (expandable)
- **Affiliate Program**: eBay Partner Network integration planned
- **Search Parameters**: Comic-specific filtering and grading

### Analytics Planning
- Google Analytics 4 setup prepared (placeholder in HTML)
- Netlify Analytics available
- Form submission tracking via Netlify dashboard

## Security Measures

### Current Implementation
- HTTPS via Netlify + Cloudflare
- Form spam protection via Netlify
- No sensitive data storage
- Secure headers via Cloudflare

### Planned Enhancements
- CSP headers for production
- Rate limiting for form submissions
- Enhanced spam filtering

## Troubleshooting History

### Major Issues Resolved
1. **Vercel Deployment Conflicts**: Simplified vercel.json to resolve routing errors
2. **Form Submission Failures**: Enabled Netlify form detection in dashboard
3. **Timeline Accuracy**: Updated all dates from 2025 to 2026
4. **Domain Configuration**: Cloudflare DNS setup with Netlify hosting

### Current Status
- ✅ Site loads properly at grailseeker.io
- ✅ Forms submit successfully with custom success page
- ✅ Mobile responsive design working
- ✅ Professional appearance suitable for eBay Partner Network
- ✅ Lead capture functional for pre-launch collection

## Future Considerations

### Immediate Next Steps
1. Complete eBay Partner Network application
2. Set up Google Analytics tracking
3. Monitor form submissions and user feedback

### Platform Evolution
1. **Backend Development**: When ready for beta launch
2. **User Dashboard**: Account management and search criteria
3. **Payment Integration**: Subscription billing system
4. **SMS Service**: Notification delivery system
5. **API Integrations**: eBay Browse API, Heritage Auctions, etc.

## Development Environment

### Local Development
- **OS**: macOS (Darwin 24.6.0)
- **Terminal**: Native macOS Terminal
- **Editor**: Claude Code integration
- **Git**: Command line Git with GitHub integration

### Tools Used
- **Vercel CLI**: Initially for deployment testing
- **Netlify**: Final hosting solution
- **GitHub CLI**: Repository management
- **Cloudflare Dashboard**: DNS and domain management

## Contact & Business Information

### Email Configuration
- **General**: hello@grailseeker.io
- **Partnerships**: partnerships@grailseeker.io
- **Press**: press@grailseeker.io

### Business Entity
- **Company**: Grail Seeker, LLC
- **Domain**: grailseeker.io
- **GitHub**: RevoltinDevelopment

---

**Documentation Date**: December 2024
**Current Status**: Production-ready landing page with functional lead capture
**Next Phase**: eBay Partner Network application submission

*This documentation captures the complete technical foundation for Grail Seeker's landing page and early-stage platform architecture.*