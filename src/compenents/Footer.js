import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function checkValue() {
    if (!inputValue.includes("@")) {
      alert("cette addresse mail n'est pas valide car ne contient pas de @");
    }
  }

  return (
    <footer className="lmj-footer">
      <h2>Pour les passionné·e·s de plantes 🌿🌱🌵</h2>
      <h3>Laissez-nous votre mail :</h3>
      <div>
        <input
          type="email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={checkValue}
          className="input"
        />
        <button type="button" className="btn" onClick={() => alert(inputValue)}>
          Soumettre
        </button>
      </div>
    </footer>
  );
}

export default Footer;
