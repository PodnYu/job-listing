import { useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  const [filterTags, setFilterTags] = useState([]);

  const addTag = (tag) => {
    if (filterTags.includes(tag))
      return;
    setFilterTags(oldTags => [ ...oldTags, tag ]);
  }

  const removeTag = (tag) => {
    if (filterTags.includes(tag)) {
      setFilterTags(oldTags => oldTags.filter(oldTag => oldTag !== tag));
    }
  }

  const resetTags = () => {
    setFilterTags([]);
  }

  const isOfferValid = (offer) => {
    const offerTags = [ offer.role, offer.level, ...offer.languages, ...offer.tools ];
    
    for (const tag of filterTags) {
      if (!offerTags.includes(tag))
        return false;
    }
    return true;
  }

  return (
    <FilterContext.Provider value={{ filterTags, addTag, removeTag, resetTags, isOfferValid }}>
      {children}
    </FilterContext.Provider>
  );
}
