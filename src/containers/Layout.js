import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import mapDispatchToProps from '../actions';

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { fetchOptions } = this.props;

    fetchOptions();
  }
  handleComponent(matchProps) {
    const { component: Content } = this.props;

    return (
      <div className="main-content">
        <Content {...matchProps} />
      </div>
    )
  }
  render() {
    const { component, ...rest } = this.props;

    return (
      <Route {...rest} render={::this.handleComponent} />
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

Layout.propTypes={
  component: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
