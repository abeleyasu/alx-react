// modules/body/body.js
import $ from 'jquery';
import _ from 'lodash';
import '../body/body.css';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('body').append(`
  <p>Holberton Dashboard</p>
  <p>Dashboard data for the students</p>
  <button>Click here to get started</button>
  <p id="count"></p>
`);

$('button').on('click', _.debounce(updateCounter, 300));
