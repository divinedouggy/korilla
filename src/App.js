
import './App.css';
import {receipts} from './data/records'
import {useState} from 'react'
import Receipt from './components/Receipt'

export function App() {

  const [receipt, setReceipt] = useState({receipts})



  return (
    <div className="App">

            {receipts.map((data, key) => {
                return (
                    <div >
                   
                   
            
                        <Receipt data = {data}
                        receipt ={receipt}
                        setReceipt = {setReceipt}
             
                         />

                    </div>
                )
            })}
       
    </div>
  );
}

export default App;
