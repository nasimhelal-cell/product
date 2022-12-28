//all social links
const facebook = "https://facebook.com";
const instagram = "https://facebook.com";
const linkedin = "https://facebook.com";
const skype = "https://facebook.com";

const imgMain =
  "https://ae01.alicdn.com/kf/S189bda8f3d5042d5b19120cc3d310a22f/Top-Grade-100-Cotton-Fashion-Brand-Designer-Vertical-Stripes-Slim-Fit-Button-Down-Mens-Shirts-Casual.jpg_Q90.jpg_.webp";
const img1 =
  "https://ae01.alicdn.com/kf/S189bda8f3d5042d5b19120cc3d310a22f/Top-Grade-100-Cotton-Fashion-Brand-Designer-Vertical-Stripes-Slim-Fit-Button-Down-Mens-Shirts-Casual.jpg_50x50.jpg_.webp";
const img2 =
  "https://ae01.alicdn.com/kf/Sdfae0ac185754aecbbfa79e9e28e7d04c/Top-Grade-100-Cotton-Fashion-Brand-Designer-Vertical-Stripes-Slim-Fit-Button-Down-Mens-Shirts-Casual.jpg_50x50.jpg_.webp";
const img3 =
  "https://ae01.alicdn.com/kf/S7bf1d725fae44de4babe438b61510a8cA/Top-Grade-100-Cotton-Fashion-Brand-Designer-Vertical-Stripes-Slim-Fit-Button-Down-Mens-Shirts-Casual.jpg_50x50.jpg_.webp";

const Product = () => {
  return (
    <div className="product mx-auto" style={{ width: "90%" }}>
      <p>Back</p>
      <div className="single_product flex gap-36">
        <div className="product_image flex gap-8">
          <div className="left_images flex flex-col justify-around">
            <div className="img1">
              <img src={img1} alt="img1" />
            </div>
            <div className="img2">
              <img src={img2} alt="img2" />
            </div>
            <div className="img3">
              <img src={img3} alt="img3" />
            </div>
          </div>
          <div className="right_image">
            <img src={imgMain} alt="title" className="h-full w-96" />
          </div>
        </div>

        <div className="product_content">
          <h1 className="product_title font-bold text-4xl">Palaris Terry</h1>
          <h3 className="product_price font-semibold text-2xl">$45</h3>
          <h4 className="text-sm font-bold">Size</h4>
          <div className="various_sizes text-xs font-bold flex gap-5">
            <span className="border-2 border-gray-500 px-2 py-1 cursor-pointer">
              S
            </span>
            <span className="border-2 border-gray-500 px-2 py-1 cursor-pointer">
              M
            </span>
            <span className="border-2 border-gray-500 px-2 py-1 cursor-pointer">
              L
            </span>
            <span className="border-2 border-gray-500 px-2 py-1 cursor-pointer">
              XL
            </span>
          </div>
          <button className="addTOCart_btn bg-gray-500 inline-block my-5 px-14 py-2 text-gray-50 rounded-sm">
            Add to Cart
          </button>
          <div className="product_description">
            <p>
              To add more wellness for your daily routines our products helps
              you to bring the best out of you and your day.
            </p>
            <ul style={{ listStyleType: "disc" }} className="ml-12">
              <li>Made in USA</li>
              <li>related fit, puliower style with just enough screech</li>
              <li>Classic Crew neckline</li>
              <li>screech ribbed neckline</li>
            </ul>
          </div>
          <div className="social_Links flex gap-5 font-bold mt-5">
            <a
              href={facebook}
              className="border-2 border-gray-500 px-3 py-1 cursor-pointer"
            >
              f
            </a>
            <a
              href={instagram}
              className="border-2 border-gray-500 px-3 py-1 cursor-pointer"
            >
              i
            </a>
            <a
              href={linkedin}
              className="border-2 border-gray-500 px-3 py-1 cursor-pointer"
            >
              i
            </a>
            <a
              href={skype}
              className="border-2 border-gray-500 px-3 py-1 cursor-pointer"
            >
              s
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
