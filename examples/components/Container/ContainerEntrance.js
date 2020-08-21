
import cont1 from "./cont1.vue"
import cont2 from "./cont2.vue"
import cont3 from "./cont3.vue"

import Button from "../../../packages/components/Button/src/index.vue"

export default {
  name: "ContainerEntrance",
  functional: true,
  props: {
    kind: {
      type: String,
    },
  },
  
  render: function (createElement, context) {
    function switchKind () {
      let kind = context.props.kind
      switch(kind){
        case'001':
          return cont1;
          break;
        case'002':
          return cont2;
          break;
        case'003':
          return cont3;
          break;
        case'no':
          return Button;
          break;         
      }   
    }

    return createElement(
      switchKind(),
      context.data,
      context.children
    )
  }
  
  
  
};