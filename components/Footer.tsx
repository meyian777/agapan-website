export default function Footer() {
    return (
      <footer className="bg-[#fef8f2] text-[#3a503a] py-6 text-center">
        <p className="mb-2">Founded in 2022. Made with love by Mari & Ian</p>
        <a
          href="https://instagram.com/agapanbakery"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2 hover:text-[#8B5E3C] transition-colors"
        >
          {/* Logo oficial de Instagram (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z" />
          </svg>
          <span>@agapanbakery</span>
        </a>
      </footer>
    );
  }