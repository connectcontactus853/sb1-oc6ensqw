import React from 'react';

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
    >
      <option value="popular">По популярности</option>
      <option value="price-asc">По возрастанию цены</option>
      <option value="price-desc">По убыванию цены</option>
    </select>
  );
}