import React from 'react';



const Hero = () => {
    return (
        <div className='bg-white h-screen flex flex-col justify-center items-center'>
            <h1 class="text-4xl text-center sm:text-center ">Demo Website</h1>
            <br/><br/>
            <h3 class="text-gray-800 text-2xl text-center px-10">Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                 At nam minimum ponderum. Est audiam animal molestiae te</h3>
                 <br/>
                 <br/>

                 <div class="flex flex-row space-x-12">
                 <div className="py-3 px-3 bg-blue-500 text-gray-100 text-1xl hover:bg-blue-400 cursor-pointer p-1 hover:bg-gray-500  " id="delete-btn">Know More </div>

                  <div class="bg-gray-600 bg-opacity-50 absolute inset-0 hidden justify-center items-center" id="overlay">
                  <div class="bg-gray-100 text-lg font-bold rounded py-6 px-2 text-gray-800 height-40 width-30">
                      
                  <div class="mb-3 pt-0">
                      <div class="flex justify-between items-centered h-8" >
                      <h1 class="text-center font-bold">Subcribe</h1>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-fulls" id="close-modal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg></div>
  <input type="text" placeholder="Enter Name" class="px-3 py-6 mt-3 placeholder-Gray-800 placeholder-opacity-75 text-gray-800 relative bg-white rounded text-lg border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
  <input type="text" placeholder="Enter E-mail" class="px-4 py-6 mt-3 placeholder-blueGray-300 text-gray-800 relative bg-white rounded text-lg border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
  <input type="text" placeholder="Enter Number" class="px-4 py-6 mt-3 placeholder-blueGray-300 text-gray-800 relative bg-white rounded text-lg border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
  <span class="text-xl flex justify-center font-semibold inline-block py-3 px-3 uppercase rounded-full text-gray-300 bg-blue-800 uppercase last:mr-0 mr-1 mt-6">
  Subscribe
</span>


</div>



                  </div>
                  
   

                  </div>  
                 

                 <div className="py-2 px-2 bg-blue  text-1xl hover:bg-blue-400 " >Learn More</div>
                 </div>


        </div>

        
    )
}


window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('#overlay');
    const delBtn = document.querySelector('#delete-btn');
    const closeBtn = document.querySelector('#close-modal');

  const toggleModal = () => {
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('flex');
  };

  delBtn.addEventListener('click', toggleModal);
  closeBtn.addEventListener('click', toggleModal);
});

export default Hero
