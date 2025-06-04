import socialMediaData from '@/data/SocialMedia'
import { getSocialMedia } from '@/services/ApiService'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'
import FooterSocialMediaSkeleton from './FooterSocialMediaSkeleton'

const FooterSocialMedia = () => {
    const { data: socialMedias, isLoading } = useQuery({
        queryKey: ["socialMedias"],
        queryFn: async () => {
            const response = await getSocialMedia();
            return response.data;
        }
    })

    if (isLoading) {
        return <FooterSocialMediaSkeleton />;
    }

    return (
        <>
            <div className="flex flex-row gap-4">
                {socialMedias?.map((socialMedia, index) => (
                    <a key={index} href={socialMedia.url} target="_blank" rel="noopener noreferrer" className="hover:brightness-100 brightness-50 transition">
                        <Image src={socialMedia.image_url} alt={socialMedia.name} width={22} height={22} className="filter"
                        />
                    </a>
                ))}
            </div>
        </>
    )
}

export default FooterSocialMedia
