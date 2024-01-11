'use client'
import ToolBtn from "../Components/ToolsBtn";

export default function CommonTools() {
  return (
    <div className="p-8 bg-white rounded-xl mt-12 text-left">
      <div className="flex items-center md:gap-12 gap-4 flex-wrap">
        <label className="text-4xl font-medium">More Tools</label>
        <input
          type="search"
          class="bg-gray-200 px-4 py-1 border-xl rounded-xl focus:outline-[#39B3D7] flex-1"
          placeholder="Search...."
        ></input>
      </div>
      <h2 className="font-bold text-lg text-center mt-4 mb-3">Data Converters</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="flex flex-col gap-3 text-center">
          <h2>JSON Converters</h2>
          <ToolBtn message="JSON to CSV" />
          <ToolBtn message="CSV to JSON" />
        </div>
        <div className="flex flex-col gap-3 text-center">
          <h2>XML Converters</h2>
          <ToolBtn message="XML to CSV" />
          <ToolBtn message="CSV to XML" />
        </div>
        <div className="flex flex-col gap-3 text-center">
          <h2>YAML Convertors</h2>
          <ToolBtn message="YAML to CSV" />
          <ToolBtn message="CSV to YAML" />
        </div>
        <div className="flex flex-col gap-3 text-center">
          <h2>TOML Convertors</h2>
          <ToolBtn message="TOML to CSV" />
          <ToolBtn message="CSV to TOML" />
        </div>
        <div className="flex flex-col gap-3 text-center">
          <h2>JS Convertors</h2>
          <ToolBtn message="JS to TS" />
          <ToolBtn message="TS to JS" />
        </div>
        <div className="flex flex-col gap-3 text-center">
          <h2>INI Convertors</h2>
          <ToolBtn message="INI to CSV" />
          <ToolBtn message="CSV to INI" />
        </div>
      </div>
    </div>
  );
}
