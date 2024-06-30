import { render, screen, fireEvent } from '@testing-library/react';
import Page from '@app/pages/admin/users';
import { Doctors, Nurses, Patients } from '@app/components/UserData'; // Your dummy data

describe('User Management Page', () => {
    // ... (first test case: checking table visibility based on pills - same as before) ...
  
    it('displays the correct user data in each table', async () => {
      render(<Page />);
  
      // Check Patients table
      Patients.forEach(patient => {
          expect(screen.getByText(patient.id)).toBeInTheDocument();
          expect(screen.getByText(patient.name)).toBeInTheDocument();
          expect(screen.getByText(patient.gender)).toBeInTheDocument();
          expect(screen.getByText(patient.age)).toBeInTheDocument();
          expect(screen.getByText(patient.phoneNumber)).toBeInTheDocument();
      });
  
      // Click on "Doctors" pill and check Doctors table
      fireEvent.click(screen.getByLabelText('Doctors'));
      Doctors.forEach(doctor => {
          expect(screen.getByText(doctor.name)).toBeInTheDocument();
          expect(screen.getByText(doctor.id)).toBeInTheDocument();
          expect(screen.getByText(doctor.specialty)).toBeInTheDocument();
      });
  
      // Click on "Nurses" pill and check Nurses table
      fireEvent.click(screen.getByLabelText('Nurses'));
      Nurses.forEach(nurse => {
          expect(screen.getByText(nurse.name)).toBeInTheDocument();
          expect(screen.getByText(nurse.id)).toBeInTheDocument();
          expect(screen.getByText(nurse.department)).toBeInTheDocument();
          expect(screen.getByText(nurse.experience)).toBeInTheDocument();
      });
    });
  });

