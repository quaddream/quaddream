'use client';
import { useState } from 'react';
import Image from 'next/image';

type AddressKey = 'Head Office' | 'Yard' | 'UAE Branch' | 'Canada';

type AddressData = {
  lines: string[];
  phones: string[];
  emails: string[];
};

const addresses: Record<AddressKey, AddressData> = {
  'Head Office': {
    lines: [
      'Office No. 110, Al Mansour Building, Damascus Street 3,',
      'Al Qusais Industrial Area 2, Dubai, UAE',
      
    ],
    phones: ['+971 4 263 7784', '+971 56 544 5987', '+971 50 545 2385'],
    emails: ['enquiries@quaddream.com', 'info@quaddream.com'],
  },
  Yard: {
    lines: [
      'Al Quoz Industrial Area – 2, Near Bartawi Dubai, UAE',
    ],
    phones: ['+971 56 544 5987', '+971 50 545 2385'],
    emails: ['sales@quaddream.com'],
  },
  'UAE Branch': {
   lines: [
      'Quaddream Branch office, Abu dhabi.', 
    ],
    phones: ['+971 503 525 314'],
    emails: ['sales@quaddream.com'],
  },
  Canada: {
   lines: [
      'Bradford , Ontario', 
    ],
    phones: ['+416 970 1617'],
    emails: ['sales@quaddream.com'],
  },
};

const AddressSection = () => {
  const [selected, setSelected] = useState<AddressKey>('Head Office');
  const data = addresses[selected];

  return (
    <div className="text-white">

      <div className="flex flex-wrap gap-5 2xl:gap-[46px] mb-4">
  {Object.keys(addresses).map((key) => (
    <div key={key} className="flex items-center gap-4">
      {/* Round Indicator */}
      <div className={`w-[9px] h-[9px] rounded-full ${ selected === key ? 'bg-red-500' : 'bg-[#828D91]' }`} ></div>

      {/* Button */}
      <button
        onClick={() => setSelected(key as AddressKey)}
        className={`transition duration-200 text-30 font-normal cursor-pointer leading-[1.3] ${
          selected === key ? 'text-white' : 'text-[#828D91] hover:text-white '
        }`}
      >
        {key}
      </button>
    </div>
  ))}
</div>


      <div className="mt-[26px]">
        {data.lines.map((line, i) => (
          <p className='text-[19px] text-[#B9B9B9] leading-[1.9]' key={i}>{line}</p>
        ))}
        <div className="flex items-center gap-2 pt-2 text-[19px] text-[#B9B9B9] leading-[1.9]">
          <span className="mt-1 text-red-500">
            {/* Phone icon SVG */}
            <Image src="/assets/phone.svg" alt="Phone Icon" width={50} height={50} className='w-[24px] h-[24px]' />
          </span>
          {data.phones.join(' | ')}
        </div>
        {data.emails.map((email, i) => (
          <div key={i} className="flex items-center gap-2 text-[19px] text-[#B9B9B9] leading-[1.9]">
            <span className="text-red-500">
              {/* Mail icon SVG */}
               <Image src="/assets/mail.svg" alt="Mail Icon" width={50}  height={50}  className='w-[24px] h-[24px]' />
            </span>
            <a href={`mailto:${email}`} className="hover:underline">{email}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressSection;
