import React from 'react';
import PageHero from '../components/PageHero';

const TermsConditionsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Terms that guide the use of our website and services."
        description="Please read these Terms & Conditions carefully before using the Friend Software website or requesting our services."
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
                  Welcome to Friend Software. By accessing our website or using our services, you agree
                  to follow these Terms & Conditions. If you do not agree with these terms, please do
                  not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">2. Our Services</h2>
                <p className="mb-3">Friend Software provides services including but not limited to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Website development</li>
                  <li>App development</li>
                  <li>ERP software development</li>
                  <li>Digital marketing and social media marketing</li>
                  <li>SEO and online growth support</li>
                  <li>Hosting, domain, SSL, and deployment guidance</li>
                  <li>Custom dashboards and business automation solutions</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">3. Use of Website</h2>
                <p className="mb-3">You agree not to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Use our website for illegal or harmful purposes.</li>
                  <li>Copy, misuse, or reproduce our content without permission.</li>
                  <li>Attempt to hack, damage, or disrupt the website.</li>
                  <li>Submit false, misleading, or harmful information through our forms.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">4. Project Discussion and Pricing</h2>
                <p>
                  Pricing, timelines, and deliverables depend on the project scope and client
                  requirements. Any estimate shared before final discussion is only indicative.
                  Final pricing and delivery timeline will be confirmed after understanding complete
                  project requirements.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">5. Payments</h2>
                <p>
                  Payment terms will be discussed and agreed upon before starting a project. Some
                  projects may require advance payment. Delay in payment may affect the project
                  timeline, delivery, support, or access to services.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">6. Client Responsibilities</h2>
                <p className="mb-3">Clients are responsible for providing:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Correct business details and project requirements.</li>
                  <li>Required content, images, branding assets, and documents.</li>
                  <li>Timely feedback and approvals.</li>
                  <li>Access to hosting, domain, or third-party accounts when needed.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">7. Third-Party Tools and Hosting</h2>
                <p>
                  We may recommend third-party tools, hosting providers, plugins, APIs, or software
                  services. These third-party services have their own pricing, policies, limitations,
                  and terms. Friend Software is not responsible for changes, downtime, pricing updates,
                  or issues caused by third-party providers.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">8. Affiliate Disclosure</h2>
                <p>
                  Some links on our website may be affiliate links. This means we may earn a commission
                  when you purchase through those links, without any extra cost to you. Our recommendations
                  are intended to help users choose useful tools for websites, hosting, and online business.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">9. Intellectual Property</h2>
                <p>
                  All website content, design elements, text, graphics, and branding materials on this
                  website belong to Friend Software unless otherwise stated. You may not copy, reproduce,
                  or distribute our content without written permission.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">10. Limitation of Liability</h2>
                <p>
                  Friend Software will try to provide reliable services, but we are not liable for any
                  direct, indirect, incidental, or consequential loss caused by website usage, third-party
                  tools, hosting issues, technical problems, or business decisions made using our content
                  or recommendations.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">11. Changes to Terms</h2>
                <p>
                  We may update these Terms & Conditions from time to time. Any changes will be posted
                  on this page with an updated date. Continued use of our website means you accept the
                  updated terms.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">12. Contact Us</h2>
                <p>
                  For questions related to these Terms & Conditions, contact us at:
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

export default TermsConditionsPage;