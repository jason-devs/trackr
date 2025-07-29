function PageNotFound() {
  return (
    <div className="flex h-[100svh] flex-col items-center justify-center gap-5">
      <h2 className="flex flex-col items-center justify-center gap-0 text-4xl">
        <span className="font-black">404</span>- Page Not Found
      </h2>
      <p>Sorry, we don't have a page at that URL. 🥺 🤷‍♂️</p>
    </div>
  );
}

export default PageNotFound;
