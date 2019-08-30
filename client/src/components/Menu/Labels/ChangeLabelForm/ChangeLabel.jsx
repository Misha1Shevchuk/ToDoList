import React from "react";
import axios from "axios";
import classes from "../../stylesMenu/ChangeItemForm.module.css";

export default class ChangeLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNameLabel: this.props.element.label
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => this.setState({ newNameLabel: event.target.value });

  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.newNameLabel !== "") {
      console.warn(
        "Змінити мітку: " +
          this.props.element.label +
          " на " +
          this.state.newNameLabel
      );
      await axios
        .post(`/change-label`, {
          id_label: this.props.element.id_label,
          label: this.state.newNameLabel
        })
        .then(() => {
          this.props.showChangeLabelForm();
          this.props.getList();
        });
    } else {
      console.log("Enter new name of label");
    }
  };

  render() {
    return (
      <form
        className={classes.change_item_form}
        name="form-change-label"
        onSubmit={this.handleSubmit}
      >
        <input
          className={classes.input_name}
          type="text"
          value={this.state.newNameLabel}
          onChange={this.handleChange}
        />
        <br />
        <input
          className={classes.button_accept}
          type="submit"
          value="Змінити"
        />
        <input
          className={classes.button_cancel}
          type="reset"
          onClick={this.props.showChangeLabelForm}
          value="Скасувати"
        />
      </form>
    );
  }
}
