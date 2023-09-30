import React from "react";

const LongDetailCard = ({ title, children } : { title: string, children: React.ReactNode }) => (
    <div className="rounded-2xl mb-5 flex flex-col basis-full min-h-[160px] shadow-lg justify-center relative bg-[#f6f6f8] p-5 text-base">
        <span className="absolute text-[15px] top-5 left-5 font-bold">{title}</span>
        {children}
    </div>
);

export default LongDetailCard;
