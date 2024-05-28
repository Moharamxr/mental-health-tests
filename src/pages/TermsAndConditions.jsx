import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="space-y-10 p-4 lg:p-8">
      <header className="bg-blue-100/70 rounded-3xl lg:rounded-ss-none p-8 lg:p-14 mx-auto max-w-7xl">
        <h1 className="text-4xl lg:text-7xl text-blue-800 font-semibold font-sans leading-tight lg:leading-[1.15] mb-5">
          Terms and Conditions
        </h1>
        <p className="text-gray-500 text-xl mb-5">
          Please read these terms and conditions carefully before using our website.
        </p>
      </header>

      <section className="max-w-7xl mx-auto bg-white p-8 lg:p-14 rounded-3xl shadow-md">
        <h2 className="text-3xl lg:text-5xl text-blue-800 font-bold mb-5">
          Terms of Use
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          Welcome to MHT Screening. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern MHT Screening's relationship with you in relation to this website.
        </p>

        <h3 className="text-2xl lg:text-4xl text-blue-800 font-bold mt-8 mb-3">
          Use of the Website
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          The content of the pages of this website is for your general information and use only. It is subject to change without notice.
        </p>

        <h3 className="text-2xl lg:text-4xl text-blue-800 font-bold mt-8 mb-3">
          Privacy
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          Our privacy policy sets out how we use and protect any information that you give us when you use this website. Please read our privacy policy carefully to understand our views and practices regarding your personal data and how we will treat it.
        </p>

        <h3 className="text-2xl lg:text-4xl text-blue-800 font-bold mt-8 mb-3">
          Intellectual Property
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
        </p>

        <h3 className="text-2xl lg:text-4xl text-blue-800 font-bold mt-8 mb-3">
          Limitation of Liability
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          The information provided by MHT Screening is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
        </p>

        <h3 className="text-2xl lg:text-4xl text-blue-800 font-bold mt-8 mb-3">
          Changes to These Terms
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          We may update our terms and conditions from time to time. We will notify you of any changes by posting the new terms and conditions on this page. You are advised to review these terms periodically for any changes. Changes to these terms and conditions are effective when they are posted on this page.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
