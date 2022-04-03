import React from "react";
import "../assets/css/register.css";

/* style for this page is inside register.css file at the bottom */
function OwnerInfo() {
  return (
    <div className="OwnerInfo">
      <p>
        Made with ❤ by{" "}
        <a
          href="https://github.com/hosein7379m"
          target={"_blank"}
          rel="noreferrer"
        >
          Hosein
        </a>
      </p>
    </div>
  );
}

export default OwnerInfo;
