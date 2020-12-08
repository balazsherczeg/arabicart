import {useState, useEffect} from 'react';
import useCategory from './useCategory';
import useCategories from './useCategories';
import usePatterns from './usePatterns';
import {getCategoryBySlug} from './utils';

const usePatternsByCategory = () => {
  const categorySlug = useCategory();
  const categories = useCategories();
  const allPatterns = usePatterns();

  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    const category = getCategoryBySlug(categorySlug, categories);

    switch (category) {
      case false: // All items, no category
        setPatterns([...allPatterns].reverse());
        break;
      case null: // No category yet
        setPatterns([]);
        break;
      default: {
        const filteredData = allPatterns.filter((item) => item.category === category.id);
        setPatterns(filteredData.reverse());
      }
    }
  }, [allPatterns, categorySlug, categories]);

  return patterns;
};

export default usePatternsByCategory;
