import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold font-sans flex items-center gap-1"
    >
      TechSavvyInsights
    </Link>
  );
};

export default Logo;
