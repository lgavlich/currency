import {MainPage} from './components/MainPage'
import Header from './components/Header';
import './index.css'
import { useEffect,useState } from 'react';
import  {BrowserRouter}  from 'react-router-dom'



function App() {
  const [fromCurrency, setFromCurrency]= useState('UAH')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)

  const [rate, setRate] = useState({});
    useEffect(()=>{
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then((res)=>{return res.json()}
    )
    .then((data) =>  {
      setRate(data)
     // console.log(data)
    })

    .catch(err =>{
      alert('Не вдалося отримати дані');
    });
  },[])

const onChangePrice = (value) => {
  const price = value/rate[fromCurrency];
  const result = price * rate[toCurrency];
  setToPrice(result);
  setFromPrice(value);
}
const onChangeToPrice = (value) =>{
  const result = (rate[fromCurrency] / rate[toCurrency])*value
  setFromPrice(result)
  setToPrice(value)
}

  return (
 
    <BrowserRouter>
      <Header/>
      <div style = {{display:'flex',justifyContent:"center", marginTop:"100px"}}>
      <MainPage 
    value={fromPrice}
     cyrrency ={fromCurrency} 
     //onChangeCurrency={(cur)=> console.log(cur)}
     onChangeCurrency={setFromCurrency} 
     onChangeValue={onChangePrice}
     />
    <MainPage 
  
    value={toPrice} 
    cyrrency ={toCurrency}
    // onChangeCurrency={(cur)=> console.log(cur)}
    onChangeCurrency={setToCurrency}
    onChangeValue={onChangeToPrice}
    />
   </div>
  
   </BrowserRouter>
    
  );
}

export default App;
