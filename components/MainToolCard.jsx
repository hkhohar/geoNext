'use client'
import CommonTools from '../Components/CommonTools';
import MoreTools from '../Components/MoreTools';
import React, { useState,useEffect  } from "react"

export default function MainToolCard() {

return(

<div className="bg-gray-200 px-6 py-1">
      <div><CommonTools /></div>
      <div><MoreTools /></div>
    </div>

);

}