import React from 'react';
import { Provider } from 'react-redux';
import { storeData } from './Features/OperationStore';
import Cart from './Components/Cart';

const App = () => {
 
  return (
    <div>
    {/* datas from the store is provided to the cart via provider */}
      <Provider store={storeData}>
        <Cart />
      </Provider>
    </div>
  );
};

export default App;