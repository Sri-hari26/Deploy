import React from 'react'
import { FiBriefcase } from "react-icons/fi";
import {FiTool} from "react-icons/fi";
import { FiLifeBuoy } from "react-icons/fi";





const Content = () => {
    return (
        <div>
            <h1 class="text-4xl font-semibold text-center">Grow Your Website with better shipping</h1>
            <br/>
        <h1 class="text-center text-gray-700"> We help the world's leading organizations follow their shipping</h1>
        <br/>
        
        
        <div class="flex flex-row justify-center justify-around flex-items-center space-x-6">
  <div>
      <div class="flex justify-center"> 
      <FiBriefcase class="s justify-center" size={40} color='lightseagreen' height='50'  />
      </div>
      <br/>


      <h1 class="text-center font-semibold">Shipping communication</h1><br/>
      <p class="text-center text-gray-800">At eripuit signiferumque sea, vel ad mucius molestie. cu labitur iuvaret vulputate sed.</p><br/>
      <h1 class="text-center text-lg text-blue-800">Discover</h1>
      </div><br/>
  <div>
      <div class="flex justify-center">
  <FiLifeBuoy class="justify-self-center" size={40} color='lightseagreen' height='50' /></div>
  <br/>
      <h1 class="text-center font-semibold">Marketing</h1><br/>
      <p class="text-center text-gray-800">At eripuit signiferumque sea, vel ad mucius molestie. cu labitur iuvaret vulputate sed.</p><br/>
      <h1 class="text-center text-lg text-blue-800">Discover</h1>
      </div>
  <div>
      <div class="flex justify-center">
  <FiTool size={40} color='lightseagreen'/></div>
  <br/>
      <h1 class="text-center font-semibold">Logistic performance</h1><br/>
      <p class="text-center text-gray-800">At eripuit signiferumque sea, vel ad mucius molestie. cu labitur iuvaret vulputate sed.</p><br/>
      <h1 class="text-center text-lg text-blue-800">Discover</h1>
      </div>
</div>

        </div>
    )
}

export default Content
