import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";


import Editor from "react-simple-code-editor";
import Markdown from "react-markdown"
import Prism from "prismjs";
import axios from "axios"
import "./App.css";
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

function App() {
  const [code, setCode] = useState(`function sum() {
    return 1 + 1;
  }`);


  const [review,setReview]=useState("")

  async function reviewCode(){


   const response= await axios.post("http://localhost:3001/ai/get-review",{code})
  setReview(response.data)
  }
 
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
          <div onClick={reviewCode} className="review">Review</div>
        </div>
        <div className="right">
          <Markdown 
          rehypePlugins={[rehypeHighlight]}
          
          >{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
