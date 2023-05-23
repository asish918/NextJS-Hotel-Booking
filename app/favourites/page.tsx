import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings"
import EmptyState from "../components/EmptyState"
import FavouritesClient from "./FavouritesClient";

const FavouritesPage = async () => {
    const listings = await getFavouriteListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <EmptyState
                title="Now Favourites found"
                subtitle="Looks like you have no favourite listings"
            />
        )
    }

    return (
        <FavouritesClient 
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default FavouritesPage