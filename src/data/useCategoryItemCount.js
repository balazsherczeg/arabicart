import usePatterns from './usePatterns';
import useCategories from './useCategories';

const useCategoryItemCount = (category) => {
  const allPatterns = usePatterns();
  const categories = useCategories();

  if (category == null || category === 'all') return allPatterns.length;

  const categoryWithSlug = categories.find((item) => item && item.slug === category);
  const categoryId = categoryWithSlug ? categoryWithSlug.id : null;

  return allPatterns.filter((pattern) => pattern.category === categoryId).length;
};

export default useCategoryItemCount;
