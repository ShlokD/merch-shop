import { createContext } from "preact";
import { PropsWithChildren } from "preact/compat";
import { useContext, useState } from "preact/hooks";

//eslint-disable-next-line no-unused-vars
type ATCFunction = (id: string) => void;

type AppContextProps = {
  cart: string[];
  addToCart?: ATCFunction;
};

const AppContext = createContext<AppContextProps>({
  cart: [],
  addToCart: () => null,
});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (id: string) => {
    setCart((prev) => [...prev, id]);
  };

  return (
    <AppContext.Provider value={{ cart, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};
