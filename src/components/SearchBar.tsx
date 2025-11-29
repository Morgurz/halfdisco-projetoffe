import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Pesquisar...", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder={placeholder}
      style={{
        padding: "8px 12px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        width: "100%",
        maxWidth: "300px",
      }}
    />
  );
};

export default SearchBar;