import React from 'react';
import './App.css';
import "@sakun/system.css";

function App() {
  return (
      <div className="App">
        <Window title="System.css">
          <div className="window-pane">
            Hello world!
          </div>
        </Window>

        <Window title="Search" resizeDisabled>
          <div className="modeless-dialog">
            <FieldRow label="Find:" inputId="text_find" />
            <ButtonRow />
          </div>
        </Window>
      </div>
  );
}

function Window({ title, children, resizeDisabled }) {
  return (
      <div className="window" style={{ width: '30rem' }}>
        <div className="title-bar">
          <button aria-label="Close" className="close"></button>
          <h1 className="title">{title}</h1>
          <button aria-label="Resize" disabled={resizeDisabled} className={resizeDisabled ? "hidden" : ""}></button>
        </div>
        <div className="separator"></div>
        {children}
      </div>
  );
}

function FieldRow({ label, inputId }) {
  return (
      <section className="field-row" style={{ justifyContent: 'flex-start' }}>
        <label htmlFor={inputId} className="modeless-text">{label}</label>
        <input id={inputId} type="text" style={{ width: '100%' }} placeholder="" />
      </section>
  );
}

function ButtonRow() {
  return (
      <section className="field-row" style={{ justifyContent: 'flex-end' }}>
        <button className="btn">Cancel</button>
        <button className="btn" style={{ width: '95px' }}>Find</button>
      </section>
  );
}

export default App;
