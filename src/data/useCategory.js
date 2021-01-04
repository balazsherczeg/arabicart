import {useMatch} from '@reach/router';

const useCategory = () => {
  const match = useMatch('/category/:category');
  return (match)
    ? match.category
    : null;
};

export default useCategory;
