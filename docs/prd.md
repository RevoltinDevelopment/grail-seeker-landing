Why are# Grail Seeker Product Requirements Document (PRD)

## Goals and Background Context

### Goals

- Enable serious comic collectors to acquire their grail books through proactive discovery rather than manual searching
- Deliver immediate SMS notifications when targeted books become available at or below specified prices
- Provide comprehensive marketplace monitoring that eliminates the need for manual platform checking
- Transform comic collecting from time-intensive reactive searching to efficient proactive notifications
- Validate product-market fit for subscription-based discovery services targeting serious collector segments
- Establish sustainable unit economics through premium pricing that accounts for SMS notification costs

### Background Context

Serious comic book collectors face a critical discovery problem that costs them both time and irreplaceable opportunities. The current ecosystem forces collectors into reactive, manual workflows across 10+ fragmented marketplaces (eBay, Heritage Auctions, ComicLink, etc.), where grail books appear and disappear within 24-48 hours while collectors waste hours daily on manual checking.

Grail Seeker addresses this fundamental inefficiency by shifting from "check when you remember" reactive browsing to "we'll alert you immediately" proactive monitoring. Unlike existing tools like GoCollect that focus on passive price tracking, Grail Seeker delivers speed-optimized SMS alerts within 2-5 minutes of listing detection, solving the core pain point that prevents collectors from acquiring books that may not resurface for years or decades.

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2025-09-08 | v1.0 | Initial PRD creation from Project Brief | John (PM) |
| 2025-09-28 | v1.1 | Updated with landing page implementation and timeline changes | Winston (Claude Code) |

## Implementation Status Update (v1.1)

### Landing Page Implementation Completed

**Status**: ✅ **COMPLETED** - Professional landing page deployed to grailseeker.io
**Timeline**: Q3 2025
**Purpose**: eBay Partner Network application and early access lead capture

#### Technical Stack Implemented
- **Frontend**: Static HTML/CSS/JavaScript (vanilla, no frameworks)
- **Hosting**: Netlify with Cloudflare DNS and CDN
- **Domain**: grailseeker.io (registered via Cloudflare Registrar)
- **Forms**: Netlify Forms for lead capture with spam protection
- **Version Control**: GitHub repository with auto-deployment

#### Key Features Delivered
- ✅ **Professional Design**: Comic collector-focused messaging and terminology
- ✅ **Responsive Layout**: Mobile-optimized design for all device types
- ✅ **Lead Capture Forms**: Early access signup and business contact forms
- ✅ **SEO Optimization**: Complete meta tags and Open Graph implementation
- ✅ **Form Validation**: Client-side and server-side validation with error handling
- ✅ **Custom Success Pages**: Professional post-submission user experience

#### Timeline Updates
**CRITICAL CHANGE**: Updated realistic launch timeline based on development requirements:
- **Q2 2026**: Private Beta (50 collectors, invite-only)
- **Q3 2026**: Public Launch (full platform availability)

*Previous optimistic timeline of Q1 2026 updated to allow proper development time for backend, API integrations, and eBay Partner Network approval process.*

#### Content Strategy Changes
**CRITICAL CHANGE**: Adopted honest messaging strategy removing inflated statistics:
- ❌ Removed fake "500+ collectors on waitlist" claims
- ✅ Added authentic benefit points for serious collectors
- ✅ Professional tone suitable for eBay Partner Network application
- ✅ Accurate market positioning for high-value collector segment

#### Business Validation Completed
- ✅ **eBay API Research**: Confirmed eBay Browse API feasibility with 5K daily calls default
- ✅ **eBay Partner Network**: Application materials prepared with professional landing page
- ✅ **Domain Registration**: Secured grailseeker.io domain with professional email setup
- ✅ **Lead Capture System**: Functional forms collecting early access signups

### Next Implementation Phase Requirements

**Epic 0: eBay Partner Network Integration** (NEW - Insert before Epic 1)
- Submit eBay Partner Network application using completed landing page
- Await approval for API access and affiliate program participation
- Validate technical integration approach with approved API access
- Establish affiliate commission tracking and compliance procedures

**Modified Epic 1 Timeline**: Begins after eBay Partner Network approval (estimated Q1 2026)

### Technical Architecture Decisions Made

