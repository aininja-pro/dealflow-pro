# DealFlow Pro - Project Requirements Document

## 1. Project Overview

DealFlow Pro is a web application designed to help anyone interested in real estate acquisitions—from investors and flippers to beginners—navigate the entire deal-making process. The app guides users from preparing for seller conversations (with custom checklists and dynamic scripts) through to analyzing deal profitability with an advanced calculator, tracking opportunities on a sleek dashboard, and managing property photos in one organized place. It aims to make real estate deals more approachable and informed, whether you are a seasoned pro or just starting out, by giving you the right tools at every step.

The primary purpose behind building DealFlow Pro is to simplify and streamline the multifaceted process of real estate acquisitions. By integrating essential tools like a pre-work planner, conversation guide, deal calculator, and photo management, the app reduces the friction of manual research and guesswork. Success will be measured by improved user confidence, faster decision-making, more accurately projected profits, and a strong, growing base of users ranging from individual investors to collaborative teams.

## 2. In-Scope vs. Out-of-Scope

**In-Scope:**

*   User onboarding with role-based access (Standard Users, Team Members/Partners, and Administrators).

*   A clean, responsive dashboard with navigation to primary features.

*   Core modules including:

    *   Pre-Work Planner for checklists and conversation preparation.
    *   Dynamic Conversation Guide offering adaptive scripts and real-time tips.
    *   Deal Calculator that accepts manual input for comps and ARV estimates with robust validations.
    *   Photo Capture and Management feature with support for JPEG, PNG, HEIC (with conversion to JPEG), basic editing (cropping, rotating), resizing, and thumbnail generation.
    *   Educational Tips integrated as admin-controlled content at launch, with the plan to add dynamic updates and community contributions later.
    *   Analytics and Reporting with interactive dashboards plus exportable PDF reports.

*   Account and subscription management integrated with Stripe for payments.

*   Cloud storage integration using AWS S3, including automatic resizing, versioning, and secure storage practices.

*   Mobile-first design ensuring smooth performance across screen sizes and network conditions.

**Out-of-Scope:**

*   Full automation API integrations (like Zillow or Redfin) for comps and ARV calculations at launch. For now, manual inputs with future update plans.
*   Advanced in-app photo editing (beyond cropping and rotating).
*   A community-driven content moderation system for educational tips on day one.
*   Extensive real-time collaboration tools beyond basic deal sharing between team members.
*   Complex integrations for backend analytics beyond the core performance metrics and dashboards.

## 3. User Flow

When a new user visits DealFlow Pro, they first encounter a mobile-first, clean landing page that highlights the platform’s benefits. The user can quickly sign up or log in using email (or other supported auth methods) where they select their role—whether as an individual investor, a team member for collaboration, or an administrator. Once authenticated, the app brings them to a central dashboard that provides an overview of their active deals and easy access to modules like the pre-work planner, conversation guide, deal calculator, and photo management sections.

Within the dashboard, users can create or manage deals by following a guided flow. They prepare for seller calls using structured checklists and conversation scripts, manually input property details along with comparables for ARV estimation, and capture or upload property photos that are automatically optimized. Real-time analytics and educational prompts are interwoven within each step, ensuring decisions are data-driven and informed. Navigation is kept intuitive with just a few taps or clicks to move between different sections, ensuring that whether they are on a desktop or mobile, users can manage and track their deals seamlessly.

## 4. Core Features

*   **User Authentication and Role-Based Access:**\
    • Standard Users can create, view, edit, and delete their own deals.\
    • Team Members/Partners can access deals shared with them for collaborative work.\
    • Administrators have enhanced permissions for user and content management.
*   **Pre-Work Planner:**\
    • Checklists and goal-setting prompts for seller calls.\
    • Tailored questions based on property and seller details.
*   **Dynamic Conversation Guide:**\
    • Scripts that adjust in real-time depending on conversation flow.\
    • Tips for handling objections and qualifying seller motivation.
*   **Deal Calculator and ARV Estimation:**\
    • Manual input form for subject property details.\
    • Input forms for comparable sales (comps) with built-in validations (date, sale price, square footage, condition, etc.).\
    • Calculation logic using average sale prices or price-per-square-foot fallback.
*   **Photo Capture & Management:**\
    • In-app camera support for mobile (with quick access and review features).\
    • Web upload capability with automatic conversion (HEIC to JPEG), resizing (max 1920x1080), thumbnail generation (e.g., 300x200).\
    • Basic image editing (cropping and rotating).
*   **Educational Tips:**\
    • Vetted, admin-controlled static content at launch that provides valuable insights such as repair cost averages and negotiation tactics.\
    • Future plans for dynamic content updates and community contributions.
