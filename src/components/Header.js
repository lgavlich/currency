fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
.then((res)=>{return res.json()}
)
.then((data) =>  {
 console.log(data)
})
.catch(err =>{
  alert('Не вдалося отримати дані');
});