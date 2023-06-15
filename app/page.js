"use client"
import Navbar from './components/Navbar';
import { Client, Databases, Query } from "appwrite";
const client = new Client();
import react, { useEffect, useState } from 'react';

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('648af1573c8205297cd7');

const databases = new Databases(client);

export default function Home() {
  document.title = "Hunting-Coder"
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    let promise = databases.listDocuments(
      "648af1706264b99e6b0a",
      "648af17c646939f15be6",
  );
  
  promise.then(function (response) {
      console.log(response);
      setBlog(response.documents);
  }, function (error) {
      console.log(error);
  });
  }, [])

  return (
    <>
      <Navbar />
      <div className='my-5 w-[90vw] mx-auto'>
        {blog.map((post)=>
        <div className="bg-white rounded-lg shadow-lg w-64 ">
        <img src="https://cdn.wallpapersafari.com/98/10/5kmO9f.png" className="h-48 w-full object-cover object-center rounded-t-lg" />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-700">{post.slug}.....</p>
          <a href={ "" } className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Read More</a>
        </div>
      </div>
        )}
      </div>
    </>
  )
}
