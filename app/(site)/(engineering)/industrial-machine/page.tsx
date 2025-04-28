import IndustrialMachine from '@/components/Engineering/industrialMachine'
import Digitalization from '@/components/FaSystem/digitalization'
import ProcessImprovement from '@/components/FaSystem/processImprovement'
import HeroHeader from '@/components/Hero/HeroHeader'
import React from 'react'

const IndustrialMachinePage = () => {
    return (
        <>
            <HeroHeader
                title="Industrial Machine"
                image="/images/hero/industrial-machine.avif"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Industrial Machine",
                    },

                ]}
            />
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">

                        <div className="w-full px-4">
                            <IndustrialMachine />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndustrialMachinePage
