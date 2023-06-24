import SideNav from "../component/SideNav";
import TopNav from "../component/TopNav";

export default function Home() {
  return (
    <div>
      <TopNav />
      <SideNav notShow={false} />
    </div>
  );
}
