const { sportsGalleryService } = require("../services");

const createSportsGallery = async (req,res) =>{
    try{
        const reqBody = req.body;
        const sportsGallery = await sportsGalleryService.createsportsGallery(reqBody);
        if(!sportsGallery){
            throw new Error("Something went wrong,try again later!")
        }
        res.status(200).json(
            {
                success:true,
                message:"sportsGallery created successfully !",
                data:{ sportsGallery },
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
const getSportsGalleryList = async (req, res) => {
    try {
        const getList = await sportsGalleryService.getsportsGalleryList();
        if (!getList) {
            throw new Error("sportsGallery not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get sportsGallery list !",
            data: getList
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const getSportsGalleryDetails = async (req, res) => {
    try {
        const sportsGalleryId = req.params.sportsGalleryId;
        const getDetails = await sportsGalleryService.getsportsGalleryById(sportsGalleryId);

        if (!getDetails) {
            throw new Error("sportsGallery not found !");
        }

        res.status(200).json({
            success: true,
            message: "sportsGallery details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}
const updateSportsGallery = async (req, res) => {
    try {
        const sportsGalleryId = req.params.sportsGalleryId;
        const sportsGalleryExist = await sportsGalleryService.getsportsGalleryById(sportsGalleryId);

        if (!sportsGalleryExist) {
            throw new Error("sportsGallery not found !");
        }

        await sportsGalleryService.updatesportsGallery(sportsGalleryId, req.body);

        res.status(200).json({
            success: true,
            message: "sportsGallery details update successfully !"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const deleteSportsGallery = async (req, res) => {
    try {
        const sportsGalleryExists = await sportsGalleryService.getSportsGalleryById(req.params.sportsGalleryId);
        if (!sportsGalleryExists) {
            throw new Error("sportsGallery not found !");
        }

        await sportsGalleryService.deleteSportsGallery(req.params.sportsGalleryId);

        res.status(200).json({
            success: true,
            message: "sportsGallery deleted !"
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error?.message 
        });
    }
}

module.exports = {
    createSportsGallery,
    getSportsGalleryList,
    getSportsGalleryDetails,
    updateSportsGallery,
    deleteSportsGallery
};