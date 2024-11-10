import Header from "./header/header";
import Hero from "./hero/hero";
import Solution from "./solution/solution";
import Pricing from "./tela/Pricing";
import Testimonials from "./testimonials/testimonials";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Solution />
            <Testimonials />
            <Pricing></Pricing>
        </>
    )
}