const { tournamentService } = require("../services");

const createTournament = async (req,res) =>{
    try{
        const reqBody = req.body;
        const tournament = await tournamentService.createTournament(reqBody);
        if(!tournament){
            throw new Error("Something went wrong,try again later!")
        }
        res.status(200).json(
            {
                success:true,
                message:"Tournament created successfully !",
                data:{ tournament },
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
const getTournamentList = async (req, res) => {
    try {
        const getList = await tournamentService.getTournamentList();
        if (!getList) {
            throw new Error("Tournament not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get Tournament list !",
            data: getList
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const getTournamentDetails = async (req, res) => {
    try {
        const TournamentId = req.params.TournamentId;
        const getDetails = await tournamentService.getTournamentById(TournamentId);

        if (!getDetails) {
            throw new Error("Tournament not found !");
        }

        res.status(200).json({
            success: true,
            message: "Tournament details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}
const updateTournament = async (req, res) => {
    try {
        const tournamentId = req.params.tournamentId;
        const tournamentExist = await tournamentService.getTournamentById(tournamentId);

        if (!tournamentExist) {
            throw new Error("Tournament not found !");
        }

        await tournamentService.updateTournament(tournamentId, req.body);

        res.status(200).json({
            success: true,
            message: "Tournament details update successfully !"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const deleteTournament = async (req, res) => {
    try {
        const tournamentExists = await tournamentService.getTournamentById(req.params.tournamentId);
        if (!tournamentExists) {
            throw new Error("Tournament not found !");
        }

        await tournamentService.deleteTournament(req.params.tournamentId);

        res.status(200).json({
            success: true,
            message: "Tournament deleted !"
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error?.message 
        });
    }
}

module.exports = {
    createTournament,
    getTournamentList,
    getTournamentDetails,
    updateTournament,
    deleteTournament
};