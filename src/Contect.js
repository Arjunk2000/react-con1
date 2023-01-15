import myContext from "./myContext";
import { useContext } from "react";

function Contect() {
  const { isDark } = useContext(myContext);

  return (
    <div
      style={{
        backgroundColor: `${isDark ? "black" : "white"}`,
        color: `${isDark ? "lightgreen" : "black"}`
      }}
    >
      <h1>To connect contact surasgararjun2000@gmail.com</h1>
    </div>
  );
}
export default Contect;
