import {useContext} from 'react';

import {DataContext} from '../context';

const useCategoryItemCount = (category) => {
  const {categories, allPatterns} = useContext(DataContext);

  if (category === "all") return allPatterns.length;

  const categoryId = category && categories.find(({slug}) => slug === category).id;

  return allPatterns.filter((pattern) => pattern.category === categoryId).length;
};

export default useCategoryItemCount;
