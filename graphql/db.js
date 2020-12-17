import fetch from 'node-fetch';
const API_LIST_URL = "https://yts.am/api/v2/list_movies.json?";
const API_DETAIL_URL = "https://yts.mx/api/v2/movie_details.json";
const API_SUGGESTIONS_URL = "https://yts.mx/api/v2/movie_suggestions.json";

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_LIST_URL;

    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }

    if (rating > 0) {
        if (REQUEST_URL !== API_LIST_URL) {
            REQUEST_URL += '&';
        }
        REQUEST_URL += `minimum_rating=${rating}`;
    }

    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}

export const getById = id => {
    const REQUEST_URL = API_DETAIL_URL + `?movie_id=${id}`;

    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movie);
}

export const getSuggestions = id => {
    const REQUEST_URL = API_SUGGESTIONS_URL + `?movie_id=${id}` ;

    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}