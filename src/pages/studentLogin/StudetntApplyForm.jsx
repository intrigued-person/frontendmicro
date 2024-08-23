// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import StudentDash from '../../Studedash/StudentDash';

// function StudetntApplyForm() {
//   const applicationname = sessionStorage.getItem("userName");
//   const userId = sessionStorage.getItem("userId");
//   const usercontact = sessionStorage.getItem("mobile");

//   const navigate = useNavigate();

//   const [pg, setPg] = useState([]);
//   const [ug, setUg] = useState([]);

//   useEffect(() => {
//     getPgdepts();
//     getUgdepts();
//   }, []);

//   const getPgdepts = async () => {
//     await axios.get("http://localhost:9952/getPgDeptDetails").then((response) => {
//       setPg(response.data);
//     });
//   };

//   const getUgdepts = async () => {
//     await axios.get("http://localhost:9952/getUgDeptDetails").then((response) => {
//       setUg(response.data);
//     });
//   };

//   const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({ mode: "onChange" });
//   const degreeType = watch("degreeType");
//   const physicsMark = watch("physicsMark");
//   const chemistryMark = watch("chemistryMark");
//   const mathsMark = watch("mathsMark");

//   useEffect(() => {
//     if (physicsMark && chemistryMark && mathsMark) {
//       const cutoffMarks = (parseInt(physicsMark) + parseInt(chemistryMark)) / 2 + parseInt(mathsMark);
//       setValue("twelthmark", cutoffMarks); // Set the calculated cutoff mark
//     }
//   }, [physicsMark, chemistryMark, mathsMark, setValue]);

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append('profileImage', data.profileImage[0]);

//     axios.post(`http://localhost:9952/applyApplication`, formData, {
//       params: {
//         userId,
//         name: data.name,
//         mobileNumber: data.mobileNumber,
//         gender: data.gender,
//         dob: data.dob,
//         fatherName: data.fatherName,
//         motherName: data.motherName,
//         parentsMobile: data.parentsMobile,
//         religion: data.religion,
//         sslcMark: data.sslcMark,
//         twelthmark: data.twelthmark,
//         address: data.address,
//         state: data.state,
//         pincode: data.pincode,
//         degreeType: data.degreeType,
//         id: data.id,
//       }
//     })
//       .then((response) => {
//         Swal.fire({
//           title: "Application Submitted Successfully!",
//           text: "Your application has been submitted successfully.",
//           icon: "success",
//         });
//         navigate("/layerform");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <StudentDash />
//       <Container>
//         <Row>
//           <Col md={6}>
//             <Card className="p-4 mb-4 custom-card">
//               <Card.Title>Personal Information</Card.Title>
//               <Form onSubmit={handleSubmit(onSubmit)}>
//                 <Form.Group>
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     {...register("name", { required: "Name is required" })}
//                     placeholder="Enter Name"
//                     defaultValue={applicationname}
//                   />
//                   {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Mobile Number</Form.Label>
//                   <Form.Control
//                     type="tel"
//                     inputMode='numeric'
//                     {...register("mobileNumber", {
//                       required: "Mobile Number is required",
//                       pattern: {
//                         value: /^[0-9]{10}$/,
//                         message: "Invalid mobile number format"
//                       }
//                     })}
//                     placeholder="Enter Mobile Number"
//                     defaultValue={usercontact}
//                   />
//                   {errors.mobileNumber && <Form.Text className="text-danger">{errors.mobileNumber.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Gender</Form.Label>
//                   <Form.Control
//                     as="select"
//                     {...register("gender", { required: "Gender is required" })}
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                   </Form.Control>
//                   {errors.gender && <Form.Text className="text-danger">{errors.gender.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Date of Birth</Form.Label>
//                   <Form.Control
//                     type="date"
//                     max="2008-12-31"
//                     {...register("dob", { required: "Date of Birth is required" })}
//                   />
//                   {errors.dob && <Form.Text className="text-danger">{errors.dob.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Father's Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     {...register("fatherName", { required: "Father's Name is required" })}
//                   />
//                   {errors.fatherName && <Form.Text className="text-danger">{errors.fatherName.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Mother's Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     {...register("motherName", { required: "Mother's Name is required" })}
//                   />
//                   {errors.motherName && <Form.Text className="text-danger">{errors.motherName.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Parent's Mobile</Form.Label>
//                   <Form.Control
//                     type="number"
//                     {...register("parentsMobile", { required: "Parent's Mobile is required" })}
//                   />
//                   {errors.parentsMobile && <Form.Text className="text-danger">{errors.parentsMobile.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Religion</Form.Label>
//                   <Form.Control
//                     as="select"
//                     {...register("religion", { required: "Religion is required" })}
//                   >
//                     <option value="">Select Religion</option>
//                     <option value="Christian">Christian</option>
//                     <option value="Muslim">Muslim</option>
//                     <option value="Hindu">Hindu</option>
//                     <option value="Other">Other</option>
//                   </Form.Control>
//                   {errors.religion && <Form.Text className="text-danger">{errors.religion.message}</Form.Text>}
//                 </Form.Group>
//               </Form>
//             </Card>
//           </Col>
//           <Col md={6}>
//             <Card className="p-4 mb-4 custom-card">
//               <Card.Title>Educational Information</Card.Title>
//               <Form onSubmit={handleSubmit(onSubmit)}>
//                 <Form.Group>
//                   <Form.Label>SSLC Mark</Form.Label>
//                   <Form.Control
//                     type="number"
//                     min={200}
//                     max={500}
//                     {...register("sslcMark", { required: "SSLC Mark is required" })}
//                     placeholder="Enter SSLC Mark"
//                   />
//                   {errors.sslcMark && <Form.Text className="text-danger">{errors.sslcMark.message}</Form.Text>}
//                 </Form.Group>

