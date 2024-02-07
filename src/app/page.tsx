import Footer from "../components/Footer";
import HomePage from '@/src/components/Home/Homepage'

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  return (
    <article className="mt-6 flex gap-5 flex-col text-white px-5 sm:px-10 md:px-24 sxl:px-32">
      <HomePage parmy={params} />
      <Footer />
    </article>
  );
};

export default CategoryPage;