*   **Analytics and Reporting:**\
    • Real-time visual dashboards displaying deal progress and activity trends.\
    • Exportable PDF reports for sharing with partners or lenders.
*   **Account and Subscription Management:**\
    • Profile, billing, and subscription management integrated with Stripe.\
    • Secure payment processing with PCI compliance.
*   **Cloud Integration & Security:**\
    • Data storage on AWS S3 with measures like region-based selection, versioning, and replication.\
    • Encryption for data in transit and at rest.

## 5. Tech Stack & Tools

*   **Frontend:**\
    • Next.js 14 for server-side rendering and efficient page loads.\
    • TypeScript to ensure type safety and reduce runtime errors.\
    • Tailwind CSS and Chakra UI for a clean, professional, and mobile-friendly design.
*   **Backend:**\
    • Node.js environment using Next.js API routes or similar structure.\
    • Integration with AWS S3 for cloud storage (with security, backup, and DR protocols).
*   **Authentication & Payments:**\
    • Built-in authentication mechanisms (leveraging starter kit implementations).\
    • Stripe for handling payments and subscriptions with full customization using Stripe Elements.
*   **Additional Tools & Integrations:**\
    • Lovable.dev for AI-generated front-end and full-stack components.\
    • Cursor for AI-powered coding support with real-time suggestions.\
    • Bolt for rapid project setup and scaffolding.\
    • Claude 3.7 Sonnet / Claude 3.5 Sonnet / GPT o1 for advanced code generation and code assistance.

## 6. Non-Functional Requirements

*   **Performance:**\
    • Critical features (photo capture, deal data loading) need to complete within 1-2 seconds.\
    • Ensure minimal lag for navigation and data entry, especially on mobile devices.
*   **Mobile Responsiveness:**\
    • Fully responsive design with mobile-first approach.\
    • Efficient handling of network variability, offline data caching, and resource optimization to reduce battery drain.
*   **Security:**\
    • Data encryption (both in transit using HTTPS with TLS 1.3 and at rest with AES-256 or AWS S3 server-side encryption).\
    • Role-based access control, multi-factor authentication for sensitive account actions, and thorough audit logging.\
    • Payment data handled via Stripe with PCI DSS compliance.
*   **Scalability & Usability:**\
    • The system must handle growth in user data, photo uploads, and deal tracking without performance degradation.\
    • Intuitive UI with clear navigation paths to enhance user experience in both desktop and mobile environments.

## 7. Constraints & Assumptions

*   **Manual Data Entry for Comps:**\
    • At launch, ARV calculations and comps data have to be manually input by users. API integrations (like Zillow or Redfin) are planned for later phases.
*   **Cloud Storage Limitations:**\
    • AWS S3 configurations such as region choice, backup protocols (versioning, CRR), and disaster recovery will follow best practice guidelines but might be dependent on specific compliance or cost requirements.
*   **Third-Party Payment Integration:**\
    • Stripe is assumed as the payment gateway. Customizations are expected to be within the support of Stripe Elements and standard integration practices.
*   **Assumptions on User Behavior:**\
    • Users can handle a primarily manual input system supplemented by in-app educational tips.\
    • Most users will have a reasonable level of internet connectivity; however, offline functionality is planned for deal data viewing and editing.
*   **Dependency on AI Tools:**\
    • The starter kit and AI tools (Lovable, Cursor, Bolt, Claude models, GPT o1) will be available and integrated as expected to expedite development.

## 8. Known Issues & Potential Pitfalls

*   **Data Accuracy & Quality:**\
    • Manual input for comps and property details might lead to inconsistent data quality. Mitigation includes clear validations and user tips throughout the forms.
*   **API Integration Delays:**\
    • Real estate API integrations (like Zillow or Redfin) are desirable but may face access restrictions and development delays. The phased approach (manual input first) helps mitigate this risk.
*   **Mobile Performance Challenges:**\
    • Photo capture features and real-time analytics could suffer on slower devices or fluctuating network conditions. Emphasis on auto-resizing, compression, and offline caching is critical.
*   **Security Challenges:**\
    • Robust encryption, file validation for uploads, and comprehensive role-based access control need to be rigorously implemented to avoid data breaches. Regular security audits and updates are necessary.
*   **Scalability of Cloud Storage:**\
    • While AWS S3 offers high durability, careful management of backups and replication settings will be required to manage costs and compliance as the application data grows.

This Project Requirements Document provides a comprehensive, step-by-step blueprint for DealFlow Pro. Every detail—from user onboarding and deal management flows to cloud storage and security practices—has been outlined in simple, everyday language. This should serve as a crystal-clear reference for all subsequent technical documents and ensure every stakeholder and AI model involved has a unified understanding of the project.
