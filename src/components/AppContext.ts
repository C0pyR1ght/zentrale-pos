import axios from 'axios';
import React, { ContextType, createContext, ReactNode, useEffect, useState } from 'react';

type Props = {
  children?: ReactNode;
};

export const AppContext = createContext<ContextType | null>(null);

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [appState, setAppState] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/order/all?limit=10`)
      .then((res) => setAppState({ orders: res.data }))
      .catch((e) => {
        console.log('failed to fetech last orders', e);
      });
  }, []);

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
