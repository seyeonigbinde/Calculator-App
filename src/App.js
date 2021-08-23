import React, { useReducer }  from 'react'
import reducer, { initialState } from './reducers/index'
import './App.css'
import TotalDisplay from './components/TotalDisplay'
import CalcButton from './components/CalcButton'
import { applyNumber, changeOperation, clearDisplay, 
  addToMemoryPlus, addToMemoryApply, addToMemoryMC } from './actions/index'


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (number) => {
    dispatch(applyNumber(number));
  };

  const handleOperator = (operation)=>{
    dispatch(changeOperation(operation));
  }

  const handleClear = (e)=>{
    dispatch(clearDisplay());
  }
  const handleMemory = (e)=>{
    dispatch(addToMemoryPlus());
  }

  const handleMemoryApply = (e)=>{
    dispatch(addToMemoryApply());
  }

  const handleMemoryMC = (e)=>{
    dispatch(addToMemoryMC());
  }

  return (
    <div className="App">
      <nav className="navbar">
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemory}/>
              <CalcButton value={"MR"} onClick={handleMemoryApply}/>
              <CalcButton value={"MC"} onClick={handleMemoryMC}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick= { () =>handleChanges (1)}/>
              <CalcButton value={2} onClick= { () =>handleChanges (2)}/>
              <CalcButton value={3} onClick= { () =>handleChanges (3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick= { () =>handleChanges (4)}/>
              <CalcButton value={5} onClick= { () =>handleChanges (5)}/>
              <CalcButton value={6} onClick= { () =>handleChanges (6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick= { () =>handleChanges (7)}/>
              <CalcButton value={8} onClick= { () =>handleChanges (8)}/>
              <CalcButton value={9} onClick= { () =>handleChanges (9)}/>
            </div>

            <div className="row">
              <CalcButton value={0} onClick= { () =>handleChanges (0)}/>
              <CalcButton value={"+"} onClick= { () =>handleOperator ("+")}/>
              <CalcButton value={"-"} onClick= { () =>handleOperator ("-")}/>
            </div>

            <div className="row">
              <CalcButton value={"*"} onClick= { () =>handleOperator ("*")}/>
              <CalcButton value={"/"} onClick= { () =>handleOperator ("/")}/>
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App
