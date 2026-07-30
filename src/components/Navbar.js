import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
// import Logo from "../assets/images/fitlife_logo.png";
import Logo from "../assets/images/fitlife_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        margin: "0px auto",
        width: "100%",

        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "0 0 32px 0", xs: "0 0 20px 0" },
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            borderRadius: "50%",
            // backgroundImage: "radial-gradient(white, rgb(47, 49, 66))",
            backgroundColor: "white",
            width: "64px",
            height: "64px",
            margin: "0 20px",
            padding: "5px",
          }}
        />
      </Link>
      <div
        className={menuOpen ? "menu-btn" : "menu-btn open"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="btn-burger"></div>
      </div>
      <Stack
        className="mainMenu"
        sx={{
          // display: { sm: "flex", xs: !menuOpen ? "flex" : "none" },
          top: { xs: !menuOpen ? "0" : "-100%" },
          flexDirection: { lg: "row", sm: "row" },
          alignItems: { lg: "flex-start", sm: "flex-start" },
          gap: "40px",
          fontSize: "24px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgb(244,70,48)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Home
        </Link>
        <Link
          to="/#exercises"
          style={{ textDecoration: "none", color: "rgb(244,70,48)" }}
          onClick={() => {
            setMenuOpen(!menuOpen); // Го затвора менито

            // Пронаоѓање на елементот во DOM и мазно скролање
            setTimeout(() => {
              const element = document.getElementById("exercises");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 150); // Мала пауза за рутерот безбедно да ја вчита страницата
          }}
        >
          Exercises
        </Link>
        <Link
          to="/supplementation"
          style={{ textDecoration: "none", color: "rgb(244,70,48)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Supplementation
        </Link>
        <Link
          to="/about"
          style={{ textDecoration: "none", color: "rgb(244,70,48)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          About
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
