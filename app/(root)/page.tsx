import { Button } from "@/components/ui/button";
import Wines from "@/components/Wines";
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className="flex flexs-col justify-center items-center">
        <Image src="https://www.donjulio.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmsj5difukazp%2F5pOeQshPGaI6YsElwE53v7%2F96a10790ccfe2f1927da2bf4c64bf8ac%2FRecipe-blanco-cranberry-rosemary-margarita&w=1440&q=75" alt="ad" width={500} height={500} />
        <Image src="https://bottleraiders.com/wp-content/uploads/2023/02/Premium-Tequila-Banner.jpg" alt="ad" width={500} height={500} className="float-left"/>
        <Image src="https://www.ruinart.com/dw/image/v2/BGMK_PRD/on/demandware.static/-/Library-Sites-Ruinart-shared/default/dwadb02726/images/Products/Blanc-de-Blancs/Blanc-de-blancs-notes_16-9_1920x1080.jpg" alt="ad" width={500} height={500} className="float-top"/>
        <h1 className="">Welcome to this fake wine store</h1>
      </div>
    </>
  )
}

export default Home;