const apiKey = '20386842-9f390c2ddb67ac927c9e310bb';

const fetchGallery = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=${pageSize}&key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(({ hits }) => {
      console.log(hits);

      currentPage += 1;
      return hits;
    })
    .catch(error => console.log(error));
};

export default { fetchGallery };
