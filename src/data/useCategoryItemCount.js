import usePatterns from './usePatterns';
import useCategories from './useCategories';
import {getCategoryBySlug} from './utils';

const useCategoryItemCount = (categorySlug) => {
  const allPatterns = usePatterns();
  const categories = useCategories();

  if (categorySlug == null || categorySlug === 'all') return allPatterns.length;

  const category = getCategoryBySlug(categorySlug, categories);
  const categoryId = category ? category.id : null;

  return allPatterns.filter((pattern) => pattern.category === categoryId).length;
};

export default useCategoryItemCount;
