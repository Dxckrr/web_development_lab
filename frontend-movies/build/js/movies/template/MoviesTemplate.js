export default class MoviesTemplate {
    movies;
    constructor(movies) {
        this.movies = movies;
    }
    get = async () => {
        const moviesTemplate = Promise.all(this.movies.map(async (movie) => {
            return `      
      <div class="movie">
        <div class="movie-poster">
          <img src="${await this.getImage(movie.thumbnail)}" alt="">
          <div>
            <p>${this.getStars(movie.score)}</p>
            <ul>
              ${movie.genres
                .map((genre) => {
                return `<li>${genre}</li>`;
            })
                .join('')}
            </ul>
          </div>
        </div>
        <div class="movie-info">
          <div>
            <h2>${movie.title}</h2>
            <p>${movie.year}</p>
            <div class="text-info">
              <p>${movie.extract}</p>
            </div>
            <div class="movie-btn-rental">
              <button>${this.formatToMoney(movie.price)} RENT</button>
            </div>
          </div>
        </div>
      </div>
    `;
        }));
        return (await moviesTemplate).join('');
    };
    getImage = async (image) => {
        const path = `./img/movies/`;
        const imagePath = `${path}${image}`;
        const response = await fetch(imagePath);
        if (response.ok) {
            return imagePath;
        }
        return `${path}not-icon.png`;
    };
    renderPaginationButtons = async (currentPage, totalPages) => {
        return `
      <div class="pagination">
        <button id="prev-button"><span>&larr;</span></button>
        <span class="page-info">${currentPage} / ${totalPages}</span>
        <button id="next-button"><span>&rarr;</span></button>
      </div>
    `;
    };
    formatToMoney = (value) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return formatter.format(value);
    };
    getStars = (score) => {
        const fullStars = Math.floor(score);
        const halfStars = (score * 10) % 2;
        const emptyStars = 5 - fullStars - halfStars;
        const star = {
            full: `<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                  </path>
                </svg>
              </span>`,
            half: `<span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-star-half" viewBox="0 0 16 16">
                <path
                  d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z">
                </path>
              </svg>
            </span>`,
            empty: `<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star"
                  viewBox="0 0 16 16">
                  <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z">
                  </path>
                </svg>
              </span>`,
        };
        return `
      ${Array(fullStars)
            .fill('')
            .map(() => star.full)
            .join('')}
      ${Array(halfStars)
            .fill('')
            .map(() => star.half)
            .join('')}
      ${Array(emptyStars)
            .fill('')
            .map(() => star.empty)
            .join('')}
    `;
    };
}
