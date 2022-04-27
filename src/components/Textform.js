
import React , {useState} from 'react';

export default function Textform(props) {
  const [text,setText] = useState('');


  
const handleUpChange=()=>{
    //uppercase wala button hai
    let newText =text.toUpperCase();
    console.log(newText) 
    setText(newText);
  console.log("Button clicked");
 
}

const handleLoChange=()=>{
  //uppercase wala button hai
  let newText =text.toLowerCase();
  console.log(newText) 
  setText(newText);
console.log("Button clicked");

}

const clr=()=>{
  //uppercase wala button hai
 setText('')
;
}
const handleOnChange=(event)=>{

  console.log("Onchange occcurs");
  
  setText(event.target.value);
}
 
  // setText(text)
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="my-2">
        <textarea
          className="form-control"
             value={text}
          onChange={handleOnChange}
          id="mytxt"
          rows="8"
        ></textarea>
        <br></br>
        <button className="btn btn-secondary mx-3"
            onClick={handleUpChange}
        >
        Convert to UpperCase
      </button>
      <button className="btn btn-secondary"
            onClick={handleLoChange}
        >
        Convert to LowerCase
      </button>
      <button className="btn btn-secondary mx-3"
            onClick={clr}
        >
      Clear text
      </button>
      </div>
          <div className="container">
          <h1>Text summary</h1>
          <p>{text.split(" ").length} words and {text.length}  characters</p>
          <h1>Preview</h1>  
          <p>{text}</p>
        </div>
    </>
  );
}
