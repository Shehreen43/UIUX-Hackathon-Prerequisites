import Image from "next/image";
import TopHeader from "./components/TopHeader";
import TitleBar from "./components/TitleBar";
import CountdownTimer from "./components/CountdownTimer";

export default function Home() {
  return (
    <>
   <TitleBar
      title="Categories"
      tag="Browse By Category"
      timer={<CountdownTimer />}
    >
      <button className="bg-secondary2 text-white px-4 py-2 rounded">
        View All
      </button>
    </TitleBar>
    </>
  )
}