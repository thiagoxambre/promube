import dotenv from 'dotenv'

dotenv.config()

export default class Configuration {
  static CONFIG () {
    return {
      BACKEND_URL: process.env.BACKEND_URL
    }
  }
}
