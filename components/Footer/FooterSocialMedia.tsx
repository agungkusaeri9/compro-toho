import socialMediaData from '@/data/SocialMedia'
import Image from 'next/image'
import React from 'react'

const FooterSocialMedia = () => {
    const socialMedias = socialMediaData;
    return (
        <>
            <div className="flex flex-row gap-4">
                {socialMedias.map((socialMedia, index) => (
                    <a key={index} href={socialMedia.url} target="_blank" rel="noopener noreferrer">
                        <Image src={socialMedia.icon} alt={socialMedia.name} width={22} height={22} className="filter brightness-90 hover:brightness-100 transition"
                        />
                    </a>
                ))}
            </div>
        </>
    )
}

export default FooterSocialMedia
