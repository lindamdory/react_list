import List from "./components/List";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  // Update the document title using the browser API
  // csak egy paraméter van:
  useEffect(() => {
    document.title = `(${count}) Inbox - ClickMail`;
  });

  // // két paraméter, tömbben count változó:
  // useEffect(() => {
  //   document.title = `(${count}) Inbox - ClickMail`;
  // }, [count]);

  // // két paraméter van, üres tömb, csak a kezdeti értéket írja ki, nem változik?
  // useEffect(() => {
  //   document.title = `(${count}) Inbox - ClickMail`;
  // }, []);

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
