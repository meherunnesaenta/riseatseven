import React, { useState } from 'react';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

const MarqueeBanner = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="w-full h-[50px] flex justify-center px-4">
            <div className="w-full max-w-6xl bg-[#CDEFE3] text-gray-900 px-6  rounded-full flex items-center justify-center shadow-sm">

                <div
                    className="cursor-pointer overflow-hidden"
                    style={{ height: '15px' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* First Text */}
                    <div
                        style={{
                            transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                            opacity: isHovered ? 0 : 1,
                            transition: 'all 0.5s ease-in-out'
                        }}
                        className="font-semibold whitespace-nowrap flex gap-2 justify-center items-center"
                    >
                        <HiOutlineSpeakerphone className="text-lg" />

                        <p className="text-sm md:text-base font-medium">
                            Where are your customers actually searching?
                            Download the report
                        </p>

                    </div>

                    {/* Second Text - positioned below first */}
                    <div
                        style={{
                            transform: isHovered ? 'translateY(-28px)' : 'translateY(0)',
                            opacity: isHovered ? 1 : 0,
                            transition: 'all 0.5s ease-in-out'
                        }}
                        className="font-semibold whitespace-nowrap"
                    >
                        <div className='flex gap-2 justify-center items-center'>
                            <HiOutlineSpeakerphone className="text-lg" />

                            <p className="text-sm md:text-base font-medium">
                                Where are your customers actually searching?
                                Download the report
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MarqueeBanner;