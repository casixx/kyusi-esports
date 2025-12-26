"use client";

import Button from "../../components/Button"; 
import Form from 'next/form';
import { useRouter } from 'next/navigation'; // Import ito




export default function Login() {
  const router = useRouter(); // Initialize ang router
  
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div 
      style={{ backgroundImage: `url('/LoginandRegister.jpg')` }}
    
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center bg-no-repeat"
    >
      {/* Container Box */}
      <div className="relative flex flex-col items-center justify-center gap-4 md:gap-6 text-xl md:text-2xl font-dot-gothic-16 bg-black/40 backdrop-blur-md text-white p-6 md:p-8 m-4 rounded-xl shadow-2xl w-full max-w-xs md:max-w-md border-4 border-white">
        
        <Form action="/api/login" className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4 drop-shadow-md font-press-start-2p">
            Welcome!
          </h2>
          
          {/* Username Input */}
          <input 
            name="username" 
            type="text" 
            placeholder="Username" 
            className="p-3 rounded text-black bg-white/90 border-2 border-white focus:outline-none focus:border-primary w-full"
          />
          
          {/* Password Input */}
          <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            className="p-3 rounded text-black bg-white/90 border-2 border-white focus:outline-none focus:border-primary w-full"
          />
          
          <div className="flex flex-col w-full gap-4 mt-4">
            <div className="flex gap-3">
              <Button label="Submit" type="submit" className="flex-1"/>
              
              <Button 
                label="Back" 
                variant="outline" 
                type="button" 
                className="flex-1" 
                onClick={() => router.push('/')}
                
              />
            </div>
            
            <div className="text-center text-sm md:text-base">
              Not registered?{" "}
              <a href="/auth/register" className="underline hover:text-primary font-bold transition-colors">
                Register
              </a>
            </div>
          </div>
        </Form>    
      </div>
    </div>
  );
}