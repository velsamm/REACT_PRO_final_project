export interface CreateReviewRequest {
	productId: string;
	text: string;
    rating: number;
}

export type ReviewFormState = CreateReviewRequest & {
    status: 'idle' | 'success';
};

export interface CreateReviewResponse {}
