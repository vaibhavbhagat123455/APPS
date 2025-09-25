import mongoose from "mongoose";

const SubTextSchema = new mongoose.Schema({
    TextCode: String,
    Status: String,
    _id: String
});

const MedicineSchema = new mongoose.Schema({
    TextCode: String,
    BrandName: String,
    Composition: String,
    BatchNumber: String,
    MDate: Date,
    EDate: Date,
    MRP: String,
    Manufacturer: String,
    StorageInstructions: String,
    Precautions: String,
    SubTextCode: [SubTextSchema],
    shopName: String,
    email: String
});

export default mongoose.model("meddatas", MedicineSchema);
