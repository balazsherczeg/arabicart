import useData from './useData';

const usePatterns = () => {
  const {patterns} = useData();

  return patterns || [];
};

export default usePatterns;
