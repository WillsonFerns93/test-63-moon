const useCases = require('../use-cases');

async function getEmployeeDetailsAction(request) {
  try {
    const employeeId = request.params.id;
    const result = await useCases.getEmployeeDetails({
      employeeId,
      fieldsToQuery: ['Skills'],
    });

    return {
      statusCode: 200,
      body: result,
    };
  } catch (e) {
    request.logger.error('Error in controller getEmployeeDetailsAction', e);
    return {
      statusCode: 500,
      body: {
        message: e.message,
      },
    };
  }
}

module.exports = getEmployeeDetailsAction;
