export default function CornerBrackets({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-stretch gap-[12px]">
      <div className="flex w-[16px] flex-col justify-between">
        <span className="block h-[16px] w-[16px] border-l-[1.5px] border-t-[1.5px] border-[#1f1f1f]" />
        <span className="block h-[16px] w-[16px] border-b-[1.5px] border-l-[1.5px] border-[#1f1f1f]" />
      </div>
      <div className="flex-1 py-[12px]">{children}</div>
      <div className="flex w-[16px] flex-col justify-between">
        <span className="block h-[16px] w-[16px] border-r-[1.5px] border-t-[1.5px] border-[#1f1f1f]" />
        <span className="block h-[16px] w-[16px] border-b-[1.5px] border-r-[1.5px] border-[#1f1f1f]" />
      </div>
    </div>
  );
}
