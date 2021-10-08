import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <App img= {data[0].img} 
    conditions= {data[0].conditions}
    time= {data[0].time}/>

    <App img= {data[1].img} 
    conditions= {data[1].conditions}
    time= {data[1].time}/>

<App img= {data[2].img} 
    conditions= {data[2].conditions}
    time= {data[2].time}/>

<App img= {data[3].img} 
    conditions= {data[3].conditions}
    time= {data[3].time}/>

<App img= {data[4].img} 
    conditions= {data[4].conditions}
    time= {data[4].time}/>


</div>
  ,
  rootElement
);
