const companyDetailsController = async (req, res) => {
    res.status(200).json({
        message: 'this is the company detail',
        error: null,
        status: 200,
    });
}

module.exports = { companyDetailsController };
