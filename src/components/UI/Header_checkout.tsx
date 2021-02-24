import React from 'react';
import '../../css/Header_checkout.css';

function HeaderCheckout({ title }: any ) {
  return (
    <div className="header-checkout">
      <img src="/images/mobile/icon_logo_white.svg" alt="icon_logo"/>
      <h1>{title}</h1>
    </div>
  )
}

export default HeaderCheckout