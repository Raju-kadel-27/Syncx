"use client";

import { cn } from './utils'
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { ReactNode, SetStateAction, Dispatch } from 'react';

interface SwitchProps {
    fn: Dispatch<SetStateAction<boolean>> | (() => void),
    trackDimensions?: string;
    thumbDimensions?: string;
    thumbTranslate?: string;
    checked?: boolean;
    disabled?: boolean;
    disabledToolTip?: string | ReactNode
}

export function Switch({
    fn,
    trackDimensions,
    thumbDimensions,
    thumbTranslate,
    checked,
    disabled,
    disabledToolTip
}: SwitchProps
) {
    if (disabledToolTip) {
        return (
            <div className='bg-slate-200'>
                <div />
            </div>
        )
    }

    return (
        <SwitchPrimitive.Root
            checked={checked}
            name='switch'
            onCheckedChange={(checked) => fn(checked)}
            className={cn(
                disabled
                ? "cursor-not-allowed bg-gray-300"
                : "radix-state-checked:bg-blue-500 radix-state-unchecked:bg-gray-200 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75",
              "relative inline-flex h-4 w-8 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
              trackDimensions,
            )}
        >

            <SwitchPrimitive.Thumb
                className={cn(
                    `radix-state-checked:${thumbTranslate}`,
                    "radix-state-unchecked:translate-x-0",
                    `pointer-events-none h-3 w-3 translate-x-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`,
                    thumbDimensions,
                    thumbTranslate,
                )}
            >

            </SwitchPrimitive.Thumb>

        </SwitchPrimitive.Root>
    )

}


