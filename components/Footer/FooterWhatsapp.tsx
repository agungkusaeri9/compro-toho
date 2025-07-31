import ConfigData from '@/data/config'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const FooterWhatsapp = () => {
    const { whatsapp_number, whatsapp_message, whatsapp_icon } = ConfigData;
    const urlWhatsapp = `https://wa.me/${whatsapp_number}?text=${encodeURIComponent(whatsapp_message)}`;
    return (
        <>
            <div className="fixed bottom-5 right-5">
                {urlWhatsapp && (
                    <Link href={urlWhatsapp} target="_blank" rel="noopener noreferrer">
                        <Image src={whatsapp_icon} alt="Whatsapp" width={45} height={45} className="filter brightness-90 hover:brightness-100 transition" />
                    </Link>
                )}
            </div>
        </>
    )
}

export default FooterWhatsapp
