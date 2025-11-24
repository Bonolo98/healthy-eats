// PageNav component
interface PageNavProps {
  title?: string;
}

export default function PageNav({ title = "PAGE" }: PageNavProps) {
  return (
    <div className=" bg-[#ef6d6d] w-screen h-20 p-10 flex items-center z-20">
      <div className="font-bold text-white">{title}</div>
    </div>
  );
}