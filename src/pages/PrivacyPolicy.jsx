import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="space-y-10 p-4 lg:p-8">
      <header className="bg-blue-100/70 rounded-3xl lg:rounded-ss-none p-8 lg:p-14 mx-auto max-w-7xl">
        <h1 className="text-4xl lg:text-7xl text-blue-800 font-semibold font-sans leading-tight lg:leading-[1.15] mb-5">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-xl mb-5">
          This privacy policy explains how we handle your personal information. Please read it carefully.
        </p>
      </header>

      <section className="max-w-7xl mx-auto bg-white p-8 lg:p-14 rounded-3xl shadow-md">
        <h2 className="text-3xl lg:text-5xl text-blue-800 font-bold mb-5">
          Information We Collect
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          We collect various types of information in connection with the services we provide, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-5">
          <li>Personal identification information (name, email address, phone number, etc.)</li>
          <li>Log data (IP address, browser type, etc.)</li>
          <li>Cookies and usage data</li>
        </ul>

        <h3 className="text-2xl lg:text-4xl text-blue-800 font-bold mt-8 mb-3">
          How We Use Information
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          We use the collected information for various purposes, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-5">
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our services</li>
          <li>To monitor the usage of our services</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>

        <h3 className="text-2xl lg:text-4xl text-blue-800 font-bold mt-8 mb-3">
          Sharing Your Information
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
        </p>

        <h3 className="text-2xl lg:text-4xl text-blue-800 font-bold mt-8 mb-3">
          Your Consent
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          By using our site, you consent to our website privacy policy.
        </p>

        <h3 className="text-2xl lg:text-4xl text-blue-800 font-bold mt-8 mb-3">
          Changes to Our Privacy Policy
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          If we decide to change our privacy policy, we will post those changes on this page. We encourage you to review this privacy policy periodically for any changes.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
