"use client";
import React, { useState } from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import 'react-clock/dist/Clock.css';
import moment from 'moment';
import { AiOutlineClockCircle } from 'react-icons/ai';
import './CustomTimePicker.css';

const CustomTimePicker: React.FC = () => {
    const [value, setValue] = useState(moment().hour(0).minute(0));
    const [open, setOpen] = useState(false);

    const handleChange = (time: any) => {
        setValue(time);
    };

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="flex items-center  ">
            <div>
                <h1 className="text-lg font-semibold ml-2 check-in-label" >Check In</h1>
            </div>
            <div className="relative w-48">
                <div className="relative">
                    <TimePicker
                        showSecond={false}
                        value={value}
                        onChange={handleChange}
                        format="h:mm a"
                        use12Hours
                        className="custom-time-picker"
                        open={open}
                        onOpen={() => setOpen(true)}
                        onClose={() => setOpen(false)}
                        clearIcon={null}
                    />
                    <AiOutlineClockCircle
                        className="clock-icon"
                        onClick={toggleOpen}
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomTimePicker;
