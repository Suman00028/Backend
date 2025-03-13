// First method of writing a wrapper

// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
//     }
// }

// No need for "return" statement 
// const asyncHandler = (requestHandler) => (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
//}


// Second method of writing a wrapper

// Higher order function example step-by-step
// const asyncHandler = () => {}
// const asyncHandler = (fn) => {async () => {}}
// const asyncHandler = (fn) => async () => {}


// Try-Catch wrapper
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (err) {
        res.status(err.statusCode || err.code || 500).json({
            success: false,
            message: err.message
        });
    }
} 

export default asyncHandler;
// export  {asyncHandler};