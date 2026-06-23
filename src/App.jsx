import { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [ans, setAns] = useState(1);

  function factorial() {
    let fact = 1;

    for (let i = 1; i <= Number(num); i++) {
      fact *= i;
    }

    setAns(fact);
  }

  return (
    <div>
      <h2>Factorial Calculator</h2>

      <input
        type="number"
        onChange={(e) => setNum(e.target.value)}
      />

      <button onClick={factorial}>
        Find Factorial
      </button>

      <p>Answer = {ans}</p>
    </div>
  );
}

export default App;