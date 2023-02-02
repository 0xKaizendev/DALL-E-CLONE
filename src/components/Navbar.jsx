import React from "react";
import { styles, Link, SiOpenai } from "../index.js";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { MdLanguage } from "react-icons/md";
import { useState } from "react";
import { decrement, increment } from "../store/counterSlice.js";
import Hamburger from "hamburger-react";
const Navbar = () => {
  const [lang, setLang] = useState("Français");
  const [isOpen, setOpen] = useState(false);
  const langage = useSelector((state) => state.langage.value);
  const dispatch = useDispatch();
  const changeLang = () => {
    if (lang === "English") {
      setLang("Français");

      dispatch(decrement());
    } else {
      setLang("English");

      dispatch(increment());
    }
  };
  return (
    <nav
      className={`w-full ${styles.flex_box_row} justify-between border-b border-b-primary min-h-max py-2 `}
    >
      <IconContext.Provider value={{ size: "50px" }}>
        <Link
          to="/"
          className="md:h-3/4 text-center ml-1 flex items-end justify-center md:gap-1 gap-0"
        >
          <SiOpenai className="md:h-10 h-10 text-primary2" />{" "}
          <h1 className="md:text-lg font-semibold text-primary2 text-lg">
            OpenAI
          </h1>
        </Link>
      </IconContext.Provider>
      <div className=" items-center justify-center gap-2 flex ">
      <div
          className="flex items-center justify-center gap-2 border   md:px-4 px-2 h-8 cursor-pointer text-xs"
          onClick={changeLang}
        >
          <MdLanguage className="w-6 h-6" />
          <p>{lang}</p>
        </div>
        <Link
          className="bg-white text-primary font-medium md:px-4 px-8 text-sm mx-4 py-2 rounded-md "
          to="create"
        >
          {langage.header_button}
        </Link>
      
      </div>
    </nav>
  );
};

export default Navbar;
