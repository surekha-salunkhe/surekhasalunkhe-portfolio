import { useState } from "react";
import { GALLERY_GROUPS } from "../constants";
import { motion } from "framer-motion";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("");

  const openModal = (group) => {
    setActiveTab(group);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === GALLERY_GROUPS[activeTab].length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBack = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? GALLERY_GROUPS[activeTab].length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Gallery
      </motion.h2>

      {/* Tab Images */}
      <div className="flex justify-center flex-wrap gap-8">
        {Object.keys(GALLERY_GROUPS).map((group, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative group w-64 h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={GALLERY_GROUPS[group][0].image}
              alt={group}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button
                onClick={() => openModal(group)}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg"
              >
                View More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-2xl font-bold"
            >
              &times;
            </button>
            {GALLERY_GROUPS[activeTab][currentImageIndex] && (
              <>
                <img
                  src={GALLERY_GROUPS[activeTab][currentImageIndex].image}
                  alt={GALLERY_GROUPS[activeTab][currentImageIndex].title}
                  className="mb-4 rounded-lg"
                />
                <h3 className="text-lg font-bold text-center">
                  {GALLERY_GROUPS[activeTab][currentImageIndex].title}
                </h3>
                <p className="text-sm text-center text-gray-600">
                  {GALLERY_GROUPS[activeTab][currentImageIndex].description}
                </p>
              </>
            )}
            <div className="flex justify-between mt-4">
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
