"use client"

import React from "react";
import Header from "@/compments/Header";

export default function Home() {
  return (
    // <div className="bg-red-600 min-h-screen"> </div>

    <section className="relative bg-[url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
      {/* <div className="absolute inset-0 bg-red sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Finding Your Forever Art
            <strong className="block font-extrabold text-rose-700">
              {" "}
              A Personal Exploration of Artistic Sensibilities.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            "Art is the revelation of an exquisite sensitivity.". Cézanne
          </p>
        </div>
      </div>
    </section>
  );
}
