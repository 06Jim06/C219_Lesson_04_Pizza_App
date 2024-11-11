import React, { useState, useEffect } from 'react';

function ShopStatus() {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [shopOpen, setShopOpen] = useState(true); 
  useEffect(() => {
    const updateShopStatus = () => {
      const newHour = new Date().getHours();
      setCurrentHour(newHour);
      setShopOpen(newHour >= 10 && newHour < 22); 
    };

    const intervalId = setInterval(updateShopStatus, 60000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="shop-status">
      {shopOpen ? 'We\'re currently open!' : 'Sorry, we\'re closed.'}
    </div>
  );
}

export default ShopStatus;