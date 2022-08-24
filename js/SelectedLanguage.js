const MAX_COUNT = 5;

export default function SelectedLanguage({ $target, initialState }) {
  this.$element = document.createElement('div');
  this.$element.className = 'SelectedLanguage';
  this.state = initialState;

  $target.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;

    if (this.state.length > MAX_COUNT) {
      const statePosition = this.state.length - MAX_COUNT;
      this.state = this.state.slice(statePosition, MAX_COUNT + statePosition);
    }

    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
        <ul>
            ${this.state
              .map(
                (item) => `
            <li>${item}</li>
            `
              )
              .join('')}
        </ul>
        `;
  };
}
