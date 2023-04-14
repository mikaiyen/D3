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


function setupCanvas(barChartData,rout){
    const svg_width = 800;
    const svg_height = 2500;
    const chart_margin = {
        top:80,
        right:40,
        bottom:40,
        left:80
    };
    const chart_width = svg_width - (chart_margin.left + chart_margin.right); 
    const chart_height = svg_height - (chart_margin.top + chart_margin.bottom);
    const this_svg = d3
        .select(rout)
        .append('svg') 
        .attr('width', svg_width)
        .attr('height',svg_height)
        .append('g') 
        .attr('transform',`translate(${chart_margin.left},${chart_margin.top})`);
    //scale
    const xMax = d3
        .max(barChartData, d=>d.col);
    //V3.Short writing for v2
    const xScale_v3 = d3
        .scaleLinear([0,xMax],[0, chart_width]);

    //垂直空間的分配 - 平均分布給各種類
    const yScale = d3
        .scaleBand()
        .domain(barChartData.map(d=>d.row))
        .rangeRound([0, chart_height])
        .paddingInner(0.15);
    //Draw bars
    const bars = this_svg
        .selectAll('.bar')
        .data(barChartData)
        .enter()
        .append('rect')
        .attr('class','bar')
        .attr('x',0) 
        .attr('y',d=>yScale(d.row))
        .attr('width',d=>xScale_v3(d.col))
        .attr('height',yScale.bandwidth()) 
        .style('fill','dodgerblue');
    //Draw header
    const header = this_svg
        .append('g')
        .attr('class','bar-header') 
        .attr('transform',`translate(0,${-chart_margin.top/2})`)
        .append('text'); 
    header
        .append('tspan')
        .style('font-size','1.5em')
        .text('台積電TSMC(2330)月成交量長條圖'); 
    header
        .append('tspan')
        .text('時間:2013-2022')
        .attr('x',0)
        .attr('y',20)
        .style('font-size','1.2em')
        .style('fill','#555');
    //tickSizeInner : the length of the tick lines
    //tickSizeOuter : the length of the square ends of the domain path 
    const xAxis = d3
        .axisTop(xScale_v3)
        .tickFormat(formatTicks) 
        .tickSizeInner(-chart_height) 
        .tickSizeOuter(0);

    const xAxisDraw = this_svg
        .append('g') .attr('class','x axis')
        .call(xAxis);

    const yAxis = d3
        .axisLeft(yScale)
        .tickSize(0); 
    const yAxisDraw = this_svg
        .append('g')
        .attr('class','y axis')
        .call(yAxis); 
    yAxisDraw
        .selectAll('text')
        .attr('dx','-0.8em');


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
                return d3.descending(a.release_mon, b.release_mon);
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