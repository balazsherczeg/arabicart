import {useParams} from 'react-router-dom';

const useCategory = () => {
  const {category} = useParams();

  return category;
};

export default useCategory;
