import React from "react";
import { ReactComponent as IconThankYou } from "../../../../assets/images/IconThankYou.svg";
import "../ThankYou/thankYou.css";
export default function ThankYou() {
  return (
    <div className="thank-you">
      <IconThankYou />
      <h1 className="thank-you__title">Thank you!</h1>
      <p className="thank-you__text">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
