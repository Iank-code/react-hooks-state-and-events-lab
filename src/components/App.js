import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDark, setIsDark] = useState(false);
  const appClass = isDark ? "App dark" : "App light"
  const appName = isDark ? "Dark Mode" : "Light Mode"; 

  function toggleTheme(){
    setIsDark(!isDark)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleTheme}>{appName}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
