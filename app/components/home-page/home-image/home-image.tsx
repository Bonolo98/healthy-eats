import homeImage from "../../../../public/images/home.png";
import Image from "next/image";

export default function HomeImage() {
  return (
    <>
      <Image
        src={homeImage}
        alt=""
        className="scale-90"
        placeholder="blur"
      />
    </>
  );
}
