'use client'

import Link from 'next/link';

export default function Footer() {
  return (
    <footer>      
    <div class="bg-channel-btn shadow-bleed [clip-path:inset(0-100vmax)] py-7 text-center text-white bg-black">
      © Powered By{" "}
      <a href="https://sipoperations.com" class="underline">
        SIP Operations
      </a>
      <label class="underline float-right px-2"> <Link className="min-w-[120px] flex-1 bg-[#39B3D7] px-4 py-2 rounded-2xl text-white" href="/privacypolicy">Privacy Policy</Link></label>
      <label class="underline float-right px-2"><Link className="min-w-[120px] flex-1 bg-[#39B3D7] px-4 py-2 rounded-2xl text-white" href="/termsandconditions">Terms & conditions</Link></label>
    </div>
    
    </footer>
  );
}
