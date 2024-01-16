import { IoMdBatteryCharging } from "react-icons/io";
import { GrWifiMedium } from "react-icons/gr";
import { LuSignal } from "react-icons/lu";

export default function AndroidStatusBar() {
    return (
        <div className="flex items-center justify-between px-5 fixed top-0 z-50 bg-white h-11 w-full max-w-640">
            <p className="pl-5 text-0D font-semibold text-sm">10:38</p>
            <div className="flex items-center w-fit gap-1 h-4">
                <GrWifiMedium className="w-4"/>
                <LuSignal className="w-4"/>
                <LuSignal className="text-black/50 w-4"/>
                <IoMdBatteryCharging className="w-4"/>
            </div>
        </div>
    )
}
