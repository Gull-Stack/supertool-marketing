import LegalPage from "@/components/legal-page";

export const metadata = {
  title: "Privacy Policy | SuperTool",
  description: "Learn how GullStack Trust collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="February 1, 2026">
      <section>
        <h2>Introduction</h2>
        <p>
          This Privacy Policy describes how <strong>GullStack Trust</strong>, doing business as
          &ldquo;SuperTool&rdquo; and &ldquo;Augment Advertise&rdquo; collects, uses, discloses, retains,
          and protects information in connection with our platform and related services.
        </p>
        <p>
          <strong>Important:</strong> GullStack Trust is <strong>NOT</strong> a covered entity or
          business associate under HIPAA. Our Service is not designed for the storage or processing
          of Protected Health Information (PHI).
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <h3>Account Information</h3>
        <ul>
          <li>Name, email address, phone number</li>
          <li>Business name and address</li>
          <li>Professional license information (if provided)</li>
        </ul>
        <h3>Usage Data</h3>
        <ul>
          <li>Log data (IP address, browser type, pages visited)</li>
          <li>Device information</li>
          <li>Analytics data via Google Analytics 4</li>
        </ul>
        <h3>Payment Information</h3>
        <p>
          Payment processing is handled by Stripe. We do not store credit card numbers on our
          servers. See our <a href="/payment-terms">Payment Terms</a> for details.
        </p>
      </section>

      <section>
        <h2>How We Use Information</h2>
        <ul>
          <li>Provide and maintain the Service</li>
          <li>Process transactions and send related information</li>
          <li>Send promotional communications (with your consent)</li>
          <li>Monitor and analyze usage patterns</li>
          <li>Detect, prevent, and address technical issues</li>
        </ul>
      </section>

      <section>
        <h2>Data Sharing</h2>
        <p>We may share information with:</p>
        <ul>
          <li><strong>Service providers:</strong> Stripe (payments), Google (analytics), Vercel (hosting)</li>
          <li><strong>Legal compliance:</strong> When required by law or to protect our rights</li>
          <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale</li>
        </ul>
        <p>We never sell your personal information to third parties.</p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <h3>All Users</h3>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Delete your data</li>
          <li>Export your data</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <h3>California Residents (CCPA)</h3>
        <ul>
          <li>Right to know what personal information is collected</li>
          <li>Right to delete personal information</li>
          <li>Right to opt-out of sale (we do not sell data)</li>
          <li>Right to non-discrimination</li>
        </ul>
        <h3>European Users (GDPR)</h3>
        <ul>
          <li>All rights above, plus:</li>
          <li>Right to data portability</li>
          <li>Right to restrict processing</li>
          <li>Right to object to processing</li>
        </ul>
      </section>

      <section>
        <h2>Data Retention</h2>
        <p>
          We retain personal information for as long as necessary to provide the Service and
          fulfill the purposes described in this policy. When you close your account, we delete
          or anonymize your data within 90 days, except where retention is required by law.
        </p>
      </section>

      <section>
        <h2>Cookies & Tracking</h2>
        <p>We use cookies and similar technologies for:</p>
        <ul>
          <li><strong>Essential cookies:</strong> Required for the Service to function</li>
          <li><strong>Analytics cookies:</strong> Google Analytics 4 for usage insights</li>
          <li><strong>Preference cookies:</strong> Remember your settings</li>
        </ul>
        <p>You can manage cookie preferences through your browser settings.</p>
      </section>

      <section>
        <h2>Children&apos;s Privacy</h2>
        <p>
          Our Service is not directed to children under 13. We do not knowingly collect personal
          information from children under 13. If you believe we have collected such information,
          please contact us immediately.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>For privacy-related questions or to exercise your rights:</p>
        <ul>
          <li><strong>Email:</strong> privacy@gullstack.com</li>
          <li><strong>Mail:</strong> GullStack Trust, Attn: Privacy, [Address]</li>
        </ul>
      </section>
    </LegalPage>
  );
}
