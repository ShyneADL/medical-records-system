'use client'
import { useState, useEffect } from 'react';

const ProfileImage = () => {
  const [image, setImage] = useState(null); // Updated initial state

  useEffect(() => {
    // Retrieve Image on Component Mount
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setImage(storedImage);
    } else {
      setImage('/assets/caleb-logo.png'); // Default if none found
    }
  }, []); 
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const dataURL = reader.result;
      setImage(dataURL);
      localStorage.setItem('profileImage', dataURL);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex items-end gap-2'>
      <img src={image} alt="Profile Image" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ProfileImage;
