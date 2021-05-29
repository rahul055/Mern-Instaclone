import { useEffect } from "react";

function Notfound() {
  useEffect(() => {
    document.title = "Not-found - Instagram";
  });
  return (
    <div className="bg-gray-200">
      <h1 className="mx-auto max-w-screen-lg text-center text-2xl justify-center">
        Not found
      </h1>
    </div>
  );
}

export default Notfound;
