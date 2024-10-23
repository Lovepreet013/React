import PropTypes from "prop-types";
import React from "react";
export class ClassPropType extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.string
  };
  render() {
    const {
      title,
      date,
      description
    } = this.props;
    return <div>
                <h1>The title : {title}</h1>
                <p>Date : {date.toLocaleString()}</p>
                <p>Description : {description}</p>
            </div>;
  }
}