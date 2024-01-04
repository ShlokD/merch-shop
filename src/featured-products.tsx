import { useEffect, useRef, useState } from "preact/hooks";
import { useAppContext } from "./app-context";

const FeaturedProducts = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const [current, setCurrent] = useState(0);
  const { addToCart } = useAppContext();

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setCurrent((prev) => {
        if (prev === 2) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo({
      left: current * containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  }, [current]);
  return (
    <div
      ref={containerRef}
      className="flex flex-nowrap  overflow-x-scroll w-full overflow-hidden border-b-4 border-black">
      <div
        className="bg-blue-300 w-full flex-shrink-0 flex-grow-0 flex items-center justify-center"
        style={{
          height: "600px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D)",
          backgroundSize: "cover",
        }}>
        <button
          onClick={() => addToCart?.("abc-123")}
          className="py-2 px-8 rounded-full border-4 border-black bg-white hover:bg-black hover:text-white font-bold text-4xl">
          ADD
        </button>
      </div>
      <div
        className="bg-blue-300 w-full flex-shrink-0 flex-grow-0 flex items-center justify-center"
        style={{
          height: "600px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D)",
          backgroundSize: "cover",
        }}>
        <button
          onClick={() => addToCart?.("sad-341")}
          className="py-2 px-8 rounded-full border-4 border-black bg-white hover:bg-black hover:text-white font-bold text-4xl">
          ADD
        </button>
      </div>
      <div
        className="bg-blue-300 w-full flex-shrink-0 flex-grow-0 flex items-center justify-center"
        style={{
          height: "600px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1620231109648-302d034cb29b?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D)",
          backgroundSize: "cover",
        }}>
        <button
          onClick={() => addToCart?.("bcv-342")}
          className="py-2 px-8 rounded-full border-4 border-black bg-white hover:bg-black hover:text-white font-bold text-4xl">
          ADD
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
