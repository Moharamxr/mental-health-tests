import React from "react";

const AboutUs = () => {
  return (
    <div className="container space-y-10 p-4 md:p-10">
      <section className="container w-full lg:w-4/5 p-6 md:p-10 py-10 md:py-16 bg-red-50 rounded-3xl mx-auto">
        <h3 className="text-2xl md:text-4xl text-red-800 text-center font-bold pb-6 md:pb-10">
          About Mental Health Tests
        </h3>
        <p className="text-red-800 text-base md:text-lg leading-relaxed px-4 md:px-5 lg:px-24">
          Mental health tests, also known as psychological assessments, are
          tools used by mental health professionals to evaluate an individual's
          mental health status and identify potential mental health conditions.
          These tests can be self-administered or conducted by a clinician and
          often involve a series of questions or tasks designed to assess
          various aspects of mental health, including emotional state, cognitive
          function, and behavioral patterns. Here's an overview of different
          types of mental health tests and their importance.
        </p>
      </section>
      {/* Resources Section */}
      <section
        className="bg-red-50 p-6 md:p-8 lg:p-14 mx-auto rounded-3xl max-w-7xl"
        id="resources"
      >
        <h2 className="text-2xl md:text-3xl text-red-800 font-bold mb-5">
          Mental Health Resources
        </h2>

        <ul className="space-y-4">
          <li>
            <a
              href="https://www.nami.org"
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              National Alliance on Mental Illness (NAMI)
            </a>
            <p>
              Provides advocacy, education, support, and public awareness for
              individuals and families affected by mental illness.
            </p>
          </li>
          <li>
            <a
              href="https://www.mentalhealth.gov"
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              MentalHealth.gov
            </a>
            <p>
              A comprehensive resource for information about mental health
              conditions and services available.
            </p>
          </li>
          <li>
            <a
              href="https://www.samhsa.gov"
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              Substance Abuse and Mental Health Services Administration (SAMHSA)
            </a>
            <p>
              Advances the behavioral health of the nation through resources and
              support for mental health and substance use disorders.
            </p>
          </li>
          <li>
            <a
              href="https://www.crisistextline.org"
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              Crisis Text Line
            </a>
            <p>
              Provides free, 24/7 support for those in crisis. Text HOME to
              741741 to connect with a crisis counselor.
            </p>
          </li>
          <li>
            <a
              href="https://suicidepreventionlifeline.org"
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              National Suicide Prevention Lifeline
            </a>
            <p>
              Offers free and confidential support for people in distress,
              prevention, and crisis resources. Call 1-800-273-8255.
            </p>
          </li>
          <li>
            <a
              href="https://www.adaa.org"
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              Anxiety and Depression Association of America (ADAA)
            </a>
            <p>
              Focuses on the prevention, treatment, and cure of anxiety,
              depression, OCD, PTSD, and co-occurring disorders.
            </p>
          </li>
          <li>
            <a
              href="https://www.nimh.nih.gov"
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              National Institute of Mental Health (NIMH)
            </a>
            <p>
              The lead federal agency for research on mental disorders. Provides
              information on a variety of mental health topics and research.
            </p>
          </li>
          <li>
            <a
              href="https://www.betterhelp.com"
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              BetterHelp
            </a>
            <p>
              An online platform providing access to professional counselors and
              therapists through chat, video, and phone sessions.
            </p>
          </li>
          <li>
            <a
              href="https://www.thetrevorproject.org"
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              The Trevor Project
            </a>
            <p>
              Provides crisis intervention and suicide prevention services to
              youth under 25. Offers 24/7 support via phone, text, and chat.
            </p>
          </li>
          <li>
            <a
              href="https://www.mhanational.org"
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              Mental Health America (MHA)
            </a>
            <p>
              Promotes mental health as a critical part of overall wellness.
              Offers tools and resources to help people understand and address
              mental health issues.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
