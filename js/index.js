// 柱状图模拟
(function(){
    let myChart=echarts.init(document.querySelector('.bar .chart'))  
    let option= {
            color:['#2f89cf'],
            grid:{
                left:'0%',
                top:'10px',
                right:'0%',
                bottom:'4%',
                containLabel:true
             },
            tooltip:{
                trigger:'axis',
                show:true
            },
            xAxis: {
              type: 'category',
              data: ["旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
              interval:'0',
              axisTick:{
                 alignWithLabel:true
              },
            //   修改刻度标签相关样式
              axisLabel:{
                color:'rgba(255,255,255,0.6)',
                fontSize:'10'
              },
            // 不显示x坐标轴的样式
              axisLine:{
                 show:false
              }
            },
            yAxis: {
              type: 'value',
                //   修改刻度标签相关样式
              axisLabel:{
                    color:'rgba(255,255,255,0.6)',
                    fontSize:'10'
                  },
                // 不显示x坐标轴的样式
              axisLine:{
                     lineStyle:{
                        color:'rgba(255,255,255,0.1)'
                     }
                  },
              splitLine:{
                   lineStyle:{
                      color:'rgba(255,255,255,0.1)'
                   }
              }
            },
            series: [
              {
                data: [200, 300, 300, 900, 1500, 1200, 600],
                type: 'bar',
                barWidth:'35%',
                showBackground: true,
                backgroundStyle: {
                  color: 'rgba(180, 180, 180, 0.2)'
                }
              }
            ]
          };
          myChart.setOption(option)
        //   配置图表的屏幕自适应
        window.addEventListener('resize',function(){
            myChart.resize();
        })

})();


// 柱状图2
(function(){
   let myChart=echarts.init(document.querySelector('.bar2  .chart'));
   let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
   let option = {
    // legend: {},
    grid: {
      top:'10%',
      left: '22%',
      bottom: '10%',
    //   containLabel: true
    },
    xAxis: {
      show:false
    },
    yAxis: [
        {
            type: 'category',
            data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
            inverse:true,
            axisLine:{
              show:false,
            },
            axisTick:{
              show:false,
            },
            axisLabel:{
                textStyle:{
                    color:'#fff',
                    fontSize:12
                }
            }
          },
         {
            data:[702, 350, 610, 793, 664],
            inverse:true,
            axisLine:{
              show:false,
            },
            axisTick:{
              show:false,
            },
            axisLabel:{
                textStyle:{
                    color:'#fff',
                    fontSize:12
                } 
         } 
        }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        left:'50%',
        data: [70, 34, 60, 78, 69],
        yAxisIndex:0,
        // 设置圆角
        itemStyle:{
           barBorderRadius:20,
           color:function(params){
              return myColor[params.dataIndex]
           }
        },
        baCategoryGap:50,
        barWidth:10,
        label:{
            show:true,
            position:'inside',
            formatter:'{c}%'
        }
      },
      {
        name: '框',
        type: 'bar',
        data:[100, 100, 100, 100, 100],
        yAxisIndex:1,
        barCategoryGap:50,
        barWidth:14,
        itemStyle:{
            color:'none',
            barBorderRadius:15,
            borderColor:'#00c1de',
            borderWidth:3,
        }
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
      myChart.resize();
  })
})();


// 折线图模块1

(function(){
  let myChart=echarts.init(document.querySelector('.line .chart'))
  let yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
           [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
           [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    },
    {
      year: '2021',  // 年份
      data: [  // 两个数组是因为有两条线
           [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
           [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
    }
   ];
  let option = {
    // title: {
    //   text: 'Stacked Line'
    // },
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['新增粉丝','新增游客'],
      textStyle:{
        color:'#4c9afb'
      },
      right:'10%'
    },
    grid: {
      top:'20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show:true,
      borderColor:'#012f4a',
      containLabel: true
    },
    toolbox: {
      feature: {
        // saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick:{
        show:false
      },
      axisLabel:{
        color:'#4c9fba'
      },
      axisLine:{
        show:false
      },
      boundaryGap:false
    },
    yAxis: {
      type: 'value',
      axisTick:{
        show:false
      },
      axisLabel:{
        color:'#4c9fba'
      },
      axisLine:{
        show:false
      },
     splitLine:{
         lineStyle:{
            color:'#012f4a'
         }
     },
      boundaryGap:false
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        // 直线变成曲线
        smooth:true,
      },
      {
        name: '新增游客',
        type: 'line',
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        smooth:true
      },
    ]
  };
  myChart.setOption(option);
//   屏幕的自适应
  window.addEventListener('resize',function(){
    myChart.resize();
  })
//   点击更换数据
//   const abtns=document.querySelectorAll('.line h2 a');
//   abtns.forEach((btn)=>{
//     btn.addEventListener('click',()=>{
//         option.series[0].data=yearData.data[0];
//         option.series[1].data=yearData.data[1];
//         myChart.setOption(option);
//      })
   
//   })

$(".line h2").on('click','a',function(){
    let obj=yearData[$(this).index()];
    option.series[0].data=obj.data[0];
    option.series[1].data=obj.data[1];
    myChart.setOption(option);
})


})();

// 折线图模块2

(function(){
  let myChart=echarts.init(document.querySelector('.line2 .chart'));
  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Email', '转发量'],
      top:'0%',
      textStyle:{
         color:'rgba(255,255,255,0.5)',
         fontSize:'12'
      }
    },
    grid: {
      top:'30',
      left: '10',
      right: '10',
      bottom: '10',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
        axisLabel:{
            textStyle:{
                color:'rgba(255,255,255,.5)',
                fontSize:'12'
            }
        },
        axisLine:{
            lineStyle:{
                color:'rgba(255,255,255,.2)',
            }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick:{
            show:false,
        },
        axisLabel:{
            textStyle:{
                color:'rgba(255,255,255,.5)',
                fontSize:'12'
            }
        },
        axisLine:{
            lineStyle:{
                color:'rgba(255,255,255,.2)',
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(255,255,255,0.1)'
            }
        }
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {
            color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点的类型
        symbol:'circle',
        symbolSize:8,
        emphasis: {
          focus: 'series'
        },
        data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
        smooth:true,
        showSymbol:false,
        itemStyle:{
            color:"#0184d5",
            // width:'2',
            borderColor:'rgba(255,255,255,0.1)',
            borderWidth:12
        }
      },
      {
        name: '转发量',
        type: 'line',
        smooth:true,
        lineStyle:{
            normal:{
                color:'#00d'
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }  
        },
        symbol:"circle",
        symbolSize:5,
        itemStyle:{
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        emphasis: {
          focus: 'series'
        },
        data: [130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
        smooth:true,
        showSymbol:false
      },
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
      myChart.resize();
  })
})();


// 饼状图定制1
(function(){
   let myChart=echarts.init(document.querySelector('.pie .chart'));
   let option={
    color: [
        "#065aab",
        "#066eab",
        "#0682ab",
        "#0696ab",
        "#06a0ab",
      ],
      tooltip: {
        trigger: 'item',
        formatter:"{a} <br/>{b}: {c} ({d}%})"
      },
      legend: {
        bottom:'0%',
        left: 'center',
        itemWidth:10,
        itemHeight:10,
        data:["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
        textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
      },
      series: [
        {
          name: '年龄分布',
          type: 'pie',
          radius: ['40%', '60%'],
          avoidLabelOverlap: false,
          interval:'0',
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1, name: "0岁以下" },
            { value: 4, name: "20-29岁" },
            { value: 2, name: "30-39岁" },
            { value: 2, name: "40-49岁" },
            { value: 1, name: "50岁以上" }
          ]
        }
      ]
   }
   myChart.setOption(option);
   window.addEventListener('resize',function(){
    myChart.resize();
   })
})();


// 饼状图定制二
(function(){
   let myChart=echarts.init(document.querySelector('.pie2 .chart'));
   let option={
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    legend: {
        bottom:'0%',
        itemHeight:10,
        itemWidth:10,
        textStyle:{
            color:['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
            fontSize:12
        }
      },
    series: [
        {
          name: '面积模式',
          type: 'pie',
          radius: ['10%', '70%'],
          center: ['50%', '50%'],
          roseType: 'radius',
          label:{
               fontSize:10
          },
          labelLine: {
             length: 6,
             length2: 8
           },
          itemStyle: {
            borderRadius: 8
          },
          data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
          ]
        }
      ]
   }
   myChart.setOption(option);
})();


    