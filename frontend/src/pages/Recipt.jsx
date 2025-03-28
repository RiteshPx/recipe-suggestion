import React from 'react'
import { useLocation } from 'react-router-dom';
import RecipetCard from './RecipetCard';
import Navbar from '../shared/Navbar'
import { useNavigate } from 'react-router-dom';
import { CTAButton } from '../components/cors/CTAButton';

function Recipt() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};
  console.log(data);
  const [Data, setData] = React.useState(data);


  return (
    <div className='bg-orange-400'>
      <div className="flex flex-wrap ml-11 mr-11 gap-6 justify-center p-6 w-[90%] mx-auto">
        {Data.map((recipe, index) => (
          <RecipetCard key={index} recipe={recipe} />
        ))}

      </div>
      <div className='flex justify-center items-center pb-4 '>
        <CTAButton active={true} linkto={"/suggest"}> 
          BACK
        </CTAButton>

      </div>

    </div>
  )
}
export default Recipt