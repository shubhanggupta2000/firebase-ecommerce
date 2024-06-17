/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-pink-500">customers</span> think
          </h2>

          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                />
                <p className="leading-relaxed">
                  E-Bharat has been a game-changer! Their wide selection, from
                  handcrafted jewelry to organic spices, allows me to support
                  local artisans while discovering beautiful pieces for my home.
                  Plus, the convenient online ordering and fast delivery make it
                  a breeze. E-Bharat is my go-to platform for all things 'Made
                  in India'!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  123
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://www.devknus.com/img/gawri.png"
                />
                <p className="leading-relaxed">
                  E-Bharat provides a fantastic platform for these businesses to
                  reach a wider audience. I love browsing the app and
                  discovering new handcrafted products, knowing that my purchase
                  directly empowers local artisans. The secure payment options
                  and hassle-free returns give me complete peace of mind.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  XYZ
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                />
                <p className="leading-relaxed">
                  The app curates a diverse collection of products that reflect
                  the rich tapestry of Indian art and design. From traditional
                  textiles to contemporary homeware, each piece tells a story.
                  E-Bharat has become my source for meaningful keepsakes that
                  celebrate the beauty of Indian craftsmanship.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Shubhang Gupta{" "}
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
