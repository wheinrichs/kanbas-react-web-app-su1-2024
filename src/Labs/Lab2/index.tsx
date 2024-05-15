import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Margins from "./Padding";
import Padding from "./Margins";
import "./index.css";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import RelativePosition from "./RelativePosition";
import AbsolutePosition from "./AbsolutePosition";
import FixedPosition from "./FixedPosition";
import ZIndex from "./ZIndex";
import Float from "./Float";
import Grid from "./Grid";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIconSampler";
import StyleAttribute from "./StyleAttribute";
import IDSelector from "./IDSelector";
import ClassSelector from "./ClassSelector";
import ClassBasedOnStructure from "./ClassBasedOnStructure";
import Colors from "./Colors";

export default function Lab2() {
  return (
    <div>
      <StyleAttribute />
      <IDSelector />
      <ClassSelector />
      <ClassBasedOnStructure />
      <Colors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <Corners />
      <Dimensions />
      <RelativePosition />
      <AbsolutePosition />
      <FixedPosition />
      <ZIndex />
      <Float />
      <Grid />
      <Flex />
      <ReactIconsSampler />
    </div>
  );
}
