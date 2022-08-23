import { fetchLanguages } from './api.js';
import SearchInput from './SearchInput.js';

export default function App({ $target }) {
  this.state = {};

  this.setState = (nextState) => {};

  const searchInput = new SearchInput({
    $target,
    initialState: '',
    onChange: async (keyword) => {
      const languages = await fetchLanguages(keyword);
      console.log(languages);
    },
  });
}
