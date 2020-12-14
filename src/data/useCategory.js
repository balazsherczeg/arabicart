import {useParams} from '@reach/router';

const useCategory = () => {
  const {category} = useParams();

  return category;
};

export default useCategory;
