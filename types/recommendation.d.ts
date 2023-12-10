interface Author {
  name: string
  position: string
  avatar: string
}

interface Recommendation {
  author: Author
  message: string
  meta?: any
}

export default Recommendation