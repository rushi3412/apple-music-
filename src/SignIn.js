// import React from 'react';
// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { newEmail: '', selectedCountry: 'Country/Region:', showEmailForm: true };
//   }
//   handleEmailChange = (event) => {
//     this.setState({ newEmail: event.target.value });
//   }
//   handleCountryChange = (event) => {
//     this.setState({ selectedCountry: event.target.value });
//   }
//   handleContinueClick = () => {
//     // Add your email validation logic here
//     // If email is valid, hide the email form and show the rest of the form
//     this.setState({ showEmailForm: false });
//   }
//   render() {
//     const countries = ["Algeria", "Angola", /* Add all the countries here */];
//     const placeholderText = this.state.newEmail ? this.state.newEmail : "Apple ID";
//     return (
//       <div style={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         alignItems: 'center', 
//         justifyContent: 'center',
//         width: "700px", 
//         height: "700px", 
//         margin: "0 auto", 
//         fontFamily: "Arial", 
//         marginTop: '53px', 
//         position: 'fixed',
//         zIndex: 1000, 
//         background: 'black', 
//         top: '50%', 
//         left: '50%', 
//         transform: 'translate(-50%, -50%)',  
//       }}>
//         {this.state.showEmailForm ? (
//           <>
//             <h1 style={{ marginBottom: '20px' }}>Sign In or Sign Up</h1>
//             <h2 style={{ marginBottom: '20px' }}>Enter your email to get started.</h2>
//             <label style={{ marginBottom: '20px' }}>
//               <input type="email" name="email" placeholder="Email or Apple ID" 
//               style={{width: '500px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '9px' }}/>
//             </label>
//             <a style={{ marginBottom: '20px' }} href="#">Forgot Apple ID or Password?</a>
//             <button onClick={this.handleContinueClick} style={{backgroundColor: 'pink', width: '300px', height: "45px", borderRadius: '9px', fontSize: '18px'}}>Continue</button>
//           </>
//         ) : (
//           <div style={{ maxHeight:'500px', overflow:'auto' }}>
//             <h2>Create Apple ID</h2>
//             <label style={{ marginBottom:'20px' }}>
//               <input type="email" name="newEmail" placeholder={placeholderText} style={{ width:'500px', marginBottom:'10px', height:"55px", padding:'10px', fontSize:'16px', borderRadius:'5px' }} onChange={this.handleEmailChange} />
//               <p style={{ fontSize:'12px' }}>This email address will become your Apple ID.</p>
//             </label>
//             <label>
//           <input type="password" name="password" placeholder="Password" style={{ width: '500px', marginBottom: '10px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '5px' }}/>
//         </label>
//         <p style={{ fontSize: '12px', marginBottom: '20px' }}>Your password must have 8 or more characters, upper and lowercase letters, and at least one number.</p>
//         <label>
//           <input type="text" name="firstName" placeholder="First Name" style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }}/>
//         </label>
//         <label>
//           <input type="text" name="lastName" placeholder="Last Name" style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }}/>
//         </label>
//         <label>
//           <input type="date" name="birthday" placeholder="Birthday" style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }}/>
//         </label>
//         <label style={{ marginBottom: '20px' }}>
//           <select style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }} onChange={this.handleCountryChange}>
//             <option value="Country/Region:" disabled selected>{this.state.selectedCountry}</option>
//             {countries.map((country, index) => (
//               <option key={index} value={country}>{country}</option>
//             ))}
//           </select>
//         </label>

//         <label>
//           Apple Updates:
//           <input type="checkbox" name="appleUpdates" />
//         </label>
        
//         <p style={{ fontSize: '11px' }}>Receive Apple emails and communications including new releases, exclusive content, special offers, and marketing and recommendations for apps, music, movies, TV, books, podcasts, Apple Pay, and more.</p>

//         <label>
//           Agree to Terms & Conditions:
//           <input type="checkbox" name="termsAndConditions" />
//         </label>

//         <p style={{ fontSize: '11px' }}>By selecting Continue, you agree to the Apple Media Services Terms & Conditions and acknowledge that you will be signed in on this browser.</p>

//             {/* Rest of your form goes here */}
//             </div>
//         )}
//       </div>
//     );
//   }
// }

// export default SignIn;









// import React, { useState } from 'react';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [newEmail, setNewEmail] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState('Country/Region');
//   const [showEmailForm, setShowEmailForm] = useState(true);
//   const countries = ["Algeria", "Angola", /* Add all the countries here */];
//   const [placeholderText, setPlaceholderText] = useState(newEmail ? newEmail : "Apple ID");

