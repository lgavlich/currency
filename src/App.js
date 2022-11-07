import 'bootstrap/dist/css/bootstrap.min.css'
import {MainPage} from './components/MainPage'
import {Footer} from './components/Footer'
import './index.scss'
import { useEffect,useState } from 'react';



function App() {
  const [fromCurrency, setFromCurrency]= useState('UAH')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)

  const [buy, setBuy] = useState({});
  console.log(buy)
  useEffect(()=>{
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then((res)=>{return res.json()}
    )
    .then((data) =>  {
      setBuy(data)
      console.log(data)})

    .catch(err =>{
      alert('Не вдалося отримати дані');
    });
  },[])

const onChangePrice = (value) => {
  const price = value/buy[fromCurrency];
  const result = price * buy[toCurrency];
  setToPrice(result);
  setFromPrice(value);
}
const onChangeToPrice = (value) =>{
  const result = (buy[fromCurrency] / buy[toCurrency])*value
  setFromPrice(result)
  setToPrice(value)
}

  return (
   <>
   <div style = {{display:'flex', marginTop:"100px",marginBottom:'150px'}}>
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
    <Footer/>
    </>
  );
}

export default App;
