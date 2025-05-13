"use server";
import {Metadata} from "next";

type Props={
  params: Promise<{productsId: string}>;
};

export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {
  const { productsId } = await params;
  return {
    title: `Product ${productsId}`,
    description: `Details about product ${productsId}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const { productsId } = await params;

  return <h1>Details about product {productsId}</h1>;
}