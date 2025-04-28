import Digitalization from '@/components/FaSystem/digitalization'
import ProcessImprovement from '@/components/FaSystem/processImprovement'
import HeroHeader from '@/components/Hero/HeroHeader'
import React from 'react'

const ProcessImprovementPage = () => {
    return (
        <>
            <HeroHeader
                title="Process Improvement"
                image="/images/hero/process-improvement.avif"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Process Improvement",
                    },

                ]}
            />
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">

                        <div className="w-full px-4">
                            <ProcessImprovement />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProcessImprovementPage
