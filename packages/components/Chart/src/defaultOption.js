const BASIC_OPTION={
  //配置1
  option1:{
    tooltip: {
      trigger: 'item',
      // formatter: '{a} <br/>{b}: {c} ({d}%)'
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

  //配置2
  option2:{


  }
};
const EMPTY_OPTION ={
  option1:{

  },
  option2:{

  }
};

export {BASIC_OPTION,EMPTY_OPTION}