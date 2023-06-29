/**
 * @jest-environment jsdom
 */

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Exit from "../public/Xmark.svg";
import Contribute from "../public/contribute.png";
import Connect from "../components/Connect";
import Customhead from "../components/Customhead";

import Head from "next/head";

import { sanityClient, urlFor } from "../sanity";
import PortableText from "@sanity/block-content-to-react";
import Header from "../components/Header";
import FilterHeader from "../components/FilterHeader";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Arrow from "../public/Arrowdown.svg";
import Missing from "../public/Missingcard.png";
import Footer from "../components/Footer";
import { useRouter } from "next/router";



// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

function stories(q, properties, globalproperties) {
  const router = useRouter();

  const { location, decade, topic, type } = router.query;

  function change_textlocation(variable) {
    document.getElementById("locationbtn").innerHTML = variable;
  }

  function remove_textlocation() {
    document.getElementById("locationbtn").innerHTML = "";
  }

  function change_texttime(variable) {
    document.getElementById("timebtn").innerHTML = variable;
  }

  function remove_texttime() {
    document.getElementById("timebtn").innerHTML = "";
  }

  function change_textcat(variable) {
    document.getElementById("catbtn").innerHTML = variable;
  }

  function remove_textcat() {
    document.getElementById("catbtn").innerHTML = "";
  }

  function change_texttype(variable) {
    document.getElementById("typebtn").innerHTML = variable;
  }

  function remove_texttype() {
    document.getElementById("typebtn").innerHTML = "";
  }

  const [isOpen, setIsOpen] = React.useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isUp, setIsUp] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    setIsActive((current) => !current);
  };

  const slideUp = () => {
    setIsUp((current) => !current);
  };

  const slideDown = () => {
    setIsDown((current) => !current);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [show2, setShow2] = useState(false);
  const toggleDrawer2 = () => {
    setIsOpen2((prevState) => !prevState);
    setActive2(!isActive);
  };

  console.log(properties)
console.log(q.globalproperties)
// const menuColor = globalproperties[0].emaillink;

// console.log(menuColor)


  return (
    <>
      <div className={`storiesPage ${isActive ? "fixed" : "normal"}`}>
        <div className="filterscontainer">
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="bottom"
            className="bla bla bla"
          >
            <div className="columnContainers">
              <div className="col1a">
                <div className="heading">Location</div>
                <div className="list region">
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Chicago" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Chicago
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "DC" },
                      });
                      toggleDrawer();
                    }}
                  >
                    DC
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Detroit" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Detroit
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Florida" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Florida
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "India" },
                      });
                      toggleDrawer();
                    }}
                  >
                    India
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Los Angeles" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Los Angeles
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Louisiana" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Louisiana
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Minneapolis" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Minneapolis
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "New Jersey" },
                      });
                      toggleDrawer();
                    }}
                  >
                    New Jersey
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "New Mexico" },
                      });
                      toggleDrawer();
                    }}
                  >
                    New Mexico
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "North Carolina" },
                      });
                      toggleDrawer();
                    }}
                  >
                    North Carolina
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Northeast" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Northeast
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Northwest" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Northwest
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "NYC" },
                      });
                      toggleDrawer();
                    }}
                  >
                    NYC
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "San Diego" },
                      });
                      toggleDrawer();
                    }}
                  >
                    San Diego
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "San Fransisco" },
                      });
                      toggleDrawer();
                    }}
                  >
                    San Fransisco
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Seattle" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Seattle
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Southeast" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Southeast
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Southwest" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Southwest
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Tennessee" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Tennessee
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "UK" },
                      });
                      toggleDrawer();
                    }}
                  >
                    UK
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: "Washington" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Washington
                  </button>
                </div>
                <div className="heading">Decade</div>
                <div className="list time">
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, decade: "1960s" },
                      });
                      toggleDrawer();
                    }}
                  >
                    1960s
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, decade: "1970s" },
                      });
                      toggleDrawer();
                    }}
                  >
                    1970s
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, decade: "1980s" },
                      });
                      toggleDrawer();
                    }}
                  >
                    1980s
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, decade: "1990s" },
                      });
                      toggleDrawer();
                    }}
                  >
                    1990s
                  </button>
                </div>
              </div>

              <div className="col2a">
                <div className="heading">Topic</div>
                <div className="list topic">
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "American Coalition for Transperience",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    American Coalition for Transperience
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Angela Keyes Douglas",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Angela Keyes Douglas
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Anguksuar" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Anguksuar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Ballroom" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Ballroom
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Bay Area Gay Liberation",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Bay Area Gay Liberation
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Bebe Scarpie" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Bebe Scarpie
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Beth Elliiot" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Beth Elliiot
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Black Panthers" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Black Panthers
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Christopher Street Liberation Day",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Christopher Street Liberation Day
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Cockettes" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Cockettes
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Colette Goudie" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Colette Goudie
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Dee Farmer" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Dee Farmer
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Drag Magazine" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Drag Magazine
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Effeminists" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Effeminists
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Erickson Education Foundation",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Erickson Education Foundation
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Eve Adams" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Eve Adams
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "FBI" },
                      });
                      toggleDrawer();
                    }}
                  >
                    FBI
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Flaming Faggots" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Flaming Faggots
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Foundation for Personality Expression",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Foundation for Personality Expression
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "G.L.A.D." },
                      });
                      toggleDrawer();
                    }}
                  >
                    G.L.A.D.
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Gay Activist Alliance",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Gay Activist Alliance
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Gay Liberation Front",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Gay Liberation Front
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Goldie Glitters" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Goldie Glitters
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Greer Lankton" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Greer Lankton
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Imperial Court" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Imperial Court
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Intertribal Berdache Society",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Intertribal Berdache Society
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Jackie Curtis" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Jackie Curtis
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Jamison Green" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Jamison Green
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Johnny Science" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Johnny Science
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Lee Brewster" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Lee Brewster
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Marsha P. Johnson" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Marsha P. Johnson
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Men Against Sexism" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Men Against Sexism
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Mo B Dick" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Mo B Dick
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Olivia Records" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Olivia Records
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "On Our Backs" },
                      });
                      toggleDrawer();
                    }}
                  >
                    On Our Backs
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Pat Califia" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Pat Califia
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Pudgy Roberts" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Pudgy Roberts
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Pyramid Club" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Pyramid Club
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Queens Liberation Front",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Queens Liberation Front
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Radical Faeries" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Radical Faeries
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Radical Queens" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Radical Queens
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Reed Erickson" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Reed Erickson
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic:
                            "Revolutionary People's Constitutional Convention",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Revolutionary People's Constitutional Convention
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Robin Morgan" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Robin Morgan
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Sandy Stone" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Sandy Stone
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Stormé De Larverie" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Stormé De Larverie
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Street Transvestite Action Revolutionaries",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Street Transvestite Action Revolutionaries
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Sylvia Rivera" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Sylvia Rivera
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Third World Gay Revolution",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Third World Gay Revolution
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Tracey Africa Norman",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Tracey Africa Norman
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "Transsexual Action Organization",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    Transsexual Action Organization
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: "Tri-Ess" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Tri-Ess
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "United Ebony Council",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    United Ebony Council
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: {
                          ...router.query,
                          topic: "We Wah & Bar Che Ampee",
                        },
                      });
                      toggleDrawer();
                    }}
                  >
                    We Wah & Bar Che Ampee
                  </button>
                </div>
              </div>

              <div className="col3a">
                <div className="heading">Type</div>
                <div className="list type">
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Advertisement" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Advertisement
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Art" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Art
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Book" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Book
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Cartoon" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Cartoon
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Catalog" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Catalog
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Collage" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Collage
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Drawing" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Drawing
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Essay" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Essay
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Flyer" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Flyer
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Interview" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Interview
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Letter" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Letter
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Lyrics" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Lyrics
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Magazine" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Magazine
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Manifesto" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Manifesto
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Manuscript" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Manuscript
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Movie" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Movie
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Newsletter" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Newsletter
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Newspaper" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Newspaper
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Photo" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Photo
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Poem" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Poem
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Press Release" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Press Release
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Program" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Program
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Reference" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Reference
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Short Story" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Short Story
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: "Speech" },
                      });
                      toggleDrawer();
                    }}
                  >
                    Speech
                  </button>
                </div>
                <div className="hey">Hey!</div>
                <br></br>
                <Link href="/about">
                  <Image src="/contribute.png" width="395" height="286"></Image>
                </Link>
                <br></br>
                <br></br>
              </div>
            </div>
          </Drawer>
          <div className="headercontainer">
            <div>
              <Customhead />
              <div className="mobilenav">
                <button
                  className={` ${isActive2 ? "open" : null}`}
                  onClick={toggleDrawer2}
                >
                  <div className="bar-one" />
                  <div className="bar-three" />
                </button>
                <Drawer
                  open={isOpen2}
                  onClose={toggleDrawer2}
                  direction="left"
                  className="topnav"
                  overlayOpacity="0"
                  width="500px"
                >
                  <div>
                    <div className="navGroup">
                      <div>&nbsp;&nbsp;</div>
                      <div>
                        <Link href="/">Home</Link>
                      </div>
                      <div>
                        <Link href="/fullindex">Full Index</Link>
                      </div>
                      <div>
                        <Link href="/stories">Stories</Link>
                      </div>
                      <div>
                        <Link href="/about">About</Link>
                      </div>
                      <div>
                        <Link href="/events">Events</Link>
                      </div>
                      <div className="menuborderlast">&nbsp;&nbsp;</div>
                    </div>
                  </div>
                </Drawer>
              </div>
              <header>
              <div className="constraint flexbetween">
                <h1 className="link">
                  <Link href="/">Gender.Network</Link>
                </h1>
                <nav>
                  <div className="gr1">
                    <Link href="/fullindex">
                      <div className="linkgroup lt">
                        <div className="checkbox">
                          {" "}
                          <span>[</span>{" "}
                          <span className="selected1">
                            <Image
                              src={Exit}
                              alt="Selected"
                              width="25px"
                              height="25px"
                            />
                          </span>{" "}
                          <span>]</span>{" "}
                        </div>
                        Full Index
                      </div>
                    </Link>
                    <Link href="/stories">
                      <div className="linkgroup rt">
                        <div className="checkbox">
                          {" "}
                          <span>[</span>{" "}
                          <span className="selected2">
                            <Image
                              src={Exit}
                              alt="Selected"
                              width="25px"
                              height="25px"
                            />
                          </span>{" "}
                          <span>]</span>{" "}
                        </div>
                        Stories
                      </div>
                    </Link>
                  </div>
                  <div className="gr2">
                    <Link href="/about">
                      <div className="linkgroup lt">
                        <div className="checkbox">
                          {" "}
                          <span>[</span>{" "}
                          <span className="selected3">
                            <Image
                              src={Exit}
                              alt="Selected"
                              width="25px"
                              height="25px"
                            />
                          </span>{" "}
                          <span>]</span>{" "}
                        </div>
                        About
                      </div>
                    </Link>
                    <Link href="/events">
                      <div className="linkgroup rt">
                        <div className="checkbox">
                          {" "}
                          <span>[</span>{" "}
                          <span className="selected4">
                            <Image
                              src={Exit}
                              alt="Selected"
                              width="25px"
                              height="25px"
                            />
                          </span>{" "}
                          <span>]</span>{" "}
                        </div>
                        Events
                      </div>
                    </Link>
                  </div>
                </nav>
                </div>
              </header>
            </div>
            <div className="filterheaders">
            <div className="constraint">
              <button
                id="button"
                className={`${isActive ? "minus" : "add"}`}
                style={{
                  backgroundColor: isActive ? "#2cfadb" : "",
                  color: isActive ? "black" : "",
                }}
                onClick={toggleDrawer}
                onMouseEnter={slideUp}
                onMouseExit={slideDown}
              >
                Click to Filter
              </button>
              {/* 
        <div className="b2">Random ⟳</div> */}
              <button
                className="b3"
                type="button"
                onClick={() => {
                  router.push({
                    pathname: "/stories",
                  });
                }}
              >
                Reset
                </button></div>
            </div>{" "}
          </div>
        </div>

        <>
          <div className=" workGrid buttoncontainer">
            {location && (
              <div
                id="locationbtn"
                onClick={() => {
                  delete router.query.location;
                  router.push(router);
                  remove_textlocation();
                }}
              >
                <button>{location}</button>
              </div>
            )}

            {decade && (
              <div
                id="timebtn"
                onClick={() => {
                  delete router.query.decade;
                  router.push(router);
                  remove_texttime();
                }}
              >
                <button>{decade}</button>
              </div>
            )}

            {topic && (
              <div
                id="catbtn"
                onClick={() => {
                  delete router.query.topic;
                  router.push(router);
                  remove_textcat();
                }}
              >
                <button>{topic}</button>
              </div>
            )}

            {type && (
              <div
                id="typebtn"
                onClick={() => {
                  delete router.query.type;
                  router.push(router);
                  remove_textcat();
                }}
              >
                <button>{type}</button>
              </div>
            )}
          </div>
          <ResponsiveMasonry
            className="workGridx"
            columnsCountBreakPoints={{ 350: 1, 700: 2, 900: 3 }}
          >
            <Masonry columnsCount={3} gutter="35px">
              {q.properties.map(
                ({ _id, slug = "", coverphoto = "", title = "" }) => (
                  <Link passHref href="/work/[slug]" as={`/work/${slug}`}>
                    <div className="workCard">
                      <div className="workContainer">
                        {coverphoto && (
                          <Image
                            src={coverphoto}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAOvis////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                            width="0"
                            height="0"
                            sizes="(max-width: 700) 98vw,
                    (max-width: 900) 48vw,
                    31vw"
                            unoptimized
                            style={{ width: "31vw", height: "auto" }}
                            alt={title}
                          />
                        )}
                      </div>
                      {title}
                    </div>
                  </Link>
                )
              )}
              <div className="submitMore workCard">
                <Link href="/about">
                  <Image
                    src={Missing}
                    className="missing"
                    width="0"
                    height="0"
                    size="100vw"
                    unoptimized
                    style={{ width: "80%", height: "auto" }}
                  />
                </Link>
              </div>
            </Masonry>
          </ResponsiveMasonry>
        </>

        <div
          className="drawerpreview"
          onClick={toggleDrawer}
          style={{
            transform: isUp ? "scaleY(1)" : "",
          }}
        ></div>
               {q.globalproperties.map(
          (
            {
              _id,
              footertitle = "",
              footermenu = "",
              footercontact = "",
              emaillink = "",
              facebooklink = "",
              iglink=""
            },
            index
          ) => (
            <div key={index}>
              <Footer
                footertitle={footertitle}
                footermenu={footermenu}
                footercontact={footercontact}
                emaillink={emaillink}
                facebooklink={facebooklink}
                iglink={iglink}
              />
            </div>
          )
        )} 
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  var location;
  var decade;
  var topic;
  var type;

  location = context.query["location"];
  decade = context.query["decade"];
  topic = context.query["topic"];
  type = context.query["type"];


  var q;
  q = `*[_type=="story"] | order(title asc) `;

  const properties = await sanityClient.fetch(q);

  const globalquery = `*[_type == "global" ]`;
  const globalproperties = await sanityClient.fetch(globalquery);

  return {
    props: {
      properties,
      globalproperties,
    },
  };
};



export default stories;
