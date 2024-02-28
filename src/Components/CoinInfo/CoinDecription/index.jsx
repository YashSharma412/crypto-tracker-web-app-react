import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const CoinDescription = ({ heading, description }) => {
  const para = useRef(null)
  const shortDesc =
    description.split(" ").slice(0, 40).join(" ") +
    `<span id="read"> read more...</span>`;
  const longDesc = description + `<span id="read"> read less...</span>`;
  const [descFull, setDescFull] = useState(false);

  useEffect(() => {
    // Add event listener to the parent paragraph element to handle click on dynamically added span
    const handleClick = (event) => {
      if (event.target.id === "read") {
        event.stopPropagation()
        setDescFull(!descFull);
      }
    };
    // Attach event listener when component mounts
    if (para.current) {
      para.current.addEventListener("click", handleClick);
    }
    // Cleanup function to remove event listener when component unmounts or updates
    return () => {
      if (para.current) {
        para.current.removeEventListener("click", handleClick);
      }
    };
  }, [descFull]);


  return (
    <div className="info__wrapper">
      <h2 className="info__heading">{heading}</h2>
      {
        !description && <p>No description provided. Sorry for the inconvinence</p>
      }

      {description && description.split(" ").length > 40 ? (
        <p
          ref={para}
          className="info__description"
          dangerouslySetInnerHTML={{
            __html: !descFull ? shortDesc : longDesc,
          }}
        />
      ) : (
        <p
          className="info__description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      )}
    </div>
  );
};

export default CoinDescription;
