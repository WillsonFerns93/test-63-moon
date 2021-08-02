const useCases = require('../use-cases');

async function addEmployeesAction(request) {
  try {
    const employees = request.body;
    await useCases.addEmployees({ employees });

    return {
      statusCode: 200,
      body: {},
    };
  } catch (e) {
    request.logger.error('Error in controller addEmployeesAction', e);
    return {
      statusCode: 500,
      body: {
        message: e.message,
      },
    };
  }
}

module.exports = addEmployeesAction;
