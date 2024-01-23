import React from "react";

const Hero = () => {
  return (
    <>
      {/* container */}
      <div className="border-4 border-red-800 min-h-[80vh] md:h-[80vh] flex flex-col  md:flex-row">
        {/* image and text containers */}
        {/* text container */}
        <div className="w-full h-1/2 md:w-1/2 md:h-full border flex flex-col items-center justify-center gap-4">
          <div className="w-3/4 border text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </div>
          <div className="w-3/4 border">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            animi suscipit harum nemo quae? Aut, deleniti quae. Numquam
            assumenda debitis eaque ipsa obcaecati cupiditate modi temporibus
            aperiam. Architecto, aperiam voluptatum.
          </div>
          {/* CTA button */}
          <button className="border h-12 w-24 m-2">CTA</button>
        </div>
        {/* image container */}
        <img
          src="../assets/hero.jpg"
          className="w-full h-1/2 md:w-1/2 md:h-full border object-contain"
        />
      </div>
    </>
  );
};

export default Hero;
