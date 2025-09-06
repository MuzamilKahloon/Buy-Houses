import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CashOffer = ({
  title,
  description,
  containerClass = "w-full max-w-2xl bg-[#E9ECEF] border border-gray-300 p-6 md:p-8 font-primary",
  titleClass = "text-base md:text-lg font-bold mb-2",
  descriptionClass = "text-darkGray text-[14px] lg:text-[16px] leading-[28px] lg:leading-[30px]",
  inputClass = "w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400",
  buttonClass = "mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300 w-full",
}) => {
  // handle captcha value
  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <div className={containerClass}>
      {/* Conditional Header */}
      {title && <h1 className={titleClass}>{title}</h1>}
      {description && <p className={descriptionClass}>{description}</p>}

      {/* Divider line like screenshot */}
      {(title || description) && (
        <hr className="my-3 border-t border-gray-400" />
      )}

      {/* Form */}
      <form className="flex flex-col gap-4">
        {/* Property Address */}
        <div>
          <label className="block mb-1 text-sm font-medium" htmlFor="address">
            Property Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter Your Address"
            className={inputClass}
          />
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter Phone"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className={inputClass}
            />
          </div>
        </div>

        {/* CAPTCHA (real reCAPTCHA) */}
        <div>
          <label className="block mb-1 text-sm font-medium">CAPTCHA</label>
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LcRYcArAAAAAGDKZrl7FIl0mar5xzipjZTOM8Hi"
              onChange={handleCaptchaChange}
              className="transform scale-90 origin-center"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className={buttonClass}>
          Get My Fair Cash Offer »
        </button>
      </form>
    </div>
  );
};

export default CashOffer;