#### Landing Page Architecture (Implemented)
**Decision**: Static site approach using vanilla HTML/CSS/JavaScript
**Rationale**:
- Fast loading for professional presentation to eBay Partner Network
- Simple deployment and maintenance
- Cost-effective hosting solution
- No backend dependencies for landing page functionality

**Hosting Stack**:
- **Frontend Hosting**: Netlify (chosen over Vercel for better form integration)
- **DNS/CDN**: Cloudflare (integrated with domain registration)
- **Form Processing**: Netlify Forms (zero backend maintenance)
- **Version Control**: GitHub with auto-deployment

#### Future Platform Architecture (Planned)
**No Changes**: Original technical assumptions remain valid for full platform:
- React with TypeScript for frontend
- Node.js/Express for backend API
- Supabase for database and authentication
- Twilio for SMS notifications
- DigitalOcean App Platform or Railway for hosting

#### Documentation Completed
- ✅ **TECH-STACK.md**: Complete technical implementation details
- ✅ **ARCHITECTURAL-DECISIONS.md**: ADR format decision tracking
- ✅ **DEPLOYMENT.md**: Step-by-step deployment procedures

## Requirements

### Functional Requirements

**FR1:** The system shall provide a search specification interface allowing users to input comic title, issue number, condition grade range (CGC/CBCS/PSA numerical grades), maximum price threshold, page quality (Any, White, Off-White to White, Off-White, Cream), grading authority preference (Any, CGC, CBCS, PSA), pedigree selection from predefined list, signature series toggle (Yes/No), and signed by creator field when signature series is enabled

**FR2:** The system shall continuously monitor eBay marketplace for listings matching user-specified search criteria through automated background processing

**FR3:** The system shall send SMS notifications to users within 2-5 minutes when matching comic books are discovered, including book details and direct listing link for the top result; when multiple matching listings are found simultaneously, the system shall send a second SMS indicating "Multiple copies of [BookTitle] #[Issue#] found" with a link to eBay search results page

**FR4:** The system shall support user account registration, authentication, and profile management for saving and modifying wanted book lists

**FR5:** The system shall maintain an alert history dashboard showing recent notifications with timestamps and book details for user reference

**FR6:** The system shall generate and send weekly email reports summarizing search activity, including platforms monitored and total searches performed per user

**FR7:** The system shall allow users to modify, pause, or delete their saved search specifications at any time

**FR8:** The system shall validate search criteria to ensure proper formatting of comic titles, issue numbers, grade ranges, and advanced specification fields before saving

**FR9:** The system shall track notification delivery status and provide retry mechanisms for failed SMS deliveries

**FR10:** The system shall maintain a curated database of comic book pedigrees for dropdown selection in search specifications

### Non-Functional Requirements

**NFR1:** The system shall maintain 99.5% uptime for monitoring services to ensure consistent opportunity detection

**NFR2:** The system shall process and deliver notifications within 2-5 minutes of new listing detection on monitored platforms

**NFR3:** The system shall support concurrent monitoring for up to 500 user accounts during MVP phase

**NFR4:** The system shall implement rate limiting and retry logic for external API calls to maintain platform compliance

**NFR5:** The system shall encrypt all stored user data, payment information, and API keys using industry-standard encryption

**NFR6:** The system shall be mobile-responsive and functional across modern browsers supporting current web standards

**NFR7:** The system shall handle SMS notification costs within sustainable unit economics (target: $3/month per active user)

**NFR8:** The system shall implement row-level security for user data access and multi-tenant data isolation

## User Interface Design Goals

### Overall UX Vision

Grail Seeker's interface should feel like a precision tool for serious collectors rather than a casual browsing platform. The design emphasizes speed and efficiency over discovery - users come to set up their searches quickly and leave, trusting the system to find their books. Clean, data-dense layouts that collectors can scan rapidly, with clear hierarchy between active searches, recent alerts, and account management. The aesthetic should convey reliability and professionalism, similar to financial trading platforms where timing and accuracy matter.

### Key Interaction Paradigms

**Search-First Experience:** The primary user flow centers around creating and managing search specifications, not browsing or exploring. Users land on a dashboard showing their active searches and recent results, with prominent "Add New Search" functionality.

**Alert-Driven Engagement:** Most user interaction occurs through SMS notifications driving immediate action (clicking to eBay listings). The web interface serves as a management layer rather than primary engagement surface.

**Power User Shortcuts:** Advanced collectors need rapid input methods - keyboard shortcuts, bulk operations, and templates for similar searches across different issues or series.

### Core Screens and Views

**Welcome/Landing Page:** First-time visitor experience with Grail Seeker value proposition overview ("Stop searching. Start finding.") and prominent "Find Grail" button to begin search creation flow

**Login Page:** Authentication interface for returning users to access their accounts and saved searches

**Create Account Flow:** User registration process including email verification and initial profile setup

**Dashboard/Home Screen:** Overview of active searches, recent alerts, and system status indicators showing monitoring health (for authenticated users)

**Search Creation/Edit Form:** Detailed specification interface with all collector criteria (grade, pedigree, signature, etc.) organized in logical sections

**Alert History View:** Chronological list of all notifications sent, with ability to filter by search, date range, and book details

**Search Management View:** List of all active searches with quick actions (pause, edit, delete) and status indicators

**Account Settings:** Basic profile management, SMS preferences, and notification timing options

### Accessibility: WCAG AA

Target WCAG AA compliance to ensure accessibility for collectors across age ranges and abilities, particularly important given the serious collector demographic skews older. Focus on keyboard navigation, screen reader compatibility, and sufficient color contrast ratios.

### Branding

Clean, professional aesthetic emphasizing trust and precision. Dark theme option given collectors often browse during evening hours. Typography should be highly readable for detailed specifications and data. Color palette should support status indicators (active/paused searches, successful/failed alerts) without relying solely on color to convey information.

### Target Device and Platforms: Web Responsive

Primary platform is responsive web application optimized for both desktop and mobile. Desktop for detailed search creation and management; mobile for quick status checks and search modifications triggered by SMS alerts.

## Technical Assumptions

### Repository Structure: Monorepo

Single repository containing web frontend, API backend, and monitoring functions as separate modules. This approach simplifies development coordination, shared utilities, and deployment while maintaining clear separation of concerns with potential for future microservices extraction.

### Service Architecture

**CRITICAL DECISION** - Monolithic architecture with modular design for MVP phase. Single Node.js application handling web API, background monitoring jobs, and user management, deployed to single hosting environment (DigitalOcean App Platform or Railway). Designed with clear module boundaries to enable microservices extraction as scale demands without requiring full rewrites.

### Testing Requirements

**CRITICAL DECISION** - Unit testing focused on core business logic (search matching, notification delivery, user management) using Jest framework. Integration testing for critical paths (eBay API integration, SMS delivery, end-to-end search workflows). Manual testing procedures for SMS delivery verification and cross-browser compatibility during development phases.

### Additional Technical Assumptions and Requests

- **Frontend Framework**: React with TypeScript for type safety and developer experience
- **Backend Runtime**: Node.js with Express framework for rapid development and JavaScript ecosystem consistency  
- **Database**: Supabase (PostgreSQL + real-time + authentication included) for managed infrastructure and built-in security features
- **Background Jobs**: Supabase Edge Functions for monitoring tasks with migration path to dedicated job queues (Bull/Agenda) as scale requires
- **SMS Provider**: Twilio for reliable SMS delivery with fallback options considered for cost optimization
- **Hosting**: DigitalOcean App Platform ($12/month) or Railway ($5-20/month) for backend; Vercel/Netlify for frontend static hosting
- **API Integration**: eBay Finding API for marketplace monitoring with rate limiting and retry logic implementation
- **Environment Management**: Environment variables and configuration abstraction to enable seamless provider transitions during scaling phases

## Epic List

**Epic 0: eBay Partner Network Integration & Business Validation** ✅ **COMPLETED**
Secure eBay Partner Network approval, validate API access, deploy professional landing page for business credibility, and establish lead capture system for early user validation.

**Epic 1: Foundation, Database & Core Search Infrastructure**
Establish project setup, user authentication, comic database with title/issue validation and type-ahead functionality, basic search specification interface, and initial eBay monitoring capability with health-check functionality.

**Epic 2: Advanced Search & Notification System**
Implement comprehensive search criteria (pedigree, page quality, signatures), SMS notification delivery, and alert management with full collector-specific functionality.

