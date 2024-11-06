import Tartalom from './componenst/Tartalom';
import React from "react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Könyváruház</h2>
      </header>
      <article>
        <React.Fragment>
          <Tartalom />
        </React.Fragment>

      </article>
    </div>
  );
}

export default App;
