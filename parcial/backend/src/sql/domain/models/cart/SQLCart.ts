export default interface CartSQL {
    id: number;
    user_id: number;
    created_at: Date;
    items: { product_id: number; quantity: number }[];
}
