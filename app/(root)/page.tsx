import { Button } from "@/components/ui/button";
import Wines from "@/components/Wines";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import Image from 'next/image';

const Home = async () => {
  const result = await db.select().from(users)
  console.log(JSON.stringify(result,null,2))
  return (
    <>
      <div className="flex flex-col flex-wrap items-center mt-auto">
        <div>
          <h1 className="">Welcome to this fake wine store</h1> 
        </div>
        <div>
          <Image src="https://bottleraiders.com/wp-content/uploads/2023/02/Premium-Tequila-Banner.jpg" alt="ad" width={900} height={900} className="float-left"/>
        </div>
        <div>
          <Image src="https://www.ruinart.com/dw/image/v2/BGMK_PRD/on/demandware.static/-/Library-Sites-Ruinart-shared/default/dwadb02726/images/Products/Blanc-de-Blancs/Blanc-de-blancs-notes_16-9_1920x1080.jpg" alt="ad" width={900} height={900} className="float-top"/>
        </div>
        
      </div>
    </>
  )
}

export default Home;