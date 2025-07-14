import React from "react";
import metaLogo from "../../public/meta.png";     
import googleLogo from "../../public/google.png";
import linkedinLogo from "../../public/linkedin.png";
import slackLogo from "../../public/slack.png";

export default function Companies() {
  return (
    <section className="companies-section">
      <div className="companies-bar">
        <img src={metaLogo} alt="Meta" />
        <img src={googleLogo} alt="Google" />
        <img src={linkedinLogo} alt="LinkedIn" />
        <img src={slackLogo} alt="Slack" />
      </div>
    </section>
  );
}
