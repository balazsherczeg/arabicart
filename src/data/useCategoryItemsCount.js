import usePatterns from './usePatterns';
import useCategories from './useCategories';
import {getCategoryBySlug} from './utils';

const useCategoryItemsDoneCount = (categorySlug) => {
  const categories = useCategories();

  return (categorySlug == null || categorySlug === 'all')
    ? categories.reduce((a, {count}) => a + count, 0)
    : getCategoryBySlug(categorySlug, categories).count;
};

export default useCategoryItemsDoneCount;
