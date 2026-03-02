import CountUp from './CountUp';

export default function StatsBar() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 p-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-white/20 bg-black/40 rounded-xl p-6 md:p-8">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center w-full py-4 md:py-0">
          <div className="flex items-baseline gap-1">
            <CountUp
              from={0}
              to={21}
              separator=","
              direction="up"
              duration={1.5}
              className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
            />
            <span className="text-2xl md:text-3xl font-bold text-white/80">+</span>
          </div>
          <span className="text-sm md:text-base text-white/60 uppercase tracking-widest mt-2 font-medium">States Covered</span>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center w-full py-4 md:py-0">
          <div className="flex items-baseline gap-1">
            <CountUp
              from={0}
              to={15400}
              separator=","
              direction="up"
              duration={2}
              className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
            />
            <span className="text-2xl md:text-3xl font-bold text-white/80">+</span>
          </div>
          <span className="text-sm md:text-base text-white/60 uppercase tracking-widest mt-2 font-medium">Active Job Postings</span>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center w-full py-4 md:py-0">
          <div className="flex items-baseline gap-1">
            <CountUp
              from={0}
              to={12}
              separator=","
              direction="up"
              duration={4}
              className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
            />
          </div>
          <span className="text-sm md:text-base text-white/60 uppercase tracking-widest mt-2 font-medium">Careers Launched</span>
        </div>

      </div>
    </div>
  );
}
