import './style.css';
import { setupCounter } from './counter.js';
import { setupStore } from './store.js';
import './storeElement.js';
import gitHubLogo from '/github.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://github.com/softwaredeliverymanagement329/actions-demo" target="_blank">
      <img src="${gitHubLogo}" class="logo" alt="GitHub logo" />
    </a>
    <h1>Actions Demo</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <action-store></action-store>
    <div class="card">
      <div id="store">
        <button id="store-add-btn" type="button">Add</button>
        <input id="store-add-text" type="text" placeholder="store name"/>
        <table id="store-table"></table>
      </div>
    </div>
    <p class="read-the-docs">
      <a href="https://docs.github.com/en/actions/quickstart" target="_blank">
        GitHub Actions Quickstart
      </a>
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
setupStore(document.querySelector('#store'));
