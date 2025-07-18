function Landing() {
  return (
    <div className="flex h-[100svh] flex-col items-center justify-center gap-1">
      <h1 className="py-5 text-9xl">
        Trackr <span>🏋️‍♀️</span>
      </h1>
      <button className="rounded-sm border-2 px-4 py-1 text-xl font-black">
        Sign Up
      </button>
      <p>
        Or Log In <button className="underline">here.</button>
      </p>
    </div>
  );
}

export default Landing;
