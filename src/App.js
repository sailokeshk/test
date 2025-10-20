
import { useState } from 'react';
import './App.css';
import ApiUseEffect from './Section3labprog/APIintegration';
import SimpleForm from './Form/React_Formprog';
import { Hookscounterbtn } from './Section3labprog/Counterbtn';
import Iterativerender from './Section3labprog/Iterativerender';
import { Student } from './Section3labprog/Sendpropsdata';


// function App(){
//     return(
//     <div className="App">
// <Hookscounterbtn/>
// <Iterativerender/>
      
      
//       <ApiUseEffect/>
//       <SimpleForm/>
   
//     </div>
//   );

// }
// export default App;

function App(){
 
   const [messageFromChild, setMessageFromChild] = useState("");
  // Function to receive data from child
  const handleChildData = (messageFromChild) => {
    setMessageFromChild(messageFromChild);
  };
  return(
    <div class-Name="App">  
     
      <SimpleForm/>
      <ApiUseEffect/>
      <h2>Parent Component</h2>
      <p><strong>Message from Child:</strong> {messageFromChild}</p>
      <Student name="Aarav" sendMessage={handleChildData} />    
    </div>
  );
}
 export default App;








  
  
  
  // const [messageFromChild, setMessageFromChild] = useState("");

  // // Function to receive data from child
  // const handleChildData = (msg) => {
  //   setMessageFromChild(msg);
  // };



  /* <Hookscounterbtn/>
   <UseEffectsfun/>
   <Iterativerender/>
 
   <h2>Parent Component</h2>
   <p><strong>Message from Child:</strong> {messageFromChild}</p>
   <Student name="Aarav" sendMessage={handleChildData} /> */



