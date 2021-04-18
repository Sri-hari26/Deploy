import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
       <div class="flex-1 flex flex-col">
       <nav class="px-4 flex justify-between bg-white h-16 border-b-2">
       <ul class="flex items-center">
				
				<li class="h-6 w-6">
					<img
						class="h-full w-full mx-auto"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
						alt="svelte logo" />
				</li>
			</ul>
            <ul class="flex items-center">
				
				<li>
                <Link className="text-center p-8" to="/">Features</Link>
    <Link className="p-8" to="/">Pricing</Link>
    <Link className="p-8" to="/">Contact</Link> 
				</li>
			</ul>
           <div className="flex justify-center items-center">
                
    
    
    <div class="flex justify-end">
    <Link className="py-1 px-2 bg-blue-600 text-gray-100 text-1xl hover:bg-blue-400" to="/">Start Now</Link></div>
    
</div>
 
       </nav></div>
    );
};

export default Navbar
