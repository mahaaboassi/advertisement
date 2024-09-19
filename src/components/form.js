import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdAddchart } from "react-icons/md";
import Section from "./sections";



function FormPart({id,deleteElement}) {
    
    const [sections, setsections] = useState([{
        id:Math.floor(Math.random()*100)
    }])

    const addSection = ()=>{
        setsections(prev=>[...prev, {
            id:Math.floor(Math.random()*100)
        }])
    }
    const deleteSection = (id)=>{
        if(sections.length>1){
            const newSections = sections.filter(e=>e.id != id)
            setsections(newSections)
        } 
    }
    return ( <div key={id} className='forms '>
        <div className='p-2 shadow rounded'>
          <div className='flex justify-end gap-2'>
            <div className="icons"  onClick={addSection} >
                <MdAddchart className='text-2xl'/>
            </div>
            <div className="icons" onClick={()=>{
                    deleteElement(id)
                }} >
                <MdDeleteOutline className='text-2xl' />
            </div>
          </div>
          <div className='flex flex-col '>
            <input placeholder='Enter Category' />
            <input placeholder='Description' />
          </div>
          {sections.map((e,index)=>(<div key={`section_${index}`}>
            <Section id={e.id} deleteElement={(res)=>{
                deleteSection(res)
            }} />
          </div>))}
         
        </div>
      </div> );
}

export default FormPart;