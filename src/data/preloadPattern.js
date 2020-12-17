import srcs from './srcs';

const preloadPattern = (id) => {
  if (!srcs[id]) {
    fetch(`${process.env.DATA_URL}${id}.svg`).then(
      (result) => (
        result.text().then(
          (svg) => {
            srcs[id] = svg;
          },
        )
      ),
    );
  }
};

export default preloadPattern;