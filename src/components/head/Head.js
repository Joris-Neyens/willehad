import NextHead from "next/head";
import PropTypes from "prop-types";

export default function Head({ title = "", description }) {
  return (
    <NextHead>
      <title>
        Willehad | {title}
      </title>git push 
      <meta name="description" content={description}></meta>
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}