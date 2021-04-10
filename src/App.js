import './App.css';
import Header from "./components/Header/Header";
import JobList from "./components/JobList/JobList";
import FilterContainer from "./components/FilterContainer/FilterContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <FilterContainer />
      <JobList />
    </div>
  );
}

export default App;
