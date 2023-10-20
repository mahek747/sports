const { founderService } = require("../services");

const createFounder = async (req,res) =>{
    try{
        const reqBody = req.body;
        const founder = await founderService.createFounder(reqBody);
        if(!founder){
            throw new Error("Something went wrong,try again later!")
        }
        res.status(200).json(
            {
                success:true,
                message:"founder created successfully !",
                data:{ founder },
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
const getFounderList = async (req, res) => {
    try {
        const getList = await founderService.getFounderList();
        if (!getList) {
            throw new Error("founder not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get founder list !",
            data: getList
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const getFounderDetails = async (req, res) => {
    try {
        const founderId = req.params.founderId;
        const getDetails = await founderService.getFounderById(founderId);

        if (!getDetails) {
            throw new Error("founder not found !");
        }

        res.status(200).json({
            success: true,
            message: "founder details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}
const updateFounder = async (req, res) => {
    try {
        const founderId = req.params.founderId;
        const founderExist = await founderService.getFounderById(founderId);

        if (!founderExist) {
            throw new Error("founder not found !");
        }

        await founderService.updateFounder(founderId, req.body);

        res.status(200).json({
            success: true,
            message: "founder details update successfully !"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const deleteFounder = async (req, res) => {
    try {
        const founderExists = await founderService.getFounderById(req.params.founderId);
        if (!founderExists) {
            throw new Error("founder not found !");
        }

        await founderService.deleteFounder(req.params.founderId);

        res.status(200).json({
            success: true,
            message: "founder deleted !"
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error?.message 
        });
    }
}

module.exports = {
    createFounder,
    getFounderList,
    getFounderDetails,
    updateFounder,
    deleteFounder
};