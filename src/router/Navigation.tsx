import {BrowserRouter} from 'react-router-dom';
import Logo from '../assets/react.svg'

export const Navigation = () => { 

  return (
    <BrowserRouter>
      <div className='main-layout'>
        <img src={Logo} alt='React logo' />  

      </div>
    </BrowserRouter>
  )
}