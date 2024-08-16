import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/UseStateExamples/ClassCounter';
import HookCounter from './Components/UseStateExamples/HookCounter';
import HookCounterTwo from './Components/UseStateExamples/HookCounterTwo';
import HookCounterThree from './Components/UseStateExamples/HookCounterThree';
import HookCounterFour from './Components/UseStateExamples/HookCounterFour';
import HookCounterOne from './Components/useEffectExamples/HookCounterOne';
import HookMouse from './Components/useEffectExamples/HookMouse';
import MouseContainer from './Components/useEffectExamples/MouseContainer';
import IntervalHookCounter from './Components/useEffectExamples/IntervalHookCounter';
import DataFetching from './Components/useEffectExamples/DataFetching';
import HookContext from './Components/useContextExamples/HookContext';



function App() {
  return (
    <div className="App">
      {/* <div>
        <h2>
          Use State Examples
          </h2>
      <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      
      </div> */}

{/* <div>
        <h2>
          Use Effect Examples
          </h2>
          <HookCounterOne />
        <HookMouse />      
        <MouseContainer />
        <IntervalHookCounter />
        <DataFetching />
      </div>  */}
      
<div>
        <h2>
          Use Context Examples
          </h2>
          <HookContext />
      </div>

    </div>
  );
}

export default App;
