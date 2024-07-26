import { create } from "zustand";

interface AppointmentData {
    date: Date;
    content1: string | null;
    content2: string | null;
}

interface DateStateI {
    daySelected: Date;
    selectDay: (daySelected: Date) => void;
    appointments: AppointmentData[];
    dayIndices: number[];
    setAppointments: (data: AppointmentData[]) => void;
    setDayIndices: (dayIndices: number[]) => void;
}

export const useDateStore = create<DateStateI>((set) => ({
    daySelected: new Date(),
    appointments: [],
    dayIndices: [],

    selectDay: (daySelected: Date) => {
        set({ daySelected });
    },

    setAppointments: (appointments: AppointmentData[]) => {
        set({ appointments });
    },

    setDayIndices: (dayIndices: number[]) => {
        set({ dayIndices })
    }
}));