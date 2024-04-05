import Navbar from "../../../components/layout/navbar";
import HomeAdmin from "./HomeAdmin";

export default function Admin() {
  return (
    <>
      <Navbar isAdmin={true} adminText="MODE ADMIN" />
      <div>
        <HomeAdmin />
      </div>
    </>
  );
}
