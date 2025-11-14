import CTA from "@/components/cta";
import Header from "@/components/header";
import LiquidEther from "@/components/liquid-ether";
import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  return (
    <main className="main-section flex flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <div className="fixed -inset-16">
        <LiquidEther colors={["#f0fdfa", "#cbfbf1", "#ecfcca"]} />
      </div>

      <section className="flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <Header />

        <CTA />

        <WaitlistForm />
      </section>
    </main>
  );
}
