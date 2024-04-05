import { Link } from "react-router-dom";
import DataAnggota from "./data-anggota/DataAnggota";
import HeaderMenu from "../ForAPI/details/HeaderMenu";

import { ScrollArea } from "../../../../components/ui/scroll-area";
import { ResizablePanelGroup } from "../../../../components/ui/resizable";

export default function HomeAdmin() {
  return (
    <div>
      <section className="bg-slate-200 flex font-sans">
        <div className="">
          <ResizablePanelGroup direction="horizontal" className="max-w-md ">
            <ScrollArea className="h-[91vh] w-[350px] bg-gray-900 p-4 text-gray-200">
              <h1 className="text-xl font-extrabold">KELOLA DATABASE</h1>
              <div className="p-1">
                <Link to="#">~ card anggota</Link>
                <br />
                <Link to="#">~ page anggota</Link>
              </div>
            </ScrollArea>
          </ResizablePanelGroup>
        </div>

        <div>
          <ScrollArea className="h-[91vh]">
            <HeaderMenu
              title={"CARD ANGGOTA"}
              linkTitle={"Lihat Semua"}
              linkHref={"/username=admin&&password=admin123/admin/full"}
            />
            <DataAnggota />
          </ScrollArea>
        </div>
      </section>
    </div>
  );
}
