import React from "react";

const Foot = () => {
  return (
    <div>
      <hr className="mt-2" />
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center text-2xl">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="font-extrabold text-3xl text-green-500">BHC</span>
          </p>
        </aside>

        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <h1 className="text-lg font-semibold text-center">
            Developed with
            <span className="text-red-500 font-extrabold">❤</span> by Foysal.
          </h1>
        </nav>
      </footer>
    </div>
  );
};

export default Foot;
