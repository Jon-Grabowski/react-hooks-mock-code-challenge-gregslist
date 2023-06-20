import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, deleteItem }) {
  const listOfItems = items.map(item => {
    return(
    <ListingCard 
      key={item.id} 
      description={item.description}
      image={item.image} 
      location={item.location}
      id={item.id}
      deleteItem={deleteItem}
      />
    )
  })


  return (
    <main>
      <ul className="cards">
        {listOfItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
