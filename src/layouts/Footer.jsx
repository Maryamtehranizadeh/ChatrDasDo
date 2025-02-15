function Footer() {
  const buttonClass =
    "text-lg bg-[var(--primary-color)] text-[var(--secondary-color)] px-4 py-2 rounded-md hover:opacity-80 w-full md:w-auto hover:border-[var(--secondary-color)]";

  return (
    <footer className=" flex flex-col text-center p-10 bg-[var(--primary-color)] text-[var(--secondary-color)]">
      <p>Developed by Mary with ❤</p>
      <div className="flex flex-row m-auto">
        <button className={buttonClass}>Ins</button>
        <button className={buttonClass}>Tel</button>
        <button className={buttonClass}>FB</button>
      </div>
    </footer>
  );
}

export default Footer;
