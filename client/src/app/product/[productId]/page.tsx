"use client";

import { productSample } from "@/assets/images";
import Quantity from "../../components/Quantity";
import { Tab, Tabs } from "../../components/Tabs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import OtherPageBanner from "../../components/OtherPageBanner";
import ProductsList from "../../components/ProductsList";
import { getSingleProduct } from "@/services/apis/products";
import Spinner from "@/app/components/Spinner";
import { getAllBanners } from "@/services/apis/banner";
import ImageHelper from "@/app/components/ImageHelper";
import Link from "next/link";

const SinglePage = ({ params }: any) => {
  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      getSingleProduct(params.productId).then((res: any) => {
        if (res.status === "success") {
          setProduct(res.data.product);
          console.log(res.data.product, "pp");
          setIsLoading(false);
        }
      });
    } catch {}
  }, []);
  return (
    <>
      <OtherPageBanner title={`Plant name: ${product.name}`}></OtherPageBanner>
      <section className=" relative">
        {isLoading && <Spinner title="Loading Product..." />}
        {product.name && (
          <div className="container mx-auto ">
            <div className="flex gap-16">
              <div className="flex-1">
                <ImageHelper
                  imageAlt={product.name}
                  imageData={product?.photo?.data}
                />
              </div>
              <div className="flex-1">
                <h2 className=" text-4xl font-semibold text-gray-700 mb-4 capitalize">
                  {product.name}
                </h2>
                <h5 className=" text-3xl font-light text-gray-700 mb-10">
                  Rs. {product.price}
                </h5>
                <p className=" text-md font-light text-gray-400 pb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  posuere metus vitae arcu imperdiet, id aliquet ante
                  scelerisque. Sed sit amet sem.
                </p>
                <Quantity label={true}></Quantity>
                <div className="flex gap-3 mt-10">
                  <button className="bg-lime-600 text-white px-10 py-4 flex gap-3 items-center hover:bg-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    Add to Cart
                  </button>
                  <button className="py-4 px-5 border-lime-600 border-solid border-[1px] hover:bg-lime-600 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </button>
                  <button className="py-4 px-5 border-lime-600 border-solid border-[1px] hover:bg-lime-600 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-share"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                    </svg>
                  </button>
                </div>
                <hr className="my-10"></hr>
                <ul className=" text-sm text-gray-700">
                  <li className="mb-3">
                    <label>Category: </label>
                    <a
                      href=""
                      className="text-gray-500 hover:text-lime-600 hover:underline"
                    >
                      Potter Plants
                    </a>
                  </li>
                  <li>
                    <label>Tags: </label>
                    {product.tags.length > 0 &&
                      product.tags.map((tag: string, index: number) => {
                        return (
                          <Link
                            href="/"
                            className="text-gray-500 hover:text-lime-600 hover:underline"
                            key={index}
                          >
                            {tag}
                          </Link>
                        );
                      })}
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Tabs position="justify-start" divider={true}>
                <Tab title="Description">
                  <p className=" text-gray-500 font-light text-sm mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla augue nec est tristique auctor.
                  </p>
                  <p className=" text-gray-500 font-light text-sm">
                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                    feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                    tempus ante. Fusce ultricies massa massa. Fusce aliquam,
                    purus eget sagittis vulputate, sapien libero hendrerit est,
                    sed commodo augue nisi non neque. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed tempor, lorem et
                    placerat vestibulum, metus nisi posuere nisl, in accumsan
                    elit odio quis mi.
                  </p>
                </Tab>
                <Tab title="Reviews">
                  <p>No Reviews</p>
                </Tab>
              </Tabs>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-5 text-gray-700">
                Related Products
              </h3>
              <div className="flex flex-wrap gap-4">
                <ProductsList
                  productTag={product.tags[0]}
                  apiEndPoint={{
                    filters: { limit: 8, tags: product.tags[0] },
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SinglePage;
