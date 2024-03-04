import React from 'react';
import Button from '../../Common/Button';

function ShareButton() {
  const handleShareButtonClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Crypto Tracker',
          text: 'Get live cryptocurrency rates and user-friendly graphs instantly! 📈 Track your favorite coins with ease using our watchlist feature. 📋 Stay in the know with our intuitive crypto tracker app. 🚀',
          url: 'https://crypto-tracker-web-app-mu.vercel.app/',
        });
        console.log('Successfully shared');
      } else {
        throw new Error('Web Share API is not supported in this browser');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <Button onClick={handleShareButtonClick} outlined={true}>Share</Button>
  );
}

export default ShareButton;