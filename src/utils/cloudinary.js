// Cloudinary stores the files(of any type) for us - cloud based service 

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";    // fs - file system

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;

        // upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        // console.log("File is uploaded on cloudinary ", response.url);

        // delete the local file after successfull upload on cloudinary
        if (response) fs.unlinkSync(localFilePath);

        return response;  // returns an object

    } catch (error) {
        // fs.unlinkSync(localFilePath); //remove the file(temporarily saved) from server because upload got failed 
        console.log("Cloudinary upload failed: ", error);
        return null;
    }
}

export default uploadOnCloudinary;