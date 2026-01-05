import { Tab } from "../types";
import { FaFileCode } from "react-icons/fa";
import { VscDebugAlt } from "react-icons/vsc";
import { GiRegeneration } from "react-icons/gi";

const tabs: Tab[] = [
  {
    id: "explain",
    label: "Explain Code",
    icon: FaFileCode,
    gradient: "from-emerald-600/95 via-green-600/95 to-teal-600/95",
  },
  {
    id: "debug",
    label: "Debug Code",
    icon: VscDebugAlt,
    gradient: "from-lime-600/95 via-emerald-600/95 to-green-600/95",
  },
  {
    id: "generate",
    label: "Generate Code",
    icon: GiRegeneration,
    gradient: "from-green-600/95 via-teal-600/95 to-emerald-600/95",
  },
];

export default tabs;
