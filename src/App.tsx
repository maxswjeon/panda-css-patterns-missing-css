import { css } from "styled-system/css";
import { container } from "styled-system/patterns";

export default function App() {
  return (
    <div
      className={container({
        page: "A4",
        width: {
          _print: "210mm",
        },
        height: {
          _print: "297mm",
          base: "600px",
        },
        display: "flex",
        margin: "auto",
        flexDir: {
          _print: "row",
          base: "column",
          sm: "row",
        },
      })}
    >
      <div className={css({ flex: 2 })}></div>
      <div className={css({ flex: 1 })}></div>
    </div>
  );
}
