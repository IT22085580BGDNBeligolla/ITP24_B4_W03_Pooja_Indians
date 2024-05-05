// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import './updaterooms.css'

// function UpdateRooms() {
//   const { id } = useParams();
//   const [updaterooms, setupdateroooms] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     date: "",
//     quantity_rooms: "",
//     quantity_people: "",
//   })

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8030/rooms/${id}`);
//         const data = await response.json();
//         console.log(data);

//         if (data.success) {
//           setupdateroooms(data.data);
//         } else {
//           console.error(data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [id]); // Include 'id' in the dependency array


//   const handleInputChange = (e) => {
//     setupdateroooms({
//       ...updaterooms,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleUpdate = async () => {
//     try {
//       const response = await fetch(`http://localhost:8030/update`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: updaterooms._id,
//           ...updaterooms,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         console.log('User updated successfully');
//         alert("updated successfully");

//       } else {
//         console.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };


//   return (
//     <div className='rooms-update'>
//       <h2>Update Details</h2>

//       <label>Name:</label>
//       <input type="text" id="name" name="name" onChange={handleInputChange} value={updaterooms?.name} /><br></br>
//       <label>Phone Number:</label>
//       <input type="number" id="phone" name="phone" onChange={handleInputChange} value={updaterooms?.phone} /><br></br>
//       <label>Email:</label>
//       <input type="email" id="email" name="email" onChange={handleInputChange} value={updaterooms?.email} /><br></br>
//       <label>Date:</label>
//       <input type="date" id="date" name="date" onChange={handleInputChange} value={updaterooms?.date} /><br></br>
//       <label>Quantity:</label>
//       <input type="number" min="1" max="10" id="quantity_rooms" name="quantity_rooms" onChange={handleInputChange} value={updaterooms?.quantity_rooms} /><br></br>
//       <label>Number of Guests:</label>
//       <input type="tel" min="1" id="quantity_people" name="quantity_people" onChange={handleInputChange} value={updaterooms?.quantity_people} /><br></br>

//       <button onClick={handleUpdate} >Update</button><br></br> <br></br>
//     </div>
//   )
// }
// export default UpdateRooms;





// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import './updaterooms.css'

// function UpdateRooms() {
//   const { id } = useParams();
//   const [updaterooms, setupdateroooms] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     date: "",
//     quantity_rooms: "",
//     quantity_people: "",
//   })

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8030/rooms/${id}`);
//         const data = await response.json();
//         console.log(data);

//         if (data.success) {
//           setupdateroooms(data.data);
//         } else {
//           console.error(data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);



//   const handleInputChange = (e) => {
//     setupdateroooms({
//       ...updaterooms,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleUpdate = async () => {
//     try {
//       const response = await fetch(`http://localhost:8030/update`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: updaterooms._id,
//           ...updaterooms,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         console.log('User updated successfully');
//         alert("updated successfully");

//       } else {
//         console.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };


//   return (
//     <div className='rooms-update'>
//       <h2>Update Details</h2>

//       <lable>Name:</lable>
//       <input type="text" id="name" name="name" onChange={handleInputChange} value={updaterooms?.name} /><br></br>
//       <lable>Phone Number:</lable>
//       <input type="number" id="phone" name="phone" onChange={handleInputChange} value={updaterooms?.phone} /><br></br>
//       <lable>Email:</lable>
//       <input type="email" id="email" name="email" onChange={handleInputChange} value={updaterooms?.email} /><br></br>
//       <lable>Date:</lable>
//       <input type="date" id="date" name="date" onChange={handleInputChange} value={updaterooms?.date} /><br></br>
//       <lable>Quentity:</lable>
//       <input type="number" id="quantity_rooms" name="quantity_rooms" onChange={handleInputChange} value={updaterooms?.quantity_rooms} /><br></br>
//       <lable>Number of Guests:</lable>
//       <input type="number" id="quantity_people" name="quantity_people" onChange={handleInputChange} value={updaterooms?.quantity_people} /><br></br>




//       <button onClick={handleUpdate} >Update</button><br></br> <br></br>


//     </div>
//   )
// }
// export default UpdateRooms;

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './updaterooms.css';

// function UpdateRooms() {
//   const { id } = useParams();
//   const [updaterooms, setupdaterooms] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     date: '',
//     quantity_rooms: '',
//     quantity_people: '',
//   });

//   useEffect(() => {
//     const fetchRoomData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8030/rooms/${id}`);
//         const data = await response.json();

