'use client'
import React, { useState,useEffect  } from "react"
import piexif from "piexifjs";
import defImg from '../Assets/images/white.png'
import loader from '../Assets/images/load-32_128.gif'
import helper from '../Utils/Helper'

export default function ImageEditorCard({latLong,setLatChange,setValue,setFinalLngChange}) {
  const [selectedFile, setSelectedFile] = React.useState({fileString:defImg.src});
  const [imgMeta, setImgMeta] = React.useState([{ltlg:'',keyword:'',title:''}]);
  const [isOpened, setIsOpened] = useState(false);

   const handleChange = (e) => {
    const file = e.target.files[0];   
   
    
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        try {
          var exifObj = piexif.load(e.target.result);
          setSelectedFile({fileString:e.target.result});
          
          const latitude = exifObj['GPS'][piexif.GPSIFD.GPSLatitude];
          const latitudeRef = exifObj['GPS'][piexif.GPSIFD.GPSLatitudeRef];
          const longitude = exifObj['GPS'][piexif.GPSIFD.GPSLongitude];
          const longitudeRef = exifObj['GPS'][piexif.GPSIFD.GPSLongitudeRef];
          let latLongs='';
          if(latitude!== undefined && longitude!== undefined)
             latLongs=drawMapForLocation(latitude, latitudeRef, longitude, longitudeRef); 

          for (const ifd in exifObj) {
            if (ifd == 'thumbnail') {
                const thumbnailData = exifObj[ifd] === null ? "null" : exifObj[ifd];
                
            } else {
                console.log(`- ${ifd}`);
                for (const tag in exifObj[ifd]) {
                    console.log(`    - ${piexif.TAGS[ifd][tag]['name']}: ${exifObj[ifd][tag]}`);
                }
            }
        }

          var xpKeywords='';
          if (exifObj["0th"] && exifObj["0th"][piexif.ImageIFD.XPKeywords]) {
            xpKeywords = exifObj["0th"][piexif.ImageIFD.XPKeywords];            
          } else {
            console.log("XPKeywords not found in Exif data.");
          }
          let keyword = ""          
          for (var num in xpKeywords){  
            if(xpKeywords[num]!='0')          
            keyword += String.fromCharCode(xpKeywords[num]);
          }
          const mata={ltlg:latLongs,keyword:keyword,title:file.name};
          setImgMeta(mata);
        } catch (error) {
          console.error("Error reading Exif data:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const downloadImage = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
	const file = selectedFile.fileString;
    setIsOpened(wasOpened => !wasOpened);

      try {
        var exifObj = piexif.load(file);

        console.log(exifObj);

        exifObj['GPS'][piexif.GPSIFD.GPSLatitude] =  degtodmsrational(latLong.lat);
        exifObj['GPS'][piexif.GPSIFD.GPSLatitudeRef] =  "n";
        exifObj['GPS'][piexif.GPSIFD.GPSLongitude] =  degtodmsrational(latLong.lng);
        exifObj['GPS'][piexif.GPSIFD.GPSLongitudeRef] =  "w";

        let charCodeArr = [];
        for(let i = 0; i < imgMeta.keyword.length; i++){
          let code = imgMeta.keyword.charCodeAt(i);
          charCodeArr.push(code);
          charCodeArr.push(0);
      }
        //exifObj["0th"][piexif.ImageIFD.XPKeywords] =[116,0,101,0,115,0,116,0,32,0,116,0,97,0,103,0,0,0];
        exifObj["0th"][piexif.ImageIFD.XPKeywords] =charCodeArr;

        
        exifObj["0th"][piexif.ImageIFD.Copyright] ="geotagphoto.com";

        var exifbytes = piexif.dump(exifObj);         
        var newdata = piexif.insert(exifbytes, file);
        //var newjpeg = buffer.from(newdata, "binary");

        const linkSource = 'data:'+'jped'+';base64'+newdata;
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = 'test.jpeg';
        setTimeout(() => { 
          downloadLink.click();
          setIsOpened(false);
      }, 5000); 
        

      } catch (error) {
        console.error("Error reading Exif data:", error);
      }

  }
  const onKeywordChange = (e) => {

  setImgMeta({ltlg:imgMeta.ltlg,keyword:e.target.value,title:imgMeta.title});
  }

  function degtodmsrational(degfloat) {
    var minfloat = degfloat % 1 * 60
    var secfloat = minfloat % 1 * 60
    
    var deg = Math.floor(degfloat)
    var min = Math.floor(minfloat)
    var sec = Math.round(secfloat * 100)

    deg = Math.abs(deg) * 1
    min = Math.abs(min) * 1
    sec = Math.abs(sec) * 1
  
    return [[deg, 1], [min, 1], [sec, 100]]
  }
  function drawMapForLocation(latitude, latitudeRef, longitude, longitudeRef) {
    
    // Convert the latitude and longitude into the format that Google Maps expects
    // (decimal coordinates and +/- for north/south and east/west)
    const latitudeMultiplier = latitudeRef == 'N' ? 1 : -1;
    const decimalLatitude = latitudeMultiplier * piexif.GPSHelper.dmsRationalToDeg(latitude);
    const longitudeMultiplier = longitudeRef == 'E' ? 1 : -1;
    const decimalLongitude = longitudeMultiplier * piexif.GPSHelper.dmsRationalToDeg(longitude);
    
    
    const latitudeDegrees = piexif.GPSHelper.dmsRationalToDeg(latitude);
    const longitudeDegrees = piexif.GPSHelper.dmsRationalToDeg(longitude);

    console.log("Original coordinates");
    console.log("--------------------");
    console.log(`Latitude: ${latitudeDegrees} ${latitudeRef}`);
    console.log(`Longitude: ${longitudeDegrees} ${longitudeRef}\n`);
    let longlat='';
    if(latitude!== undefined){
      longlat=latitudeDegrees.toFixed(2)+ ',' +longitudeDegrees.toFixed(2);
    }
    return longlat;
}
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-4">
        <div className="flex flex-1 gap-1 bg-white rounded-2xl">
          <span className="bg-[#39B3D7] px-2 py-2 rounded-2xl text-white">Lng</span>
          <input key="txtLangitude" class="w-full rounded-e-full px-1 pr-4 my-2 border-l-[2px] border-gray-300 focus:outline-none" 
          onBlur={setFinalLngChange} placeholder='74.006' />
          
        </div>
        <div className="flex flex-1 gap-1 bg-white rounded-2xl">
          <span className="bg-[#39B3D7] px-2 py-2 rounded-2xl text-white">Lat</span>
          <input key="txtLatitude" className="w-full rounded-e-full px-1 pr-4 my-2 border-l-[2px] border-gray-300 focus:outline-none" 
          onBlur={setLatChange} placeholder='40.712'  />          
        </div>
        <div className="flex flex-1 gap-1 bg-white rounded-2xl">          
          <button className="flex-1 px-2 rounded-xl text-white bg-green-600 cursor-pointer" onClick={setValue}>Load</button>
        </div>        
      </div>
      <div>
      <div className="bg-white h-full md:w-full w-xl">
        <div className="relative border-2xl h-full w-full flex items-center justify-center md:p-auto p-10 outline-offset-[-3px] outline-[3px] outline-dashed outline-[#39B3D7] rounded">
          <span className="text-3xl font-medium">Browse Files <span class="text-[#39B3D7] font-bold">+</span></span>
          <input
            type="file"
            className="opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full cursor-pointer"
            accept=".jpg, .png, .heif, .heic, .jpeg"
            onChange={handleChange}
          />
          <img src={selectedFile.fileString} className="h-[50px] w-[50px]" />
        </div>
      </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-1 gap-2 bg-white rounded-2xl">
          <span className="bg-[#39B3D7] px-4 py-2 rounded-2xl min-w-[170px] text-white">
            Existing Geotags
          </span>
          <input class="w-full rounded-e-full px-1 pr-4 my-2 border-l-[2px] border-gray-300 focus:outline-none"
          value={imgMeta.ltlg}
          />
        </div>
        <div className="flex flex-1 gap-2 bg-white rounded-2xl">
          <span class="bg-[#39B3D7] px-4 py-2 rounded-2xl min-w-[170px] text-white">
            Description
          </span>
          <input className="w-full rounded-e-full px-1 pr-4 my-2 border-l-[2px] border-gray-300 focus:outline-none"
          value={imgMeta.title}
          />
        </div>
        <div className="flex flex-1 gap-2 bg-white rounded-2xl">
          <span className="bg-[#39B3D7] px-4 py-2 rounded-2xl min-w-[170px] text-white">
            New Geotags
          </span>
          <input className="w-full rounded-e-full px-1 pr-4 my-2 border-l-[2px] border-gray-300 focus:outline-none"
          value={latLong.lng +' - '+latLong.lat}
          />
        </div>
        <div className="flex flex-1 gap-2 bg-white rounded-2xl">
          <span className="bg-[#39B3D7] px-4 py-2 rounded-2xl min-w-[170px] text-white">
            Keywords and Tags
          </span>
          <input className="w-full rounded-e-full px-1 pr-4 my-2 border-l-[2px] border-gray-300 focus:outline-none"
          value={imgMeta.keyword}
          onChange={onKeywordChange}
          />
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
            <button className="flex-1 p-2 rounded-xl text-white bg-gray-400 cursor-pointer" onClick={helper.resetForm}>Clear</button>
            <button className="flex-1 p-2 rounded-xl text-white bg-green-600 cursor-pointer" onClick={downloadImage}>Download</button>
            {isOpened && (
              <img src={loader} className="h-[50px] w-[50px]" />
            )}
        </div>
      </div>
    </div>
  );
}
