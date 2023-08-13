const {CityServices} = require('../services/index');

const cityServices = new CityServices()

const createCity = async (req , res)=>{
    try {
        const city = await cityServices.createCity(req.body)
        return res.status(201).json({
            data: city,
            success : true,
            message : 'successfully created a city',
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success : true,
            message : 'not able to created a city',
            err: {error}
        })
    }
}

const destroyCity = async (req , res)=>{
    try {
        const Response = await cityServices.destroyCity(req.params.id)
        return res.status(201).json({
            data: Response,
            success : true,
            message : 'successfully deleted a city',
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success : false,
            message : 'not able to delete city',
            err: {error}
        })
    }
}

const updateCity = async (req , res)=>{
    try {
        const Response = await cityServices.updateCity(req.params.id , req.body)
        return res.status(201).json({
            data: Response,
            success : true,
            message : 'successfully updated city',
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success : false,
            message : 'not able to update city',
            err: {error}
        })
    }
}


const getCity = async (req , res)=>{
    try {
        const Response = await cityServices.getCity(req.params.id)
        return res.status(201).json({
            data: Response,
            success : true,
            message : 'successfully get city',
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success : false,
            message : 'not able to get city',
            err: {error}
        })
    }
}


const getAllCity = async (req , res)=>{
    try {
        const Response = await cityServices.getAllCity(req.query)
        return res.status(201).json({
            data: Response,
            success : true,
            message : 'successfully get city',
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success : false,
            message : 'not able to get city',
            err: {error}
        })
    }
}

module.exports = {
    updateCity,
    createCity,
    destroyCity,
    getCity,
    getAllCity
}