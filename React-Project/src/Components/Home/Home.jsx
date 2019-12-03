import React from "react";
import Slider from "../Slider/Slider";

function Home(props) {
  const {images, currentIndex, goToNextSlide, goToPrevSlide} = props
  return (
    <>
      <Slider images={images} currentIndex={currentIndex} goToNextSlide={goToNextSlide} goToPrevSlide={goToPrevSlide} />
      <h1 className="winterh1">
        How To Get Ready With Plaid For This Winter's Fashion Season!
      </h1>
      <div className="fashion">
        <h2 className="top-story"> The Top Story</h2>
        <p className="content">
          “Once you can accept the universe as matter expanding into nothing
          that is something, wearing stripes with plaid comes easy,” Albert
          Einstein, the greatest nuclear physicist of the 20th century and an
          unlikely fashion muse, once averred. Turns out Al, who had his own
          distinctive brand of disheveled chic, was on to something beyond a
          mere theory of relativity. (Which is not, by the way, a treatise on
          how to get along with your family at dinner next week.) Far beyond its
          association with detested school uniforms, plaid, worn with or without
          stripes, has a rich backstory: Though usually associated with
          kilt-wearing Scottish Highlanders, there is a much older history. A
          shard of the fabric was found buried with the remains of “the Cherchen
          Man,” a 3,000-year-old mummy uncovered in the western Chinese desert.
        </p>
      </div>

      <div className="fashion">
        <h2> Some Options To Add To Your Closet!</h2>
        <p className="content">
          Mulberry Sophia jacket, $1,415, mulberry.com; Mulberry Marianne skirt,
          $625, mulberry.com
        </p>
        <p className="content">
          Topshop Boutique check peg pants, $150, topshop.com
        </p>
        <p className="content">
          Nicole Saldanña Deborah plaid pumps, $357, farfetch.com
        </p>
        <p className="content">
          House of Dagmar beata cardigan, $243, houseofdagmar.com; House of
          Dagmar teja skirt, $298, houseofdagmar.com
        </p>
      </div>
    </>
  );
}

export default Home;
