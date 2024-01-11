'use client'
import Link from 'next/link'
// import PathConstants from "../Routes/pathConstants";

export default function CommonTools(){
    return (
        <div className="p-8 bg-white rounded-xl mt-12">
            <h2 className="text-4xl mb-8 font-bold">Commonly Used Tools</h2>
            <div className="flex md:gap-8 gap-3 flex-wrap">
            <button className="min-w-[120px] flex-1 bg-[#39B3D7] px-4 py-2 rounded-2xl text-white">               
               <Link className="min-w-[120px] flex-1 bg-[#39B3D7] px-4 py-2 rounded-2xl text-white" href="/pngtojpg">PNG to JPG</Link></button>
                <button className="min-w-[120px] flex-1 bg-[#39B3D7] px-4 py-2 rounded-2xl text-white">
                <Link className="min-w-[120px] flex-1 bg-[#39B3D7] px-4 py-2 rounded-2xl text-white" href="/">PDF to JPG</Link></button>
                <button className="min-w-[120px] flex-1 bg-[#39B3D7] px-4 py-2 rounded-2xl text-white">
                <Link className="min-w-[120px] flex-1 bg-[#39B3D7] px-4 py-2 rounded-2xl text-white" href="/">SVG to JPG</Link></button>
                {/* <button class="min-w-[120px] flex-1 bg-[#39B3D7] px-4 py-2 rounded-2xl text-white">
                <Link to={PathConstants.JPGTOPNG}>JPG to PNG</Link></button>
                <button class="min-w-[120px] flex-1 bg-[#39B3D7] px-4 py-2 rounded-2xl text-white">
                <Link to={PathConstants.JSONTOCSV}>JSON to CSV</Link></button>
                <button class="min-w-[120px] flex-1 bg-[#39B3D7] px-4 py-2 rounded-2xl text-white">
                <Link to={PathConstants.CSVTOJSON}>CSV to JSON</Link></button>                */}
            </div>
        </div>
    );
}