import React, { useEffect, useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [inputText, setInputText] = useState("");
  const [misspelledWord, setMisspelledWord] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const checkSpelling = () => {
    const word = inputText.split(" ");
    const firstMisspell = word.find((item) => customDictionary[item]);
    // console.log("FMiss", firstMisspell);
    if (firstMisspell) {
      setMisspelledWord(firstMisspell);
      setSuggestion(customDictionary[firstMisspell]);
    } else {
      setMisspelledWord("");
      setSuggestion("");
    }
    console.log(word);
  };
  useEffect(() => {
    checkSpelling();
  }, [inputText]);

  console.log("inputText", inputText);
  return (
    <div className="App">
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        rows="5"
        placeholder="Enter text..."
        onChange={(e) => setInputText(e.target.value.toLocaleLowerCase())}
      ></textarea>
      {misspelledWord ? (
        <div className="suggestion">
          <p>
            Did you mean: <strong>{suggestion}</strong>?
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
