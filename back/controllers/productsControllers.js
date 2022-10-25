exports.getProducts=(req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"En esta ruta ud puede ver todos lo productos"
    })
}