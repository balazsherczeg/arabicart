import {useState, useEffect} from 'react';
import useCategory from './useCategory';
import useCategories from './useCategories';
import usePatterns from './usePatterns';

const usePatternsByCategory = () => {
  const category = useCategory();
  const categories = useCategories();
  const allPatterns = usePatterns();

  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    const categoryId = category && categories && categories.find(({slug}) => slug === category).id;

    const filteredData = categoryId == null
      ? [...allPatterns]
      : allPatterns.filter((item) => +item.category === categoryId);

    setPatterns(filteredData.reverse());
  }, [allPatterns, category, categories]);

  return patterns;
};

export default usePatternsByCategory;