//                 <Form.Group>
//                   <Form.Label>Physics Mark</Form.Label>
//                   <Form.Control
//                     type="number"
//                     min={0}
//                     max={100}
//                     {...register("physicsMark", { required: "Physics Mark is required" })}
//                     placeholder="Enter Physics Mark"
//                   />
//                   {errors.physicsMark && <Form.Text className="text-danger">{errors.physicsMark.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Chemistry Mark</Form.Label>
//                   <Form.Control
//                     type="number"
//                     min={0}
//                     max={100}
//                     {...register("chemistryMark", { required: "Chemistry Mark is required" })}
//                     placeholder="Enter Chemistry Mark"
//                   />
//                   {errors.chemistryMark && <Form.Text className="text-danger">{errors.chemistryMark.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Maths Mark</Form.Label>
//                   <Form.Control
//                     type="number"
//                     min={0}
//                     max={100}
//                     {...register("mathsMark", { required: "Maths Mark is required" })}
//                     placeholder="Enter Maths Mark"
//                   />
//                   {errors.mathsMark && <Form.Text className="text-danger">{errors.mathsMark.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Cutoff Mark</Form.Label>
//                   <Form.Control
//                     type="number"
//                     min={200}
//                     max={500}
//                     value={watch("twelthmark")}
//                     readOnly
//                     placeholder="Cutoff Mark (Auto-calculated)"
//                   />
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Degree Type</Form.Label>
//                   <Form.Control
//                     as="select"
//                     {...register("degreeType", { required: "Degree Type is required" })}
//                   >
//                     <option value="">Select Degree Type</option>
//                     <option value="Bachelor">Bachelor</option>
//                     <option value="Masters">Masters Degree</option>
//                   </Form.Control>
//                   {errors.degreeType && <Form.Text className="text-danger">{errors.degreeType.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Department</Form.Label>
//                   <Form.Control
//                     as="select"
//                     {...register("id", { required: "Department is required" })}
//                     disabled={!degreeType}
//                   >
//                     <option value="">Select Department</option>
//                     {degreeType === "Masters"
//                       ? pg.map((u) => (
//                         <option key={u.id} value={u.id}>
//                           {u.dept}
//                         </option>
//                       ))
//                       : ug.map((u) => (
//                         <option key={u.id} value={u.id}>
//                           {u.dept}
//                         </option>
//                       ))}
//                   </Form.Control>
//                   {errors.id && <Form.Text className="text-danger">{errors.id.message}</Form.Text>}
//                 </Form.Group>
//               </Form>
//             </Card>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={6}>
//             <Card className="p-4 mb-4 custom-card">
//               <Card.Title>Address Information</Card.Title>
//               <Form onSubmit={handleSubmit(onSubmit)}>
//                 <Form.Group>
//                   <Form.Label>Address</Form.Label>
//                   <Form.Control
//                     type="text"
//                     {...register("address", { required: "Address is required" })}
//                     placeholder="Enter Address"
//                   />
//                   {errors.address && <Form.Text className="text-danger">{errors.address.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>State</Form.Label>
//                   <Form.Control
//                     type="text"
//                     {...register("state", { required: "State is required" })}
//                     placeholder="Enter State"
//                   />
//                   {errors.state && <Form.Text className="text-danger">{errors.state.message}</Form.Text>}
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Pincode</Form.Label>
//                   <Form.Control
//                     type="text"
//                     {...register("pincode", { required: "Pincode is required", pattern: { value: /^[0-9]{6}$/, message: "Invalid pincode format" } })}
//                     placeholder="Enter Pincode"
//                   />
//                   {errors.pincode && <Form.Text className="text-danger">{errors.pincode.message}</Form.Text>}
//                 </Form.Group>
//               </Form>
//             </Card>
//           </Col>
//           <Col md={6}>
//             <Card className="p-4 mb-4 custom-card">
//               <Card.Title>Upload Documents</Card.Title>
//               <Form onSubmit={handleSubmit(onSubmit)}>
//                 <Form.Group>
//                   <Form.Label>12th marksheet</Form.Label>
//                   <Form.Control
//                     type="file"
//                     {...register("profileImage", { required: "12 marksheet is required" })}
//                   />
//                   {errors.profileImage && <Form.Text className="text-danger">{errors.profileImage.message}</Form.Text>}
//                 </Form.Group>
//                 <Button variant="primary" type="submit">Submit</Button>
//               </Form>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default StudetntApplyForm;
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import StudentDash from '../../Studedash/StudentDash';

