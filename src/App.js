import "./App.css";
import Header from "./components/Header/Header";
import JobList from "./components/JobList/JobList";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import { FilterProvider } from "./FilterContext";

function App() {
  return (
    <FilterProvider>
        <Header />
        <FilterContainer />
        <JobList />
    </FilterProvider>
  );
}

export default App;
