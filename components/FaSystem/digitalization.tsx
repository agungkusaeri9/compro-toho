"use client";

const Digitalization = ({ data }: { data: any }) => {
    return (
        <>
            <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
                <div className="mx-auto max-w-c-1390  px-4 md:px-8 xl:px-0">
                    <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                </div>
            </section >
        </>
    );
};

export default Digitalization;
