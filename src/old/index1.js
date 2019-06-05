// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import { createStore } from 'redux'

function addItem(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [action.text, ...state]
    default:
      return state
  }
}
const store = createStore(
  addItem,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function render() {
  const items = store
    .getState()
    .map(item => (item ? '<li>' + item + '</li>' : ''))
  document.getElementById('itemlist').innerHTML = '<ul>' + items + '</ul>'
}

render()

store.subscribe(render)

document.getElementById('itemadd').addEventListener('click', () => {
  const itemText = document.getElementById('itemtext').value
  store.dispatch({ type: 'ADD_ITEM', text: itemText })

  document.getElementById('itemtext').value = ''
})
