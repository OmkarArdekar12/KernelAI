import { Tab } from "../types";
import { FaFileCode } from "react-icons/fa";
import { VscDebugAlt } from "react-icons/vsc";
import { GiRegeneration } from "react-icons/gi";

const tabs: Tab[] = [
  {
    id: "explain",
    label: "Explain Code",
    icon: FaFileCode,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "debug",
    label: "Debug Code",
    icon: VscDebugAlt,
    gradient: "from-red-500 to-orange-500",
  },
  {
    id: "generate",
    label: "Generate Code",
    icon: GiRegeneration,
    gradient: "from-green-500 to-blue-500",
  },
];

export default tabs;
