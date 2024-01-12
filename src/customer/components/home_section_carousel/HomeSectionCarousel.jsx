import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../home_section_card/HomeSectionCard";
import { Button } from "@mui/material";
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";

const HomeSectionCarousel = ({ data, sectionName }) => {
  var [activeIndex, setActiveIndex] = useState(0);

  var slidePrev = () => setActiveIndex(activeIndex - 1);
  var slideNext = () => setActiveIndex(activeIndex + 1);
  var syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    0: {
      items: 2,
      itemsFit: "contain",
    },
    568: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 5.5,
      itemsFit: "contain",
    },
  };

  const items = data?.slice(0, 10).map((item) => (
    <div className="">
      <HomeSectionCard product={item} />
    </div>
  ));

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            color="primary"
            onClick={slidePrev}
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftOutlined sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          animationType="fadeout"
          animationDuration={2000}
          mouseTracking
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            color="primary"
            onClick={slideNext}
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightOutlined
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
