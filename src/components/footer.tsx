export const Footer: React.FC = () => {
    return (
        <div>
      <footer className="text-gray-700 body-font bg-black">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            
            <span className="ml-3 text-xl text-white">AO Play</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              © 2024 AO Play. All rights reserved.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                className="text-red-500"
                href="https://github.com/Shradhesh71"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
              <a
                className="ml-3 text-blue-500"
                href="https://www.linkedin.com/in/shradesh-jodawat-147730265/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Linkedin
              </a>
              <a
                className="ml-3 text-white-200"
                href="https://medium.com/@"
                rel="noopener noreferrer"
                target="_blank"
              >
                WrapCast
              </a>
              <a
                className="ml-3 text-indigo-500"
                href="https://x.com/Shradeshjain835/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </span>
          </div>
        </footer>
      </div>
    )
}