const mongoose = require('mongoose')

const batchSchema = mongoose.Schema(
    {
        batch_name: {
            type: String,
            required: [true, "Please enter a batch name"]
        },
        batch_date: {
            type: Date,
            required: true
        },
        batch_status: {
            type: Boolean,
            required: true,
            default: true
        },
        total_employee: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
)


const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;