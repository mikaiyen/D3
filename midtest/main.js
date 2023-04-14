//Data utilities
//遇到NA就設定為undefined, 要不然就維持原本的字串
const parseNA = string => (string === "NA" ? undefined : string); 
//日期處理
const parseDate = string => d3.timeParse('%Y-%m-%d')(string);

// + 轉換成數字
function type(d){
    const date = parseDate(d.DateTime);
     return {
        release_year:date.getFullYear(),
        release_mon:date.getFullYear()+'/'+(date.getMonth()+1),
        release_date:parseNA(d.DateTime),
        totalvol:+(d.Volume),
        transaction:+(d.Transaction),
        foreignVol:+(d.ForeignVol),
        trustVol:+(d.TrustVol),
        dealerVol:+(d.DealerVol),
        investorsVol:+(d.InvestorsVol),
        retailvol:(d.Volume-d.InvestorsVol),
    }
}

//Data selection
function filterData(data){ 
    return data.filter(
        d => { 
            return(
                d.release_year > 1999 && d.release_year < 2010 &&
                d.revenue > 0 &&
                d.budget > 0 &&
                d.genre &&
                d.title 
            );
        }
    );
}


function setupCanvas(data,rout){
    

    const xData = data.map((i) => i['row']);
    console.log(xData)

}

// Data tool
function formatTicks(d){ 
    return d3
        .format('~s')(d) 
        .replace('M','Mil') 
        .replace('G','Bil') 
        .replace('T','Tri')
}


function prepareBarChartData(data){ 
    // console.log("data",data);
    const dataMap = d3.rollup(
        data,
        v => ({
            totalvol:d3.sum(v, leaf => leaf.totalvol),
            retailvol:d3.sum(v, leaf => leaf.totalvol),
        }),
        //d => d.release_year,
        d => d.release_mon
        
    );
    const rollupValues = Object.values(dataMap);
    const dataArray = Array.from(dataMap, d=>({row:d[0], col:d[1].totalvol,col2:d[1].retailvol})); 
    console.log(dataArray);


    return dataArray;
}



//Main
function ready(data){
    // const moviesClean = filterData(movies); 
    const barChartData = prepareBarChartData(data)
        .sort(
            (a,b)=>{
                return d3.descending(a.release_year, b.release_year);
            } 
        );
    console.log("barChartData", barChartData);

    setupCanvas(barChartData,'.bar-chart-container');
}


d3.csv('data/TSMC2013-2022.csv',type).then( 
    res=>{
        ready(res);
        //console.log(res); 
        // debugger;
    }
)