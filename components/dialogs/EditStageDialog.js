// components/dialogs/EditStageDialog.js
import React, { useState, useEffect, useRef } from "react";

const EditStageDialog = ({ isOpen, onClose, onSave, onDelete, stageData }) => {
  const [editedStage, setEditedStage] = useState(stageData || {});
  const dialogRef = useRef(null); // Create a ref for the dialog

  // Update local state when stageData changes
  useEffect(() => {
    if (stageData) {
      setEditedStage(stageData);
    }
  }, [stageData]);

  useEffect(() => {
    // Focus on the dialog when it opens
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  const handleChange = (field, value) => {
    setEditedStage((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose(); // Close the dialog on Escape key press
    } else if (e.key === "Enter") {
      handleSave(); // Save the form on Enter key press
    }
  };

  const handleSave = () => {
    onSave(editedStage);
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
        ref={dialogRef} // Set the ref here
      >
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg m-4 sm:m-0">
          <h2 className="text-xl font-bold mb-4">Edit Stage</h2>

          {/* Check if editedStage exists before rendering fields */}
          {editedStage &&
            Object.keys(editedStage).map(
              (field) =>
                field !== "id" && ( // Do not show the id field in the form
                  <div className="mb-4" key={field}>
                    <label className="block text-sm font-semibold mb-2 capitalize">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={editedStage[field]}
                      placeholder={`Enter ${field}`}
                      onChange={(e) => handleChange(field, e.target.value)}
                      onKeyDown={handleKeyDown} // Add keydown listener to input fields
                    />
                  </div>
                )
            )}

          {/* Buttons */}
          <div className="flex justify-end space-x-2 mt-6">
            <button
              onClick={() => onDelete(editedStage)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditStageDialog;
