import { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Rechercher un foyer..."
      value={value}
      onChange={onChange}
    />
  );
}