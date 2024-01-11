import Link from 'next/link'


export default function Footer() {
  return (
    <footer>
    {/* <div class="bg-gray-200 px-6 py-1">
      <div><CommonTools /></div>
      <div><MoreTools /></div>
    </div> */}
    <div class="bg-channel-btn shadow-bleed [clip-path:inset(0-100vmax)] py-7 text-center text-white bg-black">
      © Powered By{" "}
      <a href="https://sipoperations.com" class="underline">
        SIP Operations
      </a>
      <label class="underline float-right px-2"><Link href="/privacypolicy">Privacy Policy</Link></label>
      <label class="underline float-right px-2"><Link href="/terms&conditions">Terms & conditions</Link></label>
    </div>
    
    </footer>
  );
}
