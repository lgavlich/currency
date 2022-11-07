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

  const [rate, setRate] = useState({});
  useEffect(()=>{
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then((res)=>{return res.json()}
    )
    .then((data) =>  {
      setRate(data)
      console.log(data)})

    .catch(err =>{
      alert('Не вдалося отримати дані');
    });
  },[])

const onChangePrice = (value) => {
  const price = value/rate[fromCurrency]
  const result = price * rate[toCurrency]
  setToPrice(result)
  setFromPrice(value)
}
const onChangeToPrice = (value) =>{
  const result = (rate[fromCurrency]/rate[toCurrency])*value
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
