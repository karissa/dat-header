'use strict';

const yo = require('yo-yo');
const button = require('dat-button');
const css = require('yo-css');
const encoding = require('dat-encoding');

const style = {

};

module.exports = (props) => {
  const keydown = (e) => {
    if (e.keyCode === 13) {
      const link = e.target.value;
      try {
        encoding.decode(link);
      } catch (err) {
        throw new Error('Invalid link');
      }
      e.target.value = '';
      props.download(link);
    }
  };
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
        <div class="dat-import">
          <div class="dat-import--icon">
            <img src="./public/img/link.svg" />
          </div>
          <input type="text" placeholder="Import dat" onkeydown=${keydown} class="dat-import--input">
        </div>
      </div>
    </header>
  `;
};
