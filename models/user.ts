import { model, Schema, Document } from 'mongoose'
import * as bcrypt from 'bcrypt'

export interface User extends Document {
  email: string
  password: string
  admin: boolean
  saved: string
  isValidPassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema({
  //email -> will need to make sure there aren't duplicates
  email: { type: String, required: true },
  //password -> will be encrypted
  password: { type: String, required: true },
  //this will be false unless changed on the backend to set an admin
  admin: { type: Boolean, default: false }
})

//generate hash
userSchema.pre<User>('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

//compare password
userSchema.methods.isValidPassword = async function (password: string) {
  const user = this
  const compare = await bcrypt.compare(password, user.password)
  return compare
}
const User = model<User>('User', userSchema)

export default User
