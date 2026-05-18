import React from 'react';
import PageHero from '../components/PageHero';

const AffiliateDisclaimerPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Affiliate Disclaimer"
        title="Transparent recommendations for digital tools."
        description="Some links on Friend Software may be affiliate links. This page explains how those links work and how we keep recommendations useful."
      />

      <section className="section bg-surface">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <p className="mb-8 text-sm font-semibold text-primary">
              Last Updated: May 18, 2026
            </p>

            <div className="space-y-8 text-text-muted">
              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">1. What Affiliate Links Mean</h2>
                <p>
                  Some pages on our website may include links to hosting, domain, software, plugins,
                  marketing tools, or other third-party services. If you purchase through those links,
                  Friend Software may earn a commission at no additional cost to you.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">2. Why We Use Them</h2>
                <p>
                  Affiliate commissions help support our website content, guides, and client education.
                  They do not change the price you pay and do not guarantee that every listed product
                  is the best fit for every business.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">3. Our Recommendation Approach</h2>
                <p>
                  We aim to recommend tools and services that are relevant for websites, apps, ERP,
                  hosting, analytics, security, and online growth. You should still review each
                  provider's features, pricing, terms, and support before making a purchase.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">4. Third-Party Responsibility</h2>
                <p>
                  Third-party products and services are owned and managed by their respective providers.
                  Friend Software is not responsible for their pricing changes, downtime, policy updates,
                  billing issues, service quality, or support response.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-dark">5. Contact Us</h2>
                <p>
                  If you have questions about an affiliate link or recommendation, contact us at:
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

export default AffiliateDisclaimerPage;
