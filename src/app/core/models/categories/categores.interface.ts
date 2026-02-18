
export interface CategoresResponse {
  results: number
  metadata: Metadata
  data: Categores[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface Categores {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
