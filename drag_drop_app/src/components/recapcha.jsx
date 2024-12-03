import ReCAPTCHA from "react-google-recaptcha";

// eslint-disable-next-line react/prop-types
const ReCaptchaComponent = ({ onCaptchaChange }) => {
   return (
      <div className="recaptcha-container">
         <ReCAPTCHA
            sitekey="6LcFgpEqAAAAAKVPnCMVjoY4GFudFmXNCc01Hp7D" 
            onChange={onCaptchaChange}
         />
      </div>
   );
};

export default ReCaptchaComponent;