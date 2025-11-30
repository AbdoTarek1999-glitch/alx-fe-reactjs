function UserProfile() {
    return (
      // Enhanced Shadows on Card Hover: shadow-lg -> hover:shadow-xl
      // Add transition utilities to the container
      <div className="
          bg-gray-100 p-4 sm:p-4 md:p-8 
          max-w-xs sm:max-w-xs md:max-w-sm 
          mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl 
          text-center 
          transition duration-300 ease-in-out transform"
      >
        
        {/* Hover Effects: hover:scale-110 (Image)
            Include transition utility: transition-transform duration-300 ease-in-out */}
        <img 
          src="https://via.placeholder.com/150" 
          alt="User" 
          className="
            rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto 
            hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        
        {/* Text Emphasis on Hover: text-blue-800 -> hover:text-blue-500 */}
        <h1 className="
            text-lg sm:text-lg md:text-xl 
            text-blue-800 hover:text-blue-500 my-4 
            transition duration-300 ease-in-out"
        >
          John Doe
        </h1>
        
        <p className="
            text-gray-600 text-sm sm:text-sm md:text-base"
        >
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;