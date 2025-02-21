import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";


import Editor from "react-simple-code-editor";

import Prism from "prismjs";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum() {
    return 1 + 1;
  }`);

 
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => Prism.highlight(code, Prism.languages.javascript, "javascript")} // Use Prism.highlight directly
            padding={10}
            style={{
              fontFamily: '"Fira code","Fira Mono"',
              fontSize: 18,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            
            }}
          />
          </div>
          <div className="review">Review</div>
        </div>
        <div className="right"></div>
      </main>
    </>
  );
}

export default App;
