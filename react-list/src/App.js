import List from "./components/List";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(true);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `(${count}) Inbox - ClickMail`;
  });

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Clickmail</button>

        {showMessage ? <p>You have {count} new emails.</p> : ""}

        <br></br>

        <button
          onClick={() => {
            setShowMessage(true);
          }}
        >
          Show Message
        </button>

        <button
          onClick={() => {
            setShowMessage(false);
          }}
        >
          Hide Message
        </button>
      </div>

      <h1>Hello</h1>
      <form>
        <List />
      </form>
      <h1>Bye</h1>
    </>
  );
}

export default App;
