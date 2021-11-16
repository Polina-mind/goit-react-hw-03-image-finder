import PropTypes from 'prop-types';

const apiKey = '20386842-9f390c2ddb67ac927c9e310bb';

const FetchGallery = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=${pageSize}&key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(({ hits }) => {
      currentPage += 1;
      return hits;
    })
    .catch(error => console.log(error));
};

FetchGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
};

export default FetchGallery;
