"use client"
import React from 'react'
import SectionHeader from '../Common/SectionHeader';
import { getOfficeLocations } from '@/services/ApiService';
import { useQuery } from '@tanstack/react-query';
import SkeletonOfficeLocation from './SkeletonOfficeLocation';
import OfficeLocationSingle from './SingleOfficeLocation';
import Link from 'next/link';

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
            <div className="py-16 px-4 md:px-10">
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 mb-5">
                    <div className="animate_top mx-auto text-center">
                        <SectionHeader
                            headerInfo={{
                                title: `Office Location`,
                                subtitle: `Our Branches & Contact Points`,
                                description: `Find our offices and branches across Indonesia. We are ready to serve you with local support and global expertise.`,
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
                            <div
                                key={key}
                                className="group rounded-xl border border-blue-100 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl hover:border-blue-400 transition-all  flex flex-col items-center text-center"
                            >
                                <OfficeLocationSingle data={location} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default OfficeLocation
