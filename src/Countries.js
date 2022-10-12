import React from "react";

export default function Countries(props) {
  return (
    <ul className="Countries">
      <li>
        {props.countries.map(function (country, index) {
          return (
            <li key={index}>
              The capital city of {country.name} is {country.capital}{" "}
            </li>
          );
        })}
      </li>
    </ul>
  );
}
