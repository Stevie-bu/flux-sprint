import Image from "next/image";
import { urlFor } from "@/sanity/client";
import { ParallaxImage } from "./HeroParallax";

type PhotoBreakProps = {
  image?: unknown;
};

export default function PhotoBreak({ image }: PhotoBreakProps) {
  const src = image
    ? urlFor(image).width(1920).quality(80).url()
    : "/photographer.png";

  return (
    <section className="relative aspect-[375/565] w-full overflow-hidden md:aspect-[1440/900]">
      <ParallaxImage>
        <Image src={src} alt="Photographer in action" fill className="object-cover" />
      </ParallaxImage>
    </section>
  );
}
