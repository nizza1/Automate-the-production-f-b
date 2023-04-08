import { useState ,useEffect} from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [capacity, setCapacity] = useState([]);
  const [participants ,setParticipants] = useState(0);

  const [rest, setRest] = useState('');


  const baseURL = "http://localhost:3001/api/participants";

useEffect(()=> {
  const fetchData = async ()=> {
    try {
      const response = await axios.get(baseURL);
      setCapacity(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();

  const postData = async ()=>{
    try{
       await axios.post(`${baseURL}/${participants}`)
       setParticipants(0)
    } catch (error) {
      console.log(error);
    }}
    postData();

  

  
},[participants, rest])



const capParticipants = capacity && capacity.participants;
const toSell = capacity && capacity.toSell;



  return (
    <div className="App">

      <div className='tBody'>
        <div className='buttons removeBorder'>
          <p>participants</p>
        <div><button onClick={()=> setParticipants(5)}>⊕ 5</button></div>
        <div><button onClick={()=> setParticipants(10)}>⊕ 10</button></div>
        <div><button onClick={()=> setParticipants(20)}>⊕ 20</button></div>
        </div>

        <div className='capacity '>
        <p >The capacity</p>
          <div className='bar' style={{ height: `${capParticipants}%`}}>{capParticipants}%</div>
        </div>

        <div className='toSell'>
          <span>To sell</span>
          <button >sell</button>
          <p>＄{toSell}</p>

        </div>

      </div>

    </div>
  )
}

export default App
