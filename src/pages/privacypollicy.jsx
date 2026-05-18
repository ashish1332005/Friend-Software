import React from 'react';
import PageHero from '../components/PageHero';

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Your privacy matters to us."
        description="This Privacy Policy explains how Friend Software collects, uses, and protects your information when you use our website or contact us for services."
      />

      <section className="section bg-surface">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <p className="mb-8 text-sm font-semibold text-primary">
              Last Updated: May 18, 2026
            </p>

            <div className="space-y-8 text-text-muted">
              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">1. Introduction</h2>
                <p>
                  Friend Software respects your privacy. This Privacy Policy explains how we collect,
                  use, store, and protect your personal information when you visit our website, contact
                  us, request a service, or interact with our digital platforms.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">2. Information We Collect</h2>
                <p className="mb-3">We may collect the following types of information:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Your name, email address, phone number, and business details.</li>
                  <li>Project requirements shared through forms, email, phone, or WhatsApp.</li>
                  <li>Website usage information such as pages visited, device type, and browser details.</li>
                  <li>Information related to services such as website development, ERP, app development, and digital marketing.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">3. How We Use Your Information</h2>
                <p className="mb-3">We use your information to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Respond to your inquiries and service requests.</li>
                  <li>Understand your business needs and provide suitable solutions.</li>
                  <li>Deliver website, app, ERP, hosting guidance, and digital marketing services.</li>
                  <li>Improve our website, services, support, and user experience.</li>
                  <li>Send important service-related communication.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">4. Cookies and Tracking</h2>
                <p>
                  Our website may use cookies or similar technologies to improve user experience,
                  analyze website traffic, and understand visitor behavior. You can disable cookies
                  from your browser settings, but some website features may not work properly.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">5. Affiliate Links</h2>
                <p>
                  Some pages on our website may contain affiliate links. If you purchase a product or
                  service through these links, we may earn a commission at no additional cost to you.
                  We only aim to recommend tools and services that may be useful for website owners,
                  businesses, and digital growth.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">6. Data Protection</h2>
                <p>
                  We take reasonable steps to protect your personal information from unauthorized
                  access, misuse, loss, or disclosure. However, no internet-based system is completely
                  secure, so we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">7. Sharing of Information</h2>
                <p>
                  We do not sell or rent your personal information. We may share limited information
                  only when required to deliver services, comply with legal obligations, or work with
                  trusted service providers such as hosting, analytics, or communication platforms.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">8. Third-Party Services</h2>
                <p>
                  Our website may link to third-party websites, tools, or services. We are not
                  responsible for the privacy practices, content, or policies of third-party websites.
                  Please review their privacy policies before using their services.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">9. Your Rights</h2>
                <p>
                  You may contact us to request access, correction, or deletion of your personal
                  information. We will try to respond to valid requests within a reasonable time.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, you can contact us at:
                </p>
                <p className="mt-3 font-semibold text-dark">
                  Email: friendsoftwaresin@gmail.com
                </p>
                <p className="font-semibold text-dark">
                  Phone: +91 9521066616
                </p>
                <p className="font-semibold text-dark">
                  Location: Bhilwara, Rajasthan, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;