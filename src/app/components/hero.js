import { FaStar } from "react-icons/fa6";
import NavBar from "./nav";

export default function Hero() {
  return (
    <div className="hero">
      <NavBar color={"white"} />

      <div className="hero-text">
        <h1>Custom Websites Built to Be Found</h1>
        <h2> & SEO like you've never seen it before</h2>
        <h5>
          5 <FaStar />
          's on <a href="#">Google</a> | Boutique Digital Agency out of Coeur
          D'Alene, Idaho
        </h5>
      </div>
    </div>
  );
}
