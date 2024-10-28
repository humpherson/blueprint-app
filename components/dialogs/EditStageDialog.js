// components/dialogs/EditStageDialog.js
import React, { useState, useEffect, useRef } from "react";
import emotions from "../../data/emotions"; // Import the emotions list

const EditStageDialog = ({
  isOpen,
  onClose,
  onSave,
  onDelete,
  stageData,
  totalStages,
}) => {
  const [editedStage, setEditedStage] = useState(stageData || {});
  const dialogRef = useRef(null);

  // Update local state when stageData changes
  useEffect(() => {
    if (stageData) {
      setEditedStage(stageData);
    }
  }, [stageData]);

  // Ensure the dialog gains focus when it opens
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  // Add event listener to handle the Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (field, value) => {
    setEditedStage((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedStage);
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        ref={dialogRef}
        tabIndex={-1}
      >
        {/* Increase max-width on larger screens */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg sm:max-w-xl lg:max-w-4xl xl:max-w-6xl m-4 sm:m-0">
          <h2 className="text-xl font-bold mb-4">Edit Stage</h2>

          {/* Main container for the fields */}
          <div className="grid grid-cols-1 gap-4">
            {/* Stage */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Stage Name
              </label>
              <input
                type="text"
                value={editedStage.stage}
                onChange={(e) => handleChange("stage", e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Position & Emotion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Stage Position
                </label>
                <select
                  value={editedStage.position}
                  onChange={(e) =>
                    handleChange("position", parseInt(e.target.value))
                  }
                  className="w-full p-2 border rounded"
                >
                  {Array.from({ length: totalStages }, (_, i) => i + 1).map(
                    (pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Customer Emotion
                </label>
                <select
                  value={editedStage.customerEmotions}
                  onChange={(e) =>
                    handleChange("customerEmotions", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                >
                  {emotions.map((emotion) => (
                    <option key={emotion.value} value={emotion.value}>
                      {emotion.label} {emotion.emoji}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Customer Actions & Frontstage Interactions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Customer Actions
                </label>
                <input
                  type="text"
                  value={editedStage.customerActions}
                  onChange={(e) =>
                    handleChange("customerActions", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Frontstage Interactions
                </label>
                <input
                  type="text"
                  value={editedStage.frontstageInteractions}
                  onChange={(e) =>
                    handleChange("frontstageInteractions", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            {/* Backstage Interactions & Support Processes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Backstage Interactions
                </label>
                <input
                  type="text"
                  value={editedStage.backstageInteractions}
                  onChange={(e) =>
                    handleChange("backstageInteractions", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Support Processes
                </label>
                <input
                  type="text"
                  value={editedStage.supportProcesses}
                  onChange={(e) =>
                    handleChange("supportProcesses", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            {/* Physical Evidence */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Physical Evidence
              </label>
              <input
                type="text"
                value={editedStage.physicalEvidence}
                onChange={(e) =>
                  handleChange("physicalEvidence", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => onDelete(editedStage)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
            >
              Delete
            </button>
            <div className="flex space-x-2">
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
      </div>
    )
  );
};

export default EditStageDialog;
