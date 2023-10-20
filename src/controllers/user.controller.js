const { userService } = require("../services");

const createUser = async (req,res) =>{
    try{
        const reqBody = req.body;
        const user = await userService.createUser(reqBody);
        if(!user){
            throw new Error("Something went wrong,try again later!")
        }
        res.status(200).json(
            {
                success:true,
                message:"User created successfully !",
                data:{ user },
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
const getUserList = async (req, res) => {
    try {
        const getList = await userService.getUserList();
        if (!getList) {
            throw new Error("User not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get user list !",
            data: getList
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const getUserDetails = async (req, res) => {
    try {
        const userId = req.params.userId;
        const getDetails = await userService.getUserById(userId);

        if (!getDetails) {
            throw new Error("User not found !");
        }

        res.status(200).json({
            success: true,
            message: "User details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}
const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExist = await userService.getUserById(userId);

        if (!userExist) {
            throw new Error("User not found !");
        }

        await userService.updateUser(userId, req.body);

        res.status(200).json({
            success: true,
            message: "User details update successfully !"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const deleteUser = async (req, res) => {
    try {
        const userExists = await userService.getUserById(req.params.userId);
        if (!userExists) {
            throw new Error("User not found !");
        }

        await userService.deleteUser(req.params.userId);

        res.status(200).json({
            success: true,
            message: "User deleted !"
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error?.message 
        });
    }
}

module.exports = {
    createUser,
    getUserList,
    getUserDetails,
    updateUser,
    deleteUser
};