import userModel from "../model/user_data.model.js";
import addrsModel from "../model/address_data.model.js";

export const datasave = async (req, res) => {
  try {
    const {
      Name,
      Email,
      Age,
      Address: { Street, City, Zip },
    } = req.body;

    const address = await addrsModel.create({
      Address: {
        Street,
        City,
        Zip,
      },
    });

    const user = await userModel.create({
      Name,
      Email,
      Age,
      AddressId: address._id,
    });

    return res.status(201).json({
      success: true,
      message: "Data saved successfully",
      user,
      address,
    });
  } catch (error) {
    console.error("Error saving data:", error);
    return res.status(500).json({
      success: false,
      message: "Error saving data",
      error: error.message,
    });
  }
};
