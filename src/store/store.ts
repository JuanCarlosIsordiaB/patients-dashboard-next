import { Patient } from '@/interfaces'
import {create} from 'zustand'

interface PatientState {
    patients: Patient[],
    addPatient: (data: Patient) => void
}

const createPatient = (patient: Patient) => {

}

export const usePatientStore = create<PatientState>((set) => ({
    patients:[], //This is the initial state
    addPatient: (data) => {
        
        set((state) => ({
            patients: [...state.patients, data]
        }))
    },
    removePatient: (id:string) => {
        set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id)
        }))
    }
}))