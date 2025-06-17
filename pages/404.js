/**
 * @jest-environment jsdom
 */

import Link from "next/link";
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

const PageNotFound = ({ properties, globalproperties }) => {

  return (
    <div className="pagenotfound">


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
            <div>
                Page Not Found - Oops!<br></br><br></br>
                Go <Link href="/">Home</Link>. . .
            </div>
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

export const getStaticProps = async () => {
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

export default PageNotFound;
