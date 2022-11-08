import React from 'react'

const rates = ['UAH', 'USD', 'EUR']
export const MainPage = ({value, currency, onChangeValue, onChangeCurrency}) =>(
    <div className = "container">
<input className="input"
onChange={(e) => onChangeValue(e.currentTarget.value)}
value={value}
type = "number"
placeholder={0}
/>
<select style={{margin:"10px"}}
 onClick={(e)=> onChangeCurrency(e.currentTarget.valu)}>
{rates.map((currency) =>(
     
   <option value={currency}  key ={currency}>
    {currency}</option>
    
))}
</select>
   </div>
);
