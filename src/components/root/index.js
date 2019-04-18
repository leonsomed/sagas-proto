import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../redux/actions';

class Root extends Component {
  state = {}

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div>
        root
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  getTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);