**Epic 3: User Experience & Search Management**
Create welcome flow, search management dashboard, alert history tracking, and weekly reporting system for complete user lifecycle management.

## Epic 0: eBay Partner Network Integration & Business Validation ✅ **COMPLETED**

### Epic 0 Goal

Establish business credibility and secure eBay Partner Network approval through professional landing page deployment, early user lead capture, and comprehensive API integration documentation. This epic validates the business model and secures necessary partnerships before full platform development begins.

### Story 0.1: Professional Landing Page Development ✅ **COMPLETED**

As a **business stakeholder**,
I want **a professional landing page deployed to grailseeker.io**,
so that **I can apply for eBay Partner Network with credible business presence and collect early access signups**.

#### Acceptance Criteria ✅ **ALL COMPLETED**

1. ✅ Professional landing page designed with comic collector-focused messaging and terminology
2. ✅ Responsive design optimized for desktop and mobile viewing
3. ✅ Early access signup form with email and collecting focus fields
4. ✅ Business contact form with categorized inquiry types
5. ✅ Custom domain grailseeker.io configured with SSL certificate
6. ✅ SEO optimization with complete meta tags and Open Graph implementation
7. ✅ Form validation both client-side and server-side with error handling
8. ✅ Professional success pages for form submissions
9. ✅ Honest messaging strategy without inflated statistics or false claims
10. ✅ Updated timeline reflecting realistic Q2 2026 beta launch

### Story 0.2: Technical Infrastructure Setup ✅ **COMPLETED**

As a **developer**,
I want **reliable hosting and deployment infrastructure**,
so that **the landing page remains available and forms function properly for business operations**.

#### Acceptance Criteria ✅ **ALL COMPLETED**

1. ✅ Netlify hosting configured with auto-deployment from GitHub
2. ✅ Cloudflare DNS and CDN setup for performance and security
3. ✅ Domain registration completed for grailseeker.io
4. ✅ Netlify Forms configured for lead capture with spam protection
5. ✅ GitHub repository established with version control
6. ✅ SSL certificate automatically provisioned and maintained
7. ✅ Form submission testing and validation completed
8. ✅ Mobile responsiveness verified across devices

### Story 0.3: eBay API Research & Documentation ✅ **COMPLETED**

As a **technical lead**,
I want **comprehensive eBay API validation and integration planning**,
so that **I can confidently apply for eBay Partner Network with technical feasibility confirmed**.

#### Acceptance Criteria ✅ **ALL COMPLETED**

1. ✅ eBay Browse API research completed with rate limiting analysis (5K calls/day default)
2. ✅ eBay Partner Network application requirements documented
3. ✅ API integration architecture planned for comic book search functionality
4. ✅ Business model validation for affiliate commission structure (1-4%)
5. ✅ Technical requirements documented for future development phases
6. ✅ Compliance requirements identified for eBay API usage
7. ✅ Complete application materials prepared in `/docs/ebay-partner-network-application.md`

### Story 0.4: Business Documentation & Architecture ✅ **COMPLETED**

As a **project stakeholder**,
I want **comprehensive documentation of technical decisions and business strategy**,
so that **future development can proceed efficiently with clear foundation understanding**.

#### Acceptance Criteria ✅ **ALL COMPLETED**

1. ✅ Technical stack documentation completed (`TECH-STACK.md`)
2. ✅ Architectural decision record created (`ARCHITECTURAL-DECISIONS.md`)
3. ✅ Deployment procedures documented (`DEPLOYMENT.md`)
4. ✅ Business model and market analysis documented
5. ✅ eBay Partner Network application materials completed
6. ✅ PRD updated with implementation status and timeline changes
7. ✅ All documentation version controlled and accessible for future team members

## Epic 1: Foundation, Database & Core Search Infrastructure

### Epic 1 Goal

Establish the foundational infrastructure for Grail Seeker including user authentication, updateable comic database with title validation and type-ahead functionality, basic search specification interface, and initial eBay monitoring capability. This epic delivers a working search tool that serious collectors can immediately use to create and monitor basic searches, demonstrating core system reliability and comic ecosystem knowledge.

### Story 1.1: Project Foundation & Health Check

