import VehicleDetail from "./VehicleDetail";
import { vehiclesData } from "../data/vehiclesData";

function RangeRover() {
  return <VehicleDetail vehicle={vehiclesData.rangeRover} />;
}

export default RangeRover;