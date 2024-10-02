import React from 'react';
import './App.css';
import "@sakun/system.css";

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Window title="Démonstration Github Actions" resizeDisabled={false} details={["MGL869", "ETS Montréal"]}>
            <div className="window-pane" style={{ textAlign: 'center' }}>
                <h2>Application déployée 😀 (avec Caddy)</h2>
            </div>
        </Window>
    </div>
  );
}

function Window({ title, children, resizeDisabled, details }) {
  return (
      <div className="window" style={{width: '30rem'}}>
          <div className="title-bar">
              <button aria-label="Close" className="close"></button>
              <h1 className="title">{title}</h1>
              <button aria-label="Resize" disabled={resizeDisabled} className={resizeDisabled ? "hidden" : ""}></button>
          </div>
          <div className="details-bar">
              {details.map((detail, index) => (
                  <span key={index}>{detail}</span>
              ))}
          </div>
          <div className="separator"></div>
          {children}
      </div>
  );
}

export default App;