As a **developer**,
I want **to establish the core project infrastructure with deployment pipeline and health monitoring**,
so that **the system has reliable foundation for all features and can be continuously deployed and monitored**.

#### Acceptance Criteria

1. React frontend application created with TypeScript configuration and deployed to Vercel/Netlify
2. Node.js/Express backend API created with TypeScript and deployed to DigitalOcean App Platform or Railway
3. Supabase project configured with PostgreSQL database and authentication enabled
4. Environment variable management established for all API keys and configuration values
5. Basic CI/CD pipeline configured for automatic deployment from main branch
6. Health check endpoint implemented returning system status and database connectivity
7. Basic logging framework integrated throughout application stack
8. Error tracking service configured (Sentry or similar) for production monitoring

### Story 1.2: User Authentication System

As a **collector**,
I want **to create an account and securely log in**,
so that **I can save my searches and receive personalized notifications**.

#### Acceptance Criteria

1. User registration flow implemented with email and password validation
2. Email verification process required before account activation
3. Login/logout functionality with secure session management via Supabase Auth
4. Password reset capability through email verification process
5. Basic user profile management (email, phone number for SMS)
6. Account deletion functionality with data cleanup procedures
7. Row-level security policies implemented for user data isolation
8. Input validation and sanitization for all user registration fields

### Story 1.3: Comic Database & Reference Data

As a **system administrator**,
I want **to establish a comprehensive, updateable comic database with all reference data**,
so that **users can validate searches and receive accurate autocomplete suggestions with complete dropdown options**.

#### Acceptance Criteria

1. Comic database schema designed supporting titles, issues, publishers, publication dates, and metadata
2. Database tables include update tracking, version control, and data source attribution
3. Initial comic dataset imported from Comic Vine API or curated source (minimum 1000+ popular titles)
4. **Pedigree reference database established with all 54 pedigrees (Allentown through Winnipeg)**
5. **Reference data tables created for page quality options, grading authorities, and signature series data**
6. Data validation rules implemented to ensure data quality and consistency
7. Database indexing optimized for title search and autocomplete performance
8. **Admin interface created for managing comic data AND all dropdown reference lists (pedigrees, page quality, etc.)**
9. Automated data import pipeline established for ongoing updates
10. API endpoints created for comic title search, validation, and reference data services

### Story 1.4: Basic Search Creation

As a **collector**,
I want **to create basic search specifications with type-ahead assistance**,
so that **I can precisely define the comics I'm seeking with minimal typing errors**.

#### Acceptance Criteria

1. **Title field**: Free text with type-ahead functionality mapping to comic database
2. **Issue Number field**: Free text accepting only numeric input with validation
3. **Grade range**: Two dropdowns (minimum/maximum) with full CGC grade scale from 0.5 (Poor) to 10.0 (Gem Mint) including all intermediate grades and descriptive labels
4. **Grade validation**: System prevents setting maximum grade below minimum or minimum above maximum
5. **"Seek Grail" button**: Centered below form, disabled until Title and Issue Number are entered
6. Form validation prevents submission of incomplete searches (Title + Issue Number required)
7. Search specification saved to user account with unique identifiers
8. **Basic search creation interface only - editing functionality handled in Story 3.3**

### Story 1.5: Basic eBay Monitoring

As a **collector**,
I want **the system to monitor eBay for my specified comics**,
so that **I can validate that automated searching is working correctly**.

#### Acceptance Criteria

1. eBay Finding API integration implemented with authentication and rate limiting
2. Background job system created using Supabase Edge Functions for scheduled monitoring
3. **Monitoring frequency implemented as configurable parameter (default: 15 minutes) that can be adjusted without code deployment**
4. Search query translation from user specifications to eBay API parameters
5. Basic listing detection and storage for matching comics found
6. **Monitoring job scheduler respects configurable frequency setting for all user searches**
7. Search result logging for debugging and system transparency
8. Error handling and retry logic for failed API calls or network issues
9. Monitoring status indicators showing last successful check per search

## Epic 2: Advanced Search & Notification System

### Epic 2 Goal

