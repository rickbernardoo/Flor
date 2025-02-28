import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category 
              ? 'bg-pink-600 text-white' 
              : 'bg-white text-pink-700 hover:bg-pink-100'
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category === 'all' ? 'Todos' : category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;