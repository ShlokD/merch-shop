import { AppContextProvider } from "./app-context";
import FeaturedProducts from "./featured-products";
import Footer from "./footer";
import Header from "./header";
import ProductsGrid from "./products-grid";
export function App() {
  return (
    <>
      <AppContextProvider>
        <Header />
        <main className="w-full min-h-screen flex flex-col">
          <FeaturedProducts />
          <p className="text-4xl lg:text-7xl text-center p-4 md:p-16 lg:p-20 lg:w-2/3 text-center self-center">
            our collection of <span className="underline">layers</span> and
            <span className="underline"> components</span> for you and your
            friends
          </p>
          <div className="p-20 bg-black flex flex-col">
            <div
              className="rounded-xl"
              style={{
                height: "600px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHwxfDB8fHww)",
              }}
            />
            <p className="text-white p-4 text-center text-4xl font-bold">
              Meet the limited edition Creator Collection
            </p>
            <a
              href="/#"
              className="py-2 px-8 bg-white text-black self-center text-lg rounded-full">
              Preorder
            </a>
          </div>
          <ProductsGrid />
        </main>
        <Footer />
      </AppContextProvider>
    </>
  );
}
