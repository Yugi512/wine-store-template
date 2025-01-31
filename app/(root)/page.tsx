import { Button } from "@/components/ui/button";
import Wines from "@/components/Wines";

const Home = () => {
  return (
    <>
      <div className="flex-s mx-auto max-w-7xl p-4">
        <Wines />
      </div>
    </>
  )
}

export default Home;