function StudetntApplyForm() {
  const applicationname = sessionStorage.getItem("userName");
  const userId = sessionStorage.getItem("userId");
  const usercontact = sessionStorage.getItem("mobile");

  const navigate = useNavigate();

  const [pg, setPg] = useState([]);
  const [ug, setUg] = useState([]);
  const [degreeType, setDegreeType] = useState("");

  useEffect(() => {
    getPgdepts();
    getUgdepts();
  }, []);

  const getPgdepts = async () => {
    await axios.get("http://localhost:9952/getPgDeptDetails").then((response) => {
      setPg(response.data);
    });
  };

  const getUgdepts = async () => {
    await axios.get("http://localhost:9952/getUgDeptDetails").then((response) => {
      setUg(response.data);
    });
  };

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({ mode: "onChange" });
  const degreeTypeWatch = watch("degreeType");
  const physicsMark = watch("physicsMark");
  const chemistryMark = watch("chemistryMark");
  const mathsMark = watch("mathsMark");
  const sslcMark = watch("sslcMark");

  useEffect(() => {
    if (physicsMark && chemistryMark && mathsMark) {
      const cutoffMarks = (parseInt(physicsMark) + parseInt(chemistryMark)) / 2 + parseInt(mathsMark);
      setValue("twelthmark", cutoffMarks); // Set the calculated cutoff mark
    }
  }, [physicsMark, chemistryMark, mathsMark, setValue]);

  const validateMarks = () => {
    return (
      (physicsMark && parseInt(physicsMark) >= 35) &&
      (chemistryMark && parseInt(chemistryMark) >= 35) &&
      (mathsMark && parseInt(mathsMark) >= 35) &&
      (sslcMark && parseInt(sslcMark) >= 250 && parseInt(sslcMark) <= 500)
    );
  };

  const onSubmit = (data) => {
    if (!validateMarks()) {
      Swal.fire({
        title: "Validation Error",
        text: "Please ensure all marks are at least 35, SSLC marks are at least 250, and within the valid range.",
        icon: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', data.profileImage[0]);

    axios.post(`http://localhost:9952/applyApplication`, formData, {
      params: {
        userId,
        name: data.name,
        mobileNumber: data.mobileNumber,
        gender: data.gender,
        dob: data.dob,
        fatherName: data.fatherName,
        motherName: data.motherName,
        parentsMobile: data.parentsMobile,
        religion: data.religion,
        sslcMark: data.sslcMark,
        twelthmark: data.twelthmark,
        address: data.address,
        state: data.state,
        pincode: data.pincode,
        degreeType: data.degreeType,
        id: data.id,
      }
    })
      .then((response) => {
        Swal.fire({
          title: "Application Submitted Successfully!",
          text: "Your application has been submitted successfully.",
          icon: "success",
        });
        navigate("/layerform");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <StudentDash />
      <Container>
        <Row>
          <Col md={6}>
            <Card className="p-4 mb-4 custom-card">
              <Card.Title>Personal Information</Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter Name"
                    defaultValue={applicationname}
                  />
                  {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel"
                    inputMode='numeric'
                    {...register("mobileNumber", {
                      required: "Mobile Number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid mobile number format"
                      }
                    })}
                    placeholder="Enter Mobile Number"
                    defaultValue={usercontact}
                  />
                  {errors.mobileNumber && <Form.Text className="text-danger">{errors.mobileNumber.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    {...register("gender", { required: "Gender is required" })}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                  {errors.gender && <Form.Text className="text-danger">{errors.gender.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    max="2008-12-31"
                    {...register("dob", { required: "Date of Birth is required" })}
                  />
                  {errors.dob && <Form.Text className="text-danger">{errors.dob.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Father's Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("fatherName", { required: "Father's Name is required" })}
                  />
                  {errors.fatherName && <Form.Text className="text-danger">{errors.fatherName.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mother's Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("motherName", { required: "Mother's Name is required" })}
                  />
                  {errors.motherName && <Form.Text className="text-danger">{errors.motherName.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Parent's Mobile</Form.Label>
                  <Form.Control
                    type="number"
                    {...register("parentsMobile", { required: "Parent's Mobile is required" })}
                  />
                  {errors.parentsMobile && <Form.Text className="text-danger">{errors.parentsMobile.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Religion</Form.Label>
                  <Form.Control
                    as="select"
                    {...register("religion", { required: "Religion is required" })}
                  >
                    <option value="">Select Religion</option>
                    <option value="Christian">Christian</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                  {errors.religion && <Form.Text className="text-danger">{errors.religion.message}</Form.Text>}
                </Form.Group>
              </Form>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 mb-4 custom-card">
              <Card.Title>Educational Information</Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>SSLC Mark</Form.Label>
                  <Form.Control
                    type="number"
                    min={250}
                    max={500}
                    {...register("sslcMark", {
                      required: "SSLC Mark is required",
                      min: {
                        value: 250,
                        message: "SSLC Mark must be at least 250"
                      },
                      max: {
                        value: 500,
                        message: "SSLC Mark must be at most 500"
                      }
                    })}
                    placeholder="Enter SSLC Mark"
                  />
                  {errors.sslcMark && <Form.Text className="text-danger">{errors.sslcMark.message}</Form.Text>}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Physics Mark</Form.Label>
                  <Form.Control
                    type="number"
                    min={35}
                    max={100}
                    {...register("physicsMark", { 
                      required: "Physics Mark is required",
                      min: {
                        value: 35,
                        message: "Physics Mark must be at least 35"
                      }
                    })}
                    placeholder="Enter Physics Mark"
                  />
                  {errors.physicsMark && <Form.Text className="text-danger">{errors.physicsMark.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Chemistry Mark</Form.Label>
                  <Form.Control
                    type="number"
                    min={35}
                    max={100}
                    {...register("chemistryMark", { 
                      required: "Chemistry Mark is required",
                      min: {
                        value: 35,
                        message: "Chemistry Mark must be at least 35"
                      }
                    })}
                    placeholder="Enter Chemistry Mark"
                  />
                  {errors.chemistryMark && <Form.Text className="text-danger">{errors.chemistryMark.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Maths Mark</Form.Label>
                  <Form.Control
                    type="number"
                    min={35}
                    max={100}
                    {...register("mathsMark", { 
                      required: "Maths Mark is required",
                      min: {
                        value: 35,
                        message: "Maths Mark must be at least 35"
                      }
                    })}
                    placeholder="Enter Maths Mark"
                  />
                  {errors.mathsMark && <Form.Text className="text-danger">{errors.mathsMark.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Cutoff Mark</Form.Label>
                  <Form.Control
                    type="number"
                    min={200}
                    max={500}
                    value={watch("twelthmark")}
                    readOnly
                    placeholder="Cutoff Mark (Auto-calculated)"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Degree Type</Form.Label>
                  <Form.Control
                    as="select"
                    {...register("degreeType", { required: "Degree Type is required" })}
                    onChange={(e) => setDegreeType(e.target.value)}
                  >
                    <option value="">Select Degree Type</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Masters">Masters Degree</option>
                  </Form.Control>
                  {errors.degreeType && <Form.Text className="text-danger">{errors.degreeType.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    as="select"
                    {...register("id", { required: "Department is required" })}
                    // disabled={!degreeTypeWatch}
                  >
                    <option value="">Select Department</option>
                    {degreeTypeWatch === "Masters"
                      ? pg.map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.dept}
                        </option>
                      ))
                      : ug.map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.dept}
                        </option>
                      ))}
                  </Form.Control>
                  {errors.id && <Form.Text className="text-danger">{errors.id.message}</Form.Text>}
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="p-4 mb-4 custom-card">
              <Card.Title>Address Information</Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("address", { required: "Address is required" })}
                    placeholder="Enter Address"
                  />
                  {errors.address && <Form.Text className="text-danger">{errors.address.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("state", { required: "State is required" })}
                    placeholder="Enter State"
                  />
                  {errors.state && <Form.Text className="text-danger">{errors.state.message}</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("pincode", { required: "Pincode is required", pattern: { value: /^[0-9]{6}$/, message: "Invalid pincode format" } })}
                    placeholder="Enter Pincode"
                  />
                  {errors.pincode && <Form.Text className="text-danger">{errors.pincode.message}</Form.Text>}
                </Form.Group>
              </Form>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 mb-4 custom-card">
              <Card.Title>Upload Documents</Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>12th marksheet</Form.Label>
                  <Form.Control
                    type="file"
                    {...register("profileImage", { required: "12 marksheet is required" })}
                  />
                  {errors.profileImage && <Form.Text className="text-danger">{errors.profileImage.message}</Form.Text>}
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudetntApplyForm;

