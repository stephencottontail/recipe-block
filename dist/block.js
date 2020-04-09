var registerBlockType = window.wp.blocks.registerBlockType;
var el = window.wp.element.createElement;
registerBlockType('sc/recipe', {
  title: 'Recipe',
  icon: 'format-aside',
  category: 'common',
  edit: function edit() {
    return el('div', {
      className: 'sc-recipe-editor'
    }, 'Hello from the editor!');
  },
  save: function save() {
    return el('div', {
      className: 'sc-recipe-front'
    }, 'Hello from the front!');
  }
});