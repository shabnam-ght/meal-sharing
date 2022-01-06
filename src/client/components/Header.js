import React from "react";
import "./Header.css";
import { useState } from "react";

function Header() {
  return (
    <>
      <div class="header">
        <a href="#default" class="logo">
          Meal Sharing
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </>
  );
}

export default Header;
