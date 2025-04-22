import "./App.css";

// import "@condev-ui/ui/es/index.css";
import { NavBar } from "./components/NavBar";
import { Hero } from "./sections/Hero";
import { ShaderSection } from "./sections/ShaderSection";
import { ShowcaseSection } from "./sections/ShowcaseSection";

function App() {
  return (
    <>
      <NavBar />

      <Hero />

      <ShaderSection />

      <ShowcaseSection />
    </>
  );

  // function handleClick() {
  //   alert("clicked");
  // }

  // return (
  //   <>
  //     <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
  //       <div>
  //         <CD.Button size="small">Small</CD.Button>
  //       </div>
  //       <div>
  //         <CD.Button size="medium">Medium</CD.Button>
  //       </div>
  //       <div>
  //         <CD.Button size="large">Large</CD.Button>
  //       </div>
  //     </div>
  //     <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
  //       <div>
  //         <CD.Button size="small" variant="filled">
  //           Filled
  //         </CD.Button>
  //       </div>

  //       <div>
  //         <CD.Button size="small" variant="light">
  //           Light
  //         </CD.Button>
  //       </div>

  //       <div>
  //         <CD.Button size="medium" variant="outline">
  //           Outline
  //         </CD.Button>
  //       </div>

  //       <div>
  //         <CD.Button size="large" variant="transparent">
  //           Transparent
  //         </CD.Button>
  //       </div>

  //       <div>
  //         <CD.Button size="large" variant="danger">
  //           Danger
  //         </CD.Button>
  //       </div>
  //     </div>
  //     <div>
  //       <CD.Button onClick={handleClick}>Click me</CD.Button>
  //     </div>
  //     <CD.Calendar />;
  //   </>
  // );
}

export default App;
