import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./ContactForm";



export default class ContactForm extends Component  {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <>
      <form className={styles.TaskEditor} onSubmit={this.handleSubmit}>
          <label htmlFor="name" className={styles.TaskEditor_label} >Name</label>
          <br/>
          <input
            id="name"
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}/>
          <br/>
        
          <label htmlFor="number" className={styles.TaskEditor_label} >Number</label>
          <br/>
          <input
            id="number"
            className={styles.TaskEditor_input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}/>
          <br/>
        <button className={styles.TaskEditor_button} type="submit">
          Add contact
        </button>
        </form>
        </>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};