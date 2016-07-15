'use strict';

const yo = require('yo-yo');
const button = require('dat-button');
const css = require('yo-css');
const importButton = require('./import');

const style = {

};

module.exports = (props) => {
  var title = props.title || 'dat'
  return yo`
    <header style=${css(style)} class="dat-header">
      <div class="dat-header__title">${title}</div>
      <div class="dat-header__actions">
        <div class="dat-button">
          ${button({
            text: 'Create new Dat',
            click: props.create
          })}
        </div>
        ${importButton({
          download: props.download
         })}
      </div>
    </header>
  `;
};