//   const handleEmailChange = (event) => {
//     setNewEmail(event.target.value);
//   }

//   const handleCountryChange = (event) => {
//     setSelectedCountry(event.target.value);
//   }

//   const handleContinueClick = async () => {
//     // Replace 'user_email' and 'user_password' with actual user inpu

//     const apiUrl = 'https://academics.newtonschool.co/api/v1/user/login';

//     // Create the request body
//     const requestBody = {
//       email: email,
//       password: password,
//       appType: 'music'
//     };

//     // Make the POST request

//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'projectID': 'f104bi07c490' // Replace with your actual project ID
//       },
//       body: JSON.stringify(requestBody)
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Assuming the API response contains a 'token' field
//         console.log("my data" , data);
//         const token = data.token;

//         // Check if the response contains a token
//         if (token) {
//           // Store the token in local storage
//           localStorage.setItem('token', token);

//           // Hide the email form and show the rest of the form or perform any other action
//           setShowEmailForm(false);
//         } else {
//           // Handle the case where no token is received, e.g., show an error message
//           console.error('No token received from the API');
//         }
//       })
//       .catch(error => {
//         // Handle any network or API request errors
//         console.error('Error fetching data:', error);
//       });
//   }

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: "700px",
//       height: "600px",
//       margin: "0 auto",
//       fontFamily: "Arial",
//       marginTop: '53px',
//       position: 'fixed',
//       zIndex: 1000,
//       background: 'black',
//       top: '40%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       overflow: 'auto',
//     }}>
//       {showEmailForm ? (
//         <>
//           <h1 style={{ marginBottom: '20px' }}>Sign In or Sign Up</h1>
//           <h2 style={{ marginBottom: '20px' }}>Enter your email to get started.</h2>
//           <label style={{ marginBottom: '20px' }}>
//             <input type="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)}  placeholder="Email or Apple ID"
//               style={{ width: '500px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '9px' }} />
//           </label>
//           <label>
//             <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ width: '500px', marginBottom: '10px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
//           </label>
//           <a style={{ marginBottom: '20px' }} href="#">Forgot Apple ID or Password?</a>
//           <button onClick={handleContinueClick} style={{ backgroundColor: 'pink', width: '300px', height: "45px", borderRadius: '9px', fontSize: '18px' }}>Continue</button>
//         </>
//       ) : (
//         <div style={{ maxHeight: '500px', overflow: 'auto' }}>
//           <h2>Create Apple ID</h2>
//           <label style={{ marginBottom: '20px' }}>
//             <input type="email" name="newEmail" placeholder={placeholderText} style={{ width: '500px', marginBottom: '10px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '5px' }} onChange={handleEmailChange} />
//             <p style={{ fontSize: '12px' }}>This email address will become your Apple ID.</p>
//           </label>
//           <label>
//             <input type="password" name="password" placeholder="Password" style={{ width: '500px', marginBottom: '10px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
//           </label>
//           <p style={{ fontSize: '12px', marginBottom: '20px' }}>Your password must have 8 or more characters, upper and lowercase letters, and at least one number.</p>
//           <label>
//             <input type="text" name="firstName" placeholder="First Name" style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
//           </label>
//           <label>
//             <input type="text" name="lastName" placeholder="Last Name" style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
//           </label>
//           <label>
//             <input type="date" name="birthday" placeholder="Birthday" style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
//           </label>
//           <label style={{ marginBottom: '20px' }}>
//             <select style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }} onChange={handleCountryChange}>
//               <option value="Country/Region" disabled selected>{selectedCountry}</option>
//               {countries.map((country, index) => (
//                 <option key={index} value={country}>{country}</option>
//               ))}
//             </select>
//           </label>

//           <label>
//             Apple Updates:
//             <input type="checkbox" name="appleUpdates" />
//           </label>

//           <p style={{ fontSize: '11px' }}>Receive Apple emails and communications including new releases, exclusive content, special offers, and marketing and recommendations for apps, music, movies, TV, books, podcasts, Apple Pay, and more.</p>

//           <label>
//             Agree to Terms & Conditions:
//             <input type="checkbox" name="termsAndConditions" />
//           </label>

//           <p style={{ fontSize: '11px' }}>By selecting Continue, you agree to the Apple Media Services Terms & Conditions and acknowledge that you will be signed in on this browser.</p>

//           {/* Rest of your form goes here */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SignIn;








