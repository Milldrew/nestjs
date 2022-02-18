import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { TextArea } from "./TextArea";
import { TextInputField } from "./TextInputField";
import { PriceInput } from "./PriceInput";
import { SubmitButton } from "./SubmitButton";
export function CreateProductForm() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  const [product, setProduct] = useState({});
  function updateProductPrice(e) {
    Object.assign(product, { price: e.target.value });
    console.log(product);
  }
  function updateProductDescription(e) {
    Object.assign(product, { description: e.target.value });
    console.log(product);
  }
  function updateProductUrl(e) {
    Object.assign(product, { url: e.target.value });
    console.log(product);
  }
  function updateProductTitle(e) {
    Object.assign(product, { title: e.target.value });
    console.log(product);
  }
  return (
    <>
      <div
        style={{
          position: "absolute",
          padding: "0% 0 0 0",
          top: "50%",
          left: "50%",
          marginTop: "-40vh",
          marginLeft: "-40vw",
          width: "80vw",
          height: "80vh",
          backgroundColor: "#adadad",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: " 0% 10%",
            height: "80%",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffffdd",
          }}
        >
          <h2
            style={{
              position: "absolute",
              top: "14%",
              fontSize: isBigScreen ? "30px" : "20px",
            }}
          >
            Insert Product Data
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              position: "absolute",
              top: "30%",
            }}
          >
            <TextInputField
              onChange={updateProductTitle}
              placeHolder="Product Title"
            />
            <TextArea
              placeHolder="Product Description"
              onChange={updateProductDescription}
            />
            <TextInputField
              onChange={updateProductUrl}
              placeHolder="Product Image URL"
            />
            <PriceInput onChange={updateProductPrice} placeHolder="Set Price" />
          </div>
          <div
            style={{
              position: "absolute",
              top: "65%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SubmitButton />
          </div>
        </div>
      </div>
    </>
  );
}
