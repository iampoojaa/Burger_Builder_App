import React, { Component } from "react";
import Axuiliary from "../Auxiliary";
import Modal from "../../components/UI/Modal/Modal";

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.request.use((request) => {
        this.setState({ error: null });
        return request;
      });
      axios.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Axuiliary>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </Axuiliary>
      );
    }
  };
};

export default WithErrorHandler;
