import { useState } from "react";
import PageTitle from "../components/PageTitle";
import {
  HiOutlineLightBulb,
  HiOutlineKey,
  HiOutlineDesktopComputer,
  HiOutlineHome,
  HiOutlineSun,
} from "react-icons/hi";
import { MdOutlineKitchen } from "react-icons/md";

const checklistItems = [
  { id: 1, text: "Verify utilities (electricity, gas, water)", icon: <HiOutlineLightBulb /> },
  { id: 2, text: "Check door and window locks", icon: <HiOutlineKey /> },
  { id: 3, text: "Confirm kitchen appliances", icon: <MdOutlineKitchen /> },
  { id: 4, text: "Check bathrooms and water supply", icon: "🚿" },
  { id: 5, text: "Inspect parking access", icon: "🅿️" },
  { id: 6, text: "Confirm internet availability", icon: "📶" },
];

const roomCards = [
  {
    name: "Living Room",
    icon: <HiOutlineHome />,
    note: "Consider seating arrangement, TV placement and natural light flow.",
  },
  {
    name: "Kitchen",
    icon: <MdOutlineKitchen />,
    note: "Check countertop space, appliance placement and ventilation.",
  },
  {
    name: "Bedroom",
    icon: "🛏️",
    note: "Plan wardrobe location, bed orientation and lighting.",
  },
  {
    name: "Workspace",
    icon: <HiOutlineDesktopComputer />,
    note: "Ensure power outlets, desk space and good lighting are available.",
  },
  {
    name: "Outdoor Area",
    icon: <HiOutlineSun />,
    note: "Check garden or balcony condition, drainage and privacy.",
  },
];

const HomePlanning = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleCheck = (id) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const progress = Math.round(
    (checkedItems.length / checklistItems.length) * 100
  );

  return (
    <section className="planning-section">
      <PageTitle title="Home Planning" />

      <div className="planning-container">
        <div className="planning-header">
          <h1 className="planning-title">Home Planning</h1>
          <p className="planning-subtitle">
            Use this checklist and room planner to prepare for your new
            residential move.
          </p>
        </div>

        {/* Progress */}
        <div className="progress-card">
          <h3>Home Setup Progress</h3>
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="progress-text">
            {checkedItems.length} of {checklistItems.length} completed —{" "}
            {progress}%
          </p>
        </div>

        {/* Move-In Checklist */}
        <div className="checklist-section">
          <h2>Move-In Checklist</h2>
          <div className="checklist-grid">
            {checklistItems.map((item) => (
              <label
                key={item.id}
                className={`checklist-item ${
                  checkedItems.includes(item.id) ? "checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item.id)}
                  onChange={() => toggleCheck(item.id)}
                />
                <span className="checklist-icon">
                  {typeof item.icon === "string" ? item.icon : item.icon}
                </span>
                <span className="checklist-text">{item.text}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Room Planning */}
        <div className="room-section">
          <h2>Room Planning</h2>
          <div className="room-grid">
            {roomCards.map((room, index) => (
              <div key={index} className="room-card">
                <div className="room-icon">
                  {typeof room.icon === "string" ? room.icon : room.icon}
                </div>
                <h4 className="room-name">{room.name}</h4>
                <p className="room-note">{room.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePlanning;
