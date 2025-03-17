import { Link } from "react-router";

export default function AnimatedButtonNewFO() {
  return (
    <Link to="/new" className="hidden md:block relative ">
      <svg
        viewBox="0 0 200 200"
        width={200}
        height={200}
        className="tracking-widest text-lg animate-spin animatedButton"
      >
        <path
          id="circlePath"
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          fill="none"
          strokeLinecap="round"
          
        />
        <text fill="white" >
          <textPath  href="#circlePath" startOffset={"50%"}>
            Create NEW FoudtOut
          </textPath>
          <textPath href="#circlePath " startOffset={"0%"}>
            Share Your Discovers{" "}
          </textPath>
        </text>
      </svg>
      <button className="absolute inset-15  border border-white hover:bg-white/30    rounded-full grid place-content-center 
      transition-all duration-300 ease-in-out
      cursor-pointer
      
      ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={50}
          height={50}
          stroke="white"
          strokeWidth={2}
        >
          <line x1="6" y1="18" x2="18" y2="6" />
          <polyline points="9 9 18 6 15 15" />
        </svg>
      </button>
    </Link>
  );
}
