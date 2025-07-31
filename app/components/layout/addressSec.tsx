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
      'Office No. 110, Al Mansoor Building, Damascus Street',
      'Al Qusais Industrial Area 2 – Dubai.',
    ],
    phones: ['+971 4 263 7784', '+971 56 544 5987', '+971 50 545 2385'],
    emails: ['enquiries@quaddream.com', 'info@quaddream.com'],
  },
  Yard: {
    lines: [
      'Office No. 111,',
      'Yard',
    ],
    phones: ['+971 4 263 7784', '+971 56 544 5987', '+971 50 545 2385'],
    emails: ['enquiries@quaddream.com', 'info@quaddream.com'],
  },
  'UAE Branch': {
   lines: [
      'Office No. 112',
      'UAE Branch.',
    ],
    phones: ['+971 4 263 7784', '+971 56 544 5987', '+971 50 545 2385'],
    emails: ['enquiries@quaddream.com', 'info@quaddream.com'],
  },
  Canada: {
   lines: [
      'Office No. 113',
      'Canada.',
    ],
    phones: ['+971 4 263 7784', '+971 56 544 5987', '+971 50 545 2385'],
    emails: ['enquiries@quaddream.com', 'info@quaddream.com'],
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
      <div
        className={`w-[9px] h-[9px] rounded-full ${
          selected === key ? 'bg-red-500' : 'bg-[#828D91]'
        }`}
      ></div>

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


      <div className=" space-y-1 mt-[26px]">
        {data.lines.map((line, i) => (
          <p className='text-[19px] text-[#B9B9B9] leading-[1.9]' key={i}>{line}</p>
        ))}
        <p className="flex items-start gap-2 pt-2 text-[19px] text-[#B9B9B9] leading-[1.9]">
          <span className="mt-1 text-red-500">
            {/* Phone icon SVG */}
            <Image src="/assets/phone.svg" alt="Phone Icon" width={16} height={16} />
          </span>
          {data.phones.join(' | ')}
        </p>
        {data.emails.map((email, i) => (
          <p key={i} className="flex items-center gap-2 text-[19px] text-[#B9B9B9] leading-[1.9]">
            <span className="text-red-500">
              {/* Mail icon SVG */}
               <Image src="/assets/mail.svg" alt="Mail Icon" width={16} height={16} />
            </span>
            <a href={`mailto:${email}`} className="hover:underline">{email}</a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AddressSection;
