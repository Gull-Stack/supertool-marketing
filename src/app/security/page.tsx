import LegalPage from "@/components/legal-page";

export const metadata = {
  title: "Security Policy | SuperTool",
  description: "Learn about the security measures protecting your data on SuperTool.",
};

export default function SecurityPolicy() {
  return (
    <LegalPage title="Security Policy" lastUpdated="February 1, 2026">
      <section>
        <h2>Our Commitment</h2>
        <p>
          At GullStack Trust, security is foundational to everything we build. We implement
          enterprise-grade security measures to protect your data and ensure the reliability
          of our platform.
        </p>
      </section>

      <section>
        <h2>Infrastructure Security</h2>
        <h3>Hosting & Architecture</h3>
        <ul>
          <li>Application hosted on Vercel&apos;s enterprise infrastructure</li>
          <li>Backend services on Railway with isolated containers</li>
          <li>PostgreSQL database with automated backups</li>
          <li>Redis caching layer with encryption</li>
          <li>Global CDN for fast, secure content delivery</li>
        </ul>
        <h3>Network Security</h3>
        <ul>
          <li>TLS 1.3 encryption for all data in transit</li>
          <li>DDoS protection at the network edge</li>
          <li>Web Application Firewall (WAF) rules</li>
          <li>Regular security scanning and penetration testing</li>
        </ul>
      </section>

      <section>
        <h2>Data Protection</h2>
        <h3>Encryption</h3>
        <ul>
          <li><strong>In Transit:</strong> All connections use TLS 1.2 or higher</li>
          <li><strong>At Rest:</strong> Database encryption using AES-256</li>
          <li><strong>Secrets:</strong> Environment variables and API keys stored encrypted</li>
        </ul>
        <h3>Access Control</h3>
        <ul>
          <li>Role-based access control (RBAC) with 7 permission levels</li>
          <li>Multi-factor authentication (MFA) support</li>
          <li>Session management with secure, HTTP-only cookies</li>
          <li>Automatic session expiration after inactivity</li>
        </ul>
      </section>

      <section>
        <h2>Application Security</h2>
        <h3>Secure Development</h3>
        <ul>
          <li>Code review required for all changes</li>
          <li>Automated security scanning in CI/CD pipeline</li>
          <li>Dependency vulnerability monitoring</li>
          <li>Regular security training for development team</li>
        </ul>
        <h3>Input Validation</h3>
        <ul>
          <li>Server-side validation using Zod schemas</li>
          <li>SQL injection prevention via parameterized queries (Prisma ORM)</li>
          <li>XSS protection with content sanitization</li>
          <li>CSRF protection on all state-changing operations</li>
        </ul>
      </section>

      <section>
        <h2>Authentication & Authorization</h2>
        <ul>
          <li>Google OAuth 2.0 for single sign-on</li>
          <li>JWT tokens with secure signing (RS256)</li>
          <li>Password hashing with bcrypt (cost factor 12)</li>
          <li>Account lockout after failed login attempts</li>
          <li>Secure password reset flow with time-limited tokens</li>
        </ul>
      </section>

      <section>
        <h2>Payment Security</h2>
        <p>
          All payment processing is handled by <strong>Stripe</strong>, a PCI DSS Level 1
          certified payment processor. We never store credit card numbers on our servers.
        </p>
        <ul>
          <li>Stripe.js for client-side card collection</li>
          <li>Tokenization of payment methods</li>
          <li>Webhook signature verification</li>
          <li>Stripe Connect for secure tenant payouts</li>
        </ul>
      </section>

      <section>
        <h2>Monitoring & Response</h2>
        <h3>Monitoring</h3>
        <ul>
          <li>24/7 infrastructure monitoring</li>
          <li>Real-time alerting for anomalies</li>
          <li>Comprehensive audit logging</li>
          <li>Error tracking and performance monitoring</li>
        </ul>
        <h3>Incident Response</h3>
        <ul>
          <li>Documented incident response procedures</li>
          <li>Severity classification system</li>
          <li>Customer notification within 72 hours of confirmed breach</li>
          <li>Post-incident review and remediation</li>
        </ul>
      </section>

      <section>
        <h2>Compliance</h2>
        <ul>
          <li><strong>CCPA:</strong> California Consumer Privacy Act compliance</li>
          <li><strong>GDPR:</strong> General Data Protection Regulation compliance</li>
          <li><strong>PCI DSS:</strong> Payment security via Stripe</li>
          <li><strong>SOC 2:</strong> Type II certification in progress</li>
        </ul>
        <p>
          <strong>Note:</strong> GullStack Trust is not a HIPAA covered entity. We do not
          store or process Protected Health Information (PHI).
        </p>
      </section>

      <section>
        <h2>Vulnerability Disclosure</h2>
        <p>
          We appreciate the security research community. If you discover a security
          vulnerability, please report it responsibly:
        </p>
        <ul>
          <li><strong>Email:</strong> security@gullstack.com</li>
          <li>Include detailed steps to reproduce the issue</li>
          <li>Allow us reasonable time to address the issue before public disclosure</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>For security questions or concerns:</p>
        <ul>
          <li><strong>Security Team:</strong> security@gullstack.com</li>
          <li><strong>General Inquiries:</strong> support@gullstack.com</li>
        </ul>
      </section>
    </LegalPage>
  );
}
