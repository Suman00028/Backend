// This code allows to create more detailed and structured error message when something goes wrong in the API
// Error class is built-in class in JS

class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message); // "super()" calls constructor of the parent class
        this.message = message;
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors;

        //  A "stack trace" is a list of functions that were called before an error happened.
        // The "stack" property stores this list.
        // err.stack prints a detailed error message, showing which function caused the error.
        if(stack){
            this.stack = stack; 
        }else{
            Error.captureStackTrace(this, this.constructor); // Shows the functions that caused the error
        }
    }

}

export default ApiError;