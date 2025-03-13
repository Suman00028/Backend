import  asyncHandler  from "../utils/asyncHandler.js";

// actual logic to be implemented on the data coming via routes 
const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "ok"
    });
});

export { registerUser };