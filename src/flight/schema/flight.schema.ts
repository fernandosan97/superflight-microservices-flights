import * as mongoose from 'mongoose';

export const FlightSchema = new mongoose.Schema(
  {
    pilot: { type: 'string', required: true },
    airplane: { type: 'string', required: true },
    destinationCity: { type: 'string', required: true },
    flightDate: { type: Date, required: true },
    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'passengers' }],
  },
  { timestamps: true },
);
