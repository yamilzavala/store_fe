import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = (props) => {
  const [state, setState] = useState(SHOP_DATA);

  //const [...sections] = state; 

  return (
    <div className="shop-page">
        {
            state.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
  )
};

export default ShopPage;
