'use client';

import { Menu } from '@headlessui/react';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const locales = [
    { code: 'en', label: 'English', emoji: '🇺🇸' },
    { code: 'jp', label: '日本語', emoji: '🇯🇵' },
];

export default function LanguageSelect() {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const currentLocale = pathname.split('/')[1];
    const selected = locales.find((l) => l.code === currentLocale) || locales[0];

    const handleSelect = (locale: string) => {
        const segments = pathname.split('/');
        segments[1] = locale;
        const newPath = segments.join('/');

        startTransition(() => {
            router.push(newPath);
        });
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
                <>
                    <Menu.Button className="inline-flex justify-center items-center px-3 py-2 bg-white text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none">
                        <span className="mr-2">{selected.emoji}</span> {selected.label}
                        <ChevronDownIcon className="ml-2 w-4 h-4" />
                    </Menu.Button>

                    <AnimatePresence>
                        {open && (
                            <Menu.Items
                                static
                                as={motion.div}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                // transition={{ duration: 0.15 }}
                                className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <div className="py-1">
                                    {locales.map((locale) => (
                                        <Menu.Item key={locale.code}>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => handleSelect(locale.code)}
                                                    className={`${active ? 'bg-gray-100' : ''
                                                        } flex w-full px-4 py-2 text-sm text-left text-gray-700`}
                                                >
                                                    <span className="mr-2">{locale.emoji}</span>
                                                    {locale.label}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        )}
                    </AnimatePresence>
                </>
            )}
        </Menu>
    );
}
