import homeImage from "../../../../public/images/home.png";
import Image from "next/image";

export default function HomeImage() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center p-4 lg:p-0">
        <Image
          src={homeImage}
          alt="Healthy food presentation"
          className="scale-120 lg:scale-100 w-full max-w-md lg:max-w-full h-auto object-contain"
          placeholder="blur"
          priority
        />
      </div>
    </>
  );
}