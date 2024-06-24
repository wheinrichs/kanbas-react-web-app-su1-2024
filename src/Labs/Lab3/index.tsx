import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import MyComponent from "./BooleanVariables";
import IfElse from "./IfElse";
import Ternary from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInLine";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import Implied from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import ArraysComponent from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoList from "./todos/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./HighLight";
import PathParameters from "./PathParameters";

export default function Lab3() {
    console.log("Hello World");
    return (
      <div id="wd-lab3" className="container-fluid">
        <h3>Lab 3</h3>
        <VariablesAndConstants/>
        <VariableTypes/>
        <MyComponent/>
        <IfElse/>
        <Ternary/>
        <ConditionalOutputIfElse/>
        <ConditionalOutputInline/>
        <LegacyFunctions/>
        <ArrowFunctions/>
        <Implied/>
        <TemplateLiterals/>
        <SimpleArrays/>
        <ArrayIndexAndLength/>
        <AddingAndRemovingToFromArrays/>
        <ForLoops/>
        <MapFunction/>
        <FindFunction/>
        <ArraysComponent/>
        <FilterFunction/>
        <JsonStringify/>
        <House/>
        <TodoList/>
        <Spreading/>
        <Destructing/>
        <FunctionDestructing/>
        <DestructingImports/>
        <Classes/>
        <Styles/>
        <Add a={3} b={4} />
        <h4>Square of 4</h4>
        <Square>4</Square>
        <hr />
        <Highlight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
          vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
        </Highlight>
        <PathParameters/>


      </div>
    );
  }
  