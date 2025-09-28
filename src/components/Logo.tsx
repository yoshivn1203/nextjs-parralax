export default function Logo({ className = "w-10 h-10", textClassName = "" }: { className?: string, textClassName?: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" fill="url(#gradient1)" />
        <path
          d="M50 20 L65 40 L60 50 L50 45 L40 50 L35 40 Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M50 45 L55 55 L50 80 L45 55 Z"
          fill="white"
          opacity="0.8"
        />
        <circle cx="50" cy="35" r="8" fill="white" />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
      {textClassName && (
        <span className={`font-cormorant font-light ${textClassName}`}>LifeTender</span>
      )}
    </div>
  )
}