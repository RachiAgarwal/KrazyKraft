import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, 
  {expiresIn: '30 days'},
  {algorithm: 'HS256'},
  )
}

export default generateToken
