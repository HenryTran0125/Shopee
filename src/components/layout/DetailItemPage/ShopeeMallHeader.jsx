import ShopeeMallHeaderNavigation from "./ShopeeMallHeaderNavigation";
import ShopeeMallHeaderSearch from "./ShopeeMallHeaderSearch";

function ShopeeMallHeader() {
  return (
    <header style={{ background: "#d0011b" }}>
      <ShopeeMallHeaderNavigation />
      <ShopeeMallHeaderSearch />
    </header>
  );
}

export default ShopeeMallHeader;
