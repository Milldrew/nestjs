import { useMediaQuery } from "react-responsive";
export function TextArea(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <>
      <textarea
        onChange={(e) => props.onChange(e)}
        placeHolder={props.placeHolder || "placeholder"}
        style={{
          fontFamily: "inherit",
          width: "14em",
          fontSize: isBigScreen ? "20px" : "13px",
          height: "5em",
        }}
      />
    </>
  );
}
