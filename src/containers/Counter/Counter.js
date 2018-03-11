import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { actionTypes } from '../../store/constant';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => {
            this.props.onAdd(5);
          }}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => {
            this.props.onSub(5);
          }}
        />
        <hr />
        <button onClick={() => { this.props.onStoreResult(this.props.ctr); }}>Store Result</button>
        <ul>
          {this.props.storedResults.map(item => (
            <li
              key={item.id}
              onClick={() => {
                this.props.onDeleteResult(item.id);
              }}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ctr: state.ctr.counter,
  storedResults: state.res.results,
});

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
  onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
  onAdd: value => dispatch({ type: actionTypes.ADD, value }),
  onSub: value => dispatch({ type: actionTypes.SUB, value }),
  onStoreResult: counter => dispatch({ type: actionTypes.STORE_RESULT, counter }),
  onDeleteResult: id => dispatch({ type: actionTypes.DELETE_RESULT, id }),
});

// function createConnect(...) {
//   return function connect(...) {};
// }
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
