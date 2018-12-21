import { fetchCategories, fetchBooksByCategory, fetchPlayers } from '../api/api';

export const getCategories = () =>  {
    return fetchCategories()
            .then(response => {
                return response.map((item) => {
                    const { name, id } = item;
                    return {
                        name,
                        id
                    }
                })
            })
            .catch(error => console.log(error))
}

export const getBooksByCategory = (id, page, limit) =>  {
    return fetchBooksByCategory(id, page, limit)
            .then(response => {
                return response.map((item) => {
                    const { author, name, category_id, id, image, description, url } = item;
                    return {
                        author,
                        id,
                        category_id,
                        name,
                        image,
                        description,
                        url
                    }
                })
            })
            .catch(error => console.log(error))
}

export const getPlayers = () =>  {
    return fetchPlayers()
            .then(response => {
                return response.map((item) => {
                    const { short_name, id } = item;
                    return {
                        name: short_name,
                        id: `${id}`
                    }
                })
            })
            .catch(error => console.log(error))
}