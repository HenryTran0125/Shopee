import ShopeeMallHeaderNavigation from "./ShopeeMallHeaderNavigation";
import ShopeeMallHeaderSearch from "./ShopeeMallHeaderSearch";

function ShopeeMallHeader() {
  return (
    <div style={{ background: "#d0011b" }}>
      <ShopeeMallHeaderNavigation />
      <ShopeeMallHeaderSearch />
    </div>
  );
}

export default ShopeeMallHeader;
