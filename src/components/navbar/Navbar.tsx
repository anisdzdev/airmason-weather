import {Search} from "./Search";
import UnitSwitcher from "./UnitSwitcher";
import {ChangeEventHandler} from "react";

export const Navbar = (
    {isMetric, setIsMetric}: {isMetric: boolean, setIsMetric: ChangeEventHandler<HTMLInputElement>}
) => {
    return (
        <div className="flex w-full justify-center items-center my-5">
            <Search className="w-1/3 mr-10"/>
            <UnitSwitcher isMetric={isMetric} handleChangeUnits={setIsMetric}/>
        </div>
    )
}