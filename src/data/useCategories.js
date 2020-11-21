import useData from './useData';

const useCategories = () => {
  const {categories} = useData();

  return categories || [];
};

export default useCategories;
