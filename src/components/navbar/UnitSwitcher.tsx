import React, {ChangeEventHandler} from 'react'

const UnitSwitcher = ({className, isMetric, handleChangeUnits} : {className?: string|undefined, isMetric: boolean, handleChangeUnits: ChangeEventHandler<HTMLInputElement>}) => {
    return (
        <div className={className}>
            <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center'>
                <input
                    type='checkbox'
                    checked={isMetric}
                    onChange={handleChangeUnits}
                    className='sr-only'
                />
                <span className='mr-[18px] text-sm font-medium text-black'>
                    Units
                </span>
                <div className='shadow-card flex h-[46px] w-[82px] items-center justify-center rounded-md bg-white'>
                    <span
                        className={`flex h-9 w-9 items-center justify-center rounded ${
                            !isMetric ? 'bg-blue-700 text-white' : 'text-body-color hover:text-blue-700'
                        }`}
                    >
                        {"°F"}
                    </span>
                    <span
                        className={`flex h-9 w-9 items-center justify-center rounded ${
                            isMetric ? 'bg-blue-700 text-white' : 'text-body-color hover:text-blue-700'
                        }`}
                    >
                        {"°C"}
                    </span>
                </div>
            </label>
        </div>
    )
}

export default UnitSwitcher
