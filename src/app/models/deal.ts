import {Peril} from "./peril";
import {Region} from "./region";

export class Deal{

  retention: number;
  limit: number;
  perils: Array<Peril>;
  regions: Array<Region>;
}
