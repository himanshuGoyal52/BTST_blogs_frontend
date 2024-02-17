"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setLoading(false);
      setBlogs(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Navbar
  const showMenuHandler = (e) => {
    e.preventDefault();
    document.querySelector(".navbar").classList.add("show-menu");
  };
  const hideMenuHandler = (e) => {
    e.preventDefault();
    document.querySelector(".navbar").classList.remove("show-menu");
  };

  return (
    <>
      {/*  start: Navbar  */}
      <nav className="h-16 group/navbar bg-white border-b border-b-gray-100 navbar">
        <div className="lg:container xl:max-w-7xl mx-auto px-4 flex items-center h-full">
          <Link
            href="/"
            className="text-xl font-extrabold uppercase tracking-wide"
          >
            Responsive Blog
          </Link>
          <ul className="lg:flex lg:items-center lg:ml-6 lg:pl-6 lg:border-l lg:border-l-gray-200 fixed lg:static top-0 right-0 bg-white lg:bg-transparent h-full lg:h-auto max-w-xs lg:max-w-none w-full lg:w-auto p-4 py-6 lg:p-0 translate-x-full lg:translate-x-0 group-[.show-menu]/navbar:translate-x-0 transition-transform z-50">
            <li className="lg:hidden">
              <button
                type="button"
                onClick={hideMenuHandler}
                className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center absolute top-4 right-4 hover:bg-gray-200 text-gray-600 navbar-hide"
              >
                <i className="ri-close-line"></i>
              </button>
            </li>
            <li className="mr-6 group/navbar-item mb-3 lg:mb-0">
              <Link
                href="/"
                className="text-[15px] text-gray-600 font-medium hover:text-gray-800 transition-colors group-[.active]/navbar-item:relative group-[.active]/navbar-item:before:absolute group-[.active]/navbar-item:before:bottom-0 group-[.active]/navbar-item:before:left-0 group-[.active]/navbar-item:before:w-full group-[.active]/navbar-item:before:h-2 group-[.active]/navbar-item:before:bg-indigo-100 group-[.active]/navbar-item:before:-z-10 group-[.active]/navbar-item:text-gray-800"
              >
                Home
              </Link>
            </li>
            <li className="mr-6 group/navbar-item mb-3 lg:mb-0 active">
              <Link
                href="/"
                className="text-[15px] text-gray-600 font-medium hover:text-gray-800 transition-colors group-[.active]/navbar-item:relative group-[.active]/navbar-item:before:absolute group-[.active]/navbar-item:before:bottom-0 group-[.active]/navbar-item:before:left-0 group-[.active]/navbar-item:before:w-full group-[.active]/navbar-item:before:h-2 group-[.active]/navbar-item:before:bg-indigo-100 group-[.active]/navbar-item:before:-z-10 group-[.active]/navbar-item:text-gray-800"
              >
                Blog
              </Link>
            </li>
            <li className="mr-6 group/navbar-item mb-3 lg:mb-0">
              <Link
                href="/"
                className="text-[15px] text-gray-600 font-medium hover:text-gray-800 transition-colors group-[.active]/navbar-item:relative group-[.active]/navbar-item:before:absolute group-[.active]/navbar-item:before:bottom-0 group-[.active]/navbar-item:before:left-0 group-[.active]/navbar-item:before:w-full group-[.active]/navbar-item:before:h-2 group-[.active]/navbar-item:before:bg-indigo-100 group-[.active]/navbar-item:before:-z-10 group-[.active]/navbar-item:text-gray-800"
              >
                Features
              </Link>
            </li>
            <li className="mr-6 group/navbar-item mb-3 lg:mb-0">
              <Link
                href="/"
                className="text-[15px] text-gray-600 font-medium hover:text-gray-800 transition-colors group-[.active]/navbar-item:relative group-[.active]/navbar-item:before:absolute group-[.active]/navbar-item:before:bottom-0 group-[.active]/navbar-item:before:left-0 group-[.active]/navbar-item:before:w-full group-[.active]/navbar-item:before:h-2 group-[.active]/navbar-item:before:bg-indigo-100 group-[.active]/navbar-item:before:-z-10 group-[.active]/navbar-item:text-gray-800"
              >
                Pricing
              </Link>
            </li>
            <li className="mr-6 group/navbar-item mb-3 lg:mb-0">
              <Link
                href="/"
                className="text-[15px] text-gray-600 font-medium hover:text-gray-800 transition-colors group-[.active]/navbar-item:relative group-[.active]/navbar-item:before:absolute group-[.active]/navbar-item:before:bottom-0 group-[.active]/navbar-item:before:left-0 group-[.active]/navbar-item:before:w-full group-[.active]/navbar-item:before:h-2 group-[.active]/navbar-item:before:bg-indigo-100 group-[.active]/navbar-item:before:-z-10 group-[.active]/navbar-item:text-gray-800"
              >
                Contact Us
              </Link>
            </li>
            <li className="flex items-center md:hidden">
              <Link
                href="/"
                className="font-semibold text-[15px] text-indigo-500 w-full text-center"
              >
                Signin
              </Link>
              <Link
                href="/"
                className="font-semibold text-[15px] text-white bg-indigo-500 hover:bg-indigo-600 transition-colors py-1.5 px-3 rounded w-full text-center"
              >
                Signup
              </Link>
            </li>
          </ul>
          <div
            onClick={hideMenuHandler}
            className="fixed z-40 top-0 left-0 w-full h-full bg-black/50 opacity-0 invisible lg:hidden group-[.show-menu]/navbar:opacity-100 group-[.show-menu]/navbar:visible navbar-overlay"
          ></div>
          <div className="flex items-center ml-auto">
            <button
              type="button"
              className="flex items-center text-gray-600 cursor-text py-2 border-b-2 border-b-gray-200 hover:border-b-indigo-500 transition-colors search-show"
            >
              <i className="ri-search-line mr-2"></i>
              <span className="text-sm">Search</span>
            </button>
            <Link
              href="/"
              className="font-semibold text-[15px] text-indigo-500 ml-6 hidden md:block"
            >
              Signin
            </Link>
            <Link
              href="/"
              className="font-semibold text-[15px] text-white ml-6 bg-indigo-500 hover:bg-indigo-600 transition-colors py-1.5 px-3 rounded hidden md:block"
            >
              Signup
            </Link>
          </div>
          <button
            type="button"
            onClick={showMenuHandler}
            className="text-gray-600 text-xl ml-6 lg:hidden navbar-show"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </nav>
      {/*  end: Navbar  */}

      {/*  start: Hero  */}
      <header className="py-12">
        <div className="lg:container xl:max-w-7xl mx-auto px-4">
          <div className="rounded-md bg-indigo-50 p-6 md:p-8 relative before:w-96 before:h-96 before:bg-indigo-500/5 before:absolute before:rounded-full before:-top-32 before:-right-32 before:block after:absolute after:block after:w-96 after:h-96 after:-rotate-12 after:bg-indigo-500/5 after:-left-16 after:-bottom-80 after:rounded-lg overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold leading-snug md:leading-tight max-w-3xl mb-4">
                Responsive Blogs dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-gray-600 leading-normal max-w-3xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                impedit commodi, amet iure officiis quos tempore. Nemo illo aut
                beatae.
              </p>
              <div className="flex items-center mt-8">
                <Link
                  href="/"
                  className="font-semibold text-[15px] text-white bg-indigo-500 hover:bg-indigo-600 transition-colors py-1.5 px-3 rounded"
                >
                  Get started
                </Link>
                <Link
                  href="/"
                  className="font-semibold text-[15px] text-indigo-500 ml-6"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*  end: Hero  */}

      {/*  start: Listing  */}
      {Loading ? (
        <div className="lg:container xl:max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug md:leading-tight max-w-3xl mb-4">
            Loading blogs....
          </h1>
        </div>
      ) : blogs.length === 0 ? (
        <div className="lg:container xl:max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug md:leading-tight max-w-3xl mb-4">
            No Blogs exits :{"("}
          </h1>
        </div>
      ) : (
        <section className="py-12">
          <div className="lg:container xl:max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Posts</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {blogs.articles.slice(0, 6).map((ele, index) => (
                <Link key={index} href={ele.url} className="block group/post">
                  <div className="relative rounded-md overflow-hidden before:absolute before:w-full before:h-1/2 before:bottom-0 before:left-0 before:bg-gradient-to-b before:from-transparent before:to-black mb-4">
                    <img
                      src={ele.urlToImage}
                      alt=""
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 flex items-center">
                      <img
                        src="https://source.unsplash.com/random/32x32/?user"
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="ml-3 font-medium text-white">
                        by {ele.author}
                      </span>
                    </div>
                  </div>
                  <span className="text-xl font-medium leading-snug bg-underline bg-[length:0_6%] bg-no-repeat bg-[0_100%] transition-all group-hover/post:bg-[length:100%_6%]">
                    {ele.title}
                  </span>
                  <p className="text-gray-600 line-clamp-3 mt-2">
                    {ele.description}
                  </p>
                  <ul className="flex items-center mt-4">
                    <li className="text-sm font-semibold text-gray-500">
                      {ele.publishedAt.slice(0, 10)}
                    </li>
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/*  end: Listing */}

      {/*  start: Footer  */}
      <footer className="py-8 bg-gray-50 border-t border-t-gray-200">
        <div className="lg:container xl:max-w-7xl mx-auto px-4">
          <p className="text-center">Made with &lt;3 by Himanshu Goyal.</p>
        </div>
      </footer>
      {/*  end: Footer  */}
    </>
  );
}
