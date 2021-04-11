import { useContext } from "react";
import { FilterContext } from "../../FilterContext";
import FilterTag from "./FilterTag";

import "./FilterContainer.css";

export default function FilterContainer() {

  const { filterTags, resetTags } = useContext(FilterContext);

  return (
    <>
      { filterTags.length > 0 && <div className="filter-container">
        {filterTags.map((tag, index) => <FilterTag key={index} tag={tag} />)}
        <div className="clear-button" onClick={() => resetTags()}>
          clear
        </div>
      </div>}
    </>
  );
}
