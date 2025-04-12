import * as CD from "@condev-ui/ui";

import "./App.css";
import "@condev-ui/ui/es/index.css";

function App() {
  return (
    <>
      <CD.Button size="small" onClick={() => alert("按钮")}>
        按钮
      </CD.Button>
      <CD.Calendar />;
    </>
  );
}

export default App;
