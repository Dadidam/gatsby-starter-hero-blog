import React from "react";

const Lang = ({ lang, onClick, selected }) => (
  <a
    style={{
      color: "yellow",
      marginRight: "10px",
      textDecoration: selected ? "underline" : "none",
      cursor: "pointer"
    }}
    onClick={onClick}
  >
    {lang}
  </a>
);

const LangSelector = props => (
  <div
    style={{
      background: "rebeccapurple",
      marginBottom: "1.45rem"
    }}
  >
    {console.log(props)}
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Lang lang="en" onClick={e => props.onLangClick("en")} selected={props.lang === "en"} />
        <Lang lang="ru" onClick={e => props.onLangClick("ru")} selected={props.lang === "ru"} />
      </h1>
    </div>
  </div>
);

export default LangSelector;
