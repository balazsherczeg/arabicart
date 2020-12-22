import usePatterns from './usePatterns';
import useCategories from './useCategories';
import {getCategoryBySlug} from './utils';

const useCategoryItemsDoneCount = (categorySlug) => {
  const categories = useCategories();

  // if (categorySlug == null || categorySlug === 'all') return allPatterns.length;

  const category = getCategoryBySlug(categorySlug, categories);

  return category.count;
};

export default useCategoryItemsDoneCount;
