import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes('<script>')) {
      alert("No script tag allowed!");
      newText = newText.replace("<script>", "");
    }

    setText(newText);
  }
    
  return (
    <>
      <textarea 
      value={text}
      onChange={handleChange}
      className="textarea" 
      placeholder="Enter your text "
      spellCheck="false"
      />
      <Warning />
  </>
  )
}
