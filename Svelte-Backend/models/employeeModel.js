const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
        employee_name: {
            type: String,
            required: [true, "Please enter a batch name"]
        },
        employee_id: {
            type: Number,
            unique:true,
            required: [true, "Please enter employee id"]
        },
        employee_batch: {
            type: String,
            required: true
        },
        employee_status: {
            type: String,
            required: true
        },
        employee_number: {
            type: Number,
            required: true,
            default: 0
        },
        employee_email: {
            type: String,
            unique:true,
            required: true,
            default: 0
        }
    }
)


const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;