import { create } from 'zustand';
import { Patient } from '@/interfaces';

interface PatientState {
  patients: Patient[];
  addPatient: (data: Patient) => void;
  removePatient: (id: string) => void;
  editPatient: (id: string, data: Patient) => void;
}

export const usePatientStore = create<PatientState>((set) => ({
  patients: localStorage.getItem('patients') ? JSON.parse(localStorage.getItem('patients')!) : [],
  addPatient: (data) => {
    set((state) => {
      const updatedPatients = [...state.patients, data];
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
      return { patients: updatedPatients };
    });
  },
  removePatient: (id: string) => {
    set((state) => {
      const updatedPatients = state.patients.filter((patient) => patient.id !== id);
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
      return { patients: updatedPatients };
    });
  },
  editPatient: (id: string, data: Patient) => {
    set((state) => {
      const updatedPatients = state.patients.map((patient) => {
        if (patient.id === id) {
          return { ...data, id };
        }
        return patient;
      });
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
      return { patients: updatedPatients };
    });
  }
}));
