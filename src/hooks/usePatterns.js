import {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {DataContext} from '../context';

const usePatterns = () => {
  const {category} = useParams();
  const {allPatterns, categories} = useContext(DataContext);
  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    const categoryId = category && categories.find(({slug}) => slug === category).id;

    const filteredData = category == null
      ? [...allPatterns]
      : allPatterns.filter((item) => +item.category === categoryId);

    setPatterns(filteredData.reverse());
  }, [allPatterns, category, categories]);

  return patterns;
};

export default usePatterns;
