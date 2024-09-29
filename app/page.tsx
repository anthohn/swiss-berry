import Landing from "./components/Landing";
import Services from "./components/Services";


export default function Home() {
  return (
    <>
      <div className="bg-[#3B4297] absolute flex justify-center items-center mx-auto top-0 -z-10 h-[18rem] blur-[10rem]  rounded-b-full w-11/12 left-1/2 transform -translate-x-1/2"></div>
      <Landing />
      <Services />
      </>
  );
}
