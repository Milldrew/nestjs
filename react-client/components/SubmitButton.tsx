import { createProduct } from "../hooks/useCreateProduct";
import { useMediaQuery } from "react-responsive";
export function SubmitButton(props) {
  function handleClick() {
    console.log("hello");
    console.log(props.setFormVisibility);
    props.setFormVisibility("hidden");
    createProduct(props.product);
  }
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <>
      <div
        onClick={handleClick}
        style={{
          fontSize: isBigScreen ? "20px" : "13px",
          height: "1%",
          width: "25%",
          backgroundColor: "#F00",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fefefe",
          padding: "0% 0%",
          margin: "8% 0",
        }}
      >
        <p style={{}}>SUBMIT DATA</p>
      </div>
    </>
  );
}
