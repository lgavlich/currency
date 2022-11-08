import React, { useEffect,useState } from 'react';


const Header = ()=>{
const [rate, setRate] = useState([
    {cur:'USD', buy: 0, sale: 0, id: 1},
    {cur:'EUR', buy: 0, sale: 0, id: 2}
]); 
useEffect(()=>{
fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
.then((res)=>{return res.json()}
)
.then((data) =>  {
 rate.map((item) =>{
    data.filter((getItem) => {
        if(getItem.ccy === item.cur){
            item.buy = (getItem.buy*100)/100
            item.sale = (getItem.sale*100)/100
        }
    });
 });
 setRate(prev => [...rate])
})
.catch(err =>{
  alert('Не вдалося отримати дані');
});

})

return (
    <div style={{display:"flex", alignItems:"baseline", justifyContent:"center"}}>
<p>Курс валюти</p>
<ul style={{display:'flex'}}>
    <li style={{display:'block'}}>
    <div>Валюта</div>
    <div>Покупка</div>
    <div>Продаж</div>
    </li>
    {rate.map((itemRate) => (
        <li style={{display:'block'}}
         key={itemRate.id}>
            <div>{itemRate.cur}</div>
            <div>{itemRate.buy}</div>
            <div>{itemRate.sale}</div>
        </li>
    ))}
</ul>

    </div>
)
}
export default Header