import { useContext } from "react";
import { FilterContext } from "../../FilterContext";
import "./FilterTag.css";

export default function FilterTag({ tag }) {

  const { removeTag } = useContext(FilterContext);

  return (
    <div className="filter-tag-container">
      <div className="filter-tag">
        {tag}
      </div>
      <div className="close-button" onClick={() => removeTag(tag)}>
        &times;
      </div>
    </div>
  );
}