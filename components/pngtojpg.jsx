'use client'
import defImg from '../Assets/images/white.png'
import React ,{ useRef } from "react" 
import helper from '../Utils/Helper'
import MainToolCard from '../Components/MainToolCard';
import Head from 'next/head';
import CanonicalURL from '../components/CanonicalURL';

export default function PNGTOJPG() {
    const [file, setFile] = React.useState({fileString:defImg.src});
    const [filename, setFileName]=React.useState('geotabphoto');
    const [isOpened, setIsOpened] = React.useState(false);
    const canvasRef = useRef(null);
    let b64='';
    const handleChange = (e) => {
        const file = e.target.files[0];  
        let f=file.name.split('.')[0];
        setFileName(f); 
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
            try {
                setFile({fileString:e.target.result});                
            } catch (error) {
              console.error("Error reading Exif data:", error);
            }
            };
            reader.readAsDataURL(file);
        }
      };
    const downloadFile = (e) => {
        try {
            b64=file.fileString;
            const img = new Image();
            img.src = b64;
            img.onload = function () {
                const canvas = document.createElement('canvas');
                var ctx = canvas.getContext("2d");
                canvas.width = this.width;
                canvas.height = this.height;
                var imgData=ctx.getImageData(0,0,canvas.width,canvas.height);
                var dt=imgData.data;
                for(let i = 0; i < dt.length; i++) {
                    if(dt[i+3]<255){
                        dt[i]=255;
                        dt[i+1]=255;
                        dt[i+2]=255;
                        dt[i+3]=255;
                    }
                }
                ctx.putImageData(imgData,0,0);
                ctx.globalAlpha = 1.0; 
                ctx.drawImage(this,0,0);

                const dataUri = canvas.toDataURL('image/jpeg', 1.0);
                const data = dataUri.split(',')[1];
                const mimeType = dataUri.split(';')[0].slice(5);

                const bytes = window.atob(data);
                const buf = new ArrayBuffer(bytes.length);
                const arr = new Uint8Array(buf);

                for (let i = 0; i < bytes.length; i++) {
                    arr[i] = bytes.charCodeAt(i);
                }

                const blob = new Blob([arr], { type: mimeType });
                const a = document.createElement('a');
                document.body.appendChild(a);
                a.style = 'display: none';

                const url = window.URL.createObjectURL(blob);
                a.href = url;
                let fname=filename+'.jpg';
                a.download = fname;
                a.click();
                window.URL.revokeObjectURL(url);
            };
            e.preventDefault();
        }catch (error) {
            console.error("Error reading Exif data:", error);
        }
    }
    return (
  
        <div className="bg-gray-200 px-6 py-10 ">
            <meta name="description" content="Instantly switch PNG to JPG for free! Effortless conversion with no compromise on quality. Try our user-friendly tool today."/>
            
        <form>
          <div className="flex gap-10 md:flex-row flex-col">            
            <div className="bg-white h-full md:w-full w-xl">
                <div className="relative border-2xl h-full w-full flex items-center justify-center md:p-auto p-10 outline-offset-[-3px] outline-[3px] outline-dashed outline-[#39B3D7] rounded">
                <span className="text-3xl font-medium">Browse Files <span class="text-[#39B3D7] font-bold">+</span></span>
                <input
                    type="file"
                    class="opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full cursor-pointer"
                    accept=".jpg, .png, .heif, .heic, .jpeg"
                    onChange={handleChange}
                />
                <img src={file.fileString} class="h-[50px] w-[50px]" />
                </div>
            </div>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row py-10">
            <button className="flex-1 p-2 rounded-xl text-white bg-gray-400 cursor-pointer" onClick={helper.resetForm}>Clear</button>
            <button className="flex-1 p-2 rounded-xl text-white bg-green-600 cursor-pointer" onClick={downloadFile}>Download</button>
            {isOpened && (
              <img src={loader} class="h-[50px] w-[50px]" />
            )}
        </div>
        <div>
            <h2 className="text-4xl font-bold dark:text-white">PNG to JPG Conversion</h2>
                <ul className="list-disc m-5">

             <li> Click on the Browse Files To Upload the Photo.</li>
                <li>After Upload the file you will see the image preview.</li>
            <li> Click on the Download Button to download the JPG file format.</li>
                </ul>

    
            </div>
            <div><MainToolCard /></div>
        </form>
        </div>
    )
}