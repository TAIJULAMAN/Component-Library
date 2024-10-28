import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Sample Modal"
        content="This is an example modal with different styling options."
        variant="animated" 
      />
    </div>
  );
}

export default App;
