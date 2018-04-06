/* 3rd party imports */
import React, { Component } from 'react';

/* relative imports */
import Button from '../button';

const add1 = () => console.log('hey 1');
const add2 = () => console.log('hey 2');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['item1'],
    };
  }

  render() {
    return (
      <div>
      <h1>React example</h1>
      <input type="text" />
      <Button action={add1} red>doSomething</Button>
      <Button action={add2}>doSomethingElse</Button>
      <section>
      </section>
      { this.state.items }
      </div>
      );
  }
}