let data = []
async function getData() {
    // 取資料
    dataGet =await  d3.csv('data/TSMC2013-2022.csv')
    data = dataGet
    console.log(data)
    drawBarChart()
};
getData()

// RWD
function drawBarChart(){
    // 刪除原本的svg.charts，重新渲染改變寬度的svg
    d3.select('.chart svg').remove();

    // RWD 的svg 寬高
    const rwdSvgWidth = parseInt(d3.select('.chart').style('width')),
          rwdSvgHeight = rwdSvgWidth,
          margin = 20,
          marginBottom = 100

    const svg = d3.select('.chart')
                  .append('svg')
                  .attr('width', rwdSvgWidth)
                  .attr('height', rwdSvgHeight);

     // map 資料集
     const xData = data.map((i) => i['DateTime']);

     // 設定要給 X 軸用的 scale 跟 axis
     const xScale = d3.scaleBand()
                    .domain(xData)
                    .range([margin*2, rwdSvgWidth - margin]) // 寬度
                    .padding(0.2)

     const xAxis = d3.axisBottom(xScale)

     // 呼叫繪製x軸、調整x軸位置
     const xAxisGroup = svg.append("g")
                         .call(xAxis)
                         .attr("transform", `translate(0,${rwdSvgHeight - marginBottom})`)

     // 設定要給 Y 軸用的 scale 跟 axis
     const yScale = d3.scaleLinear()
                    .domain([0, 600])
                    .range([rwdSvgHeight - marginBottom, margin]) // 數值要顛倒，才會從低往高排
                    .nice() // 補上終點值

     const yAxis = d3.axisLeft(yScale)
                    .ticks(5)
                    .tickSize(3)

     // 呼叫繪製y軸、調整y軸位置
     const yAxisGroup = svg.append("g")
                         .call(yAxis)
                         .attr("transform", `translate(${margin*2},0)`)

     const subgroups =  Object.keys(data[0]).slice(1)

     // 第二條X軸的比例尺，用來設定多條bar的位置
     const xSubgroup = d3.scaleBand()
                         .domain(subgroups)
                         .range([0, xScale.bandwidth()])
                         .padding([0.05])

     // 設定不同 subgorup bar的顏色
     const color = d3.scaleOrdinal()
     .domain(subgroups)
     .range(['#ff2d85','#4a4ae0','#4daf4a', '#f29909'])


     // 開始建立長條圖
     const bar = svg.append('g')
                    .selectAll('g')
                    .data(data)
                    .join('g')
                    .attr('transform',  d => `translate(${xScale(d['年度'])}, 0)`)
                    .selectAll('rect')
                    .data(d => {
                    return subgroups.map(key=>{
                         return {key:key, value:d[key]};})
                    })
                    .join('rect')
                    .attr('x', d => xSubgroup(d.key))
                    .attr("y", d => yScale(d.value))
                    .attr("width", xSubgroup.bandwidth())
                    .attr("height", d =>{
                         return (rwdSvgHeight-marginBottom) - yScale(d.value)})
                    .attr("fill", d => color(d.key))
                    .style('cursor', 'pointer')

     // 加上下方分類標籤
     const tagsWrap =  svg.append('g')
          .selectAll('g')
          .attr('class', 'tags')
          .data(subgroups)
          .enter()
          .append('g')
          .attr('transform', "translate(-70,0)")
     
     tagsWrap.append('rect')
          .attr('x', (d,i)=> (i+1)*marginBottom*1.3)
          .attr('y', rwdSvgHeight-marginBottom/2)
          .attr('width', 20)
          .attr('height', 20)
          .attr('fill', d => color(d))

     tagsWrap.append('text')
          .attr('x', (d,i)=> (i+1)*marginBottom*1.3)
          .attr('y', rwdSvgHeight-10)
          .style('fill', '#000')
          .style('font-size', '12px')
          .style('font-weight', 'bold')
          .style("text-anchor", 'middle')
          .text(d=>d)
}

d3.select(window).on('resize', drawBarChart);