//         if (data.success) {
//           setupdaterooms(data.data);
//         } else {
//           console.error(data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching room data:', error);
//       }
//     };

//     fetchRoomData();
//   }, [id]);

//   const handleInputChange = (e) => {
//     setupdaterooms({
//       ...updaterooms,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleUpdate = async () => {
//     try {
//       const response = await fetch(`http://localhost:8030/update`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: updaterooms._id, // Assuming _id is the unique identifier of the room
//           ...updaterooms,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         console.log('Room updated successfully');
//         alert('Room updated successfully');
//       } else {
//         console.error(data.message);
//         alert('Error updating room');
//       }
//     } catch (error) {
//       console.error('Error updating room:', error);
//       alert('Error updating room');
//     }
//   };

//   return (
//     <div className='rooms-update'>
//       <h2>Update Details</h2>

//       <label>Name:</label>
//       <input type='text' name='name' onChange={handleInputChange} value={updaterooms.name} /><br />
//       <label>Phone Number:</label>
//       <input type='number' name='phone' onChange={handleInputChange} value={updaterooms.phone} /><br />
//       <label>Email:</label>
//       <input type='email' name='email' onChange={handleInputChange} value={updaterooms.email} /><br />
//       <label>Date:</label>
//       <input type='date' name='date' onChange={handleInputChange} value={updaterooms.date} /><br />
//       <label>Quantity:</label>
//       <input type='number' min='1' max='10' name='quantity_rooms' onChange={handleInputChange} value={updaterooms.quantity_rooms} /><br />
//       <label>Number of Guests:</label>
//       <input type='number' min='1' name='quantity_people' onChange={handleInputChange} value={updaterooms.quantity_people} /><br />

//       <button onClick={handleUpdate}>Update</button><br /><br />
//     </div>
//   );
// }

// export default UpdateRooms;


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './updaterooms.css';

function UpdateRooms() {
  const { id } = useParams();
  const [updaterooms, setupdaterooms] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    quantity_rooms: '',
    quantity_people: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await fetch(`http://localhost:8030/rooms/${id}`);
        const data = await response.json();

        if (data.success) {
          setupdaterooms(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, [id]);

  const handleInputChange = (e) => {
    setupdaterooms({
      ...updaterooms,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    const validationErrors = {};
    if (!updaterooms.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!updaterooms.phone.trim()) {
      validationErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/i.test(updaterooms.phone)) {
      validationErrors.phone = "Invalid phone number";
    }
    if (!updaterooms.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(updaterooms.email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!updaterooms.date.trim()) {
      validationErrors.date = "Date is required";
    }
    if (!updaterooms.quantity_rooms.trim()) {
      validationErrors.quantity_rooms = "Quantity is required";
    }
    if (!updaterooms.quantity_people.trim()) {
      validationErrors.quantity_people = "Number of guests is required";
    }

    setErrors(validationErrors);

    // If there are validation errors, don't submit the form
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8030/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: updaterooms._id, // Assuming _id is the unique identifier of the room
          ...updaterooms,
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Room updated successfully');
        alert('Room updated successfully');
      } else {
        console.error(data.message);
        alert('Error updating room');
      }
    } catch (error) {
      console.error('Error updating room:', error);
      alert('Error updating room');
    }
  };

  return (
    <div className='rooms-update'>
      <h2>Update Details</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' name='name' onChange={handleInputChange} value={updaterooms.name} />
        {errors.name && <span className='error'>{errors.name}</span>}<br />

        <label>Phone Number:</label>
        <input type='tel' name='phone' onChange={handleInputChange} value={updaterooms.phone} />
        {errors.phone && <span className='error'>{errors.phone}</span>}<br />

        <label>Email:</label>
        <input type='email' name='email' onChange={handleInputChange} value={updaterooms.email} />
        {errors.email && <span className='error'>{errors.email}</span>}<br />

        <label>Date:</label>
        <input type='date' name='date' onChange={handleInputChange} value={updaterooms.date} />
        {errors.date && <span className='error'>{errors.date}</span>}<br />

        <label>Quantity:</label>
        <input type='number' min='1' max='10' name='quantity_rooms' onChange={handleInputChange} value={updaterooms.quantity_rooms} />
        {errors.quantity_rooms && <span className='error'>{errors.quantity_rooms}</span>}<br />

        <label>Number of Guests:</label>
        <input type='number' min='1' name='quantity_people' onChange={handleInputChange} value={updaterooms.quantity_people} />
        {errors.quantity_people && <span className='error'>{errors.quantity_people}</span>}<br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateRooms;
