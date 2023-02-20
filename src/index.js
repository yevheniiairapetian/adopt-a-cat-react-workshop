import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const animalsToAdopt = [
  {
      name: "Lucky",
      picture: "https://placekitten.com/200/287",
  },
  {
      name: "Symba",
      picture: "https://placekitten.com/200/139",
  },
  {
      name: "Léo",
      picture: "https://placekitten.com/200/90",
  },
  {
      name: "Milo",
      picture: "https://placekitten.com/200/194",
  },
  {
      name: "Charly",
      picture: "https://placekitten.com/200/179",
  },
];

const Card = (props) => {

  return (
    <div className="card">
        <h4>{ props.name }</h4>
        <img src={props.picture} alt={props.name}></img>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

function animalsToReactComponents() {
  return ( 
  <div>
      {animalsToAdopt.map((key) => (
        <Card name={key.name} picture={key.picture} />
      ))}
  </div>
  ); 
}

root.render(
  // [
  //   <Card name={ animalsToAdopt[0].name } />,
  //   <Card name={ animalsToAdopt[1].name } />,
  //   <Card name={ animalsToAdopt[2].name } />,
  //   <Card name={ animalsToAdopt[3].name } />,
  //   <Card name={ animalsToAdopt[4].name } />,
  // ]
  animalsToReactComponents()
);
