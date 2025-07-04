"use client";
import React from "react";
const MainContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {/* <!-- ===== Features Start ===== --> */}
            <section className="pt-16 px-4 md:px-10">
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                    {children}
                </div>
            </section>
        </>
    );
};

export default MainContent;
