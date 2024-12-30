import { useEffect, useState } from "react";
import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <Layout>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <HeroSection />
          <Category />
          <HomePageProductCard />
          <Track />
          <Testimonial />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
