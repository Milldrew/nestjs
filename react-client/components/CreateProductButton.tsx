import { useState } from "react";
export function CreateProductButton() {
  const [btnColor, setBtnColor] = useState("#dea");
  function mouseUp() {
    setTimeout(() => setBtnColor("#dea"), 100);
    console.log("up");
  }
  return (
    <>
      <div
        onClick={() => console.log("clicked")}
        style={{
          position: "absolute",
          left: "85%",
          bottom: "5%",
          borderRadius: "100%",
          backgroundColor: btnColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "10vw",
          height: "10vw",
        }}
      >
        <p style={{ textAlign: "center" }}>Create Product</p>
      </div>
    </>
  );
}
