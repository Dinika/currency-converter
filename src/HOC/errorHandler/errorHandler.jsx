import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

const errorHandler = (WrappedComponent, axios) =>
  class extends Component {
    state = {
      error: null
    };

    constructor(props) {
      super(props);
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      const errorMessageOrChildren = this.state.error ? (
        <Segment stacked>
          <h4>Woops! There was an Error.</h4>
          <p>
            It is not you, it is me. I will try to fix the problem on my end. In
            the meantime, please try reloading the browser page and check if you
            have an Internet connection. If the problem persists, do not
            hesitate to contact me at my.special.email@thisservice.com
          </p>
        </Segment>
      ) : (
        <WrappedComponent {...this.props} />
      );
      return errorMessageOrChildren;
    }
  };

export default errorHandler;