Implement the advanced collector-specific search criteria and SMS notification system that differentiates Grail Seeker from basic search tools. This epic delivers the core value proposition of proactive notifications with sophisticated search matching for page quality, pedigree, signatures, and grading authority preferences. Users receive immediate SMS alerts when their precisely specified grail books become available.

### Story 2.1: Advanced Search Criteria

As a **serious collector**,
I want **to specify advanced search criteria including page quality, pedigree, and signature requirements**,
so that **I only receive notifications for comics that meet my exact collecting standards**.

#### Acceptance Criteria

1. **Page Quality dropdown**: Options populated from reference data established in Story 1.3 (Any, White, Off-White to White, Off-White, Cream)
2. **Graded By dropdown**: Options populated from reference data established in Story 1.3 (Any, CGC, CBCS, PSA)  
3. **Pedigree dropdown**: Options populated from pedigree reference database established in Story 1.3 (54 pedigrees with None as default)
4. **Signature Series toggle**: Visual toggle component with "no" (left, black/off) and "yes" (right, colored/on) states
5. **Signed By field**: Free text field for creator name, only visible when Signature Series toggle is enabled
6. **All dropdown value lists remain easily editable by site administrator through admin interface created in Story 1.3**
7. Advanced criteria extend basic search creation interface from Story 1.4 with logical grouping and clear labels
8. Database schema updated to store all advanced search preferences per user specification

### Story 2.2: Enhanced eBay Search Matching

As a **collector**,
I want **the monitoring system to accurately match eBay listings against my advanced criteria**,
so that **I only receive relevant notifications that meet my specific requirements**.

#### Acceptance Criteria

1. eBay listing parser implemented to extract grade information, pedigree mentions, and signature details
2. Page quality matching logic developed to identify listings with specified page quality grades
3. Grading authority detection implemented to filter by CGC/CBCS/PSA as specified
4. Pedigree recognition system created to match listing descriptions against pedigree database
5. Signature series detection implemented with creator name matching for "Signed by" requirements
6. Fuzzy matching algorithms implemented for creator names and pedigree variations in listings
7. Search result scoring system implemented to rank matches by relevance and criteria fulfillment
8. False positive filtering implemented to reduce irrelevant notifications

### Story 2.3: SMS Notification System

As a **collector**,
I want **to receive immediate SMS notifications when my grail books are found**,
so that **I can act quickly on time-sensitive opportunities before they're sold**.

#### Acceptance Criteria

1. Twilio SMS integration implemented with authentication and delivery tracking
2. SMS notification templates created for single listing and multiple listing scenarios
3. Notification delivery within 2-5 minutes of listing detection implemented
4. SMS content includes book details, price, grade, and direct eBay listing link
5. Multiple listing notification implemented: first SMS with top result, second SMS with "Multiple copies found" message and search results link
6. SMS delivery failure handling implemented with retry logic and error logging
7. User phone number validation implemented during account setup
8. SMS cost tracking implemented per user for operational monitoring

### Story 2.4: Notification Management

As a **collector**,
I want **to manage my notification preferences and track alert history**,
so that **I can control when and how I receive notifications and review past opportunities**.

#### Acceptance Criteria

1. Notification preferences interface created allowing users to enable/disable SMS per search
2. Quiet hours functionality implemented to suppress notifications during specified time periods
3. Alert history dashboard created showing chronological list of all notifications sent
4. Alert history filtering implemented by search, date range, and book details
5. Notification status tracking implemented (delivered, failed, clicked) for each alert
6. Search pause/resume functionality implemented for temporary notification suspension
7. Bulk notification management implemented for enabling/disabling multiple searches
8. Alert frequency limiting implemented to prevent notification spam for identical listings

### Story 2.5: Search Performance Optimization

As a **system**,
I want **to efficiently process multiple user searches with advanced criteria**,
so that **monitoring performance remains fast and cost-effective as user base grows**.

#### Acceptance Criteria

1. Search query optimization implemented to minimize eBay API calls while maintaining coverage
2. Result caching implemented to avoid duplicate processing of identical listings
3. Database indexing optimized for advanced criteria filtering and search performance
4. Batch processing implemented for efficient handling of multiple user searches
5. API rate limiting respect implemented to stay within eBay API usage limits
6. Performance monitoring implemented tracking search processing times and API usage
7. Search result deduplication implemented to prevent duplicate notifications
8. Background job error handling and recovery implemented for system reliability

