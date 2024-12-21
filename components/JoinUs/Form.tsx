"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import ImageSlider from "./slider2"
import { redirect } from "next/navigation"

const formSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  birth: z.string().min(1, "Date of birth is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  gender: z.enum(["male", "female"])
    .nullable()
    .refine((val) => val !== null, {
      message: "Please select your gender",
    }),
  address_Line1: z.string().min(1, "Street address is required"),
  address_Line2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  code: z.string().min(5, "Valid zip code required"),
  languages: z.array(z.string()).optional().default([]),

  emergency_firstname: z.string().min(1, "Emergency contact first name required"),
  emergency_lastname: z.string().min(1, "Emergency contact last name required"),
  emergency_phone: z.string().min(10, "Valid emergency phone number required"),

  secondJob: z.enum(["yes", "no", "other"], {
    required_error: "Please select an option",
  }),
  experience: z.enum(["yes", "no"], {
    required_error: "Please select an option",
  }),
  position: z.array(z.string()).min(1, "Please select at least one position"),
  desired_days: z.array(z.string()).min(1, "Please select at least one day"),
  experience_field: z.string().optional(),
  documents: z.enum(["yes", "no"], {
    required_error: "Please select an option",
  }),
  drive: z.enum(["yes", "no"], {
    required_error: "Please select an option",
  }),
  referral: z.array(z.string()),
  referral_name: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const Form = () => {

  const images = [
    "/sectionFiveImages/1.jpg",
    "/sectionFiveImages/2.jpg",
    "/sectionFiveImages/3.jpg",
    "/sectionFiveImages/4.jpg",
    "/sectionFiveImages/5.jpg",
  ];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      languages: [],
      position: [],
      desired_days: [],
      referral: [],
      gender: undefined,
    },
  })

  const [languageInput, setLanguageInput] = useState<string>("")

  // Handle language input
  const handleLanguageKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    // Prevent form submission on Enter
    if (e.key === 'Enter') {
      e.preventDefault();
      return;
    }

    // Only handle space key
    if (e.key === ' ') {
      e.preventDefault(); // Prevent space from being added to input
      if (languageInput.trim()) {
        const currentLanguages = watch("languages") || [];
        setValue("languages", [...new Set([...currentLanguages, languageInput.trim()])]);
        setLanguageInput("");
      }
    }
  }

  const handleRemoveLanguage = (language: string): void => {
    const currentLanguages = watch("languages") || []
    setValue(
      "languages",
      currentLanguages.filter((lang) => lang !== language)
    )
  }

  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data);
      const res = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(data),
      })

      if (res.ok) {
        let modal = document.querySelector<HTMLElement>("#formModal")
        if (modal) {
          modal.style.display = "flex"
          setTimeout(() => {
            modal.style.display = "none"
            redirect("/")
          }, 5000)
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-[1rem] flex flex-col gap-[3rem] mx-auto relative max-w-[1200px]" id="join_form">

      <div className="flex flex-col vp5:flex-row gap-[3rem] w-full">

        <div className="vp5:flex-1 vp5:order-2 h-[40vw] vp5:h-[85vh] vp5:sticky vp5:top-[12%]
        flex flex-col accent2-bg text-white rounded-[10px] overflow-hidden relative
        max-w-[550px] vp5:max-w-auto w-full mx-auto max-h-[272px] vp5:max-h-max
        ">
          <div className="absolute px-[2rem] pt-[1rem] z-[1] w-full h-full"
            style={{
              background: "linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 21%, rgba(255,255,255,0) 100%)"
            }}>
            <h1 className="heading2">Join our team</h1>
            <p className="f_rale text-[min(calc(0.75rem+2vw),35px) vp5:text-[min(calc(0.75rem+1vw),35px)] ">Let us make a difference</p>
          </div>

          <ImageSlider images={images} />
        </div>

        <div className="flex flex-col gap-[3rem] mx-auto order-1 mt-[-1rem] vp5:mt-0">
          <div className="form_section">
            <h2 className="FormLabel">Personal Information</h2>
            <div className="form_area">

              <label className="FormLabel" htmlFor="firstname">
                Name
              </label>

              <div className="form_row">
                <div>
                  <label className="FormLabel" htmlFor="firstname">
                    First Name
                  </label>
                  <input
                    className="FormInput2"
                    id="firstname"
                    maxLength={35}
                    {...register("firstname")}

                    type="text"
                    placeholder="First Name"
                  />
                  {errors.firstname && (
                    <span className="text-red-500 text-sm">{errors.firstname.message}</span>
                  )}
                </div>

                <div className="form_area">
                  <div>
                    <label className="FormLabel" htmlFor="lastname">
                      Last Name
                    </label>
                    <input
                      className="FormInput2"
                      id="lastname"
                      maxLength={35}
                      {...register("lastname")}
                      type="text"
                      placeholder="Last Name"
                    />
                    {errors.lastname && (
                      <span className="text-red-500 text-sm">{errors.lastname.message}</span>
                    )}
                  </div>
                </div>
              </div>

            </div>

            <div className="form_area">
              <label className="FormLabel" htmlFor="birth">
                Date of Birth
              </label>

              <input
                className="FormInput"
                id="birth"
                {...register("birth")}

                type="date"
              />

            </div>

            <div className="form_area">
              <label className="FormLabel" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="FormInput"
                id="phone"
                maxLength={35}
                {...register("phone")}

                type="text"
                placeholder="+00123456789" />
            </div>

            <div className="form_area">
              <label className="FormLabel" htmlFor="email">
                Email
              </label>
              <input
                className="FormInput"
                id="email"
                maxLength={35}
                {...register("email")}

                type="email"
                placeholder="youremail@email.com"
              />
            </div>

            <fieldset className="form_radio_row">
              <legend className="FormLabel w-full">Gender</legend>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <input
                    type="radio"
                    {...register("gender", { required: "Please select your gender" })}
                    id="male_radio"
                    value="male"
                  />
                  <label htmlFor="male_radio">Male</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="radio"
                    {...register("gender", { required: "Please select your gender" })}
                    id="female_radio"
                    value="female"
                  />
                  <label htmlFor="female_radio">Female</label>
                </div>
                {errors.gender && (
                  <span className="text-red-500 text-sm">{errors.gender.message}</span>
                )}
              </div>
            </fieldset>

            <div className="form_area">
              <label className="FormLabel" htmlFor="languages">
                Languages fluently spoken in addition to English
              </label>
              <input
                className="FormInput"
                type="text"
                placeholder="Type a language and press space"
                onKeyDown={handleLanguageKeyPress}
                value={languageInput}
                onChange={(e) => setLanguageInput(e.target.value)}
              />
              <div className="mt-[10px] flex flex-row gap-[1rem] flex-wrap">
                {Array.isArray(watch("languages")) && watch("languages").map((language, index) => (
                  <span
                    key={index}
                    className="relative inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded-md"
                  >
                    {language}
                    <button
                      type="button"
                      onClick={() => handleRemoveLanguage(language)}
                      className="absolute top-[-7px] right-[-7px] accent2-bg
                    text-white rounded-full w-5 h-5 flex items-center justify-center text-sm"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="form_section">

            <h2 className="FormLabel">Address</h2>

            <div className="form_area">
              <label className="FormLabel2" htmlFor="address_Line1">
                Street Address
              </label>
              <input
                className="FormInput"
                id="Address_Line1"
                maxLength={35}
                {...register("address_Line1")}

                type="text"
                placeholder=""
              />

            </div>

            <div className="form_area">
              <label className="FormLabel2" htmlFor="address_Line2">
                Street Address Line 2
              </label>
              <input
                className="FormInput"
                id="Address_Line2"
                maxLength={35}
                {...register("address_Line2")}

                type="text"
                placeholder=""
              />

            </div>

            <div className="form_area_x3">

              <div className="form_area">
                <label className="FormLabel2" htmlFor="city">
                  City
                </label>
                <input
                  className="FormInput"
                  id="city"
                  maxLength={35}
                  {...register("city")}

                  type="text"
                  placeholder=""
                />

              </div>

              <div className="form_area">
                <label className="FormLabel2" htmlFor="state">
                  State
                </label>
                <input
                  className="FormInput"
                  id="state"
                  maxLength={35}
                  {...register("state")}

                  type="text"
                  placeholder=""
                />

              </div>

              <div className="form_area">
                <label className="FormLabel2" htmlFor="code">
                  Zip code
                </label>
                <input
                  className="FormInput"
                  id="code"
                  maxLength={35}
                  {...register("code")}

                  type="text"
                  placeholder=""
                />

              </div>
            </div>
          </div>



          <div className="form_section">
            <h2 className="FormLabel">Your Preferences</h2>

            <div className="form_area">
              <h3 className="FormLabel w-full">What position are you applying for?</h3>

              <div className="flex flex-col gap-2">

                <div className="flex flex-row gap-2">
                  <input {...register("position")}
                    type="checkbox" name="position" id="pos_ban_server" value="Banquet Server" /><label htmlFor="pos_ban_server">Banquet Server</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("position")}
                    type="checkbox" name="position" id="pos_kit" value="Kitchen Helper" /><label htmlFor="pos_kit">Kitchen Helper</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("position")}
                    type="checkbox" name="position" id="pos_ban_captain" value="Banquet Captain" /><label htmlFor="pos_ban_captain">Banquet Captain</label>
                </div>

              </div>
              {errors.position && (
                <span className="text-red-500 text-sm">{errors.position.message}</span>
              )}
            </div>

            <div className="form_area">
              <h3 className="FormLabel w-full">What days and times are you available to work?</h3>

              <div className="flex flex-col gap-2">

                <div className="flex flex-row gap-2">
                  <input {...register("desired_days")}
                    type="checkbox" name="desired_days" id="av_mon" value="Monday" /><label htmlFor="av_mon">Monday</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("desired_days")}
                    type="checkbox" name="desired_days" id="av_tues" value="Tuesday" /><label htmlFor="av_tues">Tuesday</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("desired_days")}
                    type="checkbox" name="desired_days" id="av_wed" value="Wednesday" /><label htmlFor="av_wed">Wednesday</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("desired_days")}
                    type="checkbox" name="desired_days" id="av_thurs" value="Thursday" /><label htmlFor="av_thurs">Thursday</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("desired_days")}
                    type="checkbox" name="desired_days" id="av_fri" value="Friday" /><label htmlFor="av_fri">Friday</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("desired_days")}
                    type="checkbox" name="desired_days" id="av_sat" value="Saturday" /><label htmlFor="av_sat">Saturday</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("desired_days")}
                    type="checkbox" name="desired_days" id="av_sun" value="Sunday" /><label htmlFor="av_sun">Sunday</label>
                </div>

              </div>
            </div>
          </div>



          <div className="form_section">
            <h2 className="FormLabel">More about you</h2>

            <div className="form_area">

              <label className="FormLabel" htmlFor="emergency_firstname">
                Emergency Contact person
              </label>

              <div className="form_row">
                <input
                  className="FormInput2"
                  id="emergency_firstname"
                  maxLength={35}
                  {...register("emergency_firstname")}

                  type="text"
                  placeholder="First Name"
                />

                <input
                  className="FormInput2"
                  id="emergency_lastname"
                  maxLength={35}
                  {...register("emergency_lastname")}

                  type="text"
                  placeholder="Last Name"
                />

              </div>

              <div className="flex flex-col gap-2 ">
                <label className="FormLabel" htmlFor="emergency_phone">
                  Emergency Phone Number
                </label>
                <input
                  className="FormInput"
                  id="emergency_phone"
                  maxLength={35}
                  {...register("emergency_phone")}

                  type="text"
                  placeholder="+00123456789" />
              </div>
            </div>

            <div className="form_area">
              <fieldset className="">
                <legend className="FormLabel w-full">Do you have a second job or other commitments that would interfer while working with Way To Go?</legend>
                <div className="form_radio_row">
                  <div className="flex flex-row gap-2">
                    <input {...register("secondJob")}
                      type="radio" name="secondJob" id="secondJob_yes" value="yes" /><label htmlFor="secondJob_yes">Yes</label>
                  </div>

                  <div className="flex flex-row gap-2">
                    <input {...register("secondJob")}
                      type="radio" name="secondJob" id="secondJob_no" value="no" /><label htmlFor="secondJob_no">No</label>
                  </div>

                  <div className="flex flex-row gap-2">
                    <input {...register("secondJob")}
                      type="radio" name="secondJob" id="secondJob_other" value="other" /><label htmlFor="secondJob_other">Other</label>
                  </div>

                </div>
              </fieldset>


              <fieldset className="flex flex-row gap-2 flex-wrap">
                <legend className="FormLabel w-full">Do you have any experience in catering or serving?</legend>
                <div className="form_radio_row">
                  <div className="flex flex-row gap-2">
                    <input {...register("experience")}
                      type="radio" name="experience" id="experience_yes" value="yes" /><label htmlFor="experience_yes">Yes</label>
                  </div>

                  <div className="flex flex-row gap-2">
                    <input {...register("experience")}
                      type="radio" name="experience" id="experience_no" value="no" /><label htmlFor="experience_no">No</label>
                  </div>
                </div>
              </fieldset>

              <div className="flex flex-col gap-2 flex-wrap">
                <label className="FormLabel" htmlFor="experience_field">
                  If yes, please write a few sentences about your recent job experiences.
                </label>

                <textarea
                  className="border-0 FormInput h-full min-w-full py-2 resize-none"
                  {...register("experience_field")}

                  id="experience_field"
                  cols={3}
                  rows={5}
                  placeholder="describe your inquiry"
                >

                </textarea>

              </div>
            </div>


          </div>


          <div className="form_section">
            <h2 className="FormLabel">More Information</h2>

            <fieldset className="form_area">
              <legend className="FormLabel w-full">Would you be able to provide legal work documents if chosen for hire? (SSN, ITIN#, etc)</legend>

              <div className="flex flex-row gap-2">
                <input type="radio" id="documents_yes" value="yes" {...register("documents")} /><label htmlFor="documents_yes">Yes</label>
              </div>

              <div className="flex flex-row gap-2">
                <input type="radio" id="documents_no" value="no"  {...register("documents")} /><label htmlFor="documents_no">No</label>
              </div>

            </fieldset>

            <fieldset className="form_area">
              <legend className="FormLabel w-full">Would you be willing to drive other co-workers to and from the venues?</legend>

              <div className="flex flex-row gap-2">
                <input type="radio" id="drive_yes" value="yes" {...register("drive")} /><label htmlFor="drive_yes">Yes</label>
              </div>

              <div className="flex flex-row gap-2">
                <input type="radio" id="drive_no" value="no"  {...register("drive")} /><label htmlFor="drive_no">No</label>
              </div>

            </fieldset>

            <div className="form_area">
              <h3 className="FormLabel w-full">How did you hear about us? Were you referred by someone who works here?</h3>

              <div className="flex flex-col gap-2">

                <div className="flex flex-row gap-2">
                  <input {...register("referral")}
                    type="checkbox" name="referral" id="ref_sm" value="social media" /><label htmlFor="ref_sm">Social Media</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("referral")}
                    type="checkbox" name="referral" id="ref_in" value="indeed" /><label htmlFor="ref_in">Indeed</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("referral")}
                    type="checkbox" name="referral" id="ref_web" value="website/online search" /><label htmlFor="ref_web">Website/Online Search</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("referral")}
                    type="checkbox" name="referral" id="ref_walk" value="walk-in" /><label htmlFor="ref_walk">Walk-in</label>
                </div>

                <div className="flex flex-row gap-2">
                  <input {...register("referral")}
                    type="checkbox" name="referral" id="ref_ref" value="referrals" /><label htmlFor="ref_ref">Referrals</label>
                </div>


              </div>
            </div>

            <div className="form_area">

              <label className="FormLabel" htmlFor="referral_name">
                If Referred by someone, Write their name below
              </label>
              <input
                className="FormInput"
                id="referral_name"
                maxLength={35}
                {...register("referral_name")}

                type="text"
                placeholder="" />
            </div>
          </div>


          <button type="submit" className="">
            Submit
          </button>
        </div>


      </div>


    </form>
  )
}

export default Form
