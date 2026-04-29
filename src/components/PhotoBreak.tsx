import Image from "next/image";

export default function PhotoBreak() {
  return (
    <section className="relative aspect-[375/565] w-full md:aspect-[1440/900]">
      <Image
        src="/photographer.png"
        alt="Photographer in action"
        fill
        className="object-cover"
      />
    </section>
  );
}
