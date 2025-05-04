import React from "react";
import "../index.css";

function Footer() {
  return (
    <footer className="footer bg-[var(--black-color)] text-[var(--highlight-color)]">
      <div className="text-center font-bold text-2xl">
        <p className="text-sm">©2025 GlobalNews All rights reserved.</p>
        <p className="text-sm">
          Developed by{" "}
          <a
            className="text-[var(--primary-color)]"
            href="https://kaushalsahu07.github.io/portfolio/"
          >
            Kaushal Sahu
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
