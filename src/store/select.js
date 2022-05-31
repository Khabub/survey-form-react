export const options = [
  { value: "Student", label: "Student" },
  { value: "Full Time Job", label: "Full Time Job" },
  { value: "Full Time Learner", label: "Full Time Learner" },
  { value: "Prefer Not To Say", label: "Prefer Not To Say" },
  { value: "Other", label: "Other" },
];

export const optionsFeature = [
  { value: "Challenges", label: "Challenges" },
  { value: "Projects", label: "Projects" },
  { value: "Community", label: "Community" },
  { value: "Open Source", label: "Open Source" },
];

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    cursor: "pointer",
    borderColor: state.hasValue ? "green" : "red",
    borderWidth: "4px",
    borderRadius: "15px",
    marginBottom: "1rem",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "green" : "black",
    cursor: "pointer",
    fontWeight: "bold",
    position: "relative",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "rgb(50, 160, 155)",
    fontWeight: "bold",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "grey",
    fontWeight: "bold",
  }),
};

export const improvedList = [
  { id: 0, idname: "frontend", name: "Front-end Projects" },
  { id: 1, idname: "backend", name: "Back-end Projects" },
  { id: 2, idname: "datavis", name: "Data Visualization" },
  { id: 3, idname: "challenge", name: "Challenges" },
  { id: 4, idname: "opensource", name: "Open Source Community" },
  { id: 5, idname: "glitter", name: "Glitter help rooms" },
  { id: 6, idname: "videos", name: "Videos" },
  { id: 7, idname: "citymeet", name: "City Meetups" },
  { id: 8, idname: "wiki", name: "Wiki" },
  { id: 9, idname: "additi", name: "Additional Courses" },
];
