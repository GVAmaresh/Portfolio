export default function Heading({value}:{value: string}) {
  return (
    <>
      <div className="">
        <div className=" font-extrabold text-3xl">{value}</div>
        <div className="mt-2 border-4 w-16 rounded-2xl border-amber-400"></div>
      </div>
    </>
  );
}
