'use client'
export default function ToolBtn(props){
    return (
        <>
        <button className="w-full bg-[#39B3D7] px-4 py-2 rounded-2xl text-white">{props.message}</button>
        </>
    );
}