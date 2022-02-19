import { useMediaQuery } from "react-responsive";
import { useState } from "react";
export function CreateProductButton(props) {
  function handleClick() {
    console.log("hello");
    props.setFormVisibility("visible");
  }
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  const isMedScreen = useMediaQuery({ query: "(min-width: 500px)" });
  const fontSize = (() => {
    if (isBigScreen) {
      return "20px";
    } else if (isMedScreen) {
      return "36px";
    } else {
      return "20px";
    }
  })();
  return (
    <>
      <p
        onClick={handleClick}
        style={{
          padding: "4%",
          position: "fixed",
          right: "5%",
          bottom: "5%",
          borderRadius: "100%",
          backgroundColor: "#ff0000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: isBigScreen ? "15vw" : "12vw",
          height: isBigScreen ? "15vw" : "12vw",
          textAlign: "center",
          fontSize: fontSize,
          color: "white",
        }}
      >
        {isBigScreen ? "Create Product" : "+"}
      </p>
    </>
  );
}
