import { useLocation } from "react-router-dom";

function PageTitle() {
  const { pathname } = useLocation();

  return (
    <div className="px-4 py-1 font-black">
      <h2 className="text-2xl capitalize">{pathname.slice(1)}</h2>
    </div>
  );
}

export default PageTitle;
