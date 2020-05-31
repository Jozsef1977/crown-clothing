import React from 'react';

import SHOP_DATA from './shop.data';

import ColllectionPreview from '../../Components/Collection-Preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        Shop Page
        {collections.map(({ id, ...otherCollectionProps }) => (
          <ColllectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
