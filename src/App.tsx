import Role from "./components/Role";
import BusinessOppurtinity from "./sections/BusinessOppurtinity";
import CulturalEthnicity from "./sections/CulturalEthnicity";
import DivinePods from "./sections/DivinePods";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Home from "./sections/Home";
import Partners from "./sections/Partners";
import TokenEconomics from "./sections/TokenEconomics";

export default function App() {
    return (
        <div className="container mx-auto py-4">
            <Role className="-mb-3" />
            <main className={`mx-24`}>
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
            </main>

            <Role className="-mt-3" />
        </div>
    );
}
