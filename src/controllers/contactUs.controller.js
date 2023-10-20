const { contactUsService } = require("../services");

const createContactUs = async (req,res) =>{
    try{
        const reqBody = req.body;
        const contactUs = await contactUsService.createContactUs(reqBody);
        if(!contactUs){
            throw new Error("Something went wrong,try again later!")
        }
        res.status(200).json(
            {
                success:true,
                message:"contactUs created successfully !",
                data:{ contactUs },
            }
        );
    }
    catch(error){
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
};
const getContactUsList = async (req, res) => {
    try {
        const getList = await contactUsService.getContactUsList();
        if (!getList) {
            throw new Error("contactUs not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get contactUs list !",
            data: getList
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const getContactUsDetails = async (req, res) => {
    try {
        const contactUsId = req.params.contactUsId;
        const getDetails = await contactUsService.getContactUsById(contactUsId);

        if (!getDetails) {
            throw new Error("contactUs not found !");
        }

        res.status(200).json({
            success: true,
            message: "contactUs details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}
const updateContactUs = async (req, res) => {
    try {
        const contactUsId = req.params.contactUsId;
        const contactUsExist = await contactUsService.getContactUsById(contactUsId);

        if (!contactUsExist) {
            throw new Error("contactUs not found !");
        }

        await contactUsService.updateContactUs(contactUsId, req.body);

        res.status(200).json({
            success: true,
            message: "contactUs details update successfully !"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const deleteContactUs = async (req, res) => {
    try {
        const contactUsExists = await contactUsService.getContactUsById(req.params.contactUsId);
        if (!contactUsExists) {
            throw new Error("contactUs not found !");
        }

        await contactUsService.deleteContactUs(req.params.contactUsId);

        res.status(200).json({
            success: true,
            message: "contactUs deleted !"
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error?.message 
        });
    }
}

module.exports = {
    createContactUs,
    getContactUsList,
    getContactUsDetails,
    updateContactUs,
    deleteContactUs
};