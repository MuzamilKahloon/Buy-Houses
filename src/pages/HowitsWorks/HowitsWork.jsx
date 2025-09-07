import React from 'react';

const HowitsWorks = () => {
  /* ----------  helper: inject the real reCAPTCHA  ---------- */
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      /* optional clean-up if you ever un-mount this page */
      const scripts = document.querySelectorAll(
        'script[src*="google.com/recaptcha"]'
      );
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="max-w-screen-xl px-4 mx-auto ml-16 sm:px-6 lg:px-8">
      {/* -----------------------------------------------------------------
          SECTION 1 – HOW THE PROCESS WORKS
      ------------------------------------------------------------------ */}
      <div className="flex flex-col py-8 bg-white lg:flex-row lg:py-12">
        {/* ---------------- LEFT SIDE (steps) ---------------- */}
        <div className="flex-1 mb-8 ml-6 lg:pr-8 lg:mb-0">
          <h2 className="mb-6 text-xl font-bold text-center text-gray-800 sm:text-4xl md:text-4xl lg:text-left">
            How The Process Works
          </h2>

          {/* Step 1 */}
          <div className="flex mb-6">
            <div className="flex-shrink-0 w-20 md:w-24">
              <div className="mb-2">
                <span className="text-2xl font-bold text-gray-400 md:text-2xl">STEP 1</span>
              </div>
              <div className="flex">
                <div className="w-5 h-1 mr-1 bg-green-400" />
                <div className="w-5 h-1 mr-1 bg-gray-300" />
                <div className="w-5 h-1 bg-gray-300" />
              </div>
            </div>
            <div className="ml-4 md:ml-6">
              <p className="text-2xl font-bold text-black md:text-2xl">
                Tell us about your property –{' '}
                <span className="text-red-600">Quick, Easy & Free!</span>
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex mb-6">
            <div className="flex-shrink-0 w-20 md:w-24">
              <div className="mb-2">
                <span className="text-2xl font-bold text-gray-400 md:text-2xl">STEP 2</span>
              </div>
              <div className="flex">
                <div className="w-4 h-1 mr-1 bg-green-400" />
                <div className="w-4 h-1 mr-1 bg-green-400" />
                <div className="w-4 h-1 bg-gray-300" />
              </div>
            </div>
            <div className="ml-4 md:ml-6">
              <p className="text-2xl font-bold text-black md:text-2xl">
                If it meets our buying criteria, we'll contact you to set up a
                quick appointment
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex mb-6">
            <div className="flex-shrink-0 w-20 md:w-24">
              <div className="mb-2">
                <span className="text-2xl font-bold text-gray-400 md:text-2xl">STEP 3</span>
              </div>
              <div className="flex">
                <div className="w-4 h-1 mr-1 bg-green-400" />
                <div className="w-4 h-1 mr-1 bg-green-400" />
                <div className="w-4 h-1 bg-green-400" />
                <div className="w-4 h-1 ml-1 bg-gray-400" />
              </div>
            </div>
            <div className="ml-4 md:ml-6">
              <p className="text-2xl font-bold text-black md:text-2xl">
                We'll present you w/ a fair written,{' '}
                <span className="text-red-600">no-obligation offer</span>
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex mb-8">
            <div className="flex-shrink-0 w-20 md:w-24">
              <div className="mb-2">
                <span className="text-2xl font-bold text-gray-400 md:text-2xl">STEP 4</span>
              </div>
              <div className="flex">
                <div className="w-4 h-1 mr-1 bg-green-400" />
                <div className="w-4 h-1 mr-1 bg-green-400" />
                <div className="w-4 h-1 mr-1 bg-green-400" />
                <div className="w-4 h-1 bg-green-400" />
              </div>
            </div>
            <div className="ml-4 md:ml-6">
              <p className="text-2xl font-bold text-black md:text-2xl">
                We close at a local reputable title company, cash in your hands
                in as little as 7 days
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- RIGHT BLACK BOX ---------------- */}
        <div className="w-full mx-auto text-white bg-black rounded-lg md:p-8 lg:w-96 lg:mx-0">
          <h3 className="mb-6 text-2xl font-bold md:text-3xl">
            Listing vs. Selling To Us
          </h3>
          <p className="mb-2 text-base md:text-lg">Which route is quicker?</p>
          <p className="mb-2 text-base md:text-lg">
            Puts more cash in your pocket?
          </p>
          <p className="mb-6 text-base md:text-lg">Has less hassle?</p>

          <button className="w-full px-6 py-3 text-base font-bold text-black transition-colors bg-white rounded md:text-lg hover:bg-gray-100">
            See The Difference Here
          </button>
        </div>
      </div>

      {/* -----------------------------------------------------------------
          SECTION 2 – CONTENT + FORM
      ------------------------------------------------------------------ */}
      <div className="flex flex-col py-8 bg-white lg:flex-row lg:py-12">
        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="flex-1 mb-8 lg:pr-8 lg:mb-0">
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            <strong>Timeframe:</strong> Once we get your info, we're usually
            able to make you a fair all-cash offer within 24 hours. From there,
            we can close as quickly as 7 days... or on your schedule
            <em> (sometimes we can have a check in your hand the very same day!)</em>.
          </p>

          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
            Selling Your House Can Be A Quick And Simple Process
          </h2>

          <p className="mb-4 text-base text-gray-700 md:text-lg">
            Red Stick Property Solutions LLC buys houses in and around Baton
            Rouge (and other areas too!).{' '}
            <span className="font-bold underline">We're not listing your house</span>...
            we're actually the ones buying your house. Because{' '}
            <span className="font-bold underline">we pay cash</span>, we're able
            to close quickly... or on your schedule. Like we've mentioned, when
            you work with us there are no fees... like there are when you list
            your house with an agent. What this means to you is you don't have
            to worry about extra costs, having to come out of pocket to sell
            your house fast, or even getting your house ready for a sale (we'll
            buy your house as-is).
          </p>

          <p className="mb-6 text-base text-gray-700 md:text-lg">
            Don't worry about repairing or cleaning up your property.{' '}
            <span className="font-bold underline">
              We'll buy your house in as-is condition
            </span>
            ... no matter how ugly or pretty it is... no matter the location.
          </p>

          <h3 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
            See what we can offer you for your house...
          </h3>

          <button className="w-full px-6 py-3 text-base font-bold text-white transition-colors bg-orange-500 rounded md:w-auto md:text-lg hover:bg-orange-600">
            Send us some basic details about your house to get started ›
          </button>
        </div>

        {/* ---------------- RIGHT: TESTIMONIAL + FORM ---------------- */}
        <div className="w-full lg:w-96">
          {/* testimonial */}
          <div className="p-6 mb-8 bg-gray-100 rounded-lg">
            <h1 className="text-2xl font-bold text-black">Testimonials</h1>
            <p className="mb-4 text-base italic text-gray-700 md:text-lg">
              "Quite often{' '}
              <strong>investors are willing to pay cash for a home</strong> and
              with the recent tightening of financial restrictions, coupled with
              the growing number of complaints about low appraisals, having a
              cash buyer has become even more appealing."
            </p>
            <div className="text-right">
              <span className="text-xl font-bold text-blue-800 md:text-2xl">
                Forbes
              </span>
            </div>
          </div>

          {/* form */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <h4 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl">
              Get Your Fair Cash Offer: Start Below!
            </h4>

            <p className="mb-6 text-sm text-gray-600">
              We buy houses in ANY CONDITION in LOUISIANA. There are no
              commissions or fees and no obligation whatsoever. Start below by
              giving us a bit of information about your property or call (225)
              772-2747...
            </p>

            <form>
              {/* Address */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Property Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Phone + Email */}
              <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
                <div className="flex-1 mb-4 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* REAL reCAPTCHA */}
              <div className="mb-6">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LcRYcArAAAAAGDKZrl7FIl0mar5xzipjZTOM8Hi"
                />
              </div>

              <button className="w-full px-6 py-3 text-base font-bold text-white transition-colors bg-orange-500 rounded md:text-lg hover:bg-orange-600">
                Get My Fair Cash Offer ››
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------------------
          SECTION 3 – RECENT POSTS
      ------------------------------------------------------------------ */}
      <div className="flex flex-col py-8 bg-white lg:flex-row lg:py-12">
        <div className="flex-1 hidden lg:block" />
        <div className="w-full lg:w-96">
          <div className="p-6 bg-gray-100 rounded-lg">
            <h4 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl">
              Recent Posts
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-blue-500 hover:text-blue-700 hover:underline md:text-lg"
                >
                  How To Sell Your House Quickly At A Good Price
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-blue-500 hover:text-blue-700 hover:underline md:text-lg"
                >
                  Want To Sell Your House Quick in Banton Rouge? Read This First
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-blue-500 hover:text-blue-700 hover:underline md:text-lg"
                >
                  Why Should People Buy a House in Baton Rouge
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-blue-500 hover:text-blue-700 hover:underline md:text-lg"
                >
                  Easy Way to Sell Property-Walk Away-No cleanup-No repairs needed
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-blue-500 hover:text-blue-700 hover:underline md:text-lg"
                >
                  Selling a House in Probate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitsWorks;