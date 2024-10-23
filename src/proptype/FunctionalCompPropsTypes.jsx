import PropTypes from "prop-types";
import React from "react";

export const FunctionalCompPropsTypes = ({title = "PropTypes", date, description}) => {
    return(
        <div>
            <h1>Title : {title}</h1>
            <p>{date.toLocaleString()}</p>
            <p>{description}</p>
        </div>
    )
}

FunctionalCompPropsTypes.propTypes = {
    title : PropTypes.string.isRequired,
    date : PropTypes.instanceOf(Date).isRequired,
    description : PropTypes.string
}

// FunctionalCompPropsTypes.defaultProps = { //default props if not provided, this will be Removed in future major release of React
//     title : "PropTypes"
// }

//Another example :

// const foods = [{"foodName": "bread", "isVegan": true }]; is passed in favouriteFoods props

const App = ({ name, age, hasPet, favouriteFoods }) => {
  return (
    <div>
      <h1>Name: { name }</h1>
      <h2>Age: { age }</h2>
      <h2>Has pet: { hasPet.toString() }</h2>
      <h2>Favorite foods</h2>
      <div>
        {favouriteFoods.map((f, index) => (
          <p key={index}>Food name: { f.foodName }, Is vegan:  { f.isVegan.toString() }</p>
        ))}
      </div>
    </div>
  );
};

// Define PropTypes here
App.prototypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    hasPet : PropTypes.boolean,
    favouriteFoods : PropTypes.arrayOf(
        PropTypes.shape({
            foodName : PropTypes.string,
            isVegan : PropTypes.boolean
        })
    )
}
// Your code ends here
