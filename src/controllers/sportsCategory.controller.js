const { sportsCategoryService } = require("../services");

const createSportsCategory = async (req,res) =>{
    try{
        const reqBody = req.body;
        const sportsCategory = await sportsCategoryService.createsportsCategory(reqBody);
        if(!sportsCategory){
            throw new Error("Something went wrong,try again later!")
        }
        res.status(200).json(
            {
                success:true,
                message:"sportsCategory created successfully !",
                data:{ sportsCategory },
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
const getSportsCategoryList = async (req, res) => {
    try {
        const getList = await sportsCategoryService.getSportsCategoryList();
        if (!getList) {
            throw new Error("sportsCategory not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get sportsCategory list !",
            data: getList
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const getSportsCategoryDetails = async (req, res) => {
    try {
        const sportsCategoryId = req.params.sportsCategoryId;
        const getDetails = await sportsCategoryService.getSportsCategoryById(sportsCategoryId);

        if (!getDetails) {
            throw new Error("sportsCategory not found !");
        }

        res.status(200).json({
            success: true,
            message: "sportsCategory details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}
const updateSportsCategory = async (req, res) => {
    try {
        const sportsCategoryId = req.params.sportsCategoryId;
        const sportsCategoryExist = await sportsCategoryService.getSportsCategoryById(sportsCategoryId);

        if (!sportsCategoryExist) {
            throw new Error("sportsCategory not found !");
        }

        await sportsCategoryService.updateSportsCategory(sportsCategoryId, req.body);

        res.status(200).json({
            success: true,
            message: "sportsCategory details update successfully !"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const deleteSportsCategory = async (req, res) => {
    try {
        const sportsCategoryExists = await sportsCategoryService.getSportsCategoryById(req.params.sportsCategoryId);
        if (!sportsCategoryExists) {
            throw new Error("sportsCategory not found !");
        }

        await sportsCategoryService.deleteSportsCategory(req.params.sportsCategoryId);

        res.status(200).json({
            success: true,
            message: "sportsCategory deleted !"
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error?.message 
        });
    }
}

module.exports = {
    createSportsCategory,
    getSportsCategoryList,
    getSportsCategoryDetails,
    updateSportsCategory,
    deleteSportsCategory
};