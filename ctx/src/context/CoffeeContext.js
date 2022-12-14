import { createContext, useContext, useState } from 'react';
import coffeeBeans from '../mockData/coffeeBeans.json';

export const CoffeeContext = createContext();

export default function CoffeeProvider(props) {
  const [coffeeBean, setCoffeeBean] = useState(coffeeBeans[0]);

  const setCoffeeBeanId = (coffeeBeanId) => {
    const bean = coffeeBeans.find(bean => {
      return Number(bean.id) === Number(coffeeBeanId)
    });
    setCoffeeBean(bean);
  };
  return (
    <CoffeeContext.Provider
    value={{
      coffeeBean,
      setCoffeeBeanId
    }}
    >
      {props.children}
    </CoffeeContext.Provider>
  );
  console.log("hello")
}

export const useCoffeeContext = () => {
  return useContext(CoffeeContext)
}