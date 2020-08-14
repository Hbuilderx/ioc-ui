const pieChartSettings={
  setting1:{
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      textStyle: {
        color: '#fff'
      },
      left: 10,
      data: ['西瓜', '橘子', '杨桃']
    },
    color: ["#e033f7", "#15c28e", "#2267e6"],
    series: [{
      name: '销量',
      type: 'pie',
      radius: ['40%', '50%'],
      data: [
        {
          value: 20,
          name: "西瓜",
        },
        {
          value: 13,
          name: "橘子",
        },
        {
          value: 33,
          name: "杨桃",
        }
      ],
    }]
  },
  setting2:{
    series: [
      {
        type: 'pie',
        clockWise: false,
        radius: ['40%', '50%'],
        hoverAnimation: false,
        silent: true,
        center: ['50%', '50%'],
        data: [{
          value: 75,
          name: 'invisible',
          itemStyle: {
            normal: {
              color: '#071925',
              borderWidth:1,
              borderColor: '#073A66'
            }
          }
        },{
          value: 25,
          label: {
            normal: {
              rich: {
                a: {
                  color: '#82ffff',
                  align: 'center',
                  fontSize: 25,
                  fontWeight: "bold",
                  fontFamily:'方正粗倩_GBK'
                },
                b: {
                  color: '#08a0df',
                  align: 'center',
                  fontSize: 25
                },
                c: {
                  fontSize: 15,
                  fontFamily:'方正粗倩_GBK',
                  fontWeight: "bold"
                }
              },
              formatter: function(params){
                return "{a|"+params.value+"}"+" {c|%}"+"\n\n{b|利用率}";
              },
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                color: '#fff'
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#139FBE',
              shadowColor: '#82ffff',
              borderWidth:2,
              borderColor:'#82ffff',
              shadowBlur: 10
            }
          }
        }]
      }
    ]
  }
}

export {pieChartSettings}