import { useState } from 'react';
import './App.css';
import ColorsBox from './ColorsBox';
import ResultBox from './ResultBox';
import SearchBar from './SearchBar';
import Colors from "./Colors.json"

function App() {

  const [query, setQuery] = useState('')

  const results = Colors.filter(c => c.id.includes(query.toLowerCase()))

  return (
    <div className="App">
      <SearchBar setQuery={setQuery} query={query} />
      <ResultBox results={query ? results : []} />
      <ColorsBox colors={Colors} />
    </div>
  );
}

export default App;
