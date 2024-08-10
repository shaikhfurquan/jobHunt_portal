import UserModel from '../models/userModel.js'
import CompanyModel from '../models/companyModel.js'



export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;

        if (!companyName) {
            return res.status(400).json({
                success: false,
                message: "Company name is required"
            });
        }

        // Check if the company already exists
        let company = await CompanyModel.findOne({ companyName: companyName });

        if (company) {
            return res.status(400).json({
                success: false,
                message: "Company already exists"
            });
        }

        // creating a new company
        company = await CompanyModel.create({
            userId: req.userId,
            companyName: companyName, // Correct the key name here
        });

        res.status(201).json({
            success: true,
            message: "Company registered successfully",
            company: company
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while registering the company",
            error: error.message
        })
    }
}


export const getCompany = async (req, res) => {
    try {
        // Get the logged-in user's ID
        const userId = req.userId;

        // Find companies associated with the logged-in user
        const companies = await CompanyModel.find({ userId: userId });

        if (!companies || companies.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No companies found for this user"
            });
        }

        res.status(200).json({
            success: true,
            message: "Companies fetched successfully",
            companiesCount: companies.length,
            companies: companies,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while getting the companies",
            error: error.message
        });
    }
};


export const getCompanyById = async (req, res) => {
    try {
        const company = await CompanyModel.findById(req.params.id);

        if (!company) {
            return res.status(404).json({ success: false, message: "No companies found for this user" });
        }

        res.status(200).json({
            success: true,
            message: "Company fetched successfully",
            company: company
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while getting the company by Id",
            error: error.message
        });
    }
};


export const updateCompany = async (req, res) => {
    try {
        const { companyName, description, website, location } = req.body
        const file = req.file

        const updateData = { companyName, description, website, location }
        const company = await CompanyModel.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({ success: false, message: "No company found" });
        }

        res.status(200).json({
            success: true,
            message: "Company information updated successfully",
            company: company
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while updating the company",
            error: error.message
        });
    }
};


