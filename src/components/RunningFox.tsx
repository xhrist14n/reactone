// src/components/RunningFox.jsx
export default function RunningFox() {
  return (
    <div className="relative w-full h-40 overflow-hidden bg-sky-100">
      <div className="absolute bottom-5 left-0 w-full h-[2px] bg-green-500"></div>
      
      {/* The fox */}
      <div className="fox absolute bottom-6 left-0 animate-run">
        <div className="fox-body relative w-10 h-6 bg-orange-400 rounded-lg">
          <div className="absolute -top-3 right-1 w-5 h-5 bg-orange-400 rounded-full"></div>
          <div className="absolute -top-1 right-0 w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute top-[4px] left-[-4px] w-3 h-3 bg-orange-400 rounded-full"></div>
          <div className="absolute -bottom-1 left-1 w-2 h-3 bg-black rounded-lg"></div>
          <div className="absolute -bottom-1 left-4 w-2 h-3 bg-black rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}