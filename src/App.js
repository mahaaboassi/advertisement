import logo from './logo.svg';
import './App.css';
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
import { MdOutlineWidgets } from "react-icons/md";

import FormPart from './components/form';
import { useState } from 'react';

function App() {
  const [ forms, setForms ] = useState([{
    id:Math.floor(Math.random()*1000)
  }])
  const addForm = ()=>{
    setForms(prev=>[...prev,{
      id:Math.floor(Math.random()*1000)
    }])
  }
  const deleteForm = (id)=>{
    if(forms.length>1){
      const newForms = forms.filter(e=>e.id != id)
      setForms(newForms)
    }
    
  }
  return (<>
  <div className='flex justify-center shadow'>
      <div className='tabs '>
        <ul>
          <li>
            Advertisements
          </li>
          <li>
            Requests
          </li>
          <li>
            Settings
          </li>
        </ul>
      </div>
      

  </div>
  <div className='flex justify-center gap-3 mt-5'>
        <div className='tools-bar shadow  flex flex-col '>
          <div onClick={addForm}>
            <IoIosAddCircleOutline className='text-2xl' />
          </div>
          <div>
            <MdAddPhotoAlternate className='text-2xl' />
          </div>
          <div>
            <MdOutlineWidgets className='text-2xl' />
          </div>

        </div>
        <div className='flex flex-col gap-3 w-1/2 '>
          {
            forms.map((e,index)=>(<FormPart id={e.id} deleteElement={(res)=>{
              deleteForm(res)
            }} />))
          }
        </div>
      </div>
  </>
    
    
  );
}

export default App;
