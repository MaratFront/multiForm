import React from "react";
function useWidthWindow() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return width;
}
export default useWidthWindow;
