import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GuardianType } from "@/types";
import { createInfluencerProfileThunk } from "@/thunks/InfluencerThunk";
import {
  selectAffiliateIsActive,
  selectCity,
  selectCountry,
  selectCreatorCode,
  selectIsLegalAgeAcknowledged,
  selectIsMinorAgeAcknowledged,
  selectMinorsGuardianInfo,
  selectState,
} from "@/selectors/InfluencerSelector"; // Update with correct path to selectors
import { selectSession } from "@/selectors/userSelector";

const InfluencerForm = () => {
  const dispatch = useDispatch();
  const isAffiliateActive = useSelector(selectAffiliateIsActive);
  const isLegalAgeAcknowledged = useSelector(selectIsLegalAgeAcknowledged);
  const isMinorAgeAcknowledged = useSelector(selectIsMinorAgeAcknowledged);
  const minorsGuardianInfo = useSelector(selectMinorsGuardianInfo);
  const city = useSelector(selectCity);
  const state = useSelector(selectState);
  const country = useSelector(selectCountry);
  const creatorCode = useSelector(selectCreatorCode);
  const session = useSelector(selectSession);

  const [formData, setFormData] = useState({
    isLegalAgeAcknowledged: false,
    isMinorAgeAcknowledged: false,
    minorsGuardianInfo: {
      firstName: "",
      lastName: "",
      type: GuardianType.OTHER,
    },
    addedSocialMediaAccounts: [],
    city: "",
    state: "",
    country: "",
    creatorCode: "",
  });

  // Update form data based on changes in Redux store
  useEffect(() => {
    if (isAffiliateActive) {
      // If the user is an active affiliate, update form data accordingly
      setFormData((prevFormData) => ({
        ...prevFormData,
        isLegalAgeAcknowledged: true, // Assuming this is the desired behavior for active affiliates
        isMinorAgeAcknowledged: false,
        minorsGuardianInfo: {
          firstName: "",
          lastName: "",
          type: GuardianType.OTHER,
        },
      }));
    }
  }, [isAffiliateActive]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (
      name === "isLegalAgeAcknowledged" ||
      name === "isMinorAgeAcknowledged"
    ) {
      const isLegal = name === "isLegalAgeAcknowledged" ? checked : !checked;
      const isMinor = name === "isMinorAgeAcknowledged" ? checked : !checked;
      setFormData({
        ...formData,
        isLegalAgeAcknowledged: isLegal,
        isMinorAgeAcknowledged: isMinor,
        // Reset guardian info if legal age is acknowledged
        minorsGuardianInfo: isLegal
          ? { firstName: "", lastName: "", type: GuardianType.OTHER }
          : formData.minorsGuardianInfo,
      });
    } else if (name.startsWith("minorsGuardianInfo")) {
      const guardianInfoKey = name.split(".")[1];
      setFormData({
        ...formData,
        minorsGuardianInfo: {
          ...formData.minorsGuardianInfo,
          [guardianInfoKey]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the user ID from your authentication system
    const userId = session?.user.id;
    const user = { connect: { id: userId } };

    // Add userId to the formData
    const formDataWithUserId = { ...formData, userId, user };

    // Dispatch the thunk with formDataWithUserId
    await dispatch(createInfluencerProfileThunk(formDataWithUserId));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Legal Age Acknowledged:
        <input
          type="checkbox"
          name="isLegalAgeAcknowledged"
          checked={formData.isLegalAgeAcknowledged}
          onChange={handleChange}
        />
      </label>
      <label>
        Minor Age Acknowledged:
        <input
          type="checkbox"
          name="isMinorAgeAcknowledged"
          checked={formData.isMinorAgeAcknowledged}
          onChange={handleChange}
        />
      </label>
      {formData.isMinorAgeAcknowledged && (
        <>
          {/* Guardian Info Fields */}
          <label>
            Guardian First Name:
            <input
              type="text"
              name="minorsGuardianInfo.firstName"
              value={formData.minorsGuardianInfo.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Guardian Last Name:
            <input
              type="text"
              name="minorsGuardianInfo.lastName"
              value={formData.minorsGuardianInfo.lastName}
              onChange={handleChange}
            />
          </label>
        </>
      )}
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </label>
      <label>
        Creator Code:
        <input
          type="text"
          name="creatorCode"
          value={formData.creatorCode}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InfluencerForm;
