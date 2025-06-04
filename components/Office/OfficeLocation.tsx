import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import SectionHeader from '../Common/SectionHeader';
import { getOfficeLocations } from '@/services/ApiService';
import { useQuery } from '@tanstack/react-query';
import SkeletonOfficeLocation from './SkeletonOfficeLocation';
import OfficeLocationSingle from './SingleOfficeLocation';

const OfficeLocation = () => {
    const { data: officeLocations, isLoading } = useQuery({
        queryKey: ['officeLocations'],
        queryFn: async () => {
            const response = await getOfficeLocations();
            return response.data;
        }
    });
    return (
        <>
            <div className="py-16 px-4 md:px-10 bg-gray-50">
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 mb-5">
                    <div className="animate_top mx-auto text-center">
                        <SectionHeader
                            headerInfo={{
                                title: `Office Location`,
                                subtitle: `Latest News & Blogs`,
                                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
                            }}
                        />
                    </div>
                </div>

                <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
                    {isLoading ? (
                        [...Array(2)].map((_, key) => (
                            <SkeletonOfficeLocation key={key} />
                        ))
                    ) : (
                        officeLocations?.map((location, key) => (
                            <OfficeLocationSingle data={location} key={key} />
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default OfficeLocation
