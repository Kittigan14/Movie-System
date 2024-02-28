document.addEventListener("DOMContentLoaded", function () {
    const genresNames = document.querySelectorAll(".genres-name");
    const movieContainer = document.getElementById("movieContainer");

    movieContainer.addEventListener("click", function (event) {
        const clickedElement = event.target;

        if (clickedElement.classList.contains("movie-images")) {
            const selectedMovieId =
                clickedElement.getAttribute("data-movie-id");
            window.location.href = `/detailMovie/${selectedMovieId}`;
        }
    });

    genresNames.forEach((genreName) => {
        genreName.addEventListener("click", function () {
            const selectedGenreId = this.getAttribute("data-genre-id");

            // ส่ง request ไปยัง server เพื่อดึงข้อมูล Movies ที่ตรงกับ selectedGenreId
            fetch(`/getMoviesByGenre/${selectedGenreId}`)
                .then((response) => response.json())
                .then((movies) => {
                    const movieHTML = movies
                        .map((movie, index) => {
                            console.log("movie.MoviesID:", movie.MoviesID);
                            return `
                                <div class="movie-list" data-genre-id="${movie.GenresID}">
                                    <div class="movie-images" data-movie-id="${movie.movieid}">
                                        <a href="/detailMovie/${movie.movieid}">
                                            <img src="${movie.Image}" alt="">
                                        </a>
                                        <div class="title">${movie.Title}</div>
                                    </div>
                                </div>
                            `;
                        })
                        .join("");

                    movieContainer.innerHTML = `
                        <div class="movie-Genres">
                            <button class="back-button">
                                <a href="/movies"> <img src="../Icon/back-button.png" alt=""> </a>
                            </button>    
                        </div>
                        ${movieHTML}
                    `;
                })
                .catch((error) => console.error("Error fetching movies:", error));
        });
    });
});