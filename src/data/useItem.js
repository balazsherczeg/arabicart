import usePatterns from './usePatterns';

const useItem = (id) => {
  const items = usePatterns();
  const i = items.find((item) => item.id === id);
  return i;
};

export default useItem;
