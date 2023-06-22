import Heading from "@/components/Heading";
import ContainerComponent from "@/components/ContainerComponent";
import ListingCard from "@/components/listings/ListingCard";
import { SafeListing, SafeUser } from "@/types";


interface FavoritesClientProps {
  listings: SafeListing[],
  currentUser?: SafeUser | null,
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser
}) => {
  return (
    <ContainerComponent>
      <Heading
        title="Favorites"
        subtitle="List of places you favorited!"
      />
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </ContainerComponent>
   );
}
 
export default FavoritesClient;