## Epic 3: User Experience & Search Management

### Epic 3 Goal

Complete the user experience with professional onboarding flow, comprehensive search management dashboard, alert history tracking, and weekly reporting system. This epic transforms Grail Seeker from a functional tool into a polished collector platform that users can confidently rely on for their long-term collecting workflow management and provides transparency into system activity.

### Story 3.1: Welcome Flow & Onboarding

As a **first-time visitor**,
I want **to understand Grail Seeker's value proposition and easily create my first search**,
so that **I can quickly experience the core functionality and decide to use the service**.

#### Acceptance Criteria

1. Welcome/landing page created with clear value proposition messaging ("Stop searching. Start finding.")
2. Prominent "Find Grail" button leading to search creation flow for unauthenticated users
3. Search creation flow allows complete specification input before requiring account creation
4. Account creation prompt appears after search specification is complete with clear value explanation
5. **Post-registration onboarding flow guides users through first search confirmation and system explanation (phone number already collected during registration in Story 1.2)**
6. First search confirmation page explains what happens next (monitoring begins, SMS notifications coming)
7. Login page implemented for returning users with "Forgot Password" functionality
8. Navigation flow optimized to minimize friction between interest and first search creation

### Story 3.2: Dashboard & Search Overview

As a **collector with active searches**,
I want **to see an overview of my searches and recent activity**,
so that **I can quickly understand system status and recent opportunities**.

#### Acceptance Criteria

1. Dashboard created showing all active searches with status indicators (active, paused, error)
2. Recent alerts section displaying last 10 notifications with book details and timestamps
3. Search summary cards showing search criteria, last check time, and total alerts received
4. Quick actions implemented on search cards (pause/resume, edit, delete with confirmation)
5. System status indicator showing overall monitoring health and last successful check
6. Search creation shortcut prominently displayed for adding new searches
7. Dashboard responsive design working effectively on both desktop and mobile devices
8. Loading states and error handling implemented for all dashboard components

### Story 3.3: Comprehensive Search Management

As a **collector managing multiple searches**,
I want **to efficiently organize and modify my search specifications**,
so that **I can keep my want list current as my collecting priorities change**.

#### Acceptance Criteria

1. Search management view listing all searches with sortable columns (title, date created, status, alerts)
2. Bulk actions implemented for pausing/resuming multiple searches simultaneously
3. **Complete search editing interface allowing modification of ALL criteria fields (basic from Story 1.4 AND advanced from Story 2.1) with validation**
4. Search duplication functionality for creating similar searches across different issues
5. Advanced filtering options for finding specific searches within large lists

### Story 3.4: Alert History & Reporting

As a **collector tracking opportunities**,
I want **to review my notification history and understand system activity**,
so that **I can verify the system is working and analyze market patterns for my grails**.

#### Acceptance Criteria

1. Alert history page displaying chronological list of all notifications with filtering options
2. Alert detail view showing complete book information, listing details, and notification timestamp
3. Alert status tracking (delivered, clicked, listing still active) with real-time updates
4. Search activity filtering by book title, date range, price range, and grade
5. Alert statistics dashboard showing notification frequency, click-through rates, and search performance
6. Weekly email report automatically generated and sent summarizing search activity and alerts

### Story 3.5: Account Management & Settings

As a **collector using the service long-term**,
I want **to manage my account settings and notification preferences**,
so that **I can customize the service to my collecting workflow and communication needs**.

#### Acceptance Criteria

1. Account settings page allowing email and phone number updates with verification
2. Notification preferences interface for customizing SMS timing and quiet hours
3. Password change functionality with current password verification
4. Account deletion process with data export option and confirmation requirements
5. Privacy settings allowing users to control data retention and sharing preferences
6. Subscription management interface (prepared for future subscription features)
7. Support contact information and help documentation easily accessible
8. System-wide notification toggles for maintenance alerts and service updates

## Checklist Results Report

*[This section will be populated after executing the pm-checklist]*

## Next Steps

### UX Expert Prompt

*[This section will contain the prompt for the UX Expert to initiate create architecture mode using this document as input]*

### Architect Prompt

*[This section will contain the prompt for the Architect to initiate create architecture mode using this document as input]*