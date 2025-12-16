export default function HeroImage() {
  return (
    <>
      {/* Version Mobile */}
      <div className="absolute lg:hidden md:hidden flex items-center justify-center bottom-0 right-0 z-0 opacity-0 animate-fade-in-right [animation-delay:0.3s]">
        <img
          src="/assets/hero-imgg.png"
          alt="Hero"
          className="h-[31vh] w-auto object-cover object-bottom"
        />
      </div>

      {/* Version Desktop */}
      <div className="absolute md:hidden sm:hidden lg:flex lg:-right-60 lg:top-1/2 lg:-translate-y-1/2 z-10 opacity-0 animate-fade-in-right [animation-delay:0.3s]">
        <img
          src="/assets/hero.png"
          alt="Hero"
          className="h-screen object-cover"
        />
      </div>
      {/* Version tablette */}
      <div className="absolute lg:hidden sm:hidden md:flex lg:-right-60 lg:top-1/2 lg:-translate-y-1/2 z-10 opacity-0 animate-fade-in-right [animation-delay:0.3s]">
        <img
          src="/assets/hero.png"
          alt="Hero"
          className="h-[60vh] object-cover"
        />
      </div>
    </>
  );
}
