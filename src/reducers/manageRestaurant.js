import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.restaurant.text
            }
            debugger
            return { restaurants: state.restaurants.concat(restaurant) }
        case 'DELETE_RESTAURANT':
            return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        case 'ADD_REVIEW':
            
        case 'DELETE_REVIEW':

            default:
            return state
    }
}
