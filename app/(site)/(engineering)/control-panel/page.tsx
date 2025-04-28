import ControlPanel from '@/components/Engineering/controlPanel'
import Digitalization from '@/components/FaSystem/digitalization'
import HeroHeader from '@/components/Hero/HeroHeader'
import React from 'react'

const ControlPanelPage = () => {
    return (
        <>
            <HeroHeader
                title="Control Panel"
                image="/images/hero/control-panel.avif"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Control Panel",
                    },

                ]}
            />
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">

                        <div className="w-full px-4">
                            <ControlPanel />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ControlPanelPage
