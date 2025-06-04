import Image from 'next/image'
import React from 'react'

const FooterWhatsapp = () => {
    const iconWhatsapp = '/images/icon/whatsapp.svg'
    const waNumber = '6281234567890'
    const waMessage = 'Halo, saya ingin bertanya tentang produk Anda.'
    return (
        <>
            <div className="fixed bottom-5 right-5">
                <a href={`https://wa.me/${waNumber}?text=${waMessage}`} target="_blank" rel="noopener noreferrer">
                    <Image src={iconWhatsapp} alt="Whatsapp" width={45} height={45} className="filter brightness-90 hover:brightness-100 transition" />
                </a>
            </div>
        </>
    )
}

export default FooterWhatsapp
