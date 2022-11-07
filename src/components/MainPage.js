import React from 'react'

const defaultCurrencies = ['UAH', 'USD', 'EUR']
export const MainPage = ({value, currency, onChangeValue, onChangeCurrency}) =>(
    <div className = "container">
        <ul className="currencies">
            {defaultCurrencies.map((cur) =>(
                <li 
                onClick={()=> onChangeCurrency(cur)}
                className={currency === cur ? 'active': ''}
                key ={cur}>
                {cur}
                </li>
            ))}
        </ul>
<input className="input"
onChange={(e) => onChangeValue(e.currentTarget.value)}
value={value}
type = "number"
placeholder={0}
/>
   </div>
);
