const Footer = () => {
  return (
    <div className="h-full w-full px-8 py-4 bg-neutral-700 text-neutral-200">
      <h1 className="h1/4 w-full text-left font-Satisfy text-3xl py-4">
        Brew Time
      </h1>
      <div className="h-3/4 w-full flex flex-col sm:flex-row">
        <div className="sm:basis-1/4 py-4">
          <h3 className="mb-4 text-xl">LEARN</h3>
          <ul className="flex flex-col gap-4">
            <li className="hover:text-blue-500 duration-300 ease-linear">
              <a href="/home" rel="noreferrer">
                Tips
              </a>
            </li>
            <li className="hover:text-blue-500 duration-300 ease-linear">
              <a href="/home" rel="noreferrer">
                FAQs
              </a>
            </li>
            <li className="hover:text-blue-500 duration-300 ease-linear">
              <a href="/home" rel="noreferrer">
                Events
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:basis-1/4 py-4">
          <h3 className="mb-4 text-xl">CONTACT</h3>
          <ul className="flex flex-col gap-4">
            <li className="hover:text-blue-500 duration-300 ease-linear">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="hover:text-blue-500 duration-300 ease-linear">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li className="hover:text-blue-500 duration-300 ease-linear">
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:basis-1/2 py-4">
          <h3 className="mb-4 text-xl flex flex-col gap-2">SUBSCRIBE</h3>
          <div className="flex">
            <input
              className="appearance-none bg-transparent border-b-2 border-neutral-200 w-1/2 text-neutral-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="your@email.com"
            />
            <button
              className="flex-shrink-0 bg-none border-neutral-200 text-sm border-2 text-white py-1 px-4 rounded hover:bg-neutral-200 hover:text-black"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
