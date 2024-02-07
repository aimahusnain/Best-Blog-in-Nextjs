import Image from "next/image";
import React from "react";

interface FeaturesProps {
  title: string;
  description: string;
  image: string;
  idly?: string
}

const Features: React.FC<FeaturesProps> = ({
  title,
  description,
  image,
  idly
}: {
  title: string;
  description: string;
  image: string;
  idly?: string
}) => {
  return (
    <div id={idly} className="rounded-xl w-fit p-5 flex gap-2">
      <Image
        width={80}
        height={50}
        loading="eager"
        src={`/features/${image}`}
        alt="export"
        className="rounded-full w-20 h-20 object-cover"
      />
      <div className="w-64">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-md text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default Features;
