import Role from "./components/Role";
import BusinessOppurtinity from "./sections/BusinessOppurtinity";
import CulturalEthnicity from "./sections/CulturalEthnicity";
import DivinePods from "./sections/DivinePods";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Home from "./sections/Home";
import Partners from "./sections/Partners";
import TokenEconomics from "./sections/TokenEconomics";
import topLeft from "./assets/svgs/top-left.svg";

export default function App() {
    return (
        <div className="container mx-auto py-4 relative">
            <Role className="-mb-3" />
            <main
                className={`mx-[5.65rem] relative 
             before:content-empty before:bg-sideBorder before:bg-no-repeat before:bg-cover
              before:absolute before:top-0 before:-left-2 before:h-full before:bottom-0 before:w-[0.5rem] before:z-[10001] 

              after:content-empty after:bg-sideBorder after:bg-no-repeat after:bg-cover
              after:absolute after:top-0 after:-right-2 after:h-full after:bottom-0 after:w-[0.5rem] after:z-[10001] 
            `}
            >
                <section className={`grid gap-28 pb-8 heroBg`}>
                    <Hero />
                    <Home />
                </section>
                <BusinessOppurtinity />
                <DivinePods />
                <CulturalEthnicity />
                <TokenEconomics />
                <Partners />
                <Footer />
                <img src={topLeft} className="absolute top-0 left-0" alt="" />
                <img
                    src={topLeft}
                    className="absolute top-0 right-0 rotate-90"
                    alt=""
                />
            </main>

            <Role className="-mt-3" />
        </div>
    );
}
