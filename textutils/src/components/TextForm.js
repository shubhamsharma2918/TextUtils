import React, {useState} from "react";

export default function TextForm(props) {
const [text, setText] = useState("Enter text here");
console.log(props);
const upperCaseConverter = () => {
    // setText("Kya dekh rha hai bhai")
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");

};
const lowerCaseConverter = () => {
    // setText("Kya dekh rha hai bhai")
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");

};
const clearText = () => {
    setText("");
    props.showAlert("text is cleared!", "success");

};
const unsecuredCopyToClipboard = (text) => 
{ 
    const textArea = document.createElement("textarea"); 
    textArea.value=text; 
    document.body.appendChild(textArea); 
    textArea.focus();textArea.select(); 
try {
    document.execCommand('copy');

}
catch(err){
    console.error('Unable to copy to clipboard',err);
}
document.body.removeChild(textArea)
};

const copyToClipboard = () => {
    const content = document.getElementById('myBox').value;
    if (window.isSecureContext && navigator.clipboard) {
        navigator.clipboard.writeText(content);
    } else {
        unsecuredCopyToClipboard(content);
    }
    props.showAlert("text copied!", "success");

};
const removeExtraSpace = () => {
    const content = document.getElementById('myBox').value;
    const requiredContent = content.replace(/\s\s+/g,' ');
    setText(requiredContent);
    props.showAlert("removed extra space!", "success");

};

const handleOnChange = (event) => {
    setText(event.target.value);
};

  return (
    <>
    <div style={{color: props.mode==='light'? 'black': '#eee0e0'}}>
    <div className="container" >
      <div className="mb-3">
        <h5>{props.heading}</h5>
        <textarea
          className="form-control"
          id="myBox"
          rows="6   "
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='light'? 'white': 'grey', color: props.mode==='light'? 'black': 'white'}}
        ></textarea>
      </div>
      <button className="btn-sm btn-primary" onClick={upperCaseConverter}>Convert to Upper Case</button> 
      <button className="btn-sm btn-primary mx-1 my-1" onClick={lowerCaseConverter}>Convert to lower Case</button> 
      <button className="btn-sm btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button> 
      <button className="btn-sm btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy Text</button> 
      <button className="btn-sm btn-primary mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Text</button> 
    </div>

    <div className="container my-3">
        <h5>Your Text Summary</h5>
        <p>Your summary has {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} minutes required to read the summary</p>
        <h5>Preview</h5>
        <p>{text.length> 0? text: 'Enter Something in the textbox above to preview here'}</p>
    </div>
    </div>
    
    </>
  );
}
