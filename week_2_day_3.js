let data=fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/users");

console.log(data);
data.then((res)=>{
    console.log(res);
    return res.json();
}).then((newdata)=>{
    newdata.forEach(element => {
        let datali=document.createElement("li");
        datali.innerHTML=element.realm;
        document.getElementById("list").appendChild(datali);
    });
}).catch((error)=>{
    console.timeLog(error);
});
