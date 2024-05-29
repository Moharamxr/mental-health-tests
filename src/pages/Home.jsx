import React from "react";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import WaterDrop from "../assets/bubble-red.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const supportItems = {
    "Things to try on your own": {
      text: "Dozens of community-sourced tools, filtered for the help you need. Take back control.",
    },
    "Connect with others": {
      text: "Interact with others who have dealt with or are dealing with the same issues as you.",
    },
    "Find a Provider": {
      text: "Vetted (and used) by MHA staff. From telemedicine to traditional talk therapy to yoga and more.",
    },
    "Learn about treatments": {
      text: "Learn more about mental health conditions, recommended steps towards recovery, and where to find help.",
    },
  };

  const mentalHealthTopics = [
    "Abuse",
    "Addiction",
    "ADHD",
    "Anxiety",
    "Bipolar",
    "Borderline",
    "Depression",
    "Eating Disorder",
    "Loneliness",
    "OCD",
    "Postpartum Depression",
    "Psychosis",
    "Relationships",
    "Self-Harm",
    "Sleep",
    "Suicide",
    "Tardive Dyskinesia",
    "Trauma & PTSD",
  ];

  const phrases = [
    "Am I depressed or just sad?",
    "I don’t want to live, but I don’t want to die.",
    "Need to talk to someone? (Warmlines)",
    "I hate myself",
    "Does depression go away on its own?",
    "I think about death all the time",
    "Are there types of depression?",
    "I can’t get over things that happened in the past",
  ];

  const navigate = useNavigate();

  const handleTakeTestBtn = (test) => {
    navigate(`/tests/${test}`);
  };

  return (
    <div className="space-y-10 p-4 lg:p-8">
      {/* Header Section */}
      <header className="bg-blue-100/70 rounded-3xl lg:rounded-ss-none p-8 lg:p-14 mx-auto max-w-7xl">
        <h1 className="text-4xl lg:text-7xl text-blue-800 font-semibold font-sans leading-tight lg:leading-[1.15] mb-5">
          MHT Screening
        </h1>
        <p className="text-gray-500 text-xl mb-5">
          Take the first steps to mental health! <br />
          Information, resources, and free & confidential mental health
          screening.
        </p>
        <span onClick={() => navigate("/tests")}>
          <PrimaryBtn text="TAKE A MENTAL HEALTH TEST" />
        </span>
      </header>

      {/* Test Section */}
      <section className="max-w-7xl mx-auto" id="tests">
        <h2 className="font-bold text-3xl lg:text-5xl text-blue-800 leading-relaxed mb-10">
          Take a Mental Health Test
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {["ADHD", "Anxiety", "Depression"].map((item) => (
            <div
              key={item}
              className="bg-blue-100/70 rounded-3xl p-8 flex items-center gap-5 justify-between flex-col space-y-5 cursor-pointer hover:bg-blue-200/70 transition-colors ease-in"
            >
              <span className="text-3xl font-bold text-blue-800">
                {item} Test
              </span>
              <p className="text-blue-800 text-center">
                This test will help you understand more about {item}. Answer the
                questions honestly for accurate results.
              </p>
              <span onClick={() => handleTakeTestBtn(item)}>
                <PrimaryBtn text="TAKE TEST" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section
        className="bg-red-50 p-8 lg:p-14 mx-auto rounded-2xl max-w-7xl"
        id="support"
      >
        <h2 className="text-center font-bold text-3xl lg:text-5xl text-red-500 opacity-80 leading-relaxed mb-10">
          Find Support that Works for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {Object.keys(supportItems).map((item, index) => (
            <div
              key={index}
              className="bg-red-50 hover:bg-white rounded-2xl p-8 gap-3 flex flex-col items-center transition-colors ease-in"
            >
              <img src={WaterDrop} alt={`${item} icon`} className="w-20" />
              <h4 className="font-bold text-2xl lg:text-3xl text-red-500 opacity-80 mt-2 text-center">
                {item}
              </h4>
              <p className="text-gray-600 font-semibold py-5 text-center">
                {supportItems[item].text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mental Health Conditions Section */}
      <section className="grid grid-cols-12 lg:grid-rows-4 gap-5 p-10">
        <div className="rounded-3xl rounded-br-none p-8 bg-blue-100 lg:row-start-1 row col-span-full lg:row-end-3 lg:col-start-3 lg:col-end-7">
          <h2 className="text-3xl text-blue-800 font-bold mb-5">
            Mental Health Conditions{" "}
          </h2>
          <div className="flex flex-wrap gap-3">
            {mentalHealthTopics.map((topic, index) => (
              <span
                key={index}
                className="text-blue-800 font-semibold hover:underline "
              >
                {topic} {index < mentalHealthTopics.length - 1 && " | "}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl rounded-tl-none p-8 bg-blue-800 col-span-full lg:row-start-2 lg:row-end-5 lg:col-start-7 lg:col-end-11">
          <h2 className="text-3xl text-white font-bold mb-5">
            Popular Mental Health Articles{" "}
          </h2>
          <div className="grid grid-cols-1 gap-5">
            {phrases.map((phrase, index) => (
              <p
                key={index}
                className="text-white font-semibold hover:underline"
              >
                {phrase}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* About Mental Health Tests Section */}
      <section className="container w-full lg:w-4/5 p-10 py-16 bg-red-50 rounded-3xl mx-auto">
        <h3 className="text-4xl text-red-800 text-center font-bold pb-10">
          About Mental Health Tests
        </h3>
        <p className="text-red-800 text-lg leading-relaxed px-5 lg:px-24">
          Mental health tests, also known as psychological assessments, are
          tools used by mental health professionals to evaluate an individual's
          mental health status and identify potential mental health conditions.
          These tests can be self-administered or conducted by a clinician and
          often involve a series of questions or tasks designed to assess
          various aspects of mental health, including emotional state, cognitive
          function, and behavioral patterns. Here's an overview of different
          types of mental health tests and their importance.{" "}
        </p>
      </section>

      {/* Testimonials Section */}
      <section
        className="bg-blue-50 p-8 lg:p-14 mx-auto rounded-3xl max-w-7xl"
        id="reviews"
      >
        <h2 className="text-3xl text-blue-800 font-bold mb-5">
          What People Are Saying
        </h2>
        <div className="space-y-5">
          {["John Doe", "Jane Smith", "Alex Johnson"].map((name, index) => (
            <blockquote
              key={index}
              className="bg-white p-5 rounded-xl shadow-md"
            >
              <p className="text-gray-700 italic">
                "This website has been incredibly helpful for me. The tests are
                easy to take and the resources are very informative."
              </p>
              <cite className="text-blue-800 font-bold mt-3 block">
                - {name}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="bg-blue-50 p-8 lg:p-14 mx-auto rounded-3xl max-w-7xl"
        id="contact"
      >
        <h2 className="text-3xl text-gray-800 font-bold mb-5">Contact Us</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Message
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <PrimaryBtn text="SEND MESSAGE" />
        </form>
      </section>

      {/* Resources Section */}
      <section
        className="bg-red-50 p-8 lg:p-14 mx-auto rounded-3xl max-w-7xl"
        id="resources"
      >
        <h2 className="text-3xl text-red-800 font-bold mb-5">
          Mental Health Resources
        </h2>

        <ul className="space-y-4">
          <li>
            <a
              href="https://www.nami.org"
              target="_blank"
              className="text-blue-500 hover:underline"
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
            >
              The Trevor Project
            </a>
            <p>
              Provides crisis intervention and suicide prevention services to
              LGBTQ youth under 25. Offers 24/7 support via phone, text, and
              chat.
            </p>
          </li>
          <li>
            <a
              href="https://www.mhanational.org"
              target="_blank"
              className="text-blue-500 hover:underline"
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

export default Home;
