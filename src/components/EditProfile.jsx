import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Input } from "../components/Input";

function EditProfile() {
  const [editingSection, setEditingSection] = useState(null);

  const [profile, setProfile] = useState({
    username: "johndoe",
    email: "john.doe@example.com",
  });

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "123-456-7890",
  });

  const [address, setAddress] = useState({
    street: "123 Main St",
    city: "Chennai",
    state: "Tamil Nadu",
    zip: "600001",
  });

  // Temp state for popup editing to allow cancel without affecting main state
  const [tempData, setTempData] = useState({});

  const openEditPopup = (sectionKey) => {
    setEditingSection(sectionKey);
    if (sectionKey === "profile") setTempData(profile);
    else if (sectionKey === "personal") setTempData(personalInfo);
    else if (sectionKey === "address") setTempData(address);
  };

  const handleTempChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editingSection === "profile") setProfile(tempData);
    else if (editingSection === "personal") setPersonalInfo(tempData);
    else if (editingSection === "address") setAddress(tempData);

    setEditingSection(null);
    setTempData({});
    alert(`Saved ${editingSection} successfully.`);
  };

  const sections = [
    {
      key: "profile",
      title: "Profile",
      data: profile,
      fields: [
        { label: "Username", name: "username", type: "text", placeholder: "Enter username" },
        { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
      ],
    },
    {
      key: "personal",
      title: "Personal Information",
      data: personalInfo,
      fields: [
        { label: "First Name", name: "firstName", type: "text", placeholder: "Enter first name" },
        { label: "Last Name", name: "lastName", type: "text", placeholder: "Enter last name" },
        { label: "Phone", name: "phone", type: "text", placeholder: "Enter phone number" },
      ],
    },
    {
      key: "address",
      title: "Address",
      data: address,
      fields: [
        { label: "Street", name: "street", type: "text", placeholder: "Enter street" },
        { label: "City", name: "city", type: "text", placeholder: "Enter city" },
        { label: "State", name: "state", type: "text", placeholder: "Enter state" },
        { label: "ZIP", name: "zip", type: "text", placeholder: "Enter ZIP code" },
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-auto p-6">
          {/* Show details */}
          {sections.map(({ key, title, data }) => (
            <div
              key={key}
              className="max-w-3xl mx-auto mb-6 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
                <button
                  onClick={() => openEditPopup(key)}
                  className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Edit
                </button>
              </div>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                {Object.entries(data).map(([field, value]) => (
                  <p key={field}>
                    <span className="font-semibold capitalize">{field.replace(/([A-Z])/g, ' $1')}:</span> {value}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Popup modal for editing */}
          {editingSection && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 capitalize">
                  Edit {sections.find(s => s.key === editingSection).title}
                </h3>
                <form className="space-y-4">
                  {sections
                    .find((s) => s.key === editingSection)
                    .fields.map(({ label, name, type, placeholder }) => (
                      <Input
                        key={name}
                        label={label}
                        id={name}
                        type={type}
                        name={name}
                        value={tempData[name] || ""}
                        onChange={handleTempChange}
                        placeholder={placeholder}
                      />
                    ))}
                </form>
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    onClick={() => setEditingSection(null)}
                    className="rounded-md bg-gray-300 px-4 py-2 font-semibold text-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="rounded-md bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="button"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default EditProfile;
