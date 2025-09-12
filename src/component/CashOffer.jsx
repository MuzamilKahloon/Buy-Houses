import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Notification from "./Notification";

const CashOffer = ({
  title,
  description,
  containerClass = "w-full max-w-2xl bg-[#E9ECEF] border border-gray-300 p-6 md:p-8 font-primary",
  titleClass = "text-base md:text-lg font-bold mb-2",
  descriptionClass = "text-darkGray text-[14px] lg:text-[16px] leading-[28px] lg:leading-[30px]",
  inputClass = "w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400",
  buttonClass = "mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300 w-full",
}) => {
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleCaptchaChange = (value) => {
    setRecaptchaToken(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      setNotification({
        show: true,
        message: 'Please complete the reCAPTCHA verification',
        type: 'error'
      });
      return;
    }

    const formData = new FormData(e.target);
    formData.append('g-recaptcha-response', recaptchaToken);
    
    try {
      setIsSubmitting(true);
      const response = await fetch('https://formspree.io/f/xwpnzlbr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setNotification({
          show: true,
          message: 'Form submitted successfully! We will contact you soon.',
          type: 'success'
        });
        e.target.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setNotification({
        show: true,
        message: 'Failed to submit form. Please try again later.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeNotification = () => {
    setNotification({ ...notification, show: false });
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
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/xwpnzlbr">
        {notification.show && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={closeNotification}
          />
        )}
        {/* Property Address */}
        <div>
          <label className="block mb-1 text-sm font-medium" htmlFor="address">
            Property Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter Your Address"
            className={inputClass}
            required
          />
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Phone"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className={inputClass}
              required
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
        <button 
          type="submit" 
          className={`${buttonClass} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Get My Fair Cash Offer »'}
        </button>
      </form>
    </div>
  );
};

export default CashOffer;
