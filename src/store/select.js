export const options = [
  { value: "Student", label: "Student" },
  { value: "Full Time Job", label: "Full Time Job" },
  { value: "Full Time Learner", label: "Full Time Learner" },
  { value: "Prefer Not To Say", label: "Prefer Not To Say" },
  { value: "Other", label: "Other" },
];

export const optionsFeature = [
  { value: "Challenges", label: "Challenges"},
  { value: "Projects", label: "Projects"},
  { value: "Community", label: "Community"},
  { value: "Open Source", label: "Open Source"},
];

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    cursor: "pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "red" : "black",
    cursor: "pointer",
    fontWeight: "bold",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "green",
    fontWeight: "bold",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "grey",
    fontWeight: "bold",
  }),
};

