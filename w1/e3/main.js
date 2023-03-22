//get internet 
d3.json("https://api.chucknorris.io/jokes/search?query=dog").then(
    res=>{
        console.log(res.result);
        console.log(res.result[0].value);
    });