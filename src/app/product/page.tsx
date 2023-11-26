import { getSingleProduct } from "@/helpers";

interface Props{
    searchParams:{[key:string]: string | string[] | undefined }
};

const ProductPage = ({searchParams}:Props) => {
    const _idString = searchParams?._id;
    const _id = Number(_idString);
    const product = getSingleProduct(_id);
    console.log(product);
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage;