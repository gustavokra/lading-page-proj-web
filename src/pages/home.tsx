import Header from "./header/header";
import Hero from "./hero/hero";
import Solution from "./solution/solution";
import Pricing from "./pricing/pricing";
import Testimonials from "./testimonials/testimonials";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Solution />
            <Testimonials />
            <Pricing/>
            <Contact/>
            <Footer/>
        </>
    )
}