import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Country/Region');
  const [showEmailForm, setShowEmailForm] = useState(true);
  const countries = ["Algeria", "Angola", /* Add all the countries here */];
  const navigate = useNavigate();
  const [placeholderText, setPlaceholderText] = useState(newEmail ? newEmail : "Apple ID");

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  }

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  }

  const handleContinueClick = async () => {
    // Replace 'user_email' and 'user_password' with actual user input

    const apiUrl = 'https://academics.newtonschool.co/api/v1/user/login';

    // Create the request body
    const requestBody = {
      email: email,
      password: password,
      appType: 'music'
    };

    // Make the POST request

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'projectID': 'f104bi07c490' // Replace with your actual project ID
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        // Assuming the API response contains a 'token' field
        console.log("my data", data);
        const token = data.token;

        // Check if the response contains a token
        if (token) {
          // Store the token in local storage
          localStorage.setItem('token', token);

          // Hide the email form and show the rest of the form or perform any other action
          setShowEmailForm(false);
          navigate('/browse');
        } else {
          // Handle the case where no token is received, e.g., show an error message
          console.error('No token received from the API');
        }
      })
      .catch(error => {
        // Handle any network or API request errors
        console.error('Error fetching data:', error);
      });
  };

  const handleBackClick = () => {
    // Reset the form and show the email input form
    setShowEmailForm(true);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: "700px",
      height: "600px",
      margin: "0 auto",
      fontFamily: "Arial",
      marginTop: '53px',
      position: 'fixed',
      zIndex: 1000,
      background: 'black',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'auto',
    }}>
      {showEmailForm ? (
        <>
          <h1 style={{ marginBottom: '20px' }}>Sign In or Sign Up</h1>
          <h2 style={{ marginBottom: '20px' }}>Enter your email to get started.</h2>
          <label style={{ marginBottom: '20px' }}>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email or Apple ID"
              style={{ width: '500px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '9px' }} />
          </label>
          <label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ width: '500px', marginBottom: '10px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
          </label>
          <a style={{ marginBottom: '20px' }} href="#">Forgot Apple ID or Password?</a>
          <button  style={{ backgroundColor: 'pink', width: '300px', height: "45px", borderRadius: '9px', fontSize: '18px' }}>Continue</button>
        </>
      ) : (
        <div style={{ maxHeight: '650px', overflow: 'auto',  display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', }}>
          <h2>Create Apple ID</h2>
          <label style={{ marginBottom: '20px' }}>
            <input type="email" name="newEmail" placeholder={placeholderText} style={{ width: '500px', marginBottom: '10px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '5px' }} onChange={handleEmailChange} />
            <p style={{ fontSize: '12px' }}>This email address will become your Apple ID.</p>
          </label>
          <label>
            <input type="password" name="password" placeholder="Password" style={{ width: '500px', marginBottom: '10px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
          </label>
          <p style={{ fontSize: '12px', marginBottom: '20px' }}>Your password must have 8 or more characters, upper and lowercase letters, and at least one number.</p>
          <label>
            <input type="text" name="firstName" placeholder="First Name" style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
          </label>
          <label>
            <input type="text" name="lastName" placeholder="Last Name" style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
          </label>
          <label>
            <input type="date" name="birthday" placeholder="Birthday" style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
          </label>
          <label style={{ marginBottom: '20px' }}>
            <select style={{ width: '500px', marginBottom: '10px', height: "55px", marginBottom: '15px', padding: '10px', fontSize: '16px', borderRadius: '5px' }} onChange={handleCountryChange}>
              <option value="Country/Region" disabled selected>{selectedCountry}</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </label>

          <label>
            Apple Updates:
            <input type="checkbox" name="appleUpdates" />
          </label>

          <p style={{ fontSize: '11px' }}>Receive Apple emails and communications including new releases, exclusive content, special offers, and marketing and recommendations for apps, music, movies, TV, books, podcasts, Apple Pay, and more.</p>

          <label>
            Agree to Terms & Conditions:
            <input type="checkbox" name="termsAndConditions" />
          </label>

          <p style={{ fontSize: '11px' }}>By selecting Continue, you agree to the Apple Media Services Terms & Conditions and acknowledge that you will be signed in on this browser.</p>

          <button onClick={handleBackClick} style={{ backgroundColor: 'gray', width: '150px', height: "45px", borderRadius: '9px', fontSize: '18px', marginRight: '10px' }}>Back</button>
          <button onClick={handleContinueClick} style={{ backgroundColor: 'pink', width: '150px', height: "45px", borderRadius: '9px', fontSize: '18px' }}>Continue</button>
        </div>
      )}
    </div>
  );
}

export default SignIn;
