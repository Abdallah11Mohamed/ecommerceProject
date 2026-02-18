
export interface IcategoriesResponse {
  results: number
  metadata: Metadata
  data: Icategories[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface Icategories {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}





