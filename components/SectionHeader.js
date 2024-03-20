import React from 'react';

function SectionHeader({ title, description }) {
  return (
    <div className="text-center flex flex-col items-center">
      <h3 className="font-bold text-2xl md:text-4xl">{title}</h3>
      <p className="mt-5 max-w-xl md:max-w-2xl">{description}</p>
    </div>
  );
}

export default SectionHeader;
