import React from "react";
import axios from "axios";
import NewLabelForm from "../NewLabelForm/NewLabelForm";
import ItemLabel from "../ItemLabel/LiLabel";
import classes from "../../stylesMenu/MenuItems.module.css";

export default class MenuLabels extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      showForm: false,
      showList: false
    };
  }

  toogleVisibilityForm = () => {
    if (this.state.showForm) {
      this.setState({ showForm: false });
    } else {
      this.setState({ showForm: true });
    }
  };

  toogleVisibilityList = () => {
    if (this.state.showList) {
      this.setState({ showList: false, showForm: false });
    } else {
      this.setState({ showList: true });
    }
  };

  componentWillMount = () => this.getList();

  getList = async () => {
    await axios.post(`/labelsList`).then(response => {
      this.setState({
        list: response.data.map(label => {
          return (
            <ItemLabel
              getList={this.getList}
              key={label.id_label}
              element={label}
            />
          );
        })
      });
    });
  };

  render() {
    return (
      <div className={classes.items_block}>
        <div className={classes.head} onClick={this.toogleVisibilityList}>
          <h4>Мітки</h4>
          <button className={classes.head_button_plus}> + </button>
        </div>
        {this.state.showList ? (
          <div className={classes.items_content}>
            <ul className={classes.menu_list}>{this.state.list}</ul>
            {this.state.showForm ? (
              <NewLabelForm
                getList={this.getList}
                toogleVisibilityForm={this.toogleVisibilityForm}
              />
            ) : (
              <button
                className={classes.new_item_button}
                onClick={this.toogleVisibilityForm}
              >
                Нова мітка
              </button>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}
