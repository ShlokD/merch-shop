import { useEffect, useState } from "preact/hooks";
import { useAppContext } from "./app-context";

const APP_URL = "https://api.escuelajs.co/api/v1/categories/1/products";

type Product = {
  title: string;
  price: string;
  id: number;
};

const transformResponse = (json: any[]) => {
  return json.slice(0, 23).map((item) => {
    return {
      title: item.title,
      price: item.price,
      id: item.id,
    };
  });
};

type ProductProps = Product & { isFull: boolean };

const ProductCell = (props: ProductProps) => {
  const { title, price, id, isFull } = props;
  const { addToCart } = useAppContext();
  const [isHover, setIsHover] = useState(false);

  const image = isFull
    ? `https://picsum.photos/1920/600?rand=${Math.random()}`
    : `https://picsum.photos/600/900?rand=${Math.random()}`;
  const hover = isFull
    ? `https://picsum.photos/1920/600?rand=${Math.random()}`
    : `https://picsum.photos/600/900?rand=${Math.random()}`;
  return (
    <div
      className={`${
        isFull ? "w-full" : "w-2/5 lg:w-1/5"
      } flex flex-col p-4 cursor-pointer`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        className={`rounded-2xl border-4 ${
          isHover ? "border-black" : "border-transparent"
        }`}
        src={isHover ? hover : image}
        alt={title}
      />
      <div className="flex justify-between items-center p-2">
        <p className="font-bold text-xl">{title}</p>
        {isHover ? (
          <button
            className="p-4 bg-black text-white font-bold rounded-full"
            onClick={() => addToCart?.(`${id}`)}
          >
            Add
          </button>
        ) : (
          <p className="font-bold text-lg">Rs.{price}</p>
        )}
      </div>
    </div>
  );
};

const ProductsGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const res = await fetch(APP_URL);
    const json = await res.json();
    setProducts(transformResponse(json as any[]));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex p-4 gap-2 flex-wrap mt-20 items-baseline justify-center">
      {products.map((product, i) => {
        return (
          <ProductCell
            key={`product-${i}`}
            {...product}
            isFull={i === 4 || i === 8 || i === 12}
          />
        );
      })}
    </div>
  );
};

export default ProductsGrid;
