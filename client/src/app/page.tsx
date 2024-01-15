import {
  dummyEight,
  dummyFive,
  dummyFour,
  dummyOne,
  dummySeven,
  dummySix,
  dummyThree,
  dummyTwo,
} from "@/assets/images";
import Banner from "./components/Banner";
import CategoryBanners from "./components/CategoryBanners";
import ProductsList from "./components/ProductsList";
import { Tab, Tabs } from "./components/Tabs";
import Image from "next/image";
import Link from "next/link";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <main>
      <div className="px-5">
        <Banner></Banner>
        <Tabs position="justify-center">
          <Tab active={true} title="All Plants">
            <ProductsList
              productTag="all"
              apiEndPoint={{
                filters: { limit: 8 },
              }}
            />
            <div className="flex justify-center mt-20">
              <Link
                href={`/products/all`}
                className=" border-solid border-[1px] border-gray-900 py-3 w-[200px] hover:bg-gray-900 text-center hover:text-white"
              >
                Show All
              </Link>
            </div>
          </Tab>
          <Tab active={false} title="New Arrivals">
            <ProductsList
              productTag="new"
              apiEndPoint={{
                filters: { limit: 8, tags: "new" },
              }}
            />
            <div className="flex justify-center mt-20">
              <Link
                href={`/products/new`}
                className="text-center border-solid border-[1px] border-gray-900 py-3 w-[200px] hover:bg-gray-900 hover:text-white"
              >
                Show All
              </Link>
            </div>
          </Tab>
          <Tab active={false} title="Sale">
            <ProductsList
              productTag="sale"
              apiEndPoint={{
                filters: { limit: 8, tags: "sale" },
              }}
            />
            <div className="flex justify-center mt-20">
              <Link
                href={`/products/sale`}
                className="text-center border-solid border-[1px] border-gray-900 py-3 w-[200px] hover:bg-gray-900 hover:text-white"
              >
                Show All
              </Link>
            </div>
          </Tab>
        </Tabs>
        <CategoryBanners></CategoryBanners>

        <section className=" mt-36">
          <div className="mx-auto">
            <h6 className=" text-lg font-light text-lime-600 text-center mb-2">
              Find your dream plants
            </h6>
            <h2 className=" text-3xl font-bold text-gray-600 text-center">
              Here's How It Works
            </h2>
            <HowItWorks />
          </div>
        </section>

        <section className="m-36">
          <h2 className=" text-3xl font-bold text-lime-600 text-center mb-2">
            Sign Up To Our Newsletter
          </h2>
          <h6 className=" text-sm font-light text-gray-600 text-center mb-2">
            Stay up to date on the latest news with our carefully curated
            newsletters.
          </h6>
          <div className="mt-[40px] flex items-center justify-center">
            <input type="text" className=" bg-gray-200 py-4 px-4 w-[40%]" />
            <button className="p-4 bg-black text-white px-[40px] hover:bg-lime-600">
              Submit
            </button>
          </div>
        </section>

        <div className="flex mt-20">
          <Image src={dummyOne} alt="image"></Image>
          <Image src={dummyTwo} alt="image"></Image>
          <Image src={dummyThree} alt="image"></Image>
          <Image src={dummyFour} alt="image"></Image>
          <Image src={dummyFive} alt="image"></Image>
          <Image src={dummySix} alt="image"></Image>
          <Image src={dummySeven} alt="image"></Image>
          <Image src={dummyEight} alt="image"></Image>
        </div>
        <section className="py-24">
          <div className="container mx-auto">
            <h6 className=" text-lg font-light text-lime-600 text-center mb-2">
              Be responsible
            </h6>
            <h2 className=" text-3xl font-bold text-gray-600 text-center mb-4">
              Green Guardians: Planting the Seeds of a Sustainable Future
            </h2>
            <p className="w-[80%] text-center mx-auto">
              Planting trees is a powerful and accessible means of saving our
              planet. Trees act as nature's carbon sinks, absorbing carbon
              dioxide and releasing oxygen, mitigating the impacts of climate
              change. By actively participating in tree-planting initiatives,
              individuals contribute to a sustainable future, fostering
              biodiversity and preserving the delicate balance of our
              ecosystems.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
