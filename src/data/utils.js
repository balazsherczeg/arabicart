export const getCategoryBySlug = (categorySlug, categories) => {
  if (categorySlug) {
    if (categories.length) {
      return categories.find(({slug}) => slug === categorySlug);
    } else { // eslint-disable-line no-else-return
      // No category yet, because categories are missing
      return null;
    }
  } else { // eslint-disable-line no-else-return
    // No category
    return false;
  }
};
