const { teamService } = require("../services");

const createTeam = async (req,res) =>{
    try{
        const reqBody = req.body;
        const team = await teamService.createteam(reqBody);
        if(!team){
            throw new Error("Something went wrong,try again later!")
        }
        res.status(200).json(
            {
                success:true,
                message:"team created successfully !",
                data:{ team },
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
const getTeamList = async (req, res) => {
    try {
        const getList = await teamService.getTeamList();
        if (!getList) {
            throw new Error("team not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get team list !",
            data: getList
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const getTeamDetails = async (req, res) => {
    try {
        const teamId = req.params.teamId;
        const getDetails = await teamService.getTeamById(teamId);

        if (!getDetails) {
            throw new Error("team not found !");
        }

        res.status(200).json({
            success: true,
            message: "team details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}
const updateTeam = async (req, res) => {
    try {
        const teamId = req.params.teamId;
        const teamExist = await teamService.getteamById(teamId);

        if (!teamExist) {
            throw new Error("team not found !");
        }

        await teamService.updateteam(teamId, req.body);

        res.status(200).json({
            success: true,
            message: "team details update successfully !"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const deleteTeam = async (req, res) => {
    try {
        const teamExists = await teamService.getTeamById(req.params.teamId);
        if (!teamExists) {
            throw new Error("team not found !");
        }

        await teamService.deleteTeam(req.params.teamId);

        res.status(200).json({
            success: true,
            message: "team deleted !"
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error?.message 
        });
    }
}

module.exports = {
    createTeam,
    getTeamList,
    getTeamDetails,
    updateTeam,
    deleteTeam
};