import { useMediaQuery } from "react-responsive";
export function TextInputField(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <>
      <input
        onChange={(e) => props.onChange(e)}
        placeholder={props.placeHolder}
        style={{
          type: "text",
          height: "2em",
          margin: "2% 0 2% 0",
          padding: "2% 1% 2% 1%",
          width: "14em",
          fontSize: isBigScreen ? "20px" : "13px",
        }}
      />
    </>
  );
}
