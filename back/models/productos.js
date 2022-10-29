const mongoose=require("mongoose")

const productosSchema=mongoose.Shema({
    nombre:{
        type:String,
        required:[true,"por favor resgistra el nombre del producto."],
        trim:true,
        maxLength:[120,"El nombre no debe exceder de 120 caracteres"]
    },
    precio:{
        type:Number,
        required:[true,"por favor registre el precio del producto"],
        maxLength:[8,"El precio de un producto no puede exceder de 99'999.999"],
        default:0.0
    },
    descripcion:{
        type:String,
        required:[true,"por favor registre una descripción para el producto"]
    },
    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"por favor seleccione la categoria"],
        enum:{
            values:[
                "Wiskeys",
                "Cervezas",
                "Bocka",
                "Ron",
                "sodas"
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true,"Por favor resgistre el vendedor"]
    },
    inventario:{
        type:Number,
        required:[true,"por favor registre el stock del prodcuto"],
        maxLength:[5,"cantidad maxima no puede pasar de 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
    
})
module.exports=mongoose.model("productos",productosSchema)