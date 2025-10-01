import CarouselGroup from "./CarouselGroup.jsx";

export default function Carousel() {
  return (
    <div className="carousel flex w-full overflow-x-auto">
      <CarouselGroup ariaHidden={false} />
      <CarouselGroup ariaHidden={true} />
    </div>
  );
}
