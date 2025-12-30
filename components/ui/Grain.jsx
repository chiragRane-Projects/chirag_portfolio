export default function Grain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.05]">
      <div 
        className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-20"
      />
    </div>
  );
}