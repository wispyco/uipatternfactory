"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const keys = [
    ['End', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Delete'],
    ['Tab', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', 'Caps Lock'],
    ['Caps Lock', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '/'],
    ['Ctrl', '←', '↓', '→', 'Shift', '←', '↓', '→', 'Ctrl']
]

const KeyboardKey = ({ label, isGreen, width = 1 }: { label: string; isGreen: boolean; width: number }) => {
    const [isPressed, setIsPressed] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsPressed(Math.random() < 0.1) // 10% chance of being pressed
        }, 200)

        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            className={`relative rounded-sm ${isGreen ? 'bg-emerald-700' : 'bg-amber-400'}`}
            style={{ width: `${width * 10}%`, height: '48px' }}
        >
            <motion.div
                className={`absolute inset-0.5 rounded-sm ${isGreen ? 'bg-emerald-600' : 'bg-amber-300'
                    } shadow-md flex items-center justify-center text-xs font-bold ${isGreen ? 'text-emerald-100' : 'text-amber-900'
                    }`}
                animate={{
                    y: isPressed ? 2 : 0,
                    boxShadow: isPressed
                        ? 'inset 0 2px 4px 0 rgba(0,0,0,0.3)'
                        : '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)'
                }}
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            >
                {label}
            </motion.div>
        </motion.div>
    )
}

export default function Component() {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-gray-200 p-4 rounded-lg shadow-xl" style={{ width: '600px' }}>
                <div className="space-y-1">
                    {keys.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex space-x-1">
                            {row.map((key, keyIndex) => {
                                let width = 1
                                if (key === 'End' || key === 'Delete' || key === 'Tab') width = 1.5
                                if (key === 'Caps Lock') width = 1.75
                                if (key === 'Shift') width = 2.25
                                if (rowIndex === 3 && (keyIndex === 0 || keyIndex === row.length - 1)) width = 1.25
                                if (rowIndex === 3 && keyIndex === 4) width = 3

                                return (
                                    <KeyboardKey
                                        key={`${rowIndex}-${keyIndex}`}
                                        label={key}
                                        isGreen={keyIndex > 4 || rowIndex === 3}
                                        width={width}
                                    />
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}