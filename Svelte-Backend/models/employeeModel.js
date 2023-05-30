const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
        employee_name: {
            type: String,
            required: [true, "Please enter a batch name"]
        },
        employee_batch: {
            type: String,
            required: true
        },
        employee_score: {
            type: Number,
            required: true,
            default: 0
        },
        employee_email: {
            type: String,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
)


const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;