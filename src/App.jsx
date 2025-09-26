import { NavLink, useLoaderData } from 'react-router'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  // useLoaderData hook 
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);

  return (
    <div className='m-10'>
      <div className='text-center'>
        <h1 className='text-2xl mb-4 lg:text-5xl text-[#331A15] '>Our Popular Products</h1>
      <NavLink to="/addCoffee"><button className='btn bg-yellow-600 text-white '>Add coffee</button></NavLink>
      </div>
      <div className='grid md:grid-cols-2 gap-4 mt-4'>
        {
          coffees.map(coffee => <CoffeeCard
             coffee={coffee}
             key={coffee._id}
             coffees={coffees}
             setCoffees={setCoffees}
             ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
