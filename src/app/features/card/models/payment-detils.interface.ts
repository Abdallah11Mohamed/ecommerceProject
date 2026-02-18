export interface PaymentDetils {
}
export interface PaymentDetilsResponse {
  status: string
  session: PaymentDetils
}

export interface PaymentDetils {
  url: string
  success_url: string
  cancel_url: string
}
