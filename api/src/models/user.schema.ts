import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    tracked: {
      type: Boolean,
      default: false,
    },
    mkName: {
      type: String
    },
    mikrotikTime: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('User', userSchema )