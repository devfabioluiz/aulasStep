// App.tsx
import React, { useState } from 'react';
const utils = require('./utils');  // Importando a biblioteca sem tipagem

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleCapitalize = () => {
    setOutput(utils.capitalize(input)); // O TypeScript não sabe o tipo de `capitalize`
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleCapitalize}>Capitalizar</button>
      <p>{output}</p>
    </div>
  );
};

export default App;
