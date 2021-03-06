import React from "react";
import ReactDOM from "react-dom";
import TableComponent from "./TableComponent.jsx";
import DateComponent from "./DateComponent.jsx";
import SearchComponent from "./SearchComponent.jsx";
import { itemsFetchData } from "./../middleware.js";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }
  componentDidMount() {
    if (!this.props.isStatic) {
      this.props.fetchData(
        "https://my-json-server.typicode.com/rsrahu3/Compaign5/data"
      );
    }
  }
  render() {
    if (this.props.isLoading) {
      return (
        <h2>
          <p>Loading…</p>
        </h2>
      );
    }
    let DateObj = {
      startDate: {
        name: "Start-Date"
      },
      endDate: {
        name: "End-Date"
      }
    };
    return (
      <div>
        <div>
          <DateComponent dateObj={DateObj.startDate} />
          <DateComponent dateObj={DateObj.endDate} />
          <SearchComponent />
        </div>
        <TableComponent data={this.props.data} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isStatic: state.staticData,
    isLoading: state.showLoader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
