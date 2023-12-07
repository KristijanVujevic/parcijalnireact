import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./Components/UserProfile";
import Forma from "./Components/Forma";

function App() {
  const [selectedUsername, setSelectedUsername] = useState("");

  const handleUsernameSubmit = (username) => {
    setSelectedUsername(username);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Parcijalni Ispit React</h1>
      <Forma onUsernameSubmit={handleUsernameSubmit} />
      {selectedUsername && <UserProfile username={selectedUsername} />}
    </div>
  );
}

export default App;
