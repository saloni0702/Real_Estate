const mongoose = require("mongoose")

const ProSchema = new mongoose.Schema({
    mail:{
        type:String,
        required:true
    },
    PropertyType:{
        type:String,
        required:true
    },
Negotiable:{
        type:String,
    },
Price:{
        type:String,
    },
Ownership:{
        type:String,
    },
PropertyAge:{
        type:String,
    },
PropertyApproved:{
        type:String,
    }, 
PropertyDescription:{
        type:String,
    },
    Views:{type:String}, 
BankLoan:{
        type:String,
    },
Length:{
        type:String,
    }, 
Breadth:{
        type:String,
    }, 
TotalArea:{
        type:String,
        required:true
    },
AreaUnit:{
        type:String,
    }, 
NoOfBHK:{
        type:String,
    }, 
NoOfFloor:{
        type:String,
    }, 
Attached :{
        type:String,
    },
WesternToilet:{
        type:String,
    },
Furnished:{
        type:String,
    }, 
CarParking:{
        type:String,
    }, 
Lift :{
        type:String,
    },
Electricity:{
        type:String,
    }, 
Facing:{
        type:String,
    }, 
Name  :{
        type:String,
    },
Mobile:{
        type:String,
        required:true
    },
PostedBy:{
        type:String,
    },
DaysLeft:{
        type:String,
        required: true
},
SaleType:{
        type:String,
    }, 
FeaturedPackage:{
        type:String,
    },
PPDPackage:{
        type:String,
    },
Photo:{
        type: String },
        
Email:{
        type:String,
    },
City:{
        type:String,
    },
Area :{
        type:String,
    },
Pincode:{
        type:String,
    }, 
Address:{
        type:String,
    },
Landmark:{
        type:String,
    },
Latitude:{
        type:String,
    }, 
Longitude:{
        type:String,
    },

    
})
const ProModel = mongoose.model("Pro",ProSchema);
module.exports = ProModel;