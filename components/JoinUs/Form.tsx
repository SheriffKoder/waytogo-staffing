"use client"

import React, { useState } from "react"
import { ChangeEventHandler, FormEventHandler } from "react";


const Form = () => {

 ////////////////////////////////////////////////////////////////////////////////////
 const [emailBody, setEmailBody] = useState({
  firstname: "",
  lastname: "",
  birth : "",
  phone: "",
  email: "",
  gender: "",                // male, female

  address_Line1: "1",
  address_Line2: "2",
  city: "",
  state: "",
  code: "",                 // zip code number
  languages: "",            // array or strings

  emergency_firstname: "",
  emergency_lastname: "",
  emergency_phone: "",

  secondJob: "",            // string yes/no/other
  experience: "",           // string yes/no       
  position: "",             // array of desired positions
  experience_field : "",
  documents: "",            // string yes/no
  drive: "",                // string yes/no
  referral: "",             // array of referral platforms
  referral_name: "",

  });

  const { firstname, lastname , birth, phone, email, gender,
    address_Line1, address_Line2, city, state, code, languages,
    emergency_firstname, emergency_lastname, emergency_phone,
    secondJob, experience, position, experience_field, documents, drive, referral, referral_name} = emailBody;

  // const messageContainer_inquiry = useRef<HTMLDivElement>(null)

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement > = ({ target }) => {

    const { name, value } = target;
    setEmailBody({ ...emailBody, [name]:value});
    console.log(emailBody);

  }


    //handle the inquiry submission
    const handleSubmit: FormEventHandler<HTMLFormElement>  = async (e) => {
        e.preventDefault();
        // console.log(emailBody);
          const res = await fetch("/api/mail", {
              method: "POST",
              body: JSON.stringify(emailBody),
    
          }).then((res) => res.json());
          console.log(res);
    
        //   if (res === "Email Sent") showEmailConfirm();
    
      }
    
  return (
    <form className="tb w-[700px]" onSubmit={handleSubmit}
    id="join_form__form">

    <div className="flex flex-col gap-4 w-full">

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      {/* name */}
      <div className="flex flex-col gap-2">

        <label className="FormLabel" htmlFor="firstname">
          Name
        </label>

        <div className="flex flex-row gap-[2rem]">
          <input
            className="FormInput w-[200px]"
            id="firstname"
            maxLength={35}
            name="firstname"
            value={firstname}
            onChange={handleChange}
            required
            type="text"
            placeholder="First Name"
            />

          <input
            className="FormInput"
            id="lastname"
            maxLength={35}
            name="lastname"
            value={lastname}
            onChange={handleChange}
            required
            type="text"
            placeholder="Last Name"
            />

        </div>


      </div>


      {/* date of birth */}
      <div className="flex flex-col gap-2">
        <label className="FormLabel" htmlFor="birth">
          Date of Birth
        </label>
        <input
          className="FormInput"
          id="birth"
          name="birth"
          value={birth}
          onChange={handleChange}
          required
          type="date" 
          />
      </div>

      {/* phone */}
      <div className="flex flex-col gap-2">
        <label className="FormLabel" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="FormInput"
          id="phone"
          maxLength={35}
          name="phone"
          value={phone}
          onChange={handleChange}
          required
          type="text"
          placeholder="+00123456789"/>
      </div>

      {/* email */}
      <div className="flex flex-col gap-2">
        <label className="FormLabel" htmlFor="email">
          Email
        </label>
        <input
          className="FormInput"
          id="email"
          maxLength={35}
          name="email"
          value={email}
          onChange={handleChange}
          required
          type="email" 
          placeholder="youremail@email.com"
          />
      </div>

      {/* gender */}
      <fieldset className="flex flex-row gap-2 flex-wrap">
        <legend className="FormLabel w-full">Gender</legend>
        <input type="radio" name="gender" id="male_radio" value="male" onChange={handleChange}/><label htmlFor="male_radio">Male</label><br />
        <input type="radio" name="gender" id="female_radio" value="female"  onChange={handleChange}/><label htmlFor="female_radio">Female</label>
      </fieldset>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}




      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      {/* address */}
      <div className="flex flex-col gap-2 tb">
        <h2 className="FormLabel">Address</h2>

        {/* Line 1 */}
        <input
          className="FormInput"
          id="Address_Line1"
          maxLength={35}
          name="address_Line1"
          value={address_Line1}
          onChange={handleChange}
          required
          type="text" 
          placeholder=""
          />
        <label className="FormLabel2" htmlFor="address_Line1">
          Street Address
        </label>

        {/* Line 2 */}
        <input
          className="FormInput"
          id="Address_Line2"
          maxLength={35}
          name="address_Line2"
          value={address_Line2}
          onChange={handleChange}
          required
          type="text" 
          placeholder=""
          />
        <label className="FormLabel2" htmlFor="address_Line2">
          Street Address Line 2
        </label>

        {/* City , State */}
        <div className="flex flex-row gap-[2rem]">

          <div className="flex flex-col gap-2">
            <input
              className="FormInput"
              id="city"
              maxLength={35}
              name="city"
              value={city}
              onChange={handleChange}
              required
              type="text"
              placeholder=""
              />
              <label className="FormLabel2" htmlFor="city">
                City
              </label>
          </div>
        
          <div className="flex flex-col gap-2">

          <input
            className="FormInput"
            id="state"
            maxLength={35}
            name="state"
            value={state}
            onChange={handleChange}
            required
            type="text"
            placeholder=""
            />
            <label className="FormLabel2" htmlFor="state">
              State
            </label>
            </div>


        </div>


      </div>

      {/* Languages */}
      <div className="flex flex-col gap-2">
        <label className="FormLabel" htmlFor="languages">
          Languages fluently spoken in addition to English
        </label>
        <input
          className="FormInput"
          id="languages"
          maxLength={35}
          name="languages"
          value={languages}
          onChange={handleChange}
          required
          type="text" 
          placeholder=""
          />
      </div>

      {/* Emergency person */}
      <div className="flex flex-col gap-2 tb">

        <label className="FormLabel" htmlFor="emergency_firstname">
          Emergency Contact person
        </label>

        <div className="flex flex-row gap-[2rem]">
          <input
            className="FormInput"
            id="emergency_firstname"
            maxLength={35}
            name="emergency_firstname"
            value={emergency_firstname}
            onChange={handleChange}
            required
            type="text"
            placeholder="First Name"
            />

          <input
            className="FormInput"
            id="emergency_lastname"
            maxLength={35}
            name="emergency_lastname"
            value={emergency_lastname}
            onChange={handleChange}
            required
            type="text"
            placeholder="Last Name"
            />

        </div>

        {/* Emergency phone */}
        <div className="flex flex-col gap-2 ">
          <label className="FormLabel" htmlFor="emergency_phone">
          Emergency Phone Number
          </label>
          <input
            className="FormInput"
            id="emergency_phone"
            maxLength={35}
            name="emergency_phone"
            value={emergency_phone}
            onChange={handleChange}
            required
            type="text"
            placeholder="+00123456789"/>
        </div>
      </div>



      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <div className="tb">

        {/* position */}
        <div className="flex flex-row gap-2 flex-wrap">
          <h3 className="FormLabel w-full">What position are you applying for?</h3>
          
          <div className="flex flex-col gap-2">

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="position" id="pos_ban_server" value="yes" /><label htmlFor="pos_ban_server">Banquet Server</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="position" id="pos_bar" value="no"  /><label htmlFor="pos_bar">Bartender</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="position" id="pos_kit" value="other"  /><label htmlFor="pos_kit">Kitchen Helper</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="position" id="pos_ban_captain" value="other"  /><label htmlFor="pos_ban_captain">Banquet Captain</label>
            </div>

          </div>
        </div>

        {/* availability */}
        <div className="flex flex-row gap-2 flex-wrap">
          <h3 className="FormLabel w-full">What days and times are you available to work?</h3>
          
          <div className="flex flex-col gap-2">

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="availability" id="av_mon" value="yes" /><label htmlFor="av_mon">Monday</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="availability" id="av_tues" value="no"  /><label htmlFor="av_tues">Tuesday</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="availability" id="av_wed" value="other"  /><label htmlFor="av_wed">Wednesday</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="availability" id="av_thurs" value="other"  /><label htmlFor="av_thurs">Thursday</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="availability" id="av_fri" value="other"  /><label htmlFor="av_fri">Friday</label>
            </div>
      
            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="availability" id="av_sat" value="other"  /><label htmlFor="av_sat">Saturday</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="availability" id="av_sun" value="other"  /><label htmlFor="av_sun">Sunday</label>
            </div>

          </div>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      {/* secondJob */}

      <div className="tb flex flex-col gap-2">
        <fieldset className="flex flex-row gap-2 flex-wrap">
          <legend className="FormLabel w-full">Do you have a second job or other commitments that would interfer while working with Way To Go?</legend>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="radio" name="secondJob" id="secondJob_yes" value="yes" /><label htmlFor="secondJob_yes">Yes</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="radio" name="secondJob" id="secondJob_no" value="no"  /><label htmlFor="secondJob_no">No</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="radio" name="secondJob" id="secondJob_other" value="other"  /><label htmlFor="secondJob_other">Other</label>
            </div>

          </div>
        </fieldset>


        {/* experience */}
        <fieldset className="flex flex-row gap-2 flex-wrap">
          <legend className="FormLabel w-full">Do you have any experience in catering or serving?</legend>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="radio" name="experience" id="experience_yes" value="yes" /><label htmlFor="experience_yes">Yes</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="radio" name="experience" id="experience_no" value="no"  /><label htmlFor="experience_no">No</label>
            </div>
          </div>
        </fieldset>

        {/* exp field */}
        <div className="flex flex-col gap-2 flex-wrap h-[300px]">
          <label className="FormLabel" htmlFor="experience_field">
            If yes, please write a few sentences about your recent job experiences.
          </label>

            <textarea
            className="border-0 FormInput h-full w-full py-2 resize-none"
            name="experience_field"
            value={experience_field}
            onChange={handleChange}
            required
            id="experience_field"
            cols={3}
            rows={5}
            placeholder="describe your inquiry"
            >

            </textarea>

        </div>
      </div>


      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      {/* other questions */}
      <div className="tb flex flex-col gap-2">
      {/* documents */}
        <fieldset className="flex flex-col gap-2 flex-wrap">
          <legend className="FormLabel w-full">Would you be able to provide legal work documents if chosen for hire? (SSN, ITIN#, etc)</legend>

          <div className="flex flex-row gap-2">
            <input type="radio" name="documents" id="documents_yes" value="yes" onChange={handleChange}/><label htmlFor="documents_yes">Yes</label>
          </div>

          <div className="flex flex-row gap-2">
           <input type="radio" name="documents" id="documents_no" value="no"  onChange={handleChange}/><label htmlFor="documents_no">No</label>
          </div>

        </fieldset>

        {/* drive */}
        <fieldset className="flex flex-col gap-2 flex-wrap">
          <legend className="FormLabel w-full">Would you be willing to drive other co-workers to and from the venues?</legend>

          <div className="flex flex-row gap-2">
            <input type="radio" name="drive" id="drive_yes" value="yes" onChange={handleChange}/><label htmlFor="drive_yes">Yes</label>
          </div>

          <div className="flex flex-row gap-2">
           <input type="radio" name="drive" id="drive_no" value="no"  onChange={handleChange}/><label htmlFor="drive_no">No</label>
          </div>

        </fieldset>

        {/* referral */}
        <div className="flex flex-row gap-2 flex-wrap">
          <h3 className="FormLabel w-full">How did you hear about us? Were you referred by someone who works here?</h3>
          
          <div className="flex flex-col gap-2">

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="referral" id="ref_sm" value="social media" /><label htmlFor="ref_sm">Social Media</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="referral" id="ref_in" value="indeed"  /><label htmlFor="ref_in">Indeed</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="referral" id="ref_web" value="website/online search"  /><label htmlFor="ref_web">Website/Online Search</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="referral" id="ref_walk" value="walk-in"  /><label htmlFor="ref_walk">Walk-in</label>
            </div>

            <div className="flex flex-row gap-2">
              <input onChange={handleChange}
              type="checkbox" name="referral" id="ref_ref" value="referrals"  /><label htmlFor="ref_ref">Referrals</label>
            </div>
      

          </div>
        </div>

        {/* phone */}
        <div className="flex flex-col gap-2">
          <label className="FormLabel" htmlFor="referral_name">
            If Referred by someone, Write their name below
          </label>
          <input
            className="FormInput"
            id="referral_name"
            maxLength={35}
            name="referral_name"
            value={referral_name}
            onChange={handleChange}
            required
            type="text"
            placeholder=""/>
        </div>

      </div>

      <button className="accent1-bg px-2 py-2 w-[300px] rounded-full">
        Submit
      </button>

    </div>


    </form>
  )
}

export default Form
