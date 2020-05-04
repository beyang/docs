import fs from "fs";
import { vars as tldpVars } from "./tldp";
import { vars as gnuVars } from "./gnu";

const specialVars: { [key: string]: string } = {
  ...gnuVars,
  ...tldpVars,
};

fs.writeFileSync("generated/vars.json", JSON.stringify(specialVars));
