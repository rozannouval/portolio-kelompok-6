import { useState, useEffect } from "react";
import axios from "axios";

export default function DataAnggota() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //fetching
    const response = await axios.get("http://localhost:3002/api/anggota");
    //get response data
    const data = await response.data.data;

    //assign response data to state "data"
    setData(data);
  };

  const sortedAnggota = data.sort((a, b) => a.id - b.id);

  return (
    <div className="px-4 ">
      <table className="table-fixed bg-blue-50 border-solid border-blue-200 w-full">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border-solid border-blue-200 px-4 w-16">id</th>
            <th className="border-solid border-blue-200 py-2 w-52 px-4">
              nama
            </th>
            <th className="border-solid border-blue-200 px-4 w-36">
              image_url
            </th>
            <th className="border-solid border-blue-200 px-4 w-52">aksi</th>
          </tr>
        </thead>
        <tbody>
          {sortedAnggota.map((data, index) => {
            return (
              <tr key={data.id} className="text-black text-center">
                <td className="border-solid border-blue-200">{1 + index}</td>
                <td className="border-solid border-blue-200">{data.nama}</td>
                <td className="border-solid border-blue-200 flex justify-center">
                  <img src={data.image_url} className="w-full h-full" />
                </td>
                <td className="border-solid border-blue-200">
                  <div className="flex items-center justify-center gap-2">
                    <button className="py-2 px-4 bg-cyan-600 text-white rounded">
                      Edit
                    </button>
                    <button className="py-2 px-4 bg-red-500 text-white rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
