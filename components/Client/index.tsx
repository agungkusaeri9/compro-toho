"use client";
import React from "react";
import SingleClient from "./SingleClient";
import brandData from "./brandData";
import { useQuery } from "@tanstack/react-query";
import { getClients } from "@/services/Client";

const Client = () => {

  const { data: clients, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const response = await getClients();
      return response.data;
    },
  })
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black my-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients?.map((data, key) => (
              <SingleClient data={data} key={key} />
            ))}
          </div>
        </div>
      </section>



      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Client;
