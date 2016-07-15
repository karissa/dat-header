'use strict';

const encoding = require('dat-encoding');
const yo = require('yo-yo');

module.exports = function (props) {
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
  return yo`<div class="dat-import">
    <div class="dat-import--icon">
      <img src="./public/img/link.svg" />
    </div>
    <input type="text" placeholder="Enter Dat Link" onkeydown=${keydown} class="dat-import--input">
  </div>`
}
