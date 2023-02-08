const from=document.getElementById("from")
const to=document.getElementById("to")
const amount=document.getElementById("amount")
const Ans=document.getElementById("ans")
const a = async() =>{
    url=`https://v6.exchangerate-api.com/v6/c960c0ea3b75ef916638032a/latest/INR`
    data =await fetch(url).then((res)=>res.json())
    for(country in data['conversion_rates'])
    {
        const option=document.createElement("option")
        option.value=data['conversion_rates'][country]
        option.text=country
        from.appendChild(option)

        const option2=document.createElement("option")
        option2.value=data['conversion_rates'][country]
        option2.text=country
        to.appendChild(option2)
}
}
a();
calc = () => {
    Ans.innerHTML = parseFloat(to.value*amount.value/from.value)
}
