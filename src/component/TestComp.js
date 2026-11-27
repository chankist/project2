
import { useReducer } from "react";

const reducer = (state, action) => {//상태 변화 함수
    // if(action.type === "+") {
    //     return state + action.data;
    // }else if(action.type === "-") {
    //     return state - action.data;
    // }

    switch(action.type) {
        case "+":
            return state + action.data;
        case "-":
            return state - action.data;
        default:
            return 0;
    }

    }

const TestComp = () => {
    
    const [count, dispatch] = useReducer(reducer,0);//0-> 초기값
    //useReducer ->setCount 사용 X
    //dispatch->상태 변화 촉발 함수



    return (
        <div>
            <div>
                <h4>{count}</h4>

            </div>

            <div>
                <button onClick={()=>dispatch({type:"+", data:1})}>+</button>
                <button onClick={()=>dispatch({type:"-", data:1})}>-</button>
                <button onClick={()=>dispatch({type:"0"})}>초기화</button>
            </div>
        </div>
    )
}

export default TestComp;