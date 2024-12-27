import React from 'react';
import { Button } from '../ui/Button';

const categories = [
  { id: 'all', name: 'Все' },
  { id: 'cakes', name: 'Торты' },
  { id: 'cupcakes', name: 'Капкейки' },
  { id: 'cookies', name: 'Печенье' },
  { id: 'pastries', name: 'Пирожные' },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}