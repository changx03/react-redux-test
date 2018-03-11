import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
        <button onClick={this.props.onStoreResult}>Store Result</button>
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
  ctr: state.counter,
  storedResults: state.results,
});

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
  onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
  onAdd: value => dispatch({ type: 'ADD', value }),
  onSub: value => dispatch({ type: 'SUB', value }),
  onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
  onDeleteResult: id => dispatch({ type: 'DELETE_RESULT', id }),
});

// function createConnect(...) {
//   return function connect(...) {};
// }
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
