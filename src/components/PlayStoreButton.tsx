import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { ctaDetails } from '@/data/cta'

const PlayStoreButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={ctaDetails.googlePlayUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-black bg-white": !dark })}
            >
                <div className="mr-3">
                    <Image
                        src="/images/warkguard-icon.png"
                        alt="WarkGuard Logo"
                        width={30}
                        height={30}
                        className="rounded-md"
                    />
                </div>
                <div>
                    <div className="text-xs">
                        Añade ya a
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        WarkGuard
                    </div>
                </div>
            </button>
        </a>
    )
}

export default PlayStoreButton
