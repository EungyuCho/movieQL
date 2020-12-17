import { getMovies, getById, getSuggestions } from './db'

const resolvers = {
    Query: {
        movies: (_, {rating, limit}) => getMovies(limit, rating),
        movie: (_, { id }) => getById(id),
        suggestions: (_, { id }) => getSuggestions(id)
    },
}

export default resolvers;