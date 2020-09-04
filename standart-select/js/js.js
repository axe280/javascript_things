// thanks Vladilen https://www.youtube.com/watch?v=35va4OY7Y1c
'use strict';

const getTemplate = (data = [], placeholder, selectedId) => {
  let text = placeholder || 'Placeholder text';
  
  const items = data.map(item => {
    let cls = '';

    if (item.id === selectedId) {
      text = item.value;
      cls = 'selected';
    }
    
    return `
      <li class="${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
    `;
  });
  
  return `
    <div class="st-select__main" data-type="input">${text}</div>
    <ul class="st-select__list" data-type="list">
      ${items.join('')}
    </ul>
  `;
};

class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;
    
    this.render();
    this.setup();
  }

  render() {
    const { placeholder, data } = this.options;
    this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener('click', this.clickHandler);
    this.$input = this.$el.querySelector('[data-type="input"');
  }

  clickHandler(event) {
    const { type } = event.target.dataset;

    if (type === 'input') {
      this.toggle();
    }
    else if (type === 'item') {
      const id = event.target.dataset.id;
      this.select(id);
    }
    else {
      this.close();
    }
  }

  get isOpen() {
    return this.$el.classList.contains('select_opened');
  }

  get current() {
    return this.options.data.find(item => item.id === this.selectedId);
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHandler);
    this.$el.innerHTML = '';
  }

  open() {
    this.$el.classList.add('select_opened');
  }

  close() {
    this.$el.classList.remove('select_opened');
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  select(id) {
    this.selectedId = id;
    this.$input.textContent = this.current.value;

    this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
      el.classList.remove('selected');
    });
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected');
    
    this.close();
  }
};

const select = new Select('.js-select', {
  placeholder: 'My text',
  selectedId: '3',
  data: [
    {id: '1', value: 'Vue'},
    {id: '2', value: 'React'},
    {id: '3', value: 'Angular'},
    {id: '4', value: 'Express'},
    {id: '5', value: 'Nuxt'},
  ],
});

