import React, { useState } from 'react';
import Header from '@/components/checkoutComponents/Header';
import ContactInfo from '@/components/checkoutComponents/ContactInfo';
import ShippingDetails from '@/components/checkoutComponents/ShippingDetails';
import ShippingMethod from '@components/checkoutComponents/ShippingMethod';
import PurchaseInfo from '@/components/checkoutComponents/PurchaseInfo';
import RegistrationCheckbox from '@/components/checkoutComponents/RegistrationCheckbox';
import Payment from '@/components/checkoutComponents/Payment';
import PaymentButton from '@/components/checkoutComponents/PaymentButton';

import Footer from '@/components/Footer';

function Checkout() {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  
  return (
    <div>
      <Header />
      <ShippingMethod selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
    </div>
  );
}

export default Checkout;