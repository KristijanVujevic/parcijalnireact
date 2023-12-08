import React, { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./Components/UserProfile";
import Forma from "./Components/Forma";
import Tema from "./Components/Tema";
import "./App.css";

export const Theme = createContext({ theme: "light", setTheme: () => {} });

function App() {
  const [theme, setTheme] = useState("light");
  const [selectedUsername, setSelectedUsername] = useState("");

  const handleUsernameSubmit = (username) => {
    setSelectedUsername(username);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <Theme.Provider value={{ theme, setTheme }}>
        <h1 style={{ textAlign: "center" }}>Parcijalni Ispit React</h1>
        <Tema />
        <Forma onUsernameSubmit={handleUsernameSubmit} />
        {selectedUsername && <UserProfile username={selectedUsername} />}
      </Theme.Provider>
    </div>
  );
}

export default App;
