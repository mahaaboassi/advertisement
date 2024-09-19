import { MdAddPhotoAlternate } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineAttachment } from "react-icons/md";

function Section({id,deleteElement}) {
    return ( <div className='p-4 section flex flex-col '>
        <input type='text' placeholder='Enter Product' />
        <input type='text' placeholder='Description' />
        <input type='number' placeholder='Price' />
        <div className='flex justify-center gap-2 mt-2'>
            <div className="icons">
                <MdAddPhotoAlternate className='text-2xl' />
            </div>
            <div className="icons">
                <MdOutlineAttachment className='text-2xl'  />
            </div>
            <div className="icons">
                <MdDeleteOutline onClick={()=>{
                    deleteElement(id)
                }} className='text-2xl cursor-pointer' />
            </div>
          
          
        </div>
      </div> );
}

export default Section;