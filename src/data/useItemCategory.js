import useItem from './useItem';
import useCategories from './useCategories';

const useItemCategory = (id) => {
  const categories = useCategories();
  const item = useItem(id);
  return categories.find(({id: categoryId}) => categoryId === item.category);
};

export default useItemCategory;
