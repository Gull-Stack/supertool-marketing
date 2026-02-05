import LegalPage from "@/components/legal-page";

export const metadata = {
  title: "Payment Terms | SuperTool",
  description: "Credit card processing agreement and payment terms for SuperTool.",
};

export default function PaymentTerms() {
  return (
    <LegalPage title="Payment Terms" lastUpdated="February 1, 2026">
      <section>
        <h2>Overview</h2>
        <p>
          This Credit Card Processing Agreement describes how <strong>GullStack Trust</strong>
          handles payment processing through our platform. All payments are processed securely
          through <strong>Stripe</strong>, our third-party payment processor.
        </p>
      </section>

      <section>
        <h2>Payment Processor</h2>
        <p>
          GullStack Trust uses <strong>Stripe, Inc.</strong> as our payment processor. Stripe is:
        </p>
        <ul>
          <li>PCI DSS Level 1 certified (highest level of certification)</li>
          <li>SOC 2 Type II compliant</li>
          <li>Trusted by millions of businesses worldwide</li>
        </ul>
        <p>
          By using our Service, you also agree to Stripe&apos;s{" "}
          <a href="https://stripe.com/legal" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>.
        </p>
      </section>

      <section>
        <h2>What We Collect</h2>
        <h3>From Subscribers (Our Customers)</h3>
        <ul>
          <li>Billing name and email</li>
          <li>Billing address</li>
          <li>Payment method (via Stripe - we never see full card numbers)</li>
        </ul>
        <h3>What We Do NOT Store</h3>
        <ul>
          <li>Credit card numbers</li>
          <li>CVV/CVC codes</li>
          <li>Full card details</li>
        </ul>
        <p>
          Payment card data is collected directly by Stripe.js and never touches our servers.
          We only store a tokenized reference to your payment method.
        </p>
      </section>

      <section>
        <h2>Subscription Billing</h2>
        <h3>Billing Cycles</h3>
        <ul>
          <li><strong>Monthly:</strong> Charged on the same day each month</li>
          <li><strong>Annual:</strong> Charged once per year (discounted rate)</li>
        </ul>
        <h3>Automatic Renewal</h3>
        <p>
          Subscriptions automatically renew at the end of each billing period unless
          cancelled. You may cancel at any time from your account settings.
        </p>
        <h3>Failed Payments</h3>
        <p>
          If a payment fails, we will attempt to charge the card again over the following
          days. If payment cannot be collected, your account may be suspended until
          payment is received.
        </p>
      </section>

      <section>
        <h2>Refund Policy</h2>
        <ul>
          <li>All fees are generally non-refundable</li>
          <li>Annual subscriptions may be eligible for prorated refunds within 14 days</li>
          <li>Refunds for service issues are evaluated on a case-by-case basis</li>
          <li>To request a refund, contact billing@gullstack.com</li>
        </ul>
      </section>

      <section>
        <h2>Stripe Connect (For Tenants)</h2>
        <p>
          If you use SuperTool to accept payments from your customers, you will connect
          your own Stripe account through <strong>Stripe Connect</strong>.
        </p>
        <h3>How It Works</h3>
        <ul>
          <li>You create or connect an existing Stripe account</li>
          <li>Payments from your customers go directly to your Stripe account</li>
          <li>GullStack collects a platform fee as configured in your plan</li>
          <li>You manage payouts, refunds, and disputes in your Stripe Dashboard</li>
        </ul>
        <h3>Your Responsibilities</h3>
        <ul>
          <li>Complete Stripe&apos;s identity verification</li>
          <li>Maintain compliance with Stripe&apos;s terms</li>
          <li>Handle customer disputes and chargebacks</li>
          <li>Provide accurate business information</li>
        </ul>
      </section>

      <section>
        <h2>Taxes</h2>
        <p>
          Prices displayed may not include applicable taxes. You are responsible for
          paying any taxes associated with your use of the Service. Where required by
          law, we will collect and remit sales tax.
        </p>
      </section>

      <section>
        <h2>Price Changes</h2>
        <p>
          We reserve the right to modify our pricing. If we change pricing:
        </p>
        <ul>
          <li>We will provide at least 30 days&apos; notice</li>
          <li>Current subscribers will be notified via email</li>
          <li>Changes take effect at the start of your next billing cycle</li>
          <li>You may cancel before the new pricing takes effect</li>
        </ul>
      </section>

      <section>
        <h2>Chargebacks & Disputes</h2>
        <p>
          If you believe a charge is incorrect, please contact us at billing@gullstack.com
          before initiating a chargeback with your bank. We will work to resolve any
          billing issues quickly.
        </p>
        <p>
          Excessive chargebacks may result in account suspension or termination.
        </p>
      </section>

      <section>
        <h2>Security Measures</h2>
        <ul>
          <li>All payment pages use TLS 1.3 encryption</li>
          <li>Stripe.js handles card data client-side</li>
          <li>Webhook signatures verified for all Stripe events</li>
          <li>Regular security audits of payment flows</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>For billing questions or payment issues:</p>
        <ul>
          <li><strong>Email:</strong> billing@gullstack.com</li>
          <li><strong>Support:</strong> support@gullstack.com</li>
        </ul>
      </section>
    </LegalPage>
  );
}
