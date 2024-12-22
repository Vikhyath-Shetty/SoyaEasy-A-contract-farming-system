const { constants } = require("../constants.js");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const isProduction = process.env.NODE_ENV === "production";

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.status(constants.VALIDATION_ERROR).json({
        title: "Validation failed",
        message: err.message,
        ...(isProduction ? {} : { stackTrace: err.stack }),
      });
      break;

    case constants.NOT_FOUND:
      res.status(constants.NOT_FOUND).json({
        title: "Not found",
        message: err.message,
        ...(isProduction ? {} : { stackTrace: err.stack }),
      });
      break;

    case constants.UNAUTHORIZED:
      res.status(constants.UNAUTHORIZED).json({
        title: "Unauthorized",
        message: err.message,
        ...(isProduction ? {} : { stackTrace: err.stack }),
      });
      break;

    case constants.FORBIDDEN:
      res.status(constants.FORBIDDEN).json({
        title: "Forbidden",
        message: err.message,
        ...(isProduction ? {} : { stackTrace: err.stack }),
      });
      break;

    case constants.SERVER_ERROR:
      res.status(constants.SERVER_ERROR).json({
        title: "Server error",
        message: err.message,
        ...(isProduction ? {} : { stackTrace: err.stack }),
      });
      break;

    default:
      console.log("No Error, All good!");
      break;
  }
};

module.exports = errorHandler;
