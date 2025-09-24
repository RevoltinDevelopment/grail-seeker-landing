# Grail Seeker Landing Page

Professional landing page for Grail Seeker - a comic book discovery platform for serious collectors.

## Overview

This landing page serves as the initial web presence for Grail Seeker, designed to:
- Support eBay Partner Network application
- Capture early access signups from comic collectors
- Establish professional credibility and brand positioning
- Provide contact points for partnerships and business development

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Email Capture**: Early access signup with Netlify Forms integration
- **Contact Forms**: Business inquiry and partnership contact functionality
- **Professional Styling**: Clean, trustworthy design appealing to serious collectors
- **SEO Optimized**: Meta tags, structured data, and accessibility compliance
- **Analytics Ready**: Google Analytics 4 integration prepared
- **Performance**: Fast loading, optimized for Core Web Vitals

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Hosting**: Vercel (free tier)
- **Domain**: grailseeker.io (Cloudflare Registrar)
- **Forms**: Netlify Forms for email capture
- **Analytics**: Google Analytics 4 (to be configured)

## File Structure

```
landing-page/
├── index.html          # Main HTML structure
├── styles.css          # Professional CSS styling
├── script.js           # Interactive functionality
├── vercel.json         # Vercel deployment configuration
├── package.json        # Project metadata and scripts
├── README.md           # This file
└── images/             # Logo and visual assets (to be added)
    ├── logo.svg        # Grail Seeker logo
    └── favicon.svg     # Site favicon
```

## Local Development

1. Open `index.html` in a web browser, or
2. Run a local server:
   ```bash
   python -m http.server 3000
   # Then visit http://localhost:3000
   ```

## Deployment

### To Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow prompts to link to grailseeker.io domain

### Domain Configuration

The site is configured for `grailseeker.io` with Cloudflare DNS:

1. **Cloudflare DNS Settings**:
   - CNAME: `grailseeker.io` → `[vercel-deployment-url]`
   - SSL/TLS: Full (strict)

2. **Vercel Domain Settings**:
   - Add custom domain: `grailseeker.io`
   - Verify DNS configuration

## Content Strategy

### Target Audience
- **Primary**: eBay Partner Network reviewers
- **Secondary**: Serious comic collectors seeking grail books
- **Tertiary**: Potential business partners and press

### Key Messaging
- Professional SMS notification service
- Built for serious collectors with high-value focus
- Comprehensive marketplace monitoring (eBay emphasis)
- Q1 2025 beta launch timeline

### SEO Keywords
- comic book collection
- grail comics
- eBay alerts
- comic notifications
- CGC comics
- comic collecting tools

## Form Integration

### Early Access Signup
- **Service**: Netlify Forms
- **Fields**: Email (required), Collecting Focus (optional)
- **Success**: Modal confirmation + email to waitlist
- **Analytics**: Track signup events

### Contact Form
- **Service**: Netlify Forms
- **Fields**: Name, Email, Subject, Message
- **Purpose**: Business inquiries, partnerships, press
- **Response**: 24-hour response commitment

## Analytics Events

The following events are tracked for optimization:

- `page_view` - Landing page visits
- `early_access_signup` - Email captures
- `contact_form_submit` - Business inquiries
- `scroll_depth` - User engagement (25%, 50%, 75%, 100%)
- `external_link_click` - Outbound link tracking
- `time_on_page` - Session duration

## Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Mobile PageSpeed**: 90+
- **Desktop PageSpeed**: 95+

## Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios
- Semantic HTML structure
- Alt text for all images

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Business Context

This landing page supports Grail Seeker's eBay Partner Network application by:

1. **Demonstrating Professional Intent**: Clean, business-focused design
2. **Showing Market Understanding**: Comic collector-specific language and features
3. **Traffic Generation Value**: Email capture proves ability to drive qualified users
4. **Partnership Readiness**: Clear contact points for business development

## Next Steps

1. **Add Visual Assets**: Logo and favicon creation
2. **Configure Analytics**: Google Analytics 4 setup
3. **Test Forms**: Verify Netlify Forms integration
4. **SEO Optimization**: Submit sitemap, configure Search Console
5. **Performance Testing**: Core Web Vitals validation
6. **eBay Application**: Submit Partner Network application with live URL

## Contact

- **Business Inquiries**: partnerships@grailseeker.io
- **Technical Issues**: hello@grailseeker.io
- **Press/Media**: press@grailseeker.io

---

*This landing page serves as the foundation for Grail Seeker's web presence and eBay Partner Network integration strategy.*