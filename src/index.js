import { h, app } from 'hyperapp';

const state = {
  count: 0,
};

const actions = {
  down: value => state => {
  	return {count: state.count - value};
  },
  up: value => state => {
  	return {count: state.count + value};
  },
};

const view = (state, actions) => (
  <div class="wrap">
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
);

const main = app(state, actions, view, document.body);