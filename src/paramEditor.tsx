import React, {useState} from "react";
import { model } from "./data";


export default function ParamEditor({param, model} : Props) {
  const getModel = () : void => {
    console.log(model)
  }
  return (
    <div className="App">
      <form style={{display: "grid"}}>
          {param.map(paramElement => {
            const valueObj = model.paramValues.find(paramValue => paramValue.paramId === paramElement.id);
            return <ParamLabel element={paramElement} valueObj={valueObj} key={paramElement.id}/>
          })}
      </form>
      <button onClick={getModel} style={{marginTop: '10px'}}>Get Model</button>
    </div>
  );
}

const ParamLabel = ({ element, valueObj } : ParamLabel) => {
  const [value, setValue] = useState(valueObj?.value)
  const handleOnChange = (event : any) : void => {
    const paramId : number = Number(event.target.id);
    const value : string = event.target.value;
    setValue(value);
    setModel({ paramId, value });
  } 
  return (
    <label key={element.id} style={{ marginTop: '10px' }}>
      <span style={{ marginRight: '10px' }}>{element.name}</span>
      <input type='text' value={value} id={String(element.id)} onChange={handleOnChange}></input>
    </label>
  );
}

function setModel ({paramId, value} : ParamValue) : void {
  const hasValue = model.paramValues.find(paramValue => paramValue.paramId === paramId)
  if (hasValue) {
    model.paramValues[paramId - 1].value = value;
  } else {
    model.paramValues.push({"paramId": paramId, "value" : value})
  }
}

export interface Param {
  id: number;
  name: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
}

interface Props {
  param: Param[];
  model: Model;
}

interface ParamLabel { 
  element: Param;
  valueObj: ParamValue | undefined;
}

