import React from "react";
import { useSelector } from "react-redux";
const Footer = () => {
  const langage = useSelector((state) => state.langage.value);
  return (
    <footer className="w-full text-center h-20 flex items-center justify-center">
      <p>
        {" "}
        {langage.footer_message}{" "}
        <a
          href="http://twitter.com/0xZales"
          className="hover:text-white text-primary"
          target="_blank"
        >
          Rozales
        </a>
      </p>
      {/*  */}
    </footer>
  );
};

export default Footer;
