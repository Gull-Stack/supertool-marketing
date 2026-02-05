import LegalPage from "@/components/legal-page";

export const metadata = {
  title: "Terms of Service | SuperTool",
  description: "Terms and conditions for using the SuperTool platform.",
};

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="February 1, 2026">
      <section>
        <h2>Agreement to Terms</h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
          SuperTool platform and services provided by <strong>GullStack Trust</strong>
          (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
        </p>
        <p>
          By accessing or using our Service, you agree to be bound by these Terms. If you
          disagree with any part of the Terms, you may not access the Service.
        </p>
      </section>

      <section>
        <h2>Description of Service</h2>
        <p>SuperTool provides:</p>
        <ul>
          <li>Website hosting and management</li>
          <li>Business analytics and reporting</li>
          <li>Appointment scheduling tools</li>
          <li>Payment processing integration</li>
          <li>Marketing and communication tools</li>
          <li>Domain management services</li>
        </ul>
      </section>

      <section>
        <h2>User Accounts</h2>
        <h3>Registration</h3>
        <p>
          You must provide accurate, complete, and current information during registration.
          You are responsible for maintaining the confidentiality of your account credentials.
        </p>
        <h3>Account Types</h3>
        <ul>
          <li><strong>Subscribers:</strong> Business customers who subscribe to our platform</li>
          <li><strong>Authorized Users:</strong> Team members invited by Subscribers</li>
          <li><strong>End Users:</strong> Visitors to websites hosted through our platform</li>
        </ul>
      </section>

      <section>
        <h2>Acceptable Use</h2>
        <p>You agree NOT to use the Service to:</p>
        <ul>
          <li>Violate any laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Transmit malware or harmful code</li>
          <li>Harass, abuse, or harm others</li>
          <li>Store Protected Health Information (PHI) without proper authorization</li>
          <li>Engage in fraudulent or deceptive practices</li>
          <li>Interfere with the proper functioning of the Service</li>
        </ul>
      </section>

      <section>
        <h2>Payment Terms</h2>
        <ul>
          <li>Subscription fees are billed in advance on a monthly or annual basis</li>
          <li>All fees are non-refundable except as required by law</li>
          <li>We reserve the right to modify pricing with 30 days&apos; notice</li>
          <li>Payment processing is handled securely through Stripe</li>
        </ul>
        <p>See our <a href="/payment-terms">Payment Terms</a> for complete details.</p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <h3>Our Content</h3>
        <p>
          The Service and its original content, features, and functionality are owned by
          GullStack Trust and are protected by copyright, trademark, and other intellectual
          property laws.
        </p>
        <h3>Your Content</h3>
        <p>
          You retain ownership of content you upload to the Service. By uploading content,
          you grant us a license to use, store, and display that content as necessary to
          provide the Service.
        </p>
      </section>

      <section>
        <h2>Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
          WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
          IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, GULLSTACK TRUST SHALL NOT BE LIABLE FOR
          ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY
          LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
        </p>
        <p>
          Our total liability for any claims arising from these Terms or the Service shall
          not exceed the amount you paid us in the 12 months preceding the claim.
        </p>
      </section>

      <section>
        <h2>Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice, for
          conduct that we believe violates these Terms or is harmful to other users, us,
          or third parties, or for any other reason at our sole discretion.
        </p>
        <p>
          You may terminate your account at any time by contacting us. Upon termination,
          your right to use the Service will immediately cease.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of
          the State of Utah, without regard to its conflict of law provisions.
        </p>
      </section>

      <section>
        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will notify you of
          material changes by posting the updated Terms on our website and updating the
          &ldquo;Last Updated&rdquo; date. Your continued use of the Service after such
          changes constitutes acceptance of the new Terms.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>For questions about these Terms:</p>
        <ul>
          <li><strong>Email:</strong> legal@gullstack.com</li>
          <li><strong>Mail:</strong> GullStack Trust, Attn: Legal, [Address]</li>
        </ul>
      </section>
    </LegalPage>
  );
}
