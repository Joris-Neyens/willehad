import PropTypes from "prop-types";
import Image from "next/image";

export default function ShortAbout({ product }) {

  return (
    <section className="pb-5 py-lg-5 background-dark about-course">
      <div className="container py-lg-5">
            <h2 className="pt-1 text-center">Over de cursus</h2>
            <p className="pt-2 text-center mx-auto">{ product.description }</p>
      </div>
    </section>
  );
}

ShortAbout.propTypes = {
  product: PropTypes.object.isRequired,
}