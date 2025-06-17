/**
 * @jest-environment jsdom
 */

import PortableText from "@sanity/block-content-to-react";
import Image from "next/image";
import Aboutheader from "../components/Aboutheader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { sanityClient } from "../sanity";

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
  marks: {
    link: ({ mark, children }) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

const about = ({ properties, globalproperties }) => {

  return (
    <div className="aboutPage">


            {globalproperties.map(
          (
            {
              _id,
              emaillink = "",
              facebooklink = "",
              iglink=""
            },
            index
          ) => (
            <div key={index}>
              <Header
                emaillink={emaillink}
                facebooklink={facebooklink}
                iglink={iglink}
              />
            </div>
          )
        )}
      <div className="container">
        {properties.map((post) => (
          <div className="aboutshow" key={post._id}>
            <div className="constraint">
            <div className="aboutblock textblock1">
              <div className="aboutheader">
                <Aboutheader />
              </div>
              <div className="about1col1">
                <div className="megaintro">
                  <PortableText blocks={post.intro} serializers={serializers} />
                </div>
                <div className="about1columns">
                  <PortableText
                    blocks={post.aboutcopy}
                    serializers={serializers}
                  />
                </div>
              </div>
            </div>
            <div className="textblock">
              <Image
                src="/Wearenotokheader.png"
                width={282}
                height={100}
                alt="Retro font that says We Are Not OK"
              />
              <PortableText
                className="textbody"
                blocks={post.wearenotok}
                serializers={serializers}
              />
            </div>
            <div className="col2">
              <div className="cola">
                <div className="textblock">
                  <Image
                    src="/Fundersheader.png"
                    width={198}
                    height={110}
                    alt="Retro font that says Funders"
                  />
                  <div className="textbody">
                    <PortableText
                      className="textbody"
                      blocks={post.fundercopy}
                      serializers={serializers}
                    />
                    <div className="logos">
                      <Image src="/lmcc.png" width={184} height={93} />
                      <Image src="/nysoa.png" width={352} height={84} />
                      <Image src="/puffin.jpeg" width={80} height={125} />
                      <Image src="/humanitiesNY.png" width={125} height={68} />
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image
                    src="/Gratitudeheader.png"
                    width={239}
                    height={120}
                    alt="Retro font that says Funders"
                  />
                  <PortableText
                    className="textbody"
                    blocks={post.gratcopy}
                    serializers={serializers}
                  />
                </div>
              </div>
              <div className="colb">
                <div className="textblock">
                  <Image
                    src="/Licensingheader.png"
                    width={495}
                    height={110}
                    alt="Retro font that says Funders"
                    className="licensing"
                  />
                  <PortableText
                    className="textbody"
                    blocks={post.licensingcopy}
                    serializers={serializers}
                  />
                </div>
                <div className="">
                  <Image
                    src="/Archivesheader.png"
                    width={366}
                    height={120}
                    alt="Retro font that says Funders"
                  />
                  <div className="textbody">
                    <PortableText
                      className="textbody"
                      blocks={post.archivescopy}
                      serializers={serializers}
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      {globalproperties.map(
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
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "about" ]`;
  const properties = await sanityClient.fetch(query);

  const globalquery = `*[_type == "global" ]`;
  const globalproperties = await sanityClient.fetch(globalquery);

  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    };
  } else {
    return {
      props: {
        properties,
        globalproperties,
      },
    };
  }
};